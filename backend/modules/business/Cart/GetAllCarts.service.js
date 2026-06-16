import CartModel from "../../data/Cart/Cart.model.js";
import CartMapper from "./CartMapper.js";
const GetAllCarts = async ({ page = 1, limit = 10, sort = "newest" }) => {
  const pageNumber = parseInt(page, 10) || 1;
  const limitNumber = parseInt(limit, 10) || 10;
  const skip = (pageNumber - 1) * limitNumber;
  let sortQuery = { CreatedDate: -1 };
  if (sort === "oldest")
    sortQuery = { CreatedDate: 1 };
  else if (sort === "price_asc")
    sortQuery = { TotalPrice: 1 };
  else if (sort === "price_desc")
    sortQuery = { TotalPrice: -1 };
  else if (sort === "a_z" || sort === "name_asc")
    sortQuery = { "UserDoc.FirstName": 1, "UserDoc.LastName": 1 };
  else if (sort === "z_a" || sort === "name_desc")
    sortQuery = { "UserDoc.FirstName": -1, "UserDoc.LastName": -1 };
  const pipeline = [];
  if (sort === "a_z" || sort === "name_asc" || sort === "z_a" || sort === "name_desc") {
    pipeline.push({
      $lookup: {
        from: "Users",
        localField: "UserID",
        foreignField: "_id",
        as: "UserDoc",
      },
    });
    pipeline.push({
      $unwind: {
        path: "$UserDoc",
        preserveNullAndEmptyArrays: true,
      },
    });
  }
  pipeline.push({ $sort: sortQuery });
  pipeline.push({ $skip: skip });
  pipeline.push({ $limit: limitNumber });
  const [carts, statsAgg] = await Promise.all([
    CartModel.aggregate(pipeline),
    CartModel.aggregate([
      {
        $group: {
          _id: null,
          totalItems: { $sum: 1 },
          totalProducts: { $sum: { $size: { $ifNull: ["$Products", []] } } },
        },
      },
    ]),
  ]);
  const populatedCarts = await CartModel.populate(carts, [
    { path: "UserID" },
    { path: "Products.ProductID" },
  ]);
  const mappedData = populatedCarts.map(CartMapper);
  const stats = statsAgg[0] || { totalItems: 0, totalProducts: 0 };
  const totalItems = stats.totalItems;
  const totalProducts = stats.totalProducts;
  const avgProducts = totalItems > 0 ? totalProducts / totalItems : 0;
  return {
    data: mappedData,
    meta: {
      totalItems,
      totalPages: Math.ceil(totalItems / limitNumber),
      currentPage: pageNumber,
      limit: limitNumber,
      stats: {
        totalItems,
        totalProducts,
        avgProducts: parseFloat(avgProducts.toFixed(2)),
      },
    },
  };
};
export default GetAllCarts;

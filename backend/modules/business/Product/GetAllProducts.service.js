import ProductModel from "../../data/Product/Product.model.js";
import ProductMapper from "./ProductMapper.js";
const GetAllProducts = async ({page = 1, limit = 10, sort = "newest"}) => {
  const skip = (page - 1) * limit;
  let sortQuery = {};
  if (sort === "newest") sortQuery = { CreatedDate: -1 };
  if (sort === "oldest") sortQuery = { CreatedDate: 1 };
  if (sort === "price_asc") sortQuery = { Price: 1 };
  if (sort === "price_desc") sortQuery = { Price: -1 };
  if (sort === "a_z" || sort === "name_asc") sortQuery = { Name: 1 };
  if (sort === "z_a" || sort === "name_desc") sortQuery = { Name: -1 };
  const [products, totalItems, activeItems, inactiveItems] = await Promise.all([
    ProductModel.find({ IsDeleted: false })
      .populate("CategoryIDs")
      .populate("SubCategoryIDs")
      .populate("CollectionIDs")
      .sort(sortQuery)
      .lean()
      .skip(skip)
      .limit(limit),
    ProductModel.countDocuments({ IsDeleted: false }),
    ProductModel.countDocuments({ IsDeleted: false, IsActivated: true }),
    ProductModel.countDocuments({ IsDeleted: false, IsActivated: false }),
  ]);
  if (!products) throw new Error("Products not found");
  const mappedData = await Promise.all(products.map(ProductMapper));
  return {
    data: mappedData,
    meta: {
      totalItems,
      totalPages: Math.ceil(totalItems / limit),
      currentPage: page,
      limit,
      stats: {
        totalItems,
        activeItems,
        inactiveItems,
      },
    },
  };
};
export default GetAllProducts;

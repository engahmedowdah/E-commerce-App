import CollectionModel from "../../data/Collection/Collection.model.js";
import CollectionMapper from "./CollectionMapper.js";
import ProductModel from "../../data/Product/Product.model.js";
const GetAllCollections = async ({ page = 1, limit = 10, sort = "newest" }) => {
  const skip = (page - 1) * limit;
  let sortOrder = {};
  if (sort === "newest") {
    sortOrder = { CreatedDate: -1 };
  } else if (sort === "oldest") {
    sortOrder = { CreatedDate: 1 };
  } else if (sort === "a_z" || sort === "name_asc") {
    sortOrder = { Name: 1 };
  } else if (sort === "z_a" || sort === "name_desc") {
    sortOrder = { Name: -1 };
  }
  const [collections, totalItems, activeItems, inactiveItems, totalProducts] = await Promise.all([
    CollectionModel.find({ IsDeleted: false }).sort(sortOrder).lean().skip(skip).limit(limit),
    CollectionModel.countDocuments({ IsDeleted: false }),
    CollectionModel.countDocuments({ IsDeleted: false, IsActivated: true }),
    CollectionModel.countDocuments({ IsDeleted: false, IsActivated: false }),
    ProductModel.countDocuments({ IsDeleted: false })
  ]);
  const avgProducts = totalItems > 0 ? parseFloat((totalProducts / totalItems).toFixed(2)) : 0;
  if (!collections) throw new Error("Collections not found");
  const mappedData = await Promise.all(collections.map(CollectionMapper));
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
        avgProducts,
      },
    },
  };
};
export default GetAllCollections;

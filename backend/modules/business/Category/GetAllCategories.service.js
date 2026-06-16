import CategoryModel from "../../data/Category/Category.model.js";
import CategoryMapper from "./CategoryMapper.js";
import ProductModel from "../../data/Product/Product.model.js";
const GetAllCategories = async ({page = 1, limit = 10, sort = "newest"}) => {
  const skip = (page - 1) * limit;
  let sortOrder = {};
  if (sort === "newest") {
    sortOrder = { createdAt: -1 };
  } else if (sort === "oldest") {
    sortOrder = { createdAt: 1 };
  } else if (sort === "a_z" || sort === "name_asc") {
    sortOrder = { Name: 1 };
  } else if (sort === "z_a" || sort === "name_desc") {
    sortOrder = { Name: -1 };
  }
  const [categories, totalItems, activeItems, inactiveItems, totalProducts] = await Promise.all([
    CategoryModel.find({ IsDeleted: false }).sort(sortOrder).lean().skip(skip).limit(limit),
    CategoryModel.countDocuments({ IsDeleted: false }),
    CategoryModel.countDocuments({ IsDeleted: false, IsActivated: true }),
    CategoryModel.countDocuments({ IsDeleted: false, IsActivated: false }),
    ProductModel.countDocuments({ IsDeleted: false })
  ]);
  const avgProducts = totalItems > 0 ? parseFloat((totalProducts / totalItems).toFixed(2)) : 0;
  if (!categories) throw new Error("Categories not found");
  const mappedData = await Promise.all(categories.map(CategoryMapper));
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
        avgProducts
      },
    },
  };
};
export default GetAllCategories;

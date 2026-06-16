import SubcategoryModel from "../../data/Subcategory/Subcategory.model.js";
import SubcategoryMapper from "./SubcategoryMapper.js";
import ProductModel from "../../data/Product/Product.model.js";
const GetAllSubcategories = async ({ page = 1, limit = 10, sort = "newest" }) => {
  const skip = (page - 1) * limit;
  let sortQuery = {};
  if (sort === "newest") sortQuery = { CreateDate: -1 };
  if (sort === "oldest") sortQuery = { CreateDate: 1 };
  if (sort === "a_z" || sort === "name_asc") sortQuery = { Name: 1 };
  if (sort === "z_a" || sort === "name_desc") sortQuery = { Name: -1 };
  const [subcategories, totalItems, activeItems, inactiveItems, totalProducts] = await Promise.all([
    SubcategoryModel.find({ IsDeleted: false })
      .populate("CategoryID")
      .sort(sortQuery)
      .lean()
      .skip(skip)
      .limit(limit),
    SubcategoryModel.countDocuments({ IsDeleted: false }),
    SubcategoryModel.countDocuments({ IsDeleted: false, IsActivated: true }),
    SubcategoryModel.countDocuments({ IsDeleted: false, IsActivated: false }),
    ProductModel.countDocuments({ IsDeleted: false }),
  ]);
  if (!subcategories) throw new Error("Subcategories not found");
  const mappedData = await Promise.all(subcategories.map(SubcategoryMapper));
  const avgProducts = totalItems > 0 ? parseFloat((totalProducts / totalItems).toFixed(2)) : 0;
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
export default GetAllSubcategories;

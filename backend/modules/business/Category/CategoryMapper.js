import ProductModel from "../../data/Product/Product.model.js";
import SubcategoryModel from "../../data/Subcategory/Subcategory.model.js";
import ProductMapper from "../Product/ProductMapper.js";
const CategoryMapper = async (category) => {
  if (!category) return null;
  const categoryObj = typeof category.toObject === "function" ? category.toObject() : category;
  const products = await ProductModel.find({
    IsDeleted: false,
    CategoryIDs: categoryObj._id,
  }).lean();
  const mappedProducts = await Promise.all(products.map(ProductMapper));
  const subcategories = await SubcategoryModel.find({
    IsDeleted: false,
    CategoryID: categoryObj._id,
  }).lean();
  const subcategoriesWithProducts = await Promise.all(
    subcategories.map(async (sub) => {
      const subProducts = await ProductModel.find({
        IsDeleted: false,
        SubcategoryIDs: sub._id,
      }).lean();
      const mappedSubProducts = await Promise.all(subProducts.map(ProductMapper));
      return {
        ...sub,
        Products: mappedSubProducts || [],
      };
    })
  );
  return {
    ...categoryObj,
    Products: mappedProducts || [],
    Subcategories: subcategoriesWithProducts || [],
  };
};
export default CategoryMapper;

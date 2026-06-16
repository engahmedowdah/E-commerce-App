import ProductModel from "../../data/Product/Product.model.js";
import ProductMapper from "../Product/ProductMapper.js";
const SimpleCategoryMapper = (category) => {
  if (!category) return null;
  const categoryObj = typeof category.toObject === "function" ? category.toObject() : category;
  const { CreatedBy, CreatedDate, IsActivated, IsDeleted, __v, ...rest } = categoryObj;
  return rest;
};
const SubcategoryMapper = async (subcategory) => {
  if (!subcategory) return null;
  const subObj = typeof subcategory.toObject === "function" ? subcategory.toObject() : subcategory;
  const {
    CreatedBy,
    UpdatedBy,
    UpdatedDate,
    __v,
    CategoryID,
    ...subRest
  } = subObj;
  const mapped = {
    ...subRest,
  };
  if (CategoryID && typeof CategoryID === "object") {
    mapped.Category = SimpleCategoryMapper(CategoryID);
    mapped.CategoryID = CategoryID._id.toString();
  } else if (CategoryID) {
    mapped.CategoryID = CategoryID.toString();
  }
  const products = await ProductModel.find({
    IsDeleted: false,
    $or: [
      { SubCategoryIDs: subObj._id },
      { SubcategoryIDs: subObj._id }
    ]
  }).lean();
  const mappedProducts = await Promise.all(products.map(ProductMapper));
  mapped.Products = mappedProducts || [];
  return mapped;
};
export default SubcategoryMapper;

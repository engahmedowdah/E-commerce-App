import ImageModel from "../../data/Image/Image.model.js";
import CategoryModel from "../../data/Category/Category.model.js";
import CollectionModel from "../../data/Collection/Collection.model.js";
import SubcategoryModel from "../../data/Subcategory/Subcategory.model.js";
const ProductMapper = async (product) => {
  if (!product) return null;
  const productObj = typeof product.toObject === "function" ? product.toObject() : product;
  let images = [];
  if (Array.isArray(productObj.ImageIDs) && productObj.ImageIDs.length > 0) {
    images = await ImageModel.find({
      _id: { $in: productObj.ImageIDs },
    }).lean();
  }
  let categories = [];
  if (Array.isArray(productObj.CategoryIDs) && productObj.CategoryIDs.length > 0) {
    categories = await CategoryModel.find({
      _id: { $in: productObj.CategoryIDs },
      IsDeleted: false,
    }).lean();
  }
  const category = categories.length > 0 ? categories[0] : null;
  let collections = [];
  if (Array.isArray(productObj.CollectionIDs) && productObj.CollectionIDs.length > 0) {
    collections = await CollectionModel.find({
      _id: { $in: productObj.CollectionIDs },
      IsDeleted: false,
    }).lean();
  }
  const collection = collections.length > 0 ? collections[0] : null;
  let subcategories = [];
  let subcategory = null;
  const subIds = productObj.SubcategoryIDs || productObj.SubCategoryIDs;
  if (Array.isArray(subIds) && subIds.length > 0) {
    subcategories = await SubcategoryModel.find({
      _id: { $in: subIds },
      IsDeleted: false,
    }).lean();
    subcategory = subcategories.length > 0 ? subcategories[0] : null;
  } else if (subIds) {
    const sub = await SubcategoryModel.findOne({
      _id: subIds,
      IsDeleted: false,
    }).lean();
    subcategory = sub;
    subcategories = sub ? [sub] : [];
  }
  return {
    ...productObj,
    Images: images || [],
    Categories: categories || [],
    Collections: collections || [],
    Subcategories: subcategories || [],
  };
};
export default ProductMapper;

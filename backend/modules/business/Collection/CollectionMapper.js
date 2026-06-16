import ProductModel from "../../data/Product/Product.model.js";
import ProductMapper from "../Product/ProductMapper.js";
const CollectionMapper = async (collection) => {
  if (!collection) return null;
  const collectionObj = typeof collection.toObject === "function" ? collection.toObject() : collection;
  const products = await ProductModel.find({
    IsDeleted: false,
    CollectionIDs: collectionObj._id,
  }).lean();
  const mappedProducts = await Promise.all(products.map(ProductMapper));
  return {
    ...collectionObj,
    Products: mappedProducts || [],
  };
};
export default CollectionMapper;

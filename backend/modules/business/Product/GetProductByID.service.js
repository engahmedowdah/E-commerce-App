import mongoose from "mongoose";
import ProductModel from "../../data/Product/Product.model.js";
import ProductMapper from "./ProductMapper.js";
const GetProductByID = async ({ ProductID }) => {
  if (!mongoose.Types.ObjectId.isValid(ProductID)) {
    return null;
  }
  const product = await ProductModel.findOne({
    _id: ProductID,
    IsDeleted: false,
  }).lean();
  if (!product) return null;
  return await ProductMapper(product);
};
export default GetProductByID;

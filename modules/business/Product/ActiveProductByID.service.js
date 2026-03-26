import ProductModel from "../../data/Product/Product.model.js";
const ActiveProductByID = async ({ ProductID, UpdatedBy }) => {
  try {
    if (!ProductID || !UpdatedBy) throw new Error("Missing required fields");
    const product = await ProductModel.findById(ProductID);
    if (!product) throw new Error("Product not found");

    product.IsActivated = !product.IsActivated;
    product.UpdatedBy = UpdatedBy;
    product.UpdatedDate = Date.now();

    await product.save();

    return product;
  } catch (error) {
    throw "Error activating product";
  }
};
export default ActiveProductByID;

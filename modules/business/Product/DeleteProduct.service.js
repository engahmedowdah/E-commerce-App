import ProductModel from "../../data/Product/Product.model.js";
const DeleteProduct = async ({ ProductID, UpdatedBy }) => {
  try {
    if (!ProductID) throw new Error("Product ID is required");
    const product = await ProductModel.findByIdAndUpdate(
      ProductID,
      {
        IsDeleted: true,
        UpdatedBy,
        UpdatedDate: new Date(),
      },
      { new: true }
    );

    if (!product) {
      throw new Error("Product not found");
    }

    await product.populate([
      { path: "CategoryID" },
      { path: "CollectionID" },
      { path: "Images.ImageID" }
    ]);

    return product;
  } catch (error) {
    throw "Error deleting product";
  }
};

export default DeleteProduct;

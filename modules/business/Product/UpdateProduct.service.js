import ProductModel from "../../data/Product/Product.model.js";
const UpdateProduct = async ({ ProductID, Name, Description, Price, Stock, CategoryID, CollectionID, Images, UpdatedBy }) => {
  try {
    if (!ProductID) throw new Error("Product ID is required");
    const product = await ProductModel.findByIdAndUpdate(
      ProductID,
      {
        Name,
        Description,
        Price,
        Stock,
        CategoryID,
        CollectionID,
        Images,
        IsActivated,
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
    throw "Error updating product";
  }
};

export default UpdateProduct;

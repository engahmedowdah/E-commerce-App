import { NotDeletedFilter } from "../../../shared/utils.js";
import ProductModel from "../../data/Product/Product.model.js";

const GetProductByID = async ({ ProductID, includeDeleted = false }) => {
  try {
    if (!ProductID) throw new Error("Product ID is required");
    const product = await ProductModel.findOne({
      _id: ProductID,
      ...NotDeletedFilter(includeDeleted),
    });

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
    throw "Error getting product by ID";
  }
};

export default GetProductByID;

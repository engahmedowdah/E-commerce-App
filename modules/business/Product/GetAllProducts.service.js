import ProductModel from "../../data/Product/Product.model.js";
import { NotDeletedFilter } from "../../../shared/utils.js";
const GetAllProducts = async ({ includeDeleted = false }) => {
  try {
    const products = await ProductModel.find(
      {
        ...NotDeletedFilter(includeDeleted)
      }).populate("CategoryID").populate("CollectionID");

    if (!products) throw new Error("Products not found");

    return products;
  } catch (error) {
    throw "Error getting products";
  }
};
export default GetAllProducts;

import ProductModel from "../../data/Product/Product.model.js";
import { SoftDeleteById } from "../../../shared/dbUtils.js";
import ProductMapper from "./ProductMapper.js";
const DeleteProduct = async ({ ProductID }) => {
    const product = await ProductModel.findOne({ _id: ProductID, IsDeleted: false });
    if (!product) throw new Error("Product not found");
    const deletedProduct = await SoftDeleteById(ProductModel, ProductID);
    if (!deletedProduct) throw new Error("Product not deleted");
    return await ProductMapper(deletedProduct);
};
export default DeleteProduct;

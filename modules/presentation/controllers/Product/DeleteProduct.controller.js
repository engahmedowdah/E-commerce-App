import { NoContent, NotFound, ServerError } from "../../../../shared/utils.js";
import DeleteProduct from "../../../business/Product/DeleteProduct.service.js";
export default async function DeleteProductController(req, res) {
    const { ProductID } = req.body;
    try {
        const product = await DeleteProduct(ProductID);
        if (!product) {
            return NotFound(res, "Product not found");
        }
        return NoContent(res, "Product deleted successfully");
    } catch (err) {
        return ServerError(res, err.message);
    }
}

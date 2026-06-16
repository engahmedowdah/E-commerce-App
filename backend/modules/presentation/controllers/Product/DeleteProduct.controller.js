import { Ok, BadRequest, NotFound, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import DeleteProduct from "../../../business/Product/DeleteProduct.service.js";
const deleteSchema = {
    ProductID: { type: "string", required: true },
};
export default async function DeleteProductController(req, res) {
    const error = ValidateSchema(req.body, deleteSchema);
    if (error) return BadRequest(res, error);
    try {
        const { ProductID } = req.body;
        const result = await DeleteProduct({ ProductID });
        if (!result) return NotFound(res, "Product not found");
        return Ok(res, "Product deleted successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}

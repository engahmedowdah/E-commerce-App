import { Ok, BadRequest, ServerError } from "../../../../shared/utils.js";
import ActiveProductByID from "../../../business/Product/ActiveProductByID.service.js";

export default async function ActiveProductByIDController(req, res) {
    const { ProductID } = req.body;
    try {
        const product = await ActiveProductByID(ProductID);
        if (!product) {
            return BadRequest(res, "Failed to activate product or product not found");
        }
        return Ok(res, "Product activated successfully", product);
    } catch (err) {
        return ServerError(res, err.message);
    }
}

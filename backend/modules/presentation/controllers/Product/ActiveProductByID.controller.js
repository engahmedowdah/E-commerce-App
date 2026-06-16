import { Ok, BadRequest, NotFound, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import ActiveProductByID from "../../../business/Product/ActiveProductByID.service.js";
const activeSchema = {
    ProductID: { type: "string", required: true },
  };
export default async function ActiveProductByIDController(req, res) {
    const error = ValidateSchema(req.body, activeSchema);
    if (error) return BadRequest(res, error);
    const { ProductID } = req.body;
    try {
        const result = await ActiveProductByID({ ProductID });
        if (!result) return NotFound(res, "Product not found");
        return Ok(res, "Product activated successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}

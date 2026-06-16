import { Ok, BadRequest, NotFound, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import GetProductByID from "../../../business/Product/GetProductByID.service.js";
const getByIDSchema = {
    ProductID: { type: "string", required: true },
  };
export default async function GetProductByIDController(req, res) {
    const error = ValidateSchema(req.body, getByIDSchema);
    if (error) return BadRequest(res, error);
    const { ProductID } = req.body;
    try {
        const result = await GetProductByID({ ProductID });
        if (!result) return NotFound(res, "Product not found", null);
        return Ok(res, "Product fetched successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}

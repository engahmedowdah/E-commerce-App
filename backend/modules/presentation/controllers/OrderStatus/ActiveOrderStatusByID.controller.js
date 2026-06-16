import { Ok, BadRequest, NotFound, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import ActiveOrderStatusByID from "../../../business/OrderStatus/ActiveOrderStatusByID.service.js";
const activeSchema = {
    OrderStatusID: { type: "string", required: true },
  };
export default async function ActiveOrderStatusByIDController(req, res) {
    const error = ValidateSchema(req.body, activeSchema);
    if (error) return BadRequest(res, error);
    const { OrderStatusID } = req.body;
    try {
        const result = await ActiveOrderStatusByID({ OrderStatusID });
        if (!result) return NotFound(res, "OrderStatus not found");
        return Ok(res, "OrderStatus activated successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}

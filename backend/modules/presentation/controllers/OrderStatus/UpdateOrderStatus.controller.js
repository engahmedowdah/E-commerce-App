import { Ok, BadRequest, NotFound, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import UpdateOrderStatus from "../../../business/OrderStatus/UpdateOrderStatus.service.js";
const updateSchema = {
      OrderStatusID: { type: "string", required: true },
      Name: { type: "string", required: false },
      IsActivated: { type: "boolean", required: false },
    };
export default async function UpdateOrderStatusController(req, res) {
    const error = ValidateSchema(req.body, updateSchema);
    if (error) return BadRequest(res, error);
    const { OrderStatusID, Name, IsActivated } = req.body;
    try {
        const result = await UpdateOrderStatus({ OrderStatusID, Name, IsActivated });
        if (!result) return NotFound(res, "OrderStatus not found");
        return Ok(res, "OrderStatus updated successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}

import { Ok, BadRequest, NotFound, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import DeleteOrderStatus from "../../../business/OrderStatus/DeleteOrderStatus.service.js";
const deleteSchema = {
    OrderStatusID: { type: "string", required: true },
  };
export default async function DeleteOrderStatusController(req, res) {
    const error = ValidateSchema(req.body, deleteSchema);
    if (error) return BadRequest(res, error);
    const { OrderStatusID } = req.body;
    try {
        const result = await DeleteOrderStatus({ OrderStatusID });
        if (!result) return NotFound(res, "OrderStatus not found");
        return Ok(res, "OrderStatus deleted successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}

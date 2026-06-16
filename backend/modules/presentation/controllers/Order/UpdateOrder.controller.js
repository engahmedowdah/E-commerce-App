import { Ok, BadRequest, NotFound, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import UpdateOrder from "../../../business/Order/UpdateOrder.service.js";
const updateSchema = {
    OrderID: { type: "string", required: true },
    OrderStatusID: { type: "string", required: false },
};
export default async function UpdateOrderController(req, res) {
    const error = ValidateSchema(req.body, updateSchema);
    if (error) return BadRequest(res, error);
    const { OrderID, OrderStatusID } = req.body;
    try {
        const result = await UpdateOrder({ OrderID, OrderStatusID });
        if (!result) return NotFound(res, "Order not found");
        return Ok(res, "Order updated successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}

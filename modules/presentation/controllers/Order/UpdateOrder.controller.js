import { Ok, BadRequest, NotFound, ServerError } from "../../../../shared/utils.js";
import UpdateOrderStatus from "../../../business/Order/UpdateOrderStatus.service.js";
export default async function UpdateOrderStatusController(req, res) {
    const { OrderID, OrderStatusID } = req.body;
    if (!OrderID || !OrderStatusID) {
        return BadRequest(res, "OrderID and OrderStatusID are required");
    }
    try {
        const UpdatedBy = req.body.AdminId;
        const order = await UpdateOrderStatus(OrderID, OrderStatusID, UpdatedBy);
        if (!order) {
            return NotFound(res, "Order not found");
        }
        return Ok(res, "Order status updated successfully", order);
    } catch (err) {
        return ServerError(res, err.message);
    }
}

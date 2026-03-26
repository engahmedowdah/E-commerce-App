import { Ok, BadRequest, ServerError } from "../../../../shared/utils.js";
import ActiveOrderStatusByID from "../../../business/OrderStatus/ActiveOrderStatusByID.service.js";

export default async function ActiveOrderStatusByIDController(req, res) {
    const { OrderStatusID } = req.body;
    try {
        const orderStatus = await ActiveOrderStatusByID(OrderStatusID);
        if (!orderStatus) {
            return BadRequest(res, "Failed to activate order status or order status not found");
        }
        return Ok(res, "Order status activated successfully", orderStatus);
    } catch (err) {
        return ServerError(res, err.message);
    }
}

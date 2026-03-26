import { NoContent, NotFound, ServerError } from "../../../../shared/utils.js";
import DeleteOrderStatus from "../../../business/OrderStatus/DeleteOrderStatus.service.js";
export default async function DeleteOrderStatusController(req, res) {
    const { OrderStatusID } = req.body;
    try {
        const orderStatus = await DeleteOrderStatus(OrderStatusID);
        if (!orderStatus) {
            return NotFound(res, "Order status not found");
        }
        return NoContent(res, "Order status deleted successfully");
    } catch (err) {
        return ServerError(res, err.message);
    }
}

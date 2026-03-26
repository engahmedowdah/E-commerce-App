import { Ok, NotFound, ServerError } from "../../../../shared/utils.js";
import GetOrderStatusByID from "../../../business/OrderStatus/GetOrderStatusByID.service.js";
export default async function GetOrderStatusByIDController(req, res) {
    const { OrderStatusID } = req.body;
    try {
        const orderStatus = await GetOrderStatusByID(OrderStatusID);
        if (!orderStatus) {
            return NotFound(res, "Order status not found");
        }
        return Ok(res, "Order status fetched successfully", orderStatus);
    } catch (err) {
        return ServerError(res, err.message);
    }
}

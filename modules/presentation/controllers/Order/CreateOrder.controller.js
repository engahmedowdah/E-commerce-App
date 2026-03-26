import { Created, BadRequest, ServerError } from "../../../../shared/utils.js";
import CreateOrder from "../../../business/Order/CreateOrder.service.js";
export default async function CreateOrderController(req, res) {
    if (!req.body) {
        return BadRequest(res, "Request body is missing");
    }
    const { UserID, Items, AddressID, PaymentID, OrderStatusID } = req.body;
    if (!UserID || !Items || !AddressID || !PaymentID || !OrderStatusID) {
        return BadRequest(res, "Missing required fields for order creation");
    }
    try {
        const CreatedBy = UserID;
        const order = await CreateOrder({ UserID, Items, AddressID, PaymentID, OrderStatusID, CreatedBy });
        return Created(res, "Order created successfully", order);
    } catch (err) {
        return ServerError(res, err.message);
    }
}

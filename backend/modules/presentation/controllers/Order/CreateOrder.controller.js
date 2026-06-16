import { Created, BadRequest, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import CreateOrder from "../../../business/Order/CreateOrder.service.js";
const createSchema = {
    AddressID: { type: "string", required: true },
    OrderStatusID: { type: "string", required: true },
    PaymentID: { type: "string", required: true },
    UserID: { type: "string", required: true },
    Items: { type: "array", required: true },
};
export default async function CreateOrderController(req, res) {
    const error = ValidateSchema(req.body, createSchema);
    if (error) return BadRequest(res, error);
    const { AddressID, OrderStatusID, PaymentID, UserID, Items } = req.body;
    if (!UserID || !Items || !AddressID || !PaymentID || !OrderStatusID) {
        return BadRequest(res, "Missing required fields for order creation");
    }
    try {
        const order = await CreateOrder({ AddressID, OrderStatusID, PaymentID, UserID, Items });
        if (!order) {
            return BadRequest(res, "Failed to create order");
        }
        return Created(res, "Order created successfully", order);
    } catch (err) {
        return ServerError(res, err.message);
    }
}

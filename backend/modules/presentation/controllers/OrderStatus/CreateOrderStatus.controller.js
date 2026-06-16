import { Created, BadRequest, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import CreateOrderStatus from "../../../business/OrderStatus/CreateOrderStatus.service.js";
const createSchema = {
    Name: { type: "string", required: true },
    IsActivated: { type: "boolean", required: false },
};
export default async function CreateOrderStatusController(req, res) {
    const error = ValidateSchema(req.body, createSchema);
    if (error) return BadRequest(res, error);
    try {
        const { Name, IsActivated } = req.body;
        const orderStatus = await CreateOrderStatus({ Name, IsActivated });
        if (!orderStatus) {
            return BadRequest(res, "Failed to create order status");
        }
        return Created(res, "Order status created successfully", orderStatus);
    } catch (err) {
        return ServerError(res, err.message);
    }
}

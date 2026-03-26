import { Created, BadRequest, ServerError } from "../../../../shared/utils.js";
import CreateOrderStatus from "../../../business/OrderStatus/CreateOrderStatus.service.js";
export default async function CreateOrderStatusController(req, res) {
    const { IsActive, Name } = req.body;
    if (!Name) {
        return BadRequest(res, "Name is required for order status creation");
    }
    try {
        const CreatedBy = req.body.AdminId;
        const orderStatus = await CreateOrderStatus({ Name, IsActive, CreatedBy });
        return Created(res, "Order status created successfully", orderStatus);
    } catch (err) {
        return ServerError(res, err.message);
    }
}

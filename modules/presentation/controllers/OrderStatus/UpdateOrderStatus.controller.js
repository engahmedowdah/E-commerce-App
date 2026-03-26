import { Ok, BadRequest, NotFound, ServerError } from "../../../../shared/utils.js";
import UpdateOrderStatus from "../../../business/OrderStatus/UpdateOrderStatus.service.js";
export default async function UpdateOrderStatusController(req, res) {
    const { IsActive, Name, id } = req.body;
    try {
        const UpdatedBy = req.body.AdminId;
        const orderStatus = await UpdateOrderStatus(id, { Name, IsActive, UpdatedBy });
        if (!orderStatus) {
            return NotFound(res, "Order status not found");
        }
        return Ok(res, "Order status updated successfully", orderStatus);
    } catch (err) {
        return ServerError(res, err.message);
    }
}

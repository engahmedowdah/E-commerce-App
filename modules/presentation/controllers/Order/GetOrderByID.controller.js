import { BadRequest, Ok, NotFound, ServerError } from "../../../../shared/utils.js";
import GetOrderByID from "../../../business/Order/GetOrderByID.service.js";
export default async function GetOrderByIDController(req, res) {
    if (!req.body) {
        return BadRequest(res, "Request body is missing");
    }
    const { _id } = req.body;
    if (!_id) {
        return BadRequest(res, "Order ID is required");
    }
    try {
        const order = await GetOrderByID(_id);
        if (!order) {
            return NotFound(res, "Order not found");
        }
        return Ok(res, "Order fetched successfully", order);
    } catch (err) {
        return ServerError(res, err.message);
    }
}

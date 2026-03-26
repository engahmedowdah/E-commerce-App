import { Ok, ServerError, BadRequest } from "../../../../shared/utils.js";
import GetOrderHistory from "../../../business/Order/GetOrderHistory.service.js";
export default async function GetOrderHistoryController(req, res) {
    const { UserId, PageSize, PageNumber } = req.body;
    if (!UserId) {
        return BadRequest(res, "User ID is required");
    }
    try {
        const orders = await GetOrderHistory(UserId, PageSize, PageNumber);
        return Ok(res, "Order history fetched successfully", orders);
    } catch (err) {
        return ServerError(res, err.message);
    }
}

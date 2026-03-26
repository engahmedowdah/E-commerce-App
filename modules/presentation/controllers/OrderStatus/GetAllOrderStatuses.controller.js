import { Ok, ServerError } from "../../../../shared/utils.js";
import GetAllOrderStatuses from "../../../business/OrderStatus/GetAllOrderStatuses.service.js";
export default async function GetAllOrderStatusesController(req, res) {
    try {
        const orderStatuses = await GetAllOrderStatuses();
        return Ok(res, "Order statuses fetched successfully", orderStatuses);
    } catch (err) {
        return ServerError(res, err.message);
    }
}
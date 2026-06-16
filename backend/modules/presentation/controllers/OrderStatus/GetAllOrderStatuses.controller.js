import { Ok, ServerError } from "../../../../shared/utils.js";
import GetAllOrderStatuses from "../../../business/OrderStatus/GetAllOrderStatuses.service.js";
export default async function GetAllOrderStatusesController(req, res) {
    try {
        const { page = 1, limit = 10, sort = "newest" } = req.query;
        const result = await GetAllOrderStatuses({ page, limit, sort });
        return Ok(res, "OrderStatuses fetched successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}

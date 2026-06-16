import { Ok, ServerError } from "../../../../shared/utils.js";
import GetAllOrders from "../../../business/Order/GetAllOrders.service.js";
export default async function GetAllOrdersController(req, res) {
    try {
        const { page, limit, sort } = req.query;
        const result = await GetAllOrders({ page, limit, sort });
        return Ok(res, "Orders fetched successfully", result);
    } catch (err) {
        return ServerError(res, err.message);
    }
}

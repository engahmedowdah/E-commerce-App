import { Ok, ServerError } from "../../../../shared/utils.js";
import GetAllOrders from "../../../business/Order/GetAllOrders.service.js";
export default async function GetAllOrdersController(req, res) {
    try {
        const orders = await GetAllOrders();
        return Ok(res, "Orders fetched successfully", orders);
    } catch (err) {
        return ServerError(res, err.message);
    }
}

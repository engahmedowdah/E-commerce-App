import { Ok, ServerError } from "../../../../shared/utils.js";
import GetAllPayments from "../../../business/Payment/GetAllPayments.service.js";
export default async function GetAllPaymentsController(req, res) {
    try {
        const { page = 1, limit = 10, sort = "newest" } = req.query;
        const result = await GetAllPayments({ page, limit, sort });
        return Ok(res, "Payments fetched successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}

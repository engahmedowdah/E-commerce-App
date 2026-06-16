import { Ok, ServerError } from "../../../../shared/utils.js";
import GetAllPaymentStatuses from "../../../business/PaymentStatus/GetAllPaymentStatuses.service.js";
export default async function GetAllPaymentStatusesController(req, res) {
    try {
    const { page = 1, limit = 10, sort = "newest" } = req.query;
        const result = await GetAllPaymentStatuses({ page, limit, sort });
        return Ok(res, "PaymentStatuses fetched successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}

import { Ok, ServerError } from "../../../../shared/utils.js";
import GetAllPaymentStatuses from "../../../business/PaymentStatus/GetAllPaymentStatuses.service.js";
export default async function GetAllPaymentStatusesController(req, res) {
    try {
        const { PaymentStatuses } = await GetAllPaymentStatuses();
        return Ok(res, "Payment statuses fetched successfully", PaymentStatuses);
    } catch (err) {
        return ServerError(res, err.message);
    }
}
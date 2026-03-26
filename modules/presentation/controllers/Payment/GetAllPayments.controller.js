import { Ok, ServerError } from "../../../../shared/utils.js";
import GetAllPayments from "../../../business/Payment/GetAllPayments.service.js";
export default async function GetAllPaymentsController(req, res) {
    try {
        const payments = await GetAllPayments();
        return Ok(res, "Payments fetched successfully", payments);
    } catch (err) {
        return ServerError(res, err.message);
    }
}
import { Ok, NotFound, ServerError } from "../../../../shared/utils.js";
import GetPaymentByID from "../../../business/Payment/GetPaymentByID.service.js";
export default async function GetPaymentByIDController(req, res) {
    const { PaymentID } = req.body;
    try {
        const payment = await GetPaymentByID(PaymentID);
        if (!payment) {
            return NotFound(res, "Payment not found");
        }
        return Ok(res, "Payment fetched successfully", payment);
    } catch (err) {
        return ServerError(res, err.message);
    }
}

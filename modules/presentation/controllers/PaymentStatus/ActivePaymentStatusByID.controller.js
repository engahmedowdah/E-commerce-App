import { Ok, BadRequest, ServerError } from "../../../../shared/utils.js";
import ActivePaymentStatusByID from "../../../business/PaymentStatus/ActivePaymentStatusByID.service.js";

export default async function ActivePaymentStatusByIDController(req, res) {
    const { PaymentStatusID } = req.body;
    try {
        const paymentStatus = await ActivePaymentStatusByID(PaymentStatusID);
        if (!paymentStatus) {
            return BadRequest(res, "Failed to activate payment status or payment status not found");
        }
        return Ok(res, "Payment status activated successfully", paymentStatus);
    } catch (err) {
        return ServerError(res, err.message);
    }
}

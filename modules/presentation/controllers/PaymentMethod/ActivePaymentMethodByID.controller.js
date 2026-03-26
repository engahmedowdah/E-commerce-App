import { Ok, BadRequest, ServerError } from "../../../../shared/utils.js";
import ActivePaymentMethodByID from "../../../business/PaymentMethod/ActivePaymentMethodByID.service.js";

export default async function ActivePaymentMethodByIDController(req, res) {
    const { PaymentMethodID } = req.body;
    try {
        const paymentMethod = await ActivePaymentMethodByID(PaymentMethodID);
        if (!paymentMethod) {
            return BadRequest(res, "Failed to activate payment method or payment method not found");
        }
        return Ok(res, "Payment method activated successfully", paymentMethod);
    } catch (err) {
        return ServerError(res, err.message);
    }
}

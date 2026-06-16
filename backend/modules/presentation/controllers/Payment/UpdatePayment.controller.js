import { Ok, BadRequest, NotFound, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import UpdatePayment from "../../../business/Payment/UpdatePayment.service.js";
const updateSchema = {
    PaymentID: { type: "string", required: true },
    CurrencySymbolID: { type: "string", required: false },
    PaymentMethodID: { type: "string", required: false },
    PaymentStatusID: { type: "string", required: false },
    UserID: { type: "string", required: false },
    Amount: { type: "number", required: false },
};
export default async function UpdatePaymentController(req, res) {
    const error = ValidateSchema(req.body, updateSchema);
    if (error) return BadRequest(res, error);
    const { PaymentID, CurrencySymbolID, PaymentMethodID, PaymentStatusID, UserID, Amount } = req.body;
    try {
        const result = await UpdatePayment({ PaymentID, CurrencySymbolID, PaymentMethodID, PaymentStatusID, UserID, Amount });
        if (!result) return NotFound(res, "Payment not found");
        return Ok(res, "Payment updated successfully", result);
    } catch (err) {
        return ServerError(res, err.message || "Failed to update payment");
    }
}

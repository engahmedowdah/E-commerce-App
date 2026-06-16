import { Created, BadRequest, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import CreatePayment from "../../../business/Payment/CreatePayment.service.js";
const createSchema = {
    CurrencySymbolID: { type: "string", required: true },
    PaymentMethodID: { type: "string", required: true },
    PaymentStatusID: { type: "string", required: true },
    UserID: { type: "string", required: true },
    Amount: { type: "number", required: true },
};
export default async function CreatePaymentController(req, res) {
    const error = ValidateSchema(req.body, createSchema);
    if (error) return BadRequest(res, error);
    const { CurrencySymbolID, PaymentMethodID, PaymentStatusID, UserID, Amount } = req.body;
    try {
        const result = await CreatePayment({ CurrencySymbolID, PaymentMethodID, PaymentStatusID, UserID, Amount });
        if (!result) {
            return BadRequest(res, "Failed to create payment");
        }
        return Created(res, "Payment created successfully", result);
    } catch (err) {
        return ServerError(res, err.message);
    }
}

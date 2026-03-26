import { Created, BadRequest, ServerError } from "../../../../shared/utils.js";
import CreatePayment from "../../../business/Payment/CreatePayment.service.js";
export default async function CreatePaymentController(req, res) {
    const { Amount, OrderID, PaymentMethodID, PaymentStatusID, UserID } = req.body;
    if (!OrderID || !UserID || !PaymentMethodID || Amount === undefined || !PaymentStatusID) {
        return BadRequest(res, "Missing required fields for payment creation");
    }
    try {
        const CreatedBy = req.body.UserId;
        const result = await CreatePayment({ OrderID, UserID, PaymentMethodID, Amount, PaymentStatusID, CreatedBy });
        return Created(res, "Payment created successfully", result);
    } catch (err) {
        return ServerError(res, err.message);
    }
}

import { Ok, BadRequest, NotFound, ServerError } from "../../../../shared/utils.js";
import UpdatePaymentMethod from "../../../business/PaymentMethod/UpdatePaymentMethod.service.js";
export default async function UpdatePaymentMethodController(req, res) {
    const { PaymentMethodID, Name, IsActive } = req.body;
    try {
        const UpdatedBy = req.body.AdminId;
        const result = await UpdatePaymentMethod(PaymentMethodID, { Name, IsActive, UpdatedBy });
        if (!result) {
            return NotFound(res, "Payment method not found");
        }
        return Ok(res, "Payment method updated successfully", result);
    } catch (err) {
        return ServerError(res, err.message);
    }
}

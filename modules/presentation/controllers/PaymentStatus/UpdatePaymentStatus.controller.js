import { Ok, BadRequest, NotFound, ServerError } from "../../../../shared/utils.js";
import UpdatePaymentStatus from "../../../business/PaymentStatus/UpdatePaymentStatus.service.js";
export default async function UpdatePaymentStatusController(req, res) {
    const { PaymentStatusID, Name, IsActive } = req.body;
    try {
        const UpdatedBy = req.body.AdminId;
        const result = await UpdatePaymentStatus(PaymentStatusID, { Name, IsActive, UpdatedBy });
        if (!result) {
            return NotFound(res, "Payment status not found");
        }
        return Ok(res, "Payment status updated successfully", result);
    } catch (err) {
        return ServerError(res, err.message);
    }
}

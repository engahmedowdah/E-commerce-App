import { NoContent, NotFound, ServerError } from "../../../../shared/utils.js";
import DeletePaymentStatus from "../../../business/PaymentStatus/DeletePaymentStatus.service.js";
export default async function DeletePaymentStatusController(req, res) {
    const { PaymentStatusID } = req.body;
    try {
        const result = await DeletePaymentStatus(PaymentStatusID);
        if (!result) {
            return NotFound(res, "Payment status not found");
        }
        return NoContent(res, "Payment status deleted successfully");
    } catch (err) {
        return ServerError(res, err.message);
    }
}

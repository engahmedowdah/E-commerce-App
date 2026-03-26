import { NoContent, NotFound, ServerError } from "../../../../shared/utils.js";
import DeletePaymentMethod from "../../../business/PaymentMethod/DeletePaymentMethod.service.js";
export default async function DeletePaymentMethodController(req, res) {
    const { PaymentMethodID } = req.body;
    try {
        const result = await DeletePaymentMethod(PaymentMethodID);
        if (!result) {
            return NotFound(res, "Payment method not found");
        }
        return NoContent(res, "Payment method deleted successfully");
    } catch (err) {
        return ServerError(res, err.message);
    }
}

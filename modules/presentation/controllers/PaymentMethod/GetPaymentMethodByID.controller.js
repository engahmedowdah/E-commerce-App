import { Ok, NotFound, ServerError } from "../../../../shared/utils.js";
import GetPaymentMethodByID from "../../../business/PaymentMethod/GetPaymentMethodByID.service.js";
export default async function GetPaymentMethodByIDController(req, res) {
    const { PaymentMethodID } = req.body;
    try {
        const result = await GetPaymentMethodByID(PaymentMethodID);
        if (!result) {
            return NotFound(res, "Payment method not found");
        }
        return Ok(res, "Payment method fetched successfully", result);
    } catch (err) {
        return ServerError(res, err.message);
    }
}

import { Ok, NotFound, ServerError } from "../../../../shared/utils.js";
import GetPaymentStatusByID from "../../../business/PaymentStatus/GetPaymentStatusByID.service.js";
export default async function GetPaymentStatusByIDController(req, res) {
    const { PaymentStatusID } = req.body;
    try {
        const result = await GetPaymentStatusByID(PaymentStatusID);
        if (!result) {
            return NotFound(res, "Payment status not found");
        }
        return Ok(res, "Payment status fetched successfully", result);
    } catch (err) {
        return ServerError(res, err.message);
    }
}

import { Ok, ServerError } from "../../../../shared/utils.js";
import GetAllPaymentMethods from "../../../business/PaymentMethod/GetAllPaymentMethods.service.js";
export default async function GetAllPaymentMethodsController(req, res) {
    try {
        const result = await GetAllPaymentMethods();
        return Ok(res, "Payment methods fetched successfully", result);
    } catch (err) {
        return ServerError(res, err.message);
    }
}   
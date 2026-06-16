import { Ok, ServerError } from "../../../../shared/utils.js";
import GetAllPaymentMethods from "../../../business/PaymentMethod/GetAllPaymentMethods.service.js";
export default async function GetAllPaymentMethodsController(req, res) {
    const { page = 1, limit = 10, sort = "newest" } = req.query;
    try {
        const result = await GetAllPaymentMethods({ page, limit, sort });
        return Ok(res, "PaymentMethods fetched successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}

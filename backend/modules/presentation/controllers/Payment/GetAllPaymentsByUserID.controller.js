import { Ok, NotFound, ServerError, ValidateSchema, BadRequest } from "../../../../shared/utils.js";
import GetAllPaymentsByUserID from "../../../business/Payment/GetAllPaymentsByUserID.service.js";
const getAllPaymentsByUserIDSchema = {
    UserID: { type: "string", required: true },
};
export default async function GetAllPaymentsByUserIDController(req, res) {
    const error = ValidateSchema(req.body, getAllPaymentsByUserIDSchema);
    if (error) return BadRequest(res, error);
    const { UserID } = req.body;
    const { page = 1, limit = 10, sort = "newest" } = req.query;
    try {
        const payments = await GetAllPaymentsByUserID({ UserID, page, limit, sort });
        return Ok(res, "Payments fetched successfully", payments);
    } catch (err) {
        return ServerError(res, err.message);
    }
}

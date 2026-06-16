import { Ok, BadRequest, NotFound, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import GetPaymentStatusByID from "../../../business/PaymentStatus/GetPaymentStatusByID.service.js";
const getByIDSchema = {
    PaymentStatusID: { type: "string", required: true },
  };
export default async function GetPaymentStatusByIDController(req, res) {
    const error = ValidateSchema(req.body, getByIDSchema);
    if (error) return BadRequest(res, error);
    const { PaymentStatusID } = req.body;
    try {
        const result = await GetPaymentStatusByID({ PaymentStatusID });
        if (!result) return NotFound(res, "PaymentStatus not found");
        return Ok(res, "PaymentStatus fetched successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}

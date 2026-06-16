import { Ok, BadRequest, NotFound, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import GetPaymentByID from "../../../business/Payment/GetPaymentByID.service.js";
const getByIDSchema = {
    PaymentID: { type: "string", required: true },
  };
export default async function GetPaymentByIDController(req, res) {
    const error = ValidateSchema(req.body, getByIDSchema);
    if (error) return BadRequest(res, error);
    const { PaymentID } = req.body;
    try {
        const result = await GetPaymentByID({ PaymentID });
        if (!result) return NotFound(res, "Payment not found");
        return Ok(res, "Payment fetched successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}

import { Ok, BadRequest, NotFound, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import ActivePaymentStatusByID from "../../../business/PaymentStatus/ActivePaymentStatusByID.service.js";
const activeSchema = {
    PaymentStatusID: { type: "string", required: true },
  };
export default async function ActivePaymentStatusByIDController(req, res) {
    const error = ValidateSchema(req.body, activeSchema);
    if (error) return BadRequest(res, error);
    const { PaymentStatusID } = req.body;
    try {
        const result = await ActivePaymentStatusByID({ PaymentStatusID });
        if (!result) return NotFound(res, "PaymentStatus not found");
        return Ok(res, "PaymentStatus activated successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}

import { Ok, BadRequest, NotFound, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import ActivePaymentMethodByID from "../../../business/PaymentMethod/ActivePaymentMethodByID.service.js";
const activeSchema = {
    PaymentMethodID: { type: "string", required: true },
  };
export default async function ActivePaymentMethodByIDController(req, res) {
    const error = ValidateSchema(req.body, activeSchema);
    if (error) return BadRequest(res, error);
    const { PaymentMethodID } = req.body;
    try {
        const result = await ActivePaymentMethodByID({ PaymentMethodID });
        if (!result) return NotFound(res, "PaymentMethod not found");
        return Ok(res, "PaymentMethod activated successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}

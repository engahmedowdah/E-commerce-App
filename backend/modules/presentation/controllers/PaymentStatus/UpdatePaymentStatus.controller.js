import { Ok, BadRequest, NotFound, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import UpdatePaymentStatus from "../../../business/PaymentStatus/UpdatePaymentStatus.service.js";
const updateSchema = {
      PaymentStatusID: { type: "string", required: true },
      Name: { type: "string", required: false },
      IsActivated: { type: "boolean", required: false },
    };
export default async function UpdatePaymentStatusController(req, res) {
    const error = ValidateSchema(req.body, updateSchema);
    if (error) return BadRequest(res, error);
    const { PaymentStatusID, Name, IsActivated } = req.body;
    try {
        const result = await UpdatePaymentStatus({ PaymentStatusID, Name, IsActivated });
        if (!result) return NotFound(res, "PaymentStatus not found");
        return Ok(res, "PaymentStatus updated successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}

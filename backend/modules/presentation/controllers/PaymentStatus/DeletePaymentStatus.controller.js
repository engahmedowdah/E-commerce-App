import { Ok, BadRequest, NotFound, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import DeletePaymentStatus from "../../../business/PaymentStatus/DeletePaymentStatus.service.js";
const deleteSchema = {
    PaymentStatusID: { type: "string", required: true },
  };
export default async function DeletePaymentStatusController(req, res) {
    const error = ValidateSchema(req.body, deleteSchema);
    if (error) return BadRequest(res, error);
    const { PaymentStatusID } = req.body;
    try {
        const result = await DeletePaymentStatus({ PaymentStatusID });
        if (!result) return NotFound(res, "PaymentStatus not found");
        return Ok(res, "PaymentStatus deleted successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}

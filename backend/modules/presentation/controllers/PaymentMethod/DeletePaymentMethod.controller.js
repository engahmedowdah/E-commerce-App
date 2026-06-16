import { Ok, BadRequest, NotFound, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import DeletePaymentMethod from "../../../business/PaymentMethod/DeletePaymentMethod.service.js";
const deleteSchema = {
    PaymentMethodID: { type: "string", required: true },
  };
export default async function DeletePaymentMethodController(req, res) {
    const error = ValidateSchema(req.body, deleteSchema);
    if (error) return BadRequest(res, error);
    const { PaymentMethodID } = req.body;
    try {
        const result = await DeletePaymentMethod({ PaymentMethodID });
        if (!result) return NotFound(res, "PaymentMethod not found");
        return Ok(res, "PaymentMethod deleted successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}

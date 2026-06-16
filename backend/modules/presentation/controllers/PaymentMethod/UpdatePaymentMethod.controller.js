import { Ok, BadRequest, NotFound, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import UpdatePaymentMethod from "../../../business/PaymentMethod/UpdatePaymentMethod.service.js";
const updateSchema = {
    PaymentMethodID: { type: "string", required: true },
    Name: { type: "string", required: false },
    IsActivated: { type: "boolean", required: false },
};
export default async function UpdatePaymentMethodController(req, res) {
    const error = ValidateSchema(req.body, updateSchema);
    if (error) return BadRequest(res, error);
    try {
        const { PaymentMethodID, Name, IsActivated } = req.body;
        const result = await UpdatePaymentMethod({ PaymentMethodID, Name, IsActivated });
        if (!result) return NotFound(res, "Payment Method not found");
        return Ok(res, "Payment Method updated successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}

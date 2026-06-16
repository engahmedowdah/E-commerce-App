import { Created, BadRequest, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import CreatePaymentMethod from "../../../business/PaymentMethod/CreatePaymentMethod.service.js";
const createSchema = {
    Name: { type: "string", required: true },
    IsActivated: { type: "boolean", required: false },
};
export default async function CreatePaymentMethodController(req, res) {
    const error = ValidateSchema(req.body, createSchema);
    if (error) return BadRequest(res, error);
    const { Name, IsActivated } = req.body;
    try {
        const result = await CreatePaymentMethod({ Name, IsActivated });
        if (!result) {
            return BadRequest(res, "Failed to create payment method");
        }
        return Created(res, "Payment method created successfully", result);
    } catch (err) {
        return ServerError(res, err.message);
    }
}

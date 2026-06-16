import { Created, BadRequest, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import CreatePaymentStatus from "../../../business/PaymentStatus/CreatePaymentStatus.service.js";
const createSchema = {
    Name: { type: "string", required: true },
    IsActivated: { type: "boolean", required: false },
};
export default async function CreatePaymentStatusController(req, res) {
    const error = ValidateSchema(req.body, createSchema);
    if (error) return BadRequest(res, error);
    const { Name, IsActivated } = req.body;
    try {
        const result = await CreatePaymentStatus({ Name, IsActivated });
        if (!result) {
            return BadRequest(res, "Failed to create payment status");
        }
        return Created(res, "Payment status created successfully", result);
    } catch (err) {
        return ServerError(res, err.message);
    }
}

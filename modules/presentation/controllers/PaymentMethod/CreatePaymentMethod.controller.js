import { Created, BadRequest, ServerError } from "../../../../shared/utils.js";
import CreatePaymentMethod from "../../../business/PaymentMethod/CreatePaymentMethod.service.js";
export default async function CreatePaymentMethodController(req, res) {
    const { IsActive, Name } = req.body;
    if (!Name) {
        return BadRequest(res, "Name is required for payment method creation");
    }
    try {
        const CreatedBy = req.body.AdminId;
        const result = await CreatePaymentMethod({ Name, IsActive, CreatedBy });
        return Created(res, "Payment method created successfully", result);
    } catch (err) {
        return ServerError(res, err.message);
    }
}
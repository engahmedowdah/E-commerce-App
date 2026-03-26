import { Created, BadRequest, ServerError } from "../../../../shared/utils.js";
import CreatePaymentStatus from "../../../business/PaymentStatus/CreatePaymentStatus.service.js";
export default async function CreatePaymentStatusController(req, res) {
    const { Name, IsActive } = req.body;
    if (!Name) {
        return BadRequest(res, "Name is required for payment status creation");
    }
    try {
        const CreatedBy = req.body.AdminId;
        const result = await CreatePaymentStatus({ Name, IsActive, CreatedBy });
        return Created(res, "Payment status created successfully", result);
    } catch (err) {
        return ServerError(res, err.message);
    }
}
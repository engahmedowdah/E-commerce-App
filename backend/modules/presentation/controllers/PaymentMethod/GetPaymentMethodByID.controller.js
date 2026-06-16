import { Ok, BadRequest, NotFound, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import GetPaymentMethodByID from "../../../business/PaymentMethod/GetPaymentMethodByID.service.js";
const getByIDSchema = {
    PaymentMethodID: { type: "string", required: true },
  };
export default async function GetPaymentMethodByIDController(req, res) {
    const error = ValidateSchema(req.body, getByIDSchema);
    if (error) return BadRequest(res, error);
    const { PaymentMethodID } = req.body;
    try {
        const result = await GetPaymentMethodByID({ PaymentMethodID });
        if (!result) return NotFound(res, "PaymentMethod not found");
        return Ok(res, "PaymentMethod fetched successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}

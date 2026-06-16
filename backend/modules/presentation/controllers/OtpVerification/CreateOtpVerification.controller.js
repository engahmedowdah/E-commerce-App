import { Created, BadRequest, ServerError } from "../../../../shared/utils.js";
import CreateOtpVerification from "../../../business/OtpVerification/CreateOtpVerification.service.js";
const createSchema = {
    UserID: { type: "string", required: true },
    ExpiresAt: { type: "string", required: true },
    Otp: { type: "string", required: true },
};
export default async function CreateOtpVerificationController(req, res) {
    const error = ValidateSchema(req.body, createSchema);
    if (error) return BadRequest(res, error);
    const { UserID, ExpiresAt, Otp } = req.body;
    try {
        const result = await CreateOtpVerification({ UserID, ExpiresAt, Otp });
        if (!result) {
            return BadRequest(res, "Failed to create OTP verification");
        }
        return Created(res, "OTP verification created successfully", result);
    } catch (err) {
        return ServerError(res, err.message);
    }
}

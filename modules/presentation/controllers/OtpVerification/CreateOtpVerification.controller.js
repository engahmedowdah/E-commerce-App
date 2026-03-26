import { Created, BadRequest, ServerError } from "../../../../shared/utils.js";
import CreateOtpVerification from "../../../business/OtpVerification/CreateOtpVerification.service.js";
export default async function CreateOtpVerificationController(req, res) {
    const { ExpiresAt, Otp, UserID } = req.body;
    if (!UserID || !Otp || !ExpiresAt) {
        return BadRequest(res, "UserID, Otp, and ExpiresAt are required");
    }
    try {
        const result = await CreateOtpVerification({ UserID, Otp, ExpiresAt });
        return Created(res, "OTP verification created successfully", result);
    } catch (err) {
        return ServerError(res, err.message);
    }
}
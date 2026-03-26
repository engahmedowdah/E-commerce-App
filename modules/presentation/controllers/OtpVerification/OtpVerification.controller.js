import { Ok, ServerError } from "../../../../shared/utils.js";
import OtpVerification from "../../../business/OtpVerification/OtpVerification.service.js";
export default async function OtpVerificationController(req, res) {
    const { Otp, UserID } = req.body;
    if (!UserID || !Otp) {
        return BadRequest(res, "UserID and Otp are required");
    }
    try {
        const result = await OtpVerification({ UserID, Otp });
        if (!result) {
            return ServerError(res, "Failed to verify OTP");
        }
        return Ok(res, "OTP verified successfully", result);
    } catch (err) {
        return ServerError(res, err.message);
    }
}
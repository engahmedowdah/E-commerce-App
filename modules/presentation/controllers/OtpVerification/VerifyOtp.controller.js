import { Ok, BadRequest, Unauthorized, ServerError } from "../../../../shared/utils.js";
import VerifyOtp from "../../../business/OtpVerification/VerifyOtp.service.js";
export default async function VerifyOtpController(req, res) {
    const { Otp, UserID } = req.body;
    if (!UserID || !Otp) {
        return BadRequest(res, "UserID and Otp are required");
    }
    try {
        const result = await VerifyOtp({ UserID, Otp });
        if (!result) {
            return Unauthorized(res, "Invalid or expired OTP");
        }
        return Ok(res, "OTP verified successfully", result);
    } catch (err) {
        return ServerError(res, err.message);
    }
}
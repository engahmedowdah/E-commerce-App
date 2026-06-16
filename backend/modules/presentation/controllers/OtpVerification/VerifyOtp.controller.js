import { Ok, BadRequest, Unauthorized, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import VerifyOtp from "../../../business/OtpVerification/VerifyOtp.service.js";
const verifySchema = {
    UserID: { type: "string", required: true },
    Otp: { type: "string", required: true },
};
export default async function VerifyOtpController(req, res) {
    const error = ValidateSchema(req.body, verifySchema);
    if (error) return BadRequest(res, error);
    const { Otp, UserID } = req.body;
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

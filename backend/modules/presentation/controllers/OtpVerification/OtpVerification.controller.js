import { Ok, ServerError } from "../../../../shared/utils.js";
import OtpVerification from "../../../business/OtpVerification/OtpVerification.service.js";
const verifySchema = {
    UserID: { type: "string", required: true },
    Otp: { type: "string", required: true },
};
export default async function OtpVerificationController(req, res) {
    const error = ValidateSchema(req.body, verifySchema);
    if (error) return BadRequest(res, error);
    const { Otp, UserID } = req.body;
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

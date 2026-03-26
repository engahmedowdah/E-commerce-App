import OtpVerificationModel from "../../data/OtpVerification/OtpVerification.model.js";
const VerifyOtp = async ({ UserID, Otp }) => {
  try {
    if (!UserID || !Otp) throw new Error("Missing required fields");
    const otpVerification = await OtpVerificationModel.findOne({
      UserID,
      Otp,
      ExpiresAt: { $gt: Date.now() },
    });
    if (!otpVerification) throw new Error("OTP verification failed");
    return otpVerification;
  } catch (error) {
    throw "Error verifying OTP";
  }
};
export default VerifyOtp;

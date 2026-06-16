import OtpVerificationModel from "../../data/OtpVerification/OtpVerification.model.js";
const VerifyOtp = async ({ UserID, Otp }) => {
  const otpVerification = await OtpVerificationModel.findOne({
    UserID: UserID,
    Otp: Otp,
    ExpiresAt: { $gt: Date.now() },
  });
  if (!otpVerification) throw new Error("Otp verification not found");
  return otpVerification;
};
export default VerifyOtp;

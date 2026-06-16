import OtpVerificationModel from "../../data/OtpVerification/OtpVerification.model.js";
const CreateOtpVerification = async ({ UserID, Otp }) => {
  const otpVerification = await OtpVerificationModel.create({
    UserID: UserID,
    Otp: Otp,
    ExpiresAt: Date.now() + 10 * 60 * 1000,
    CreatedDate: Date.now(),
  });
  if (!otpVerification) throw new Error("Otp verification not created");
  return otpVerification;
};
export default CreateOtpVerification;

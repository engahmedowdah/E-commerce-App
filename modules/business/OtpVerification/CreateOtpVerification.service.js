import OtpVerificationModel from "../../data/OtpVerification/OtpVerification.model.js";
const CreateOtpVerification = async ({ UserID, Otp, CreatedBy }) => {
  try {
    if (!UserID || !Otp || !CreatedBy) throw new Error("Missing required fields");
    const otpVerification = await OtpVerificationModel.create({
      UserID,
      Otp,
      ExpiresAt: Date.now() + 10 * 60 * 1000,
      CreatedBy,
      CreatedDate: Date.now(),
    });
    return otpVerification;
  } catch (error) {
    throw "Error creating OTP verification";
  }
};
export default CreateOtpVerification;

import OtpVerificationModel from "../../data/OtpVerification/OtpVerification.model.js";
import { NotDeletedFilter } from "../../../shared/utils.js";
const IsOtpVerificationExists = async ({ OtpVerificationID }) => {
  const exists = await OtpVerificationModel.exists({
    _id: OtpVerificationID,
    ...NotDeletedFilter(false),
  });
  if (!exists) throw new Error("Otp verification not found");
  return !!exists;
};
export default IsOtpVerificationExists;

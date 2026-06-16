import mongoose from "mongoose";
const OtpVerificationSchema = new mongoose.Schema({
  Email: {
    type: String,
    required: true,
    lowercase: true
  },
  OtpHash: {
    type: String,
    required: true
  },
  ExpiresAt: {
    type: Date,
    required: true
  },
  Attempts: {
    type: Number,
    default: 0
  },
  IsUsed: {
    type: Boolean,
    default: false
  },
  CreatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  CreatedDate: {
    type: Date,
    default: Date.now,
  },
  UpdatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  UpdatedDate: {
    type: Date,
  },
});
export default mongoose.model("OtpVerification", OtpVerificationSchema);

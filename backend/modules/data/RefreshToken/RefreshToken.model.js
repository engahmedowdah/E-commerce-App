import mongoose from "mongoose";
const RefreshTokenSchema = new mongoose.Schema({
  UserID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  token: {
    type: String,
    required: true
  },
  isRevoked: {
    type: Boolean,
    default: false
  },
  CreatedAt: {
    type: Date,
    default: Date.now
  },
  ExpiresAt: {
    type: Date,
    required: true
  },
  CreatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: false,
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
export default mongoose.model("RefreshToken", RefreshTokenSchema);

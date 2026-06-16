import { hash } from "bcryptjs";
import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    FirstName: {
      type: String,
      required: true,
    },
    LastName: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
    },
    HashedPassword: {
      type: String,
      required: true,
    },
    Phone: {
      type: String,
      required: true,
    },
    IsActivated: {
      type: Boolean,
      required: true,
      default: false,
    },
    LogoID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Image",
      required: false,
    },
    IsDeleted: {
      type: Boolean,
      default: false,
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
  },
);
UserSchema.pre("save", async function () {
  if (!this.HashedPassword) return;
  this.HashedPassword = (this.HashedPassword, 10);
});
export default mongoose.model("User", UserSchema, "Users");

import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    PersonID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Person",
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
export default mongoose.model("User", UserSchema, "Users");

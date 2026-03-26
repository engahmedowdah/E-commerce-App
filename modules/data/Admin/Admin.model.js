import mongoose from "mongoose";
const AdminSchema = new mongoose.Schema(
  {
    UserID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    RoleID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role",
      required: true,
    },
    IsActivated: {
      type: Boolean,
      required: true,
      default: false,
    },
    IsDeleted: {
      type: Boolean,
      default: false,
    },
    CreatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
      required: false,
    },
    CreatedDate: {
      type: Date,
      default: Date.now,
    },
    UpdatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
    },
    UpdatedDate: {
      type: Date,
    },
  },
);
export default mongoose.model("Admin", AdminSchema, "Admins");

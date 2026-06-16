import mongoose from "mongoose";
import { hashPassword, comparePassword } from "../../../shared/utils.js";
const AdminSchema = new mongoose.Schema(
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
      unique: true,
    },
    UserName: {
      type: String,
      required: true,
      unique: true,
    },
    Phone: {
      type: String,
      required: true,
    },
    HashedPassword: {
      type: String,
      required: true,
    },
    RoleID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role",
      required: true,
    },
    ImageID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Image",
      required: false,
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
AdminSchema.pre("save", async function () {
    if (!this.isModified("HashedPassword")) return;
    this.HashedPassword = await hashPassword(this.HashedPassword);
});
AdminSchema.methods.comparePassword = async function (password) {
    return await comparePassword(password, this.HashedPassword);
};
export default mongoose.model("Admin", AdminSchema, "Admins");

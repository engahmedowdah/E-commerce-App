import mongoose from "mongoose";
const RoleSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Permissions: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Permission" }],
    required: true,
  },
  Description: {
    type: String,
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
});
export default mongoose.model("Role", RoleSchema, "Roles");

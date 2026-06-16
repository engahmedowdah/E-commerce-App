import mongoose from "mongoose";
const ImageSchema = new mongoose.Schema({
  Path: {
    type: String,
    required: true,
  },
  FileName: {
    type: String,
    required: true,
  },
  Alt: {
    type: String,
    required: false,
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
export default mongoose.model("Image", ImageSchema, "Images");

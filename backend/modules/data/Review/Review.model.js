import mongoose from "mongoose";
const ReviewSchema = new mongoose.Schema({
  UserID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  ProductID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  Rating: {
    type: Number,
    required: true,
  },
  Comment: {
    type: String,
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
});
export default mongoose.model("Review", ReviewSchema, "Reviews");

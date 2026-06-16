import mongoose from "mongoose";
const PaymentMethodSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
      unique: true,
    },
    IsActivated: {
      type: Boolean,
      default: false,
    },
    IsDeleted: {
      type: Boolean,
      default: false,
    },
    CreatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
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
export default mongoose.model(
  "PaymentMethod",
  PaymentMethodSchema,
  "PaymentMethods",
);

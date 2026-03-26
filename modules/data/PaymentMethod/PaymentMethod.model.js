import mongoose from "mongoose";
const PaymentMethodSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
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
      required: true,
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

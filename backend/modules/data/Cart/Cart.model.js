import mongoose from "mongoose";
const CartSchema = new mongoose.Schema(
  {
    UserID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    Products: [
      {
        ProductID: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        Quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    TotalPrice: {
      type: Number,
      required: true,
      default: 0,
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
export default mongoose.model("Cart", CartSchema, "Carts");

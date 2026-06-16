import mongoose from "mongoose";
const OrderSchema = new mongoose.Schema({
  UserID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  Items: {
    type: Array,
    required: true,
    Items: {
      ProductID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
      Quantity: {
        type: Number,
        required: true,
      },
    },
  },
  AddressID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Address",
    required: true,
  },
  PaymentID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Payment",
    required: true,
  },
  OrderStatusID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "OrderStatus",
    required: true,
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
export default mongoose.model("Order", OrderSchema, "Orders");

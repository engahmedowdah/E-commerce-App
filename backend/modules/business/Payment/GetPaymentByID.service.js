import mongoose from "mongoose";
import PaymentModel from "../../data/Payment/Payment.model.js";
import PaymentMapper from "./PaymentMapper.js";
const GetPaymentByID = async ({ PaymentID }) => {
  if (!mongoose.Types.ObjectId.isValid(PaymentID)) {
    return null;
  }
  const payment = await PaymentModel.findById(PaymentID)
    .populate("UserID")
    .populate("CurrencySymbolID")
    .populate("PaymentMethodID")
    .populate("PaymentStatusID")
    .lean();
  return PaymentMapper(payment);
};
export default GetPaymentByID;

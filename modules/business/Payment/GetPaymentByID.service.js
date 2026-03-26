import PaymentModel from "../../data/Payment/Payment.model.js";
const GetPaymentByID = async ({ PaymentID }) => {
  try {
    if (!PaymentID) throw new Error("Missing required fields");
    const payment = await PaymentModel.findOne({ _id: PaymentID, IsDeleted: false }).populate("OrderID").populate("UserID").populate("PaymentMethodID").populate("PaymentStatusID").populate("CurrencySymbolID");
    if (!payment) throw new Error("Payment not found");
    return payment;
  } catch (error) {
    throw "Error getting payment";
  }
};
export default GetPaymentByID;

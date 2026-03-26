import PaymentModel from "../../data/Payment/Payment.model.js";
const GetAllPayments = async () => {
  try {
    const payments = await PaymentModel.find({ IsDeleted: false }).populate("OrderID").populate("UserID").populate("PaymentMethodID").populate("PaymentStatusID").populate("CurrencySymbolID");
    if (!payments) throw new Error("Payments not found");
    return payments;
  } catch (error) {
    throw "Error getting payments";
  }
};
export default GetAllPayments;

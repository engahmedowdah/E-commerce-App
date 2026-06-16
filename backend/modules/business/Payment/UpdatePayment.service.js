import PaymentModel from "../../data/Payment/Payment.model.js";
import PaymentMapper from "./PaymentMapper.js";
const UpdatePayment = async ({ PaymentID, UserID, Amount, PaymentMethodID, PaymentStatusID, CurrencySymbolID }) => {
    const payment = await PaymentModel.findById(PaymentID);
    if (!payment) throw new Error("Payment not found");
    if (UserID !== undefined) payment.UserID = UserID;
    if (Amount !== undefined) payment.Amount = Amount;
    if (PaymentMethodID !== undefined) payment.PaymentMethodID = PaymentMethodID;
    if (PaymentStatusID !== undefined) payment.PaymentStatusID = PaymentStatusID;
    if (CurrencySymbolID !== undefined) payment.CurrencySymbolID = CurrencySymbolID;
    payment.UpdatedDate = new Date();
    const updatedPayment = await payment.save();
    const populated = await PaymentModel.findById(updatedPayment._id)
        .populate("UserID")
        .populate("CurrencySymbolID")
        .populate("PaymentMethodID")
        .populate("PaymentStatusID")
        .lean();
    return PaymentMapper(populated);
};
export default UpdatePayment;

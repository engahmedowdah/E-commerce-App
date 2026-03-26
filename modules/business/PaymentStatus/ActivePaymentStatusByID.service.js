import PaymentStatusModel from "../../data/PaymentStatus/PaymentStatus.model.js";
const ActivePaymentStatusByID = async ({ PaymentStatusID, UpdatedBy }) => {
  try {
    if (!PaymentStatusID || !UpdatedBy) throw new Error("Missing required fields");
    const paymentStatus = await PaymentStatusModel.findById(PaymentStatusID);
    if (!paymentStatus) throw new Error("Payment status not found");

    paymentStatus.IsActivated = !paymentStatus.IsActivated;
    paymentStatus.UpdatedBy = UpdatedBy;
    paymentStatus.UpdatedDate = Date.now();

    await paymentStatus.save();
    return paymentStatus;
  } catch (error) {
    throw "Error activating payment status";
  }
};
export default ActivePaymentStatusByID;

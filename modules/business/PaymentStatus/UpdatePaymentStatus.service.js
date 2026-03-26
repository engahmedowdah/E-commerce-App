import PaymentStatusModel from "../../data/PaymentStatus/PaymentStatus.model.js";
const UpdatePaymentStatus = async ({ PaymentStatusID, Name, UpdatedBy }) => {
    try {
        if (!PaymentStatusID || !Name || !UpdatedBy) throw new Error("Missing required fields");
        const paymentStatus = await PaymentStatusModel.findById(PaymentStatusID);
        if (!paymentStatus) throw new Error("Payment status not found");

        paymentStatus.Name = Name;
        paymentStatus.UpdatedBy = UpdatedBy;
        paymentStatus.UpdatedDate = Date.now();

        await paymentStatus.save();
        return paymentStatus;
    } catch (error) {
        throw "Error updating payment status";
    }
};
export default UpdatePaymentStatus;

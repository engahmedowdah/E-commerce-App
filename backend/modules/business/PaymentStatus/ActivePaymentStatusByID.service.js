import PaymentStatusModel from "../../data/PaymentStatus/PaymentStatus.model.js";
const ActivePaymentStatusByID = async ({ PaymentStatusID }) => {
    const paymentStatus = await PaymentStatusModel.findOne({ _id: PaymentStatusID, IsDeleted: false });
    if (!paymentStatus) throw new Error("Payment status not found");
    const updatedDoc = await PaymentStatusModel.findOneAndUpdate(
        { _id: PaymentStatusID, IsDeleted: false },
        [{ $set: { IsActivated: { $not: "$IsActivated" } } }],
        { new: true, updatePipeline: true }
    );
    if (!updatedDoc) throw new Error("Payment status not updated");
    return updatedDoc;
};
export default ActivePaymentStatusByID;

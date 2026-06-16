import PaymentMethodModel from "../../data/PaymentMethod/PaymentMethod.model.js";
const ActivePaymentMethodByID = async ({ PaymentMethodID }) => {
    const paymentMethod = await PaymentMethodModel.findOne({ _id: PaymentMethodID, IsDeleted: false });
    if (!paymentMethod) throw new Error("Payment method not found");
    const updatedDoc = await PaymentMethodModel.findOneAndUpdate(
        { _id: PaymentMethodID, IsDeleted: false },
        [{ $set: { IsActivated: { $not: "$IsActivated" } } }],
        { new: true, updatePipeline: true }
    );
    if (!updatedDoc) throw new Error("Payment method not updated");
    return updatedDoc;
};
export default ActivePaymentMethodByID;

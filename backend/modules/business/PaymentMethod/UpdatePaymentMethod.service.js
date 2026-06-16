import PaymentMethodModel from "../../data/PaymentMethod/PaymentMethod.model.js";
const UpdatePaymentMethod = async ({ PaymentMethodID, Name, IsActivated }) => {
    const paymentMethod = await PaymentMethodModel.findOne({ _id: PaymentMethodID, IsDeleted: false });
    if (!paymentMethod) throw new Error("Payment method not found");
    if (Name && Name !== paymentMethod.Name) {
        const existingPaymentMethod = await PaymentMethodModel.findOne({ Name });
        if (existingPaymentMethod) throw new Error("Payment method already exists");
    }
    const nameToUpdate = Name !== undefined ? Name : paymentMethod.Name;
    const updatedPaymentMethod = await PaymentMethodModel.findByIdAndUpdate(PaymentMethodID, {
        Name: nameToUpdate,
        IsActivated: IsActivated,
        UpdatedDate: Date.now()
    }, { new: true });
    if (!updatedPaymentMethod) throw new Error("Payment method not updated");
    return updatedPaymentMethod;
};
export default UpdatePaymentMethod;

import PaymentStatusModel from "../../data/PaymentStatus/PaymentStatus.model.js";
const UpdatePaymentStatus = async ({ PaymentStatusID, Name, IsActivated }) => {
    const paymentStatus = await PaymentStatusModel.findOne({ _id: PaymentStatusID, IsDeleted: false });
    if (!paymentStatus) throw new Error("Payment status not found");
    if (Name && Name !== paymentStatus.Name) {
        const existingPaymentStatus = await PaymentStatusModel.findOne({ Name, IsDeleted: false });
        if (existingPaymentStatus) throw new Error("Payment status already exists");
    }
    const nameToUpdate = Name !== undefined ? Name : paymentStatus.Name;
    const isActivatedToUpdate = IsActivated !== undefined ? IsActivated : paymentStatus.IsActivated;
    const updatedPaymentStatus = await PaymentStatusModel.findByIdAndUpdate(PaymentStatusID, {
        Name: nameToUpdate,
        IsActivated: isActivatedToUpdate,
        UpdatedDate: Date.now()
    }, { new: true });
    if (!updatedPaymentStatus) throw new Error("Payment status not updated");
    return updatedPaymentStatus;
};
export default UpdatePaymentStatus;

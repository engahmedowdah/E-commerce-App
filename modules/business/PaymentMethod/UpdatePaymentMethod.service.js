import PaymentMethodModel from "../../data/PaymentMethod/PaymentMethod.model.js";
const UpdatePaymentMethod = async ({ PaymentMethodID, Name, UpdatedBy }) => {
    try {
        if (!PaymentMethodID || !Name || !UpdatedBy) throw new Error("Missing required fields");
        const paymentMethod = await PaymentMethodModel.findById(PaymentMethodID);
        if (!paymentMethod) throw new Error("Payment method not found");

        paymentMethod.Name = Name;
        paymentMethod.UpdatedBy = UpdatedBy;
        paymentMethod.UpdatedDate = Date.now();

        await paymentMethod.save();
        return paymentMethod;
    } catch (error) {
        throw "Error updating payment method";
    }
};
export default UpdatePaymentMethod;

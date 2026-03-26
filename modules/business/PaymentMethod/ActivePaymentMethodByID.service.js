import PaymentMethodModel from "../../data/PaymentMethod/PaymentMethod.model.js";
const ActivePaymentMethodByID = async ({ PaymentMethodID, UpdatedBy }) => {
    try {
        if (!PaymentMethodID || !UpdatedBy) throw new Error("Missing required fields");
        const paymentMethod = await PaymentMethodModel.findById(PaymentMethodID);

        if (!paymentMethod) throw new Error("Payment method not found");

        paymentMethod.IsActivated = !paymentMethod.IsActivated;
        paymentMethod.UpdatedBy = UpdatedBy;
        paymentMethod.UpdatedDate = Date.now();

        await paymentMethod.save();

        return paymentMethod;
    } catch (error) {
        throw "Error activating payment method";
    }
};
export default ActivePaymentMethodByID;

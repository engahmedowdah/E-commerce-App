import PaymentMethodModel from "../../data/PaymentMethod/PaymentMethod.model.js";
const GetPaymentMethodByID = async ({ PaymentMethodID, includeDeleted = false }) => {
    try {
        if (!PaymentMethodID) throw new Error("Missing required fields");
        const paymentMethod = await PaymentMethodModel.findOne({ _id: PaymentMethodID, ...NotDeletedFilter(includeDeleted) });
        if (!paymentMethod) throw new Error("Payment method not found");
        return paymentMethod;
    } catch (error) {
        throw "Error getting payment method";
    }
};
export default GetPaymentMethodByID;

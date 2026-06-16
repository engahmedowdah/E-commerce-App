import PaymentModel from "../../data/Payment/Payment.model.js";
const CreatePayment = async ({ UserID, Amount, PaymentMethodID, PaymentStatusID, CurrencySymbolID }) => {
    const payment = await PaymentModel.create({
        UserID: UserID,
        Amount: Amount,
        PaymentMethodID: PaymentMethodID,
        PaymentStatusID: PaymentStatusID,
        CurrencySymbolID: CurrencySymbolID,
        CreatedDate: new Date(),
    });
    if (!payment) throw new Error("Payment not created");
    return payment;
};
export default CreatePayment;

import mongoose from "mongoose";
import PaymentModel from "../../data/Payment/Payment.model.js";

const CreatePayment = async ({ OrderID, UserID, Amount, PaymentMethodID, PaymentStatusID, CurrencySymbolID, CreatedBy }) => {
    try {
        if (!OrderID || !UserID || !PaymentMethodID || !Amount || !PaymentStatusID || !CurrencySymbolID || !CreatedBy) throw new Error("Missing required fields");
        const payment = await PaymentModel.create({
            OrderID,
            UserID,
            Amount,
            PaymentMethodID,
            PaymentStatusID,
            CurrencySymbolID,
            CreatedBy,
            CreatedDate: new Date(),
        });

        await payment.populate([
            { path: "UserID" },
            { path: "PaymentMethodID" },
            { path: "PaymentStatusID" },
            { path: "CurrencySymbolID" }
        ]);

        return payment;
    } catch (error) {
        throw "Error creating payment";
    }
};

export default CreatePayment;

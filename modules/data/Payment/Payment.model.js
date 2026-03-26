import mongoose from "mongoose";
const PaymentSchema = new mongoose.Schema(
    {
        UserID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        Amount: {
            type: Number,
            required: true,
        },
        PaymentMethodID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "PaymentMethod",
            required: true,
        },
        PaymentStatusID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "PaymentStatus",
            required: true,
        },
        CurrencySymbolID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "CurrencySymbol",
            required: true,
        },
        CreatedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        CreatedDate: {
            type: Date,
            default: Date.now,
        },
        UpdatedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        UpdatedDate: {
            type: Date,
        },
    },
);
export default mongoose.model("Payment", PaymentSchema, "Payments");

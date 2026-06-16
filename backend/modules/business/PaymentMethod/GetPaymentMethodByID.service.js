import mongoose from "mongoose";
import PaymentMethodModel from "../../data/PaymentMethod/PaymentMethod.model.js";
import PaymentMethodMapper from "./PaymentMethodMapper.js";
const GetPaymentMethodByID = async ({ PaymentMethodID }) => {
    if (!mongoose.Types.ObjectId.isValid(PaymentMethodID)) {
        return null;
    }
    const paymentMethod = await PaymentMethodModel.findOne({ _id: PaymentMethodID, IsDeleted: false }).lean();
    return PaymentMethodMapper(paymentMethod);
};
export default GetPaymentMethodByID;

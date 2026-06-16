import PaymentMethodModel from "../../data/PaymentMethod/PaymentMethod.model.js";
import { SoftDeleteById } from "../../../shared/dbUtils.js";
const DeletePaymentMethod = async ({ PaymentMethodID }) => {
    const paymentMethod = await PaymentMethodModel.findOne({ _id: PaymentMethodID, IsDeleted: false });
    if (!paymentMethod) throw new Error("Payment method not found");
    return await SoftDeleteById(PaymentMethodModel, PaymentMethodID);
};
export default DeletePaymentMethod;

import PaymentStatusModel from "../../data/PaymentStatus/PaymentStatus.model.js";
import { SoftDeleteById } from "../../../shared/dbUtils.js";
const DeletePaymentStatus = async ({ PaymentStatusID }) => {
    const paymentStatus = await PaymentStatusModel.findOne({ _id: PaymentStatusID, IsDeleted: false });
    if (!paymentStatus) throw new Error("Payment status not found");
    return await SoftDeleteById(PaymentStatusModel, PaymentStatusID);
};
export default DeletePaymentStatus;

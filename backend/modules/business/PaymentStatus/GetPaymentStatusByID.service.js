import PaymentStatusModel from "../../data/PaymentStatus/PaymentStatus.model.js";
import PaymentStatusMapper from "./PaymentStatusMapper.js";
const GetPaymentStatusByID = async ({ PaymentStatusID }) => {
    const paymentStatus = await PaymentStatusModel.findOne({ _id: PaymentStatusID, IsDeleted: false }).lean();
    return PaymentStatusMapper(paymentStatus);
};
export default GetPaymentStatusByID;

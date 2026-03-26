import { NotDeletedFilter } from "../../../shared/utils.js";
import PaymentStatusModel from "../../data/PaymentStatus/PaymentStatus.model.js";
const GetPaymentStatusByID = async ({ PaymentStatusID, includeDeleted = false }) => {
    try {
        if (!PaymentStatusID) throw new Error("Missing required fields");
        const paymentStatus = await PaymentStatusModel.findOne({ _id: PaymentStatusID, ...NotDeletedFilter(includeDeleted) });
        if (!paymentStatus) throw new Error("Payment status not found");
        return paymentStatus;
    } catch (error) {
        throw "Error getting payment status";
    }
};
export default GetPaymentStatusByID;

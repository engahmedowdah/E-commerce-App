import { NotDeletedFilter } from "../../../shared/utils.js";
import PaymentStatusModel from "../../data/PaymentStatus/PaymentStatus.model.js";
const GetAllPaymentStatuses = async ({ includeDeleted = false }) => {
    try {
        const paymentStatuses = await PaymentStatusModel.find(NotDeletedFilter(includeDeleted));

        if (!paymentStatuses) throw new Error("Payment statuses not found");

        return paymentStatuses;
    } catch (error) {
        throw "Error getting payment statuses";
    }
};
export default GetAllPaymentStatuses;      
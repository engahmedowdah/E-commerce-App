import { NotDeletedFilter } from "../../../shared/utils.js";
import PaymentMethodModel from "../../data/PaymentMethod/PaymentMethod.model.js";
const GetAllPaymentMethods = async ({ includeDeleted = false }) => {
    try {
        const paymentMethods = await PaymentMethodModel.find({ ...NotDeletedFilter(includeDeleted) });
        if (!paymentMethods) throw new Error("Payment methods not found");
        return paymentMethods;
    } catch (error) {
        console.error("GetAllPaymentMethods Error:", error.message);
        throw error;
    }
};
export default GetAllPaymentMethods;

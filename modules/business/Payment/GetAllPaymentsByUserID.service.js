import { NotDeletedFilter } from "../../../shared/utils.js";
import PaymentModel from "../../data/Payment/Payment.model.js";

const GetAllPaymentsByUserID = async (UserID, { includeDeleted = false }) => {
  try {
    const payments = await PaymentModel.find({
      UserID,
      ...NotDeletedFilter(includeDeleted),
    });

    await Promise.all([
      payments.populate("UserID"),
      payments.populate("PaymentMethodID"),
      payments.populate("PaymentStatusID"),
      payments.populate("CurrencySymbolID")
    ]);

    return payments;
  } catch (error) {
    throw "Error getting all payments by UserID";
  }
};

export default GetAllPaymentsByUserID;

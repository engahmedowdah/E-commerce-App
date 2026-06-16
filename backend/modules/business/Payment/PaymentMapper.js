import UserMapper from "../User/UserMapper.js";
import PaymentMethodMapper from "../PaymentMethod/PaymentMethodMapper.js";
import PaymentStatusMapper from "../PaymentStatus/PaymentStatusMapper.js";
const PaymentMapper = (payment) => {
  if (!payment) return null;
  const paymentObj = typeof payment.toObject === "function" ? payment.toObject() : payment;
  const {
    CreatedBy,
    UpdatedBy,
    __v,
    UserID,
    PaymentMethodID,
    PaymentStatusID,
    CurrencySymbolID,
    ...paymentRest
  } = paymentObj;
  const mapped = {
    ...paymentRest,
  };
  if (UserID && typeof UserID === "object") {
    mapped.User = UserMapper(UserID);
    mapped.UserID = UserID._id.toString();
  } else if (UserID) {
    mapped.UserID = UserID.toString();
  }
  if (PaymentMethodID && typeof PaymentMethodID === "object") {
    mapped.PaymentMethod = PaymentMethodMapper(PaymentMethodID);
    mapped.PaymentMethodID = PaymentMethodID._id.toString();
  } else if (PaymentMethodID) {
    mapped.PaymentMethodID = PaymentMethodID.toString();
  }
  if (PaymentStatusID && typeof PaymentStatusID === "object") {
    mapped.PaymentStatus = PaymentStatusMapper(PaymentStatusID);
    mapped.PaymentStatusID = PaymentStatusID._id.toString();
  } else if (PaymentStatusID) {
    mapped.PaymentStatusID = PaymentStatusID.toString();
  }    
  if (CurrencySymbolID && typeof CurrencySymbolID === "object") {
    mapped.CurrencySymbol = CurrencySymbolID.CurrencySymbol;
    mapped.CurrencySymbolID = CurrencySymbolID._id.toString();
  } else if (CurrencySymbolID) {
    mapped.CurrencySymbolID = CurrencySymbolID.toString();
  }
  return mapped;
};
export default PaymentMapper;

const PaymentStatusMapper = (status) => {
  if (!status) return null;
  const statusObj = typeof status.toObject === "function" ? status.toObject() : status;
  const {
    IsDeleted,
    CreatedBy,
    UpdatedBy,
    UpdatedDate,
    __v,
    ...statusRest
  } = statusObj;
  return statusRest;
};
export default PaymentStatusMapper;

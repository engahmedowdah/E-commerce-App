const PaymentMethodMapper = (method) => {
  if (!method) return null;
  const methodObj = typeof method.toObject === "function" ? method.toObject() : method;
  const {
    IsDeleted,
    CreatedBy,
    UpdatedBy,
    UpdatedDate,
    __v,
    ...methodRest
  } = methodObj;
  return methodRest;
};
export default PaymentMethodMapper;

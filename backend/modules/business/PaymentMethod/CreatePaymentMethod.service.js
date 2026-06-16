import PaymentMethodModel from "../../data/PaymentMethod/PaymentMethod.model.js";
const CreatePaymentMethod = async ({ Name, IsActivated }) => {
  const existingPaymentMethod = await PaymentMethodModel.findOne({ Name });
  if (existingPaymentMethod) {
    throw new Error("Payment method already exists");
  }
  const paymentMethod = await PaymentMethodModel.create({
    Name: Name,
    IsActivated: IsActivated || false,
    CreatedDate: new Date(),
  });
  if (!paymentMethod) throw new Error("Payment method not created");
  return paymentMethod;
};
export default CreatePaymentMethod;

import PaymentMethodModel from "../../data/PaymentMethod/PaymentMethod.model.js";
const CreatePaymentMethod = async ({ Name, IsActivated, CreatedBy }) => {
  try {
    if (!Name || !CreatedBy) throw new Error("Missing required fields");
    const paymentMethod = await PaymentMethodModel.create({
      Name,
      IsActivated: IsActivated || false,
      CreatedBy,
      CreatedDate: Date.now(),
    });
    return paymentMethod;
  } catch (error) {
    throw "Error creating payment method";
  }
};
export default CreatePaymentMethod;

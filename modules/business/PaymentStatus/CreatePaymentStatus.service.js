import PaymentStatusModel from "../../data/PaymentStatus/PaymentStatus.model.js";
const CreatePaymentStatus = async ({ Name, IsActivated, CreatedBy }) => {
  try {
    if (!Name || !CreatedBy) throw new Error("Missing required fields");
    const paymentStatus = await PaymentStatusModel.create({
      Name,
      IsActivated: IsActivated || false,
      CreatedBy,
      CreatedDate: Date.now(),
    });
    return paymentStatus;
  } catch (error) {
    throw "Error creating payment status";
  }
};
export default CreatePaymentStatus;

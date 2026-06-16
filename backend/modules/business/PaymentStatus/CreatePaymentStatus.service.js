import PaymentStatusModel from "../../data/PaymentStatus/PaymentStatus.model.js";
const CreatePaymentStatus = async ({ Name, IsActivated }) => {
  const exists = await PaymentStatusModel.findOne({ Name, IsDeleted: false });
  if (exists) throw new Error("Payment status already exists");
  const paymentStatus = await PaymentStatusModel.create({
    Name: Name,
    IsActivated: IsActivated || false,
    CreatedDate: Date.now(),
  });
  if (!paymentStatus) throw new Error("Payment status not created");
  return paymentStatus;
};
export default CreatePaymentStatus;

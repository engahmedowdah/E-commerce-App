import "./CreatePaymentMethodPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { IPaymentMethod } from "../../../../shared/types/PaymentMethods/IPaymentMethod.types";
import { CreatePaymentMethod } from "../..";
import { useToast, SuccessModal } from "../../../../shared/components";
import PaymentMethodForm from "../../components/PaymentMethodForm/PaymentMethodForm";
function CreatePaymentMethodPage() {
  const navigate = useNavigate();
  const { error } = useToast();
  const [loading, setLoading] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const handleSubmit = async (data: IPaymentMethod) => {
    setLoading(true);
    try {
      await CreatePaymentMethod({ paymentMethod: data });
      setIsSuccessModalOpen(true);
    } catch (err: unknown) {
      error("Error", (err as { message?: string }).message || "Failed to create paymentmethod");
    } finally {
      setLoading(false);
    }
  };
  const handleCancel = () => {
    navigate("/payment-methods");
  };
  const handleSuccessClose = () => {
    setIsSuccessModalOpen(false);
    navigate("/payment-methods");
  };
  return (
    <div className="w-full p-4 md:p-8 bg-gray-50/20 min-h-screen">
      <PaymentMethodForm
        mode="create"
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        loading={loading}
      />
      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={handleSuccessClose}
        title="Payment Method Created"
        message="Payment method created successfully."
        buttonText="Go to Payment Methods"
      />
    </div>
  );
}
export default CreatePaymentMethodPage;

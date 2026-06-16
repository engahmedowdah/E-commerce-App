import "./CreatePaymentStatusPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { IPaymentStatus } from "../../../../shared/types/PaymentStatuses/IPaymentStatus.types";
import { CreatePaymentStatus } from "../..";
import { useToast, SuccessModal } from "../../../../shared/components";
import { PaymentStatusForm } from "../../components";
function CreatePaymentStatusPage() {
  const navigate = useNavigate();
  const { error } = useToast();
  const [loading, setLoading] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const handleSubmit = async (data: IPaymentStatus) => {
    setLoading(true);
    try {
      await CreatePaymentStatus({ paymentStatus: data });
      setIsSuccessModalOpen(true);
    } catch (err: unknown) {
      error("Error", (err as { message?: string }).message || "Failed to create payment status");
    } finally {
      setLoading(false);
    }
  };
  const handleCancel = () => navigate("/payment-statuses");
  const handleSuccessClose = () => {
    setIsSuccessModalOpen(false);
    navigate("/payment-statuses");
  };
  return (
    <div className="w-full p-4 md:p-8 bg-gray-50/20 min-h-screen">
      <PaymentStatusForm
        mode="create"
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        loading={loading}
      />
      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={handleSuccessClose}
        title="Payment Status Created"
        message="Payment Status created successfully"
        buttonText="Go to Payment Statuses"
      />
    </div>
  );
}
export default CreatePaymentStatusPage;

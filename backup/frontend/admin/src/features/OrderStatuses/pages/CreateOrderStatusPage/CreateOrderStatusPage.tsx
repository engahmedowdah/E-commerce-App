import "./CreateOrderStatusPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { IOrderStatus } from "../../../../shared/types/OrderStatuses/IOrderStatus.types";
import { CreateOrderStatus } from "../..";
import { useToast, SuccessModal } from "../../../../shared/components";
import { OrderStatusForm } from "../../components";
function CreateOrderStatusPage() {
  const navigate = useNavigate();
  const { error } = useToast();
  const [loading, setLoading] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const handleSubmit = async (data: IOrderStatus) => {
    setLoading(true);
    try {
      await CreateOrderStatus({ orderStatus: data });
      setIsSuccessModalOpen(true);
    } catch (err: unknown) {
      error("Error", (err as { message?: string }).message || "Failed to create orderstatus");
    } finally {
      setLoading(false);
    }
  };
  const handleCancel = () => navigate("/order-statuses");
  const handleSuccessClose = () => {
    setIsSuccessModalOpen(false);
    navigate("/order-statuses");
  };
  return (
    <div className="w-full p-4 md:p-8 bg-gray-50/20 min-h-screen">
      <OrderStatusForm
        mode="create"
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        loading={loading}
      />
      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={handleSuccessClose}
        title="OrderStatus Created"
        message="OrderStatus created successfully"
        buttonText="Go to OrderStatuses"
      />
    </div>
  );
}
export default CreateOrderStatusPage;

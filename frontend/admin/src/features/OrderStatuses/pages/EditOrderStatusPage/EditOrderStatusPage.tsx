import "./EditOrderStatusPage.css";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import type { IOrderStatus } from "../../../../shared/types/OrderStatuses/IOrderStatus.types";
import { GetOrderStatusByID, UpdateOrderStatus } from "../../../../business/services";
import { useToast } from "../../../../shared/components";
import { OrderStatusForm } from "../../components";
function EditOrderStatusPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { success, error } = useToast();
  const [orderstatus, setOrderStatus] = useState<IOrderStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  useEffect(() => {
    if (id) {
      GetOrderStatusByID({ OrderStatusID: id })
        .then((res) => {
          setOrderStatus(res);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  }, [id]);
  const handleSubmit = async (data: IOrderStatus) => {
    if (!id) return;
    setSaving(true);
    try {
      await UpdateOrderStatus({ OrderStatusID: id, OrderStatus: data });
      success("Success", "Order Status updated successfully");
      navigate("/order-statuses");
    } catch (err: unknown) {
      error("Error", (err as { message?: string }).message || "Failed to update order status");
    } finally {
      setSaving(false);
    }
  };
  const handleCancel = () => navigate("/order-statuses");
  if (loading) {
    return (
      <div className="w-full h-[60vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900"></div>
      </div>
    );
  }
  if (!orderstatus) {
    return (
      <div className="p-8 text-center text-red-500 font-medium bg-red-50 rounded-xl m-8">
        Order Status not found
      </div>
    );
  }
  return (
    <div className="w-full p-4 md:p-8 bg-gray-50/20 min-h-screen">
      <OrderStatusForm
        mode="edit"
        initialData={orderstatus}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        loading={saving}
      />
    </div>
  );
}
export default EditOrderStatusPage;

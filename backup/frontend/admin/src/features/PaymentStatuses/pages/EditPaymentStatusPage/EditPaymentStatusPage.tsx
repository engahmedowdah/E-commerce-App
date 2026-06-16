import "./EditPaymentStatusPage.css";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import type { IPaymentStatus } from "../../../../shared/types/PaymentStatuses/IPaymentStatus.types";
import { GetPaymentStatusByID, UpdatePaymentStatus } from "../../../../business/services";
import { SuccessModal, useToast } from "../../../../shared/components";
import { PaymentStatusForm } from "../../components";
function EditPaymentStatusPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { success, error } = useToast();
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [paymentstatus, setPaymentStatus] = useState<IPaymentStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  useEffect(() => {
    if (id) {
      GetPaymentStatusByID({ PaymentStatusID: id })
        .then((res) => {
          setPaymentStatus(res);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  }, [id]);
  const handleSubmit = async (data: IPaymentStatus) => {
    if (!id) return;
    setSaving(true);
    try {
      await UpdatePaymentStatus({ PaymentStatusID: id, paymentStatus: data });
      success("Success", "PaymentStatus updated successfully");
      setIsSuccessOpen(true);
    } catch (err: unknown) {
      error("Error", (err as { message?: string }).message || "Failed to update payment status");
    } finally {
      setSaving(false);
    }
  };
  const handleCancel = () => navigate("/payment-statuses");
  if (loading) {
    return (
      <div className="w-full h-[60vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900"></div>
      </div>
    );
  }
  if (!paymentstatus) {
    return (
      <div className="p-8 text-center text-red-500 font-medium bg-red-50 rounded-xl m-8">
        Payment status not found
      </div>
    );
  }
  return (
    <div className="w-full p-4 md:p-8 bg-gray-50/20 min-h-screen">
      <PaymentStatusForm
        mode="edit"
        initialData={paymentstatus}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        loading={saving}
      />
      <SuccessModal
        isOpen={isSuccessOpen}
        onClose={() => { setIsSuccessOpen(false); handleCancel(); }}
        title="Payment Status Updated"
        message="Payment Status updated successfully"
        buttonText="Go to Payment Statuses"
      />
    </div>
  );
}
export default EditPaymentStatusPage;

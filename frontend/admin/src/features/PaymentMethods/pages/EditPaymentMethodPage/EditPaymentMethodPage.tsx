import "./EditPaymentMethodPage.css";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import type { IPaymentMethod } from "../../../../shared/types/PaymentMethods/IPaymentMethod.types";
import { GetPaymentMethodByID, UpdatePaymentMethod } from "../../../../business/services";
import { SuccessModal, useToast } from "../../../../shared/components";
import PaymentMethodForm from "../../components/PaymentMethodForm/PaymentMethodForm";
function EditPaymentMethodPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { success } = useToast();
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [paymentmethod, setPaymentMethod] = useState<IPaymentMethod | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  useEffect(() => {
    if (id) {
      GetPaymentMethodByID({ PaymentMethodID: id })
        .then((res) => {
          setPaymentMethod(res);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  }, [id]);
  const handleSubmit = async (data: IPaymentMethod) => {
    if (!id) return;
    setSaving(true);
    try {
      await UpdatePaymentMethod({ PaymentMethodID: id, paymentMethod: data });
      success("Success", "PaymentMethod updated successfully");
      setIsSuccessOpen(true);
    } catch (err) {
    } finally {
      setSaving(false);
    }
  };
  const handleCancel = () => {
    navigate("/payment-methods");
  };
  if (loading) return (
    <div className="w-full h-[60vh] flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900"></div>
    </div>
  );
  if (!paymentmethod) return (
    <div className="p-8 text-center text-red-500 font-medium bg-red-50 rounded-xl m-8">
      PaymentMethod not found
    </div>
  );
  return (
    <div className="w-full p-4 md:p-8 bg-gray-50/20 min-h-screen">
      <PaymentMethodForm
        mode="edit"
        initialData={paymentmethod}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        loading={saving}
      />
      <SuccessModal
        isOpen={isSuccessOpen}
        onClose={() => { setIsSuccessOpen(false); handleCancel(); }}
        title="Payment Method Updated"
        message="Payment method updated successfully."
        buttonText="Go to Payment Methods"
      />
    </div>
  );
}
export default EditPaymentMethodPage;

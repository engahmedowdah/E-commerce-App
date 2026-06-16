import "./EditPaymentPage.css";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import type { IPayment } from "../../../../shared/types/Payments/IPayment.types";
import type { IPaymentMethod } from "../../../../shared/types/PaymentMethods/IPaymentMethod.types";
import type { IPaymentStatus } from "../../../../shared/types/PaymentStatuses/IPaymentStatus.types";
import { GetPaymentByID, UpdatePayment, GetAllPaymentMethods, GetAllPaymentStatuses } from "../../../../business/services";
import { SuccessModal, useToast } from "../../../../shared/components";
function EditPaymentPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { success, error } = useToast();
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [payment, setPayment] = useState<IPayment | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [methods, setMethods] = useState<IPaymentMethod[]>([]);
  const [statuses, setStatuses] = useState<IPaymentStatus[]>([]);
  const [formData, setFormData] = useState({
    Amount: 0,
    PaymentMethodID: "",
    PaymentStatusID: "",
  });
  useEffect(() => {
    if (id) {
      setLoading(true);
      Promise.all([
        GetPaymentByID({ PaymentID: id }),
        GetAllPaymentMethods({ page: 1, limit: 1000 }),
        GetAllPaymentStatuses({ page: 1, limit: 1000 })
      ])
        .then(([paymentData, methodData, statusData]) => {
          setPayment(paymentData);
          setMethods(methodData.data || []);
          setStatuses(statusData.data || []);
          setFormData({
            Amount: paymentData.Amount || 0,
            PaymentMethodID: paymentData.PaymentMethodID || "",
            PaymentStatusID: paymentData.PaymentStatusID || "",
          });
          setLoading(false);
        })
        .catch(() => {
          error("Error", "Failed to load payment data");
          setLoading(false);
        });
    }
  }, [id, error]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "Amount" ? parseFloat(value) || 0 : value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!id) return;
    setSaving(true);
    try {
      await UpdatePayment({ PaymentID: id, payment: formData });
      success("Success", "Payment updated successfully");
      setIsSuccessOpen(true);
    } catch {
      error("Error", "Failed to update payment");
    } finally {
      setSaving(false);
    }
  };
  const handleCancel = () => navigate(`/payments/${id}`);
  if (loading) {
    return (
      <div className="w-full h-[60vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900"></div>
      </div>
    );
  }
  if (!payment) {
    return (
      <div className="p-8 text-center text-red-500 font-medium bg-red-50 rounded-xl m-8">
        Payment not found
      </div>
    );
  }
  return (
    <div className="w-full p-4 md:p-8 bg-gray-50/20 min-h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full max-w-6xl mx-auto">
        <div className="flex justify-between items-end pb-2">
          <div>
            <div className="flex items-center gap-2 text-sm text-on-surface-variant mb-3">
              <Link to="/payments" className="flex items-center gap-1 hover:text-primary transition-colors hover-translate-y">
                <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                <span className="font-medium">Payments</span>
              </Link>
              <span className="material-symbols-outlined text-[18px]">chevron_right</span>
              <span className="text-on-surface font-semibold">Update Payment</span>
            </div>
            <h1 className="text-[38px] font-bold text-gray-900 mb-3 tracking-tight">Edit Payment</h1>
            <p className="text-[15px] text-gray-600 max-w-xl leading-relaxed">Update transaction amount, payment status, or payment method details.</p>
          </div>
          <div className="flex items-center gap-3">
            <button type="button" onClick={handleCancel} className="px-6 py-2.5 rounded-lg bg-gray-200/60 text-gray-800 font-bold text-sm hover:bg-gray-200 transition-colors">Cancel</button>
            <button type="submit" disabled={saving} className="px-6 py-2.5 rounded-lg bg-[#111827] text-white font-bold text-sm hover:bg-black transition-colors flex items-center gap-2 shadow-sm">
              {saving && <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>}
              Save Changes
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8 flex flex-col gap-6">
            <div className="bg-white p-8 rounded-[20px] shadow-sm border border-gray-100">
              <h3 className="text-[17px] font-bold text-gray-900 mb-6">Customer Information</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] text-gray-500 tracking-widest uppercase font-bold mb-1.5">Customer Name</label>
                  <div className="text-[15px] font-medium text-gray-900">
                    {payment.User ? `${payment.User.FirstName} ${payment.User.LastName}` : "Guest User"}
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] text-gray-500 tracking-widest uppercase font-bold mb-1.5">Email Address</label>
                  <div className="text-[15px] font-medium text-gray-900">{payment.User?.Email || "N/A"}</div>
                </div>
                <div className="col-span-2">
                  <label className="block text-[11px] text-gray-500 tracking-widest uppercase font-bold mb-1.5">Created Date</label>
                  <div className="text-[15px] font-medium text-gray-900">
                    {payment.CreatedDate ? new Date(payment.CreatedDate).toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' }) : 'Unknown'}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-[20px] shadow-sm border border-gray-100">
              <h3 className="text-[17px] font-bold text-gray-900 mb-6">Transaction Info</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] text-gray-500 tracking-widest uppercase font-bold mb-3">Amount</label>
                  <input
                    type="number"
                    step="0.01"
                    name="Amount"
                    value={formData.Amount}
                    onChange={handleChange}
                    className="w-full bg-[#F3F4F6] border-none rounded-[12px] px-5 py-3.5 text-[15px] font-medium focus:bg-gray-200/50 focus:outline-none focus:ring-2 focus:ring-gray-900/10 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-gray-500 tracking-widest uppercase font-bold mb-3">Payment Method</label>
                  <select
                    name="PaymentMethodID"
                    value={formData.PaymentMethodID}
                    onChange={handleChange}
                    className="w-full bg-[#F3F4F6] border-none rounded-[12px] px-5 py-3.5 text-[15px] font-medium focus:bg-gray-200/50 focus:outline-none focus:ring-2 focus:ring-gray-900/10 transition-colors"
                  >
                    {methods.map(method => (
                      <option key={method._id} value={method._id}>{method.Name}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="bg-white p-8 rounded-[20px] shadow-sm border border-gray-100">
              <h3 className="text-[17px] font-bold text-gray-900 mb-6">Payment Status</h3>
              <div className="mb-6">
                <label className="block text-[11px] text-gray-500 tracking-widest uppercase font-bold mb-3">Status</label>
                <select
                  name="PaymentStatusID"
                  value={formData.PaymentStatusID}
                  onChange={handleChange}
                  className="w-full bg-[#F3F4F6] border-none rounded-[12px] px-5 py-3.5 text-[15px] font-medium focus:bg-gray-200/50 focus:outline-none focus:ring-2 focus:ring-gray-900/10 transition-colors"
                >
                  {statuses.map(status => (
                    <option key={status._id} value={status._id}>{status.Name}</option>
                  ))}
                </select>
              </div>
              <div className="p-4 bg-blue-50/50 rounded-xl border border-blue-100/50">
                 <div className="flex gap-3">
                    <span className="material-symbols-outlined text-blue-600 text-[20px]">info</span>
                    <p className="text-[13px] text-blue-800 leading-relaxed font-medium">
                      Updating the payment status keeps customer billing records accurate and aligned with fulfillment.
                    </p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <SuccessModal
        isOpen={isSuccessOpen}
        onClose={() => { setIsSuccessOpen(false); handleCancel(); }}
        title="Payment Updated"
        message="Payment updated successfully"
        buttonText="Go to Details"
      />
    </div>
  );
}
export default EditPaymentPage;

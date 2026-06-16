import "./EditOrderPage.css";
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import type { IOrder } from "../../../../shared/types/Orders/IOrder.types";
import type { IOrderStatus } from "../../../../shared/types/OrderStatuses/IOrderStatus.types";
import type { IOrderProduct } from "../../../../shared/types/OrderProducts/IOrderProduct.types";
import { GetOrderByID, UpdateOrder, GetAllOrderStatuses } from "../../../../business/services";
import { SuccessModal, useToast } from "../../../../shared/components";
function EditOrderPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { success, error } = useToast();
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [order, setOrder] = useState<IOrder | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [statuses, setStatuses] = useState<IOrderStatus[]>([]);
  const [formData, setFormData] = useState({
    OrderStatusID: "",
  });
  useEffect(() => {
    if (id) {
      setLoading(true);
      Promise.all([
        GetOrderByID({ OrderID: id }),
        GetAllOrderStatuses({ page: 1, limit: 1000 , sort: 'name_asc'})
      ])
        .then(([orderData, statusData]) => {
          setOrder(orderData);
          setStatuses(statusData.data || []);
          setFormData({
            OrderStatusID: orderData.OrderStatusID || "",
          });
          setLoading(false);
        })
        .catch(() => {
          error("Error", "Failed to load order data");
          setLoading(false);
        });
    }
  }, [id, error]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!id) return;
    setSaving(true);
    try {
      await UpdateOrder({ OrderID: id, Order: formData as IOrder });
      success("Success", "Order status updated successfully");
      setIsSuccessOpen(true);
    } catch {
      error("Error", "Failed to update order status");
    } finally {
      setSaving(false);
    }
  };
  const handleCancel = () => navigate("/orders");
  if (loading) {
    return (
      <div className="w-full h-[60vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900"></div>
      </div>
    );
  }
  if (!order) {
    return (
      <div className="p-8 text-center text-red-500 font-medium bg-red-50 rounded-xl m-8">
        Order not found
      </div>
    );
  }
  const items: IOrderProduct[] = order.Items || [];
  return (
    <div className="w-full p-4 md:p-8 bg-gray-50/20 min-h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full max-w-6xl mx-auto">
        <div className="flex justify-between items-end pb-2">
          <div>
            <div className="flex items-center gap-2 text-sm text-on-surface-variant mb-3">
              <Link to="/orders" className="flex items-center gap-1 hover:text-primary transition-colors hover-translate-y">
                <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                <span className="font-medium">Orders</span>
              </Link>
              <span className="material-symbols-outlined text-[18px]">chevron_right</span>
              <span className="text-on-surface font-semibold">Update Status</span>
            </div>
            <h1 className="text-[38px] font-bold text-gray-900 mb-3 tracking-tight">Order #{order._id?.slice(-6).toUpperCase()}</h1>
            <p className="text-[15px] text-gray-600 max-w-xl leading-relaxed">Update the current fulfillment status for this order.</p>
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
                  <div className="text-[15px] font-medium text-gray-900">{order.User?.FirstName + " " + order.User?.LastName || "Guest"}</div>
                </div>
                <div>
                  <label className="block text-[11px] text-gray-500 tracking-widest uppercase font-bold mb-1.5">Email Address</label>
                  <div className="text-[15px] font-medium text-gray-900">{order.User?.Email || "N/A"}</div>
                </div>
                <div className="col-span-2">
                  <label className="block text-[11px] text-gray-500 tracking-widest uppercase font-bold mb-1.5">Shipping Address</label>
                  <div className="text-[15px] font-medium text-gray-900">
                    {order.Address ? `${order.Address.AddressLine1 + " " + order.Address.AddressLine2 + ", " + order.Address.City?.Name + ", " + order.Address.Country?.Name}` : "No address provided"}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-[20px] shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-[17px] font-bold text-gray-900">Order Items</h3>
                <span className="text-[13px] font-bold text-gray-500">{items.length} Items</span>
              </div>
              <div className="flex flex-col gap-4">
                {items.length > 0 ? (
                  items.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50/50 rounded-xl border border-gray-100">
                      <div className="flex items-center gap-4">
                        <div className="w-[64px] h-[64px] bg-white rounded-[12px] overflow-hidden flex items-center justify-center border border-gray-100">
                           <span className="material-symbols-outlined text-gray-300 text-[32px]">inventory_2</span>
                        </div>
                        <div>
                          <div className="font-bold text-[15px] text-gray-900 mb-0.5">{item.Product?.Name || "Unknown Product"}</div>
                          <div className="text-[13px] text-gray-500 font-medium">Quantity: {item.Quantity} &nbsp;•&nbsp; ${item.Product?.Price || 0}</div>
                        </div>
                      </div>
                      <div className="font-bold text-[15px] text-gray-900">
                        ${((item.Product?.Price || 0) * item.Quantity).toFixed(2)}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center text-gray-500 py-8">No items in this order</div>
                )}
              </div>
            </div>
          </div>
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="bg-white p-8 rounded-[20px] shadow-sm border border-gray-100">
              <h3 className="text-[17px] font-bold text-gray-900 mb-6">Order Status</h3>
              <div className="mb-6">
                <label className="block text-[11px] text-gray-500 tracking-widest uppercase font-bold mb-3">Current Status</label>
                <select
                  name="OrderStatusID"
                  value={formData.OrderStatusID}
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
                      Changing the status will notify the customer and update the order timeline.
                    </p>
                 </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-[20px] shadow-sm border border-gray-100">
              <h3 className="text-[17px] font-bold text-gray-900 mb-6">Payment Summary</h3>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between text-[14px]">
                  <span className="text-gray-500">Method</span>
                  <span className="font-bold text-gray-900">{order.Payment?.PaymentMethod?.Name || "Credit Card"}</span>
                </div>
                <div className="flex justify-between text-[14px]">
                  <span className="text-gray-500">Status</span>
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[11px] font-bold rounded uppercase tracking-wide">Paid</span>
                </div>
                <div className="h-px bg-gray-100 my-2"></div>
                <div className="flex justify-between items-center text-[18px]">
                  <span className="font-bold text-gray-900">Total</span>
                  <span className="font-black text-gray-900">
                    ${items.reduce((acc, item) => acc + (item.Product?.Price || 0) * item.Quantity, 0).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <SuccessModal
        isOpen={isSuccessOpen}
        onClose={() => { setIsSuccessOpen(false); handleCancel(); }}
        title="Order Updated"
        message="Order updated successfully"
        buttonText="Go to Orders"
      />
    </div>
  );
}
export default EditOrderPage;

import React, { useState } from 'react';
import type { IOrder } from '../../../../../../shared/types/Orders/IOrder.types';
import { useToast, ConfirmModal } from '../../../../../../shared/components';
import { DeleteProduct } from '../../../../../../business/services';
import {
  OrderFormHeader,
  OrderAssociatedProducts
} from '../';
interface Props {
  formData: {
    FirstName: string;
    LastName: string;
    Email: string;
  };
  initialData?: Partial<IOrder>;
  loading?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (e?: React.FormEvent) => void;
  onCancel: () => void;
}
const EditOrderForm: React.FC<Props> = ({
  formData,
  loading,
  onSubmit,
  onCancel,
}) => {
  const { success, error } = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState<string | null>(null);
  const order = formData as unknown as IOrder;
  const handleDeleteProduct = (productID: string) => {
    setProductToDelete(productID);
    setIsModalOpen(true);
  };
  const confirmDeleteProduct = async () => {
    if (!productToDelete) return;
    try {
      await DeleteProduct({ ProductID: productToDelete });
      success("Product Removed", "The product has been removed from this order.");
    } catch (err: unknown) {
      error("Error", (err as Error).message || "Failed to remove product");
    } finally {
      setIsModalOpen(false);
      setProductToDelete(null);
    }
  };
  return (
    <>
      <form onSubmit={onSubmit} className="flex flex-col gap-8 w-full max-w-6xl mx-auto">
        <OrderFormHeader
          mode="edit"
          title={order.User ? `${order.User.FirstName} ${order.User.LastName}` : "Loading..."}
          loading={loading}
          onCancel={onCancel}
        />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8 flex flex-col gap-6">
            <OrderAssociatedProducts
              products={order.Items?.map(item => item.Product) || []}
              onDeleteProduct={handleDeleteProduct}
            />
          </div>
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="bg-white p-7 rounded-[20px] shadow-sm border border-gray-100">
               <h3 className="text-[16px] font-bold text-gray-900 mb-6 mt-1">Order Status</h3>
               <div className="flex items-center gap-3 bg-primary/5 p-4 rounded-xl border border-primary/10">
                 <span className="material-symbols-outlined text-primary">info</span>
                 <span className="font-bold text-primary">{order.OrderStatus?.Name || "Unknown"}</span>
               </div>
            </div>
            <div className="bg-white p-7 rounded-[20px] shadow-sm border border-gray-100">
              <h3 className="text-[16px] font-bold text-gray-900 mb-6 mt-1">Timeline</h3>
              <div className="mb-5">
                <label className="block text-[11px] font-bold text-gray-500 tracking-widest uppercase mb-3">Created Date</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-3.5 text-[18px] text-gray-400">calendar_today</span>
                  <input type="text" readOnly value={order.CreatedDate ? new Date(order.CreatedDate).toLocaleDateString() : "N/A"} className="w-full bg-[#F9FAFB] border border-gray-100 rounded-[12px] pl-11 pr-4 py-3.5 text-[14px] font-medium text-gray-900 focus:outline-none cursor-default" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <ConfirmModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={confirmDeleteProduct}
        title="Confirm Removal"
        message="This product will be removed from this order and deleted from the inventory. This action can be undone later by restoring from trash."
        confirmText="Remove"
        cancelText="Cancel"
        type="danger"
      />
    </>
  );
};
export default EditOrderForm;

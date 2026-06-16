import React, { useState } from 'react';
import type { IPermission } from '../../../../../../shared/types/Permissions/IPermission.types';
import { useToast, ConfirmModal } from '../../../../../../shared/components';
import { DeleteProduct } from '../../../../../../business/services';
import {
  PermissionFormHeader,
  PermissionGeneralInfo,
  PermissionVisibility
} from '../';
interface Props {
  formData: {
    Name: string;
    Description: string;
    IsActivated: boolean;
  };
  initialData?: Partial<IPermission>;
  loading?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (e?: React.FormEvent) => void;
  onCancel: () => void;
}
const EditPermissionForm: React.FC<Props> = ({
  formData,
  loading,
  onChange,
  onSubmit,
  onCancel,
}) => {
  const { success, error } = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState<string | null>(null);
  const confirmDeleteProduct = async () => {
    if (!productToDelete) return;
    try {
      await DeleteProduct({ ProductID: productToDelete });
      success("Product Removed", "The product has been removed from this permission.");
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
        <PermissionFormHeader
          mode="edit"
          title={(formData as unknown as IPermission).Name}
          loading={loading}
          onCancel={onCancel}
        />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8 flex flex-col gap-6">
            <PermissionGeneralInfo
              mode="edit"
              formData={formData}
              onChange={onChange}
            />
          </div>
          <div className="md:col-span-4 flex flex-col gap-6">
            <PermissionVisibility
              mode="edit"
              isActivated={(formData as unknown as IPermission).IsActivated}
              onChange={onChange}
            />
            <div className="bg-white p-7 rounded-[20px] shadow-sm border border-gray-100">
              <h3 className="text-[16px] font-bold text-gray-900 mb-6 mt-1">Publishing</h3>
              <div className="mb-5">
                <label className="block text-[11px] font-bold text-gray-500 tracking-widest uppercase mb-3">Start Date</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-3.5 text-[18px] text-gray-400">calendar_today</span>
                  <input type="text" readOnly value="June 01, 2024" className="w-full bg-[#F9FAFB] border border-gray-100 rounded-[12px] pl-11 pr-4 py-3.5 text-[14px] font-medium text-gray-900 focus:outline-none cursor-default" />
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-500 tracking-widest uppercase mb-3">End Date</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-3.5 text-[18px] text-gray-400">calendar_today</span>
                  <input type="text" readOnly value="August 31, 2024" className="w-full bg-[#F9FAFB] border border-gray-100 rounded-[12px] pl-11 pr-4 py-3.5 text-[14px] font-medium text-gray-900 focus:outline-none cursor-default" />
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
        message="This product will be removed from this permission and deleted from the inventory. This action can be undone later by restoring from trash."
        confirmText="Remove"
        cancelText="Cancel"
        type="danger"
      />
    </>
  );
};
export default EditPermissionForm;

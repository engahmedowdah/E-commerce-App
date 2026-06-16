import React, { useState } from 'react';
import type { ICollection } from '../../../../../../shared/types/Collections/ICollection.types';
import type { IProduct } from '../../../../../../shared/types/Products/IProduct.types';
import { useToast, ConfirmModal } from '../../../../../../shared/components';
import {
  CollectionFormHeader,
  CollectionGeneralInfo,
  CollectionVisibility,
  CollectionAssociatedProducts,
  CollectionSEOPreview,
} from '../';
interface Props {
  formData: {
    Name: string;
    Slug: string;
    Description: string;
    IsActivated: boolean;
  };
  initialData?: Partial<ICollection>;
  products?: IProduct[];
  loading?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onGenerateSlug: () => void;
  onSubmit: (e?: React.FormEvent) => void;
  onCancel: () => void;
  onAddProducts: (products: IProduct[]) => void;
  onRemoveProduct: (productID: string) => void;
}
const EditCollectionForm: React.FC<Props> = ({
  formData,
  initialData,
  products,
  loading,
  onChange,
  onGenerateSlug,
  onSubmit,
  onCancel,
  onAddProducts,
  onRemoveProduct,
}) => {
  const { success } = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState<string | null>(null);
  const handleDeleteProduct = (productID: string) => {
    setProductToDelete(productID);
    setIsModalOpen(true);
  };
  const confirmDeleteProduct = () => {
    if (!productToDelete) return;
    onRemoveProduct(productToDelete);
    success("Product Unlinked", "The product has been removed from this collection.");
    setIsModalOpen(false);
    setProductToDelete(null);
  };
  return (
    <>
      <form onSubmit={onSubmit} className="flex flex-col gap-8 w-full max-w-6xl mx-auto">
        <CollectionFormHeader
          mode="edit"
          title={(formData as unknown as ICollection).Name}
          loading={loading}
          onCancel={onCancel}
        />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8 flex flex-col gap-6">
            <CollectionGeneralInfo
              mode="edit"
              formData={formData}
              onChange={onChange}
              onGenerateSlug={onGenerateSlug}
            />
            <CollectionAssociatedProducts
              products={products ?? (initialData as ICollection)?.Products ?? []}
              onAddProducts={onAddProducts}
              onDeleteProduct={handleDeleteProduct}
            />
          </div>
          <div className="md:col-span-4 flex flex-col gap-6">
            <CollectionVisibility
              mode="edit"
              isActivated={(formData as unknown as ICollection).IsActivated}
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
            <CollectionSEOPreview
              mode="edit"
              name={(formData as unknown as ICollection).Name}
              slug={(formData as unknown as ICollection).Slug}
              description={(formData as unknown as ICollection).Description as string}
            />
          </div>
        </div>
      </form>
      <ConfirmModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={confirmDeleteProduct}
        title="Remove from Collection"
        message="This will unlink the product from this collection. The product itself will NOT be deleted from your inventory."
        confirmText="Unlink"
        cancelText="Cancel"
        type="warning"
      />
    </>
  );
};
export default EditCollectionForm;

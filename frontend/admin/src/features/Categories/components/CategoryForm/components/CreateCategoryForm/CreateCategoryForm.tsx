import type { ICategory } from "../../../../../../shared/types/Categories/ICategory.types";
import type { IProduct } from "../../../../../../shared/types/Products/IProduct.types";
import React from 'react';
import {
  CategoryFormHeader,
  CategoryGeneralInfo,
  CategoryVisibility,
  CategorySEOPreview,
  CategoryAssociatedProducts,
} from '../';
interface Props {
  formData: {
    Name: string;
    Slug: string;
    Description: string;
    IsActivated: boolean;
  };
  products?: IProduct[];
  loading?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onGenerateSlug: () => void;
  onSubmit: (e?: React.FormEvent) => void;
  onCancel: () => void;
  onAddProducts: (products: IProduct[]) => void;
  onRemoveProduct: (productID: string) => void;
}
const CreateCategoryForm: React.FC<Props> = ({
  formData,
  products = [],
  loading,
  onChange,
  onGenerateSlug,
  onSubmit,
  onCancel,
  onAddProducts,
  onRemoveProduct,
}) => {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-8 w-full max-w-7xl mx-auto">
      <CategoryFormHeader
        mode="create"
        title={(formData as unknown as ICategory).Name}
        loading={loading}
        onCancel={onCancel}
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 flex flex-col gap-6">
          <CategoryVisibility
            mode="create"
            isActivated={(formData as unknown as ICategory).IsActivated}
            onChange={onChange}
          />
        </div>
        <div className="lg:col-span-7 flex flex-col gap-6 w-full">
          <CategoryGeneralInfo
            mode="create"
            formData={formData}
            onChange={onChange}
            onGenerateSlug={onGenerateSlug}
          />
          <CategoryAssociatedProducts
            products={products}
            onAddProducts={onAddProducts}
            onDeleteProduct={onRemoveProduct}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CategorySEOPreview
              mode="create"
              name={(formData as unknown as ICategory).Name}
              slug={(formData as unknown as ICategory).Slug}
              description={(formData as unknown as ICategory).Description || ""}
            />
          </div>
        </div>
      </div>
    </form>
  );
};
export default CreateCategoryForm;

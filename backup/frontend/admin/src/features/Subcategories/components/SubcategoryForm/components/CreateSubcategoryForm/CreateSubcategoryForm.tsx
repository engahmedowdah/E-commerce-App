import type { ISubcategory } from "../../../../../../shared/types/Subcategories/ISubcategory.types";
import type { IProduct } from "../../../../../../shared/types/Products/IProduct.types";
import React from 'react';
import {
  SubcategoryFormHeader,
  SubcategoryGeneralInfo,
  SubcategoryVisibility,
  SubcategorySEOPreview,
  SubcategoryAssociatedProducts,
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
const CreateSubcategoryForm: React.FC<Props> = ({
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
      <SubcategoryFormHeader
        mode="create"
        title={(formData as unknown as ISubcategory).Name}
        loading={loading}
        onCancel={onCancel}
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 flex flex-col gap-6">
          <SubcategoryVisibility
            mode="create"
            isActivated={(formData as unknown as ISubcategory).IsActivated!}
            onChange={onChange}
          />
        </div>
        <div className="lg:col-span-7 flex flex-col gap-6 w-full">
          <SubcategoryGeneralInfo
            mode="create"
            formData={formData}
            onChange={onChange}
            onGenerateSlug={onGenerateSlug}
          />
          <SubcategoryAssociatedProducts
            products={products}
            onAddProducts={onAddProducts}
            onDeleteProduct={onRemoveProduct}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SubcategorySEOPreview
              mode="create"
              name={(formData as unknown as ISubcategory).Name}
              slug={(formData as unknown as ISubcategory).Slug}
              description={(formData as unknown as ISubcategory).Description}
            />
          </div>
        </div>
      </div>
    </form>
  );
};
export default CreateSubcategoryForm;

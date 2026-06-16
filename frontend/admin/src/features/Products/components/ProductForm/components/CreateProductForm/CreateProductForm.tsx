import type { IProduct } from "../../../../../../shared/types/Products/IProduct.types";
import type { ICategory } from "../../../../../../shared/types/Categories/ICategory.types";
import type { ISubcategory } from "../../../../../../shared/types/Subcategories/ISubcategory.types";
import React from 'react';
import {
  ProductFormHeader,
  ProductGeneralInfo,
  ProductVisibility,
  ProductSEOPreview,
} from '../';
interface Props {
  formData: {
    Name: string;
    Description: string;
    Price: number;
    Stock: number;
    CategoryIDs: string[];
    SubCategoryIDs: string[];
    IsActivated: boolean;
  };
  categories: ICategory[];
  subcategories: ISubcategory[];
  loading?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  onGenerateSlug: () => void;
  onSubmit: (e?: React.FormEvent) => void;
  onCancel: () => void;
}
const CreateProductForm: React.FC<Props> = ({
  formData,
  categories,
  subcategories,
  loading,
  onChange,
  onSubmit,
  onCancel,
}) => {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-8 w-full max-w-7xl mx-auto">
      <ProductFormHeader
        mode="create"
        title={(formData as unknown as IProduct).Name}
        loading={loading}
        onCancel={onCancel}
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 flex flex-col gap-6">
          <ProductVisibility
            mode="create"
            isActivated={(formData as unknown as IProduct).IsActivated}
            onChange={onChange}
          />
        </div>
        <div className="lg:col-span-7 flex flex-col gap-6 w-full">
          <ProductGeneralInfo
            mode="create"
            formData={formData}
            categories={categories}
            subcategories={subcategories}
            onChange={onChange}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProductSEOPreview
              mode="create"
              name={(formData as unknown as IProduct).Name}
              description={(formData as unknown as IProduct).Description as string}
            />
          </div>
        </div>
      </div>
    </form>
  );
};
export default CreateProductForm;

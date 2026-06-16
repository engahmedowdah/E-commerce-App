import type { ICollection } from "../../../../../../shared/types/Collections/ICollection.types";
import type { IProduct } from "../../../../../../shared/types/Products/IProduct.types";
import React from 'react';
import {
  CollectionFormHeader,
  CollectionGeneralInfo,
  CollectionVisibility,
  CollectionSEOPreview,
  CollectionAssociatedProducts,
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
const CreateCollectionForm: React.FC<Props> = ({
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
      <CollectionFormHeader
        mode="create"
        title={(formData as unknown as ICollection).Name}
        loading={loading}
        onCancel={onCancel}
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 flex flex-col gap-6">
          <CollectionVisibility
            mode="create"
            isActivated={(formData as unknown as ICollection).IsActivated}
            onChange={onChange}
          />
        </div>
        <div className="lg:col-span-7 flex flex-col gap-6 w-full">
          <CollectionGeneralInfo
            mode="create"
            formData={formData}
            onChange={onChange}
            onGenerateSlug={onGenerateSlug}
          />
          <CollectionAssociatedProducts
            products={products}
            onAddProducts={onAddProducts}
            onDeleteProduct={onRemoveProduct}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CollectionSEOPreview
              mode="create"
              name={(formData as unknown as ICollection).Name}
              slug={(formData as unknown as ICollection).Slug}
              description={(formData as unknown as ICollection)?.Description}
            />
          </div>
        </div>
      </div>
    </form>
  );
};
export default CreateCollectionForm;

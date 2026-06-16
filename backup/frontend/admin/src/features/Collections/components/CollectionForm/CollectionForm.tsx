import React, { useState } from "react";
import type { ICollection } from "../../../../shared/types/Collections/ICollection.types";
import type { IProduct } from "../../../../shared/types/Products/IProduct.types";
import { CreateCollectionForm, EditCollectionForm } from "./components";
interface CollectionFormProps {
  mode: "create" | "edit";
  initialData?: Partial<ICollection>;
  products?: IProduct[];
  onSubmit: (data: ICollection) => void;
  onCancel: () => void;
  loading?: boolean;
  onAddProducts?: (products: IProduct[]) => void;
  onRemoveProduct?: (productID: string) => void;
}
const CollectionForm = ({ mode, initialData, products, onSubmit, onCancel, loading, onAddProducts, onRemoveProduct }: CollectionFormProps) => {
  const [formData, setFormData] = useState({
    Name: (initialData as ICollection)?.Name || "",
    Description: (initialData as ICollection)?.Description || "",
    Slug: (initialData as ICollection)?.Slug || "",
    IsActivated: (initialData as ICollection)?.IsActivated ?? false,
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };
  const generateSlug = () => {
    const slug = (formData as unknown as ICollection).Name.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");
    setFormData((prev) => ({ ...prev, Slug: slug }));
  };
  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    onSubmit(formData as unknown as ICollection);
  };
  if (mode === "create") {
    return (
      <CreateCollectionForm
        formData={formData}
        products={products}
        loading={loading}
        onChange={handleChange}
        onGenerateSlug={generateSlug}
        onSubmit={handleSubmit}
        onCancel={onCancel}
        onAddProducts={onAddProducts ?? (() => {})}
        onRemoveProduct={onRemoveProduct ?? (() => {})}
      />
    );
  }
  return (
    <EditCollectionForm
      formData={formData}
      initialData={initialData}
      products={products}
      loading={loading}
      onChange={handleChange}
      onGenerateSlug={generateSlug}
      onSubmit={handleSubmit}
      onCancel={onCancel}
      onAddProducts={onAddProducts ?? (() => {})}
      onRemoveProduct={onRemoveProduct ?? (() => {})}
    />
  );
};
export default CollectionForm;

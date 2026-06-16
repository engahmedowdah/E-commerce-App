import React, { useState } from "react";
import type { ISubcategory } from "../../../../shared/types/Subcategories/ISubcategory.types";
import type { IProduct } from "../../../../shared/types/Products/IProduct.types";
import { CreateSubcategoryForm, EditSubcategoryForm } from "./components";
interface SubcategoryFormProps {
  mode: "create" | "edit";
  initialData?: Partial<ISubcategory>;
  products?: IProduct[];
  onSubmit: (data: ISubcategory) => void;
  onCancel: () => void;
  loading?: boolean;
  onAddProducts?: (products: IProduct[]) => void;
  onRemoveProduct?: (productID: string) => void;
}
const SubcategoryForm = ({ mode, initialData, products, onSubmit, onCancel, loading, onAddProducts, onRemoveProduct }: SubcategoryFormProps) => {
  const [formData, setFormData] = useState({
    Name: (initialData as ISubcategory)?.Name || "",
    Description: (initialData as ISubcategory)?.Description || "",
    Slug: (initialData as ISubcategory)?.Slug || "",
    IsActivated: (initialData as ISubcategory)?.IsActivated ?? false,
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };
  const generateSlug = () => {
    const slug = (formData as unknown as ISubcategory).Name.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");
    setFormData((prev) => ({ ...prev, Slug: slug }));
  };
  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    onSubmit(formData as unknown as ISubcategory);
  };
  if (mode === "create") {
    return (
      <CreateSubcategoryForm
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
    <EditSubcategoryForm
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
export default SubcategoryForm;

import React, { useState } from "react";
import type { ICategory } from "../../../../shared/types/Categories/ICategory.types";
import type { IProduct } from "../../../../shared/types/Products/IProduct.types";
import { CreateCategoryForm, EditCategoryForm } from "./components";
interface CategoryFormProps {
  mode: "create" | "edit";
  initialData?: Partial<ICategory>;
  products?: IProduct[];
  onSubmit: (data: ICategory) => void;
  onCancel: () => void;
  loading?: boolean;
  onAddProducts?: (products: IProduct[]) => void;
  onRemoveProduct?: (productID: string) => void;
}
const CategoryForm = ({ mode, initialData, products = [], onSubmit, onCancel, loading, onAddProducts, onRemoveProduct }: CategoryFormProps) => {
  const [formData, setFormData] = useState({
    Name: (initialData as ICategory)?.Name || "",
    Description: (initialData as ICategory)?.Description || "",
    Slug: (initialData as ICategory)?.Slug || "",
    IsActivated: (initialData as ICategory)?.IsActivated || false,
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };
  const generateSlug = () => {
    const slug = (formData as unknown as ICategory).Name.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");
    setFormData((prev) => ({ ...prev, Slug: slug }));
  };
  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    onSubmit(formData as unknown as ICategory);
  };
  if (mode === "create") {
    return (
      <CreateCategoryForm
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
    <EditCategoryForm
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
export default CategoryForm;

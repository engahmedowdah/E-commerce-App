import React, { useState, useEffect } from "react";
import type { IProduct } from "../../../../shared/types/Products/IProduct.types";
import type { ICategory } from "../../../../shared/types/Categories/ICategory.types";
import type { ISubcategory } from "../../../../shared/types/Subcategories/ISubcategory.types";
import { GetAllCategories, GetAllSubcategories } from "../../../../business/services";
import {
  CreateProductForm,
  EditProductForm,
} from "./components";
export interface ProductFormData {
  Name: string;
  Description: string;
  Price: number;
  Stock: number;
  CategoryIDs: string[];
  SubCategoryIDs: string[];
  IsActivated: boolean;
  Slug?: string;
}
interface ProductFormProps {
  mode: "create" | "edit";
  initialData?: Partial<IProduct>;
  onSubmit: (data: IProduct) => void;
  onCancel: () => void;
  loading?: boolean;
}
const ProductForm = ({ mode, initialData, onSubmit, onCancel, loading }: ProductFormProps) => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [subcategories, setSubcategories] = useState<ISubcategory[]>([]);
  useEffect(() => {
    GetAllCategories({ page: 1, limit: 1000 }).then(res => setCategories(res.data || [])).catch(() => {});
    GetAllSubcategories({ page: 1, limit: 1000 }).then(res => setSubcategories(res.data || [])).catch(() => {});
  }, []);
  const [formData, setFormData] = useState<ProductFormData>({
    Name: (initialData as IProduct)?.Name || "",
    Description: (initialData as IProduct)?.Description || "",
    Price: (initialData as IProduct)?.Price || 0,
    Stock: (initialData as IProduct)?.Stock || 0,
    CategoryIDs: (initialData as IProduct)?.CategoryIDs || ((initialData as IProduct)?.CategoryID ? [(initialData as IProduct).CategoryID!] : []),
    SubCategoryIDs: (initialData as IProduct)?.SubCategoryIDs || ((initialData as IProduct)?.SubcategoryID ? [(initialData as IProduct).SubcategoryID!] : []),
    IsActivated: (initialData as IProduct)?.IsActivated ?? false,
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setFormData((prev) => {
      let val: string | number | boolean | string[] = value;
      if (type === "checkbox") {
        val = (e.target as HTMLInputElement).checked;
      } else if (name === "Price" || name === "Stock") {
        val = Number(value) || 0;
      } else if (name === "CategoryIDs" || name === "SubCategoryIDs") {
        val = value ? [value] : [];
      }
      return {
        ...prev,
        [name]: val,
      } as ProductFormData;
    });
  };
  const generateSlug = () => {
    const slug = formData.Name.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");
    setFormData((prev) => ({ ...prev, Slug: slug } as ProductFormData));
  };
  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    onSubmit(formData as unknown as IProduct);
  };
  if (mode === "create") {
    return (
      <CreateProductForm
        formData={formData}
        categories={categories}
        subcategories={subcategories}
        loading={loading}
        onChange={handleChange}
        onGenerateSlug={generateSlug}
        onSubmit={handleSubmit}
        onCancel={onCancel}
      />
    );
  }
  return (
    <EditProductForm
      formData={formData}
      categories={categories}
      subcategories={subcategories}
      initialData={initialData}
      loading={loading}
      onChange={handleChange}
      onSubmit={handleSubmit}
      onCancel={onCancel}
    />
  );
};
export default ProductForm ;

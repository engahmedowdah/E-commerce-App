import React, { useState } from "react";
import type { ICountry } from "../../../../shared/types/Countries/ICountry.types";
import {
  CreateCountryForm,
  EditCountryForm,
} from "./components";
interface CountryFormProps {
  mode: "create" | "edit";
  initialData?: Partial<ICountry>;
  onSubmit: (data: ICountry) => void;
  onCancel: () => void;
  loading?: boolean;
}
const CountryForm = ({ mode, initialData, onSubmit, onCancel, loading }: CountryFormProps) => {
  const [formData, setFormData] = useState({
    Name: (initialData as ICountry)?.Name || "",
    CurrencySymbol: (initialData as ICountry)?.CurrencySymbol || "",
    Slug: (initialData as ICountry)?.Slug || "",
    IsActivated: (initialData as ICountry)?.IsActivated ?? false,
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };
  const generateSlug = () => {
    const slug = (formData as unknown as ICountry).Name.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");
    setFormData((prev) => ({ ...prev, Slug: slug }));
  };
  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    onSubmit(formData as unknown as ICountry);
  };
  if (mode === "create") {
    return (
      <CreateCountryForm
        formData={formData}
        loading={loading}
        onChange={handleChange}
        onGenerateSlug={generateSlug}
        onSubmit={handleSubmit}
        onCancel={onCancel}
      />
    );
  }
  return (
    <EditCountryForm
      formData={formData}
      initialData={initialData}
      loading={loading}
      onChange={handleChange}
      onGenerateSlug={generateSlug}
      onSubmit={handleSubmit}
      onCancel={onCancel}
    />
  );
};
export default CountryForm ;

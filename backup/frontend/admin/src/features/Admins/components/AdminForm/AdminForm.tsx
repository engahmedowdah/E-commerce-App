import React, { useState } from "react";
import type { IAdmin } from "../../../../shared/types/Admins/IAdmin.types";
import {
  CreateAdminForm,
  EditAdminForm,
} from "./components";
interface AdminFormProps {
  mode: "create" | "edit";
  initialData?: Partial<IAdmin>;
  onSubmit: (data: IAdmin) => void;
  onCancel: () => void;
  loading?: boolean;
}
const AdminForm = ({ mode, initialData, onSubmit, onCancel, loading }: AdminFormProps) => {
  const [formData, setFormData] = useState({
    FirstName: (initialData as IAdmin)?.FirstName || "",
    LastName: (initialData as IAdmin)?.LastName || "",
    IsActivated: (initialData as IAdmin)?.IsActivated ?? false,
    Email: (initialData as IAdmin)?.Email || "",
    RoleID: (initialData as IAdmin)?.RoleID || "",
    Phone: (initialData as IAdmin)?.Phone || "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };
  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    onSubmit(formData as unknown as IAdmin);
  };
  if (mode === "create") {
    return (
      <CreateAdminForm
        formData={formData}
        loading={loading}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onCancel={onCancel}
      />
    );
  }
  return (
    <EditAdminForm
      formData={formData}
      initialData={initialData}
      loading={loading}
      onChange={handleChange}
      onSubmit={handleSubmit}
      onCancel={onCancel}
    />
  );
};
export default AdminForm ;

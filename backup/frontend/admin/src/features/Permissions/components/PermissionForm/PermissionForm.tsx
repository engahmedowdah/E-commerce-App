import React, { useState } from "react";
import type { IPermission } from "../../../../shared/types/Permissions/IPermission.types";
import {
  CreatePermissionForm,
  EditPermissionForm,
} from "./components";
interface PermissionFormProps {
  mode: "create" | "edit";
  initialData?: Partial<IPermission>;
  onSubmit: (data: IPermission) => void;
  onCancel: () => void;
  loading?: boolean;
}
const PermissionForm = ({ mode, initialData, onSubmit, onCancel, loading }: PermissionFormProps) => {
  const [formData, setFormData] = useState({
    Name: (initialData as IPermission)?.Name || "",
    Description: (initialData as IPermission)?.Description || "",
    IsActivated: (initialData as IPermission)?.IsActivated ?? false,
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };
  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    onSubmit(formData as unknown as IPermission);
  };
  if (mode === "create") {
    return (
      <CreatePermissionForm
        formData={formData}
        loading={loading}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onCancel={onCancel}
      />
    );
  }
  return (
    <EditPermissionForm
      formData={formData}
      initialData={initialData}
      loading={loading}
      onChange={handleChange}
      onSubmit={handleSubmit}
      onCancel={onCancel}
    />
  );
};
export default PermissionForm ;

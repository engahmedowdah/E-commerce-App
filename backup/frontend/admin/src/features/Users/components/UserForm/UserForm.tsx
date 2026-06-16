import React, { useState } from "react";
import type { IUser } from "../../../../shared/types/Users/IUser.types";
import {
  CreateUserForm,
  EditUserForm,
} from "./components";
interface UserFormProps {
  mode: "create" | "edit";
  initialData?: Partial<IUser>;
  onSubmit: (data: IUser) => void;
  onCancel: () => void;
  loading?: boolean;
}
const UserForm = ({ mode, initialData, onSubmit, onCancel, loading }: UserFormProps) => {
  const [formData, setFormData] = useState({
    FirstName: (initialData as IUser)?.FirstName || "",
    LastName: (initialData as IUser)?.LastName || "",
    Phone: (initialData as IUser)?.Phone || "",
    Email: (initialData as IUser)?.Email || "",
    IsActivated: (initialData as IUser)?.IsActivated ?? false,
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
    onSubmit(formData as unknown as IUser);
  };
  if (mode === "create") {
    return (
      <CreateUserForm
        formData={formData}
        loading={loading}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onCancel={onCancel}
      />
    );
  }
  return (
    <EditUserForm
      formData={formData}
      loading={loading}
      onChange={handleChange}
      onSubmit={handleSubmit}
      onCancel={onCancel}
    />
  );
};
export default UserForm ;

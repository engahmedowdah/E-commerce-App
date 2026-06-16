import React, { useState } from "react";
import type { IPaymentMethod } from "../../../../shared/types/PaymentMethods/IPaymentMethod.types";
import {
  CreatePaymentMethodForm,
  EditPaymentMethodForm,
} from "./components";
interface PaymentMethodFormProps {
  mode: "create" | "edit";
  initialData?: Partial<IPaymentMethod>;
  onSubmit: (data: IPaymentMethod) => void;
  onCancel: () => void;
  loading?: boolean;
}
const PaymentMethodForm = ({ mode, initialData, onSubmit, onCancel, loading }: PaymentMethodFormProps) => {
  const [formData, setFormData] = useState({
    Name: (initialData as unknown as IPaymentMethod)?.Name || "",
    IsActivated: (initialData as unknown as IPaymentMethod)?.IsActivated ?? false,
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
    onSubmit(formData as IPaymentMethod);
  };
  if (mode === "create") {
    return (
      <CreatePaymentMethodForm
        formData={formData as IPaymentMethod}
        loading={loading}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onCancel={onCancel}
      />
    );
  }
  return (
    <EditPaymentMethodForm
      formData={formData}
      initialData={initialData}
      loading={loading}
      onChange={handleChange}
      onSubmit={handleSubmit}
      onCancel={onCancel}
    />
  );
};
export default PaymentMethodForm ;

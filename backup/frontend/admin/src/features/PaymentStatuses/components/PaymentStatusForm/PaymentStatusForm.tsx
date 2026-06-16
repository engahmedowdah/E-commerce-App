import React, { useState } from "react";
import type { IPaymentStatus } from "../../../../shared/types/PaymentStatuses/IPaymentStatus.types";
import {
  CreatePaymentStatusForm,
  EditPaymentStatusForm,
} from "./components";
interface PaymentStatusFormProps {
  mode: "create" | "edit";
  initialData?: Partial<IPaymentStatus>;
  onSubmit: (data: IPaymentStatus) => void;
  onCancel: () => void;
  loading?: boolean;
}
const PaymentStatusForm = ({ mode, initialData, onSubmit, onCancel, loading }: PaymentStatusFormProps) => {
  const [formData, setFormData] = useState({
    Name: (initialData as IPaymentStatus)?.Name || "",
    IsActivated: (initialData as IPaymentStatus)?.IsActivated ?? false,
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
    onSubmit(formData as unknown as IPaymentStatus);
  };
  if (mode === "create") {
    return (
      <CreatePaymentStatusForm
        formData={formData}
        loading={loading}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onCancel={onCancel}
      />
    );
  }
  return (
    <EditPaymentStatusForm
      formData={formData}
      initialData={initialData}
      loading={loading}
      onChange={handleChange}
      onSubmit={handleSubmit}
      onCancel={onCancel}
    />
  );
};
export default PaymentStatusForm ;

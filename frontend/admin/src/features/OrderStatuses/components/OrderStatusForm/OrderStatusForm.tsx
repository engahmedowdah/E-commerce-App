import React, { useState } from "react";
import type { IOrderStatus } from "../../../../shared/types/OrderStatuses/IOrderStatus.types";
import {
  CreateOrderStatusForm,
  EditOrderStatusForm,
} from "./components";
interface OrderStatusFormProps {
  mode: "create" | "edit";
  initialData?: Partial<IOrderStatus>;
  onSubmit: (data: IOrderStatus) => void;
  onCancel: () => void;
  loading?: boolean;
}
const OrderStatusForm = ({ mode, initialData, onSubmit, onCancel, loading }: OrderStatusFormProps) => {
  const [formData, setFormData] = useState({
    Name: (initialData as IOrderStatus)?.Name || "",
    IsActivated: (initialData as IOrderStatus)?.IsActivated ?? false,
  } as IOrderStatus);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };
  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    onSubmit(formData as IOrderStatus);
  };
  if (mode === "create") {
    return (
      <CreateOrderStatusForm
        formData={formData}
        loading={loading}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onCancel={onCancel}
      />
    );
  }
  return (
    <EditOrderStatusForm
      formData={formData}
      initialData={initialData}
      loading={loading}
      onChange={handleChange}
      onSubmit={handleSubmit}
      onCancel={onCancel}
    />
  );
};
export default OrderStatusForm ;

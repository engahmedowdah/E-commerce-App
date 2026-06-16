import React, { useState } from "react";
import type { IOrder } from "../../../../shared/types/Orders/IOrder.types";
import {
  EditOrderForm,
} from "./components";
interface OrderFormProps {
  mode: "edit";
  initialData?: Partial<IOrder>;
  onSubmit: (data: IOrder) => void;
  onCancel: () => void;
  loading?: boolean;
}
const OrderForm = ({ initialData, onSubmit, onCancel, loading }: OrderFormProps) => {
  const [formData, setFormData] = useState({
    FirstName: (initialData as IOrder).User?.FirstName || "",
    LastName: (initialData as IOrder).User?.LastName || "",
    Email: (initialData as IOrder).User?.Email || "",
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
    onSubmit(formData as unknown as IOrder);
  };
  return (
    <EditOrderForm
      formData={formData}
      initialData={initialData}
      loading={loading}
      onChange={handleChange}
      onSubmit={handleSubmit}
      onCancel={onCancel}
    />
  );
};
export default OrderForm ;

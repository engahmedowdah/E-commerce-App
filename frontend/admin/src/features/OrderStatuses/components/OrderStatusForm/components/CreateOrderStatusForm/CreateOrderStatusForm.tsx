import type { IOrderStatus } from "../../../../../../shared/types/OrderStatuses/IOrderStatus.types";
import React from 'react';
import {
  OrderStatusFormHeader,
  OrderStatusGeneralInfo,
  OrderStatusVisibility,
} from '../';
interface Props {
  formData: {
    Name: string;
    IsActivated: boolean;
  };
  loading?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (e?: React.FormEvent) => void;
  onCancel: () => void;
}
const CreateOrderStatusForm: React.FC<Props> = ({
  formData,
  loading,
  onChange,
  onSubmit,
  onCancel,
}) => {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-8 w-full max-w-7xl mx-auto">
      <OrderStatusFormHeader
        mode="create"
        title={(formData as IOrderStatus).Name}
        loading={loading}
        onCancel={onCancel}
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 flex flex-col gap-6">
          <OrderStatusVisibility
            mode="create"
            isActivated={(formData as IOrderStatus).IsActivated}
            onChange={onChange}
          />
        </div>
        <div className="lg:col-span-7 flex flex-col gap-6 w-full">
          <OrderStatusGeneralInfo
            mode="create"
            formData={formData}
            onChange={onChange}
          />
        </div>
      </div>
    </form>
  );
};
export default CreateOrderStatusForm;

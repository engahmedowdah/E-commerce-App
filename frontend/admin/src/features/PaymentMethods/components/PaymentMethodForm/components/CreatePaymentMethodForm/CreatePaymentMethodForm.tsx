import type { IPaymentMethod } from "../../../../../../shared/types/PaymentMethods/IPaymentMethod.types";
import React from 'react';
import {
  PaymentMethodFormHeader,
  PaymentMethodGeneralInfo,
  PaymentMethodVisibility,
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
const CreatePaymentMethodForm: React.FC<Props> = ({
  formData,
  loading,
  onChange,
  onSubmit,
  onCancel,
}) => {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-8 w-full max-w-7xl mx-auto">
      <PaymentMethodFormHeader
        mode="create"
        title={(formData as IPaymentMethod).Name}
        loading={loading}
        onCancel={onCancel}
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 flex flex-col gap-6">
          <PaymentMethodVisibility
            mode="create"
            isActivated={(formData as unknown as IPaymentMethod).IsActivated}
            onChange={onChange}
          />
        </div>
        <div className="lg:col-span-7 flex flex-col gap-6 w-full">
          <PaymentMethodGeneralInfo
            mode="create"
            formData={formData as IPaymentMethod}
            onChange={onChange}
          />
        </div>
      </div>
    </form>
  );
};
export default CreatePaymentMethodForm;

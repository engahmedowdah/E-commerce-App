import type { IPaymentStatus } from "../../../../../../shared/types/PaymentStatuses/IPaymentStatus.types";
import React from 'react';
import {
  PaymentStatusFormHeader,
  PaymentStatusGeneralInfo,
  PaymentStatusVisibility,
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
const CreatePaymentStatusForm: React.FC<Props> = ({
  formData,
  loading,
  onChange,
  onSubmit,
  onCancel,
}) => {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-8 w-full max-w-7xl mx-auto">
      <PaymentStatusFormHeader
        mode="create"
        title={(formData as IPaymentStatus).Name}
        loading={loading}
        onCancel={onCancel}
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 flex flex-col gap-6">
          <PaymentStatusVisibility
            mode="create"
            isActivated={(formData as IPaymentStatus).IsActivated}
            onChange={onChange}
          />
        </div>
        <div className="lg:col-span-7 flex flex-col gap-6 w-full">
          <PaymentStatusGeneralInfo
            mode="create"
            formData={formData}
            onChange={onChange}
          />
        </div>
      </div>
    </form>
  );
};
export default CreatePaymentStatusForm;

import type { IOrderStatus } from "../../../../../../shared/types/OrderStatuses/IOrderStatus.types";
import React from 'react';
interface Props {
  mode: 'create' | 'edit';
  formData: {
    Name: string;
    IsActivated?: boolean;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}
const OrderStatusGeneralInfo: React.FC<Props> = ({ mode, formData, onChange }) => {
  const isCreate = mode === 'create';
  return (
    <div className="bg-white p-8 rounded-[20px] shadow-sm border border-gray-100">
      <h3 className={`${isCreate ? 'text-[13px] tracking-widest uppercase' : 'text-[17px]'} font-bold text-gray-900 mb-8`}>
        {isCreate ? 'General Information' : 'Order Status Details'}
      </h3>
      <div className="mb-6">
        <label className={`block ${isCreate ? 'text-[14px] text-gray-900' : 'text-[12px] text-gray-500 tracking-widest uppercase'} font-bold mb-2`}>
          {isCreate ? 'Order Status Name' : 'Order Status Title'}
        </label>
        <input
          type="text"
          name="Name"
          value={(formData as IOrderStatus).Name}
          onChange={onChange}
          className={`w-full bg-[#F3F4F6] border-none rounded-[12px] px-5 py-3.5 text-[15px] focus:bg-gray-200/50 focus:outline-none focus:ring-2 focus:ring-gray-900/10 transition-colors placeholder:text-gray-400`}
          placeholder={isCreate ? "e.g. Winter Solstice 2024" : "Summer Sale 2024"}
        />
      </div>
    </div>
  );
};
export default OrderStatusGeneralInfo;

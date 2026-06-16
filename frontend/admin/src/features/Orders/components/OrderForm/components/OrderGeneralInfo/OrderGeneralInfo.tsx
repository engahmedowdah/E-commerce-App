import React from 'react';
interface Props {
  mode: 'create' | 'edit';
  formData: {
    FirstName: string;
    LastName: string;
    Email: string;
  };
}
const OrderGeneralInfo: React.FC<Props> = ({ mode }) => {
  const isCreate = mode === 'create';
  return (
    <div className="bg-white p-8 rounded-[20px] shadow-sm border border-gray-100">
      <h3 className={`${isCreate ? 'text-[13px] tracking-widest uppercase' : 'text-[17px]'} font-bold text-gray-900 mb-8`}>
        {isCreate ? 'General Information' : 'Order Customer Details'}
      </h3>
      <div className="mb-6">
        <label className={`block ${isCreate ? 'text-[14px] text-gray-900' : 'text-[12px] text-gray-500 tracking-widest uppercase'} font-bold mb-2`}>
          Customer Name
        </label>
        <input
          type="text"
          readOnly
          className="w-full bg-[#F3F4F6] border-none rounded-[12px] px-5 py-3.5 text-[15px] focus:outline-none cursor-default"
        />
      </div>
      <div className="mb-6">
        <label className={`block text-[12px] text-gray-500 tracking-widest uppercase font-bold mb-2`}>
          Customer Email
        </label>
        <input
          type="text"
          readOnly
          className="w-full bg-[#F3F4F6] border-none rounded-[12px] px-5 py-3.5 text-[15px] focus:outline-none cursor-default"
        />
      </div>
    </div>
  );
};
export default OrderGeneralInfo;

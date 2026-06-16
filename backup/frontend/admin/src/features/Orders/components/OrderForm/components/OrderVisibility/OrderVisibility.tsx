import React from 'react';
interface Props {
  mode: 'create' | 'edit';
  isActivated: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const OrderVisibility: React.FC<Props> = ({ mode, isActivated, onChange }) => {
  const isCreate = mode === 'create';
  if (isCreate) {
    return (
      <div className="bg-white p-8 rounded-[20px] shadow-sm border border-gray-100">
        <h3 className="text-[13px] font-bold text-gray-900 tracking-widest uppercase mb-8">Visibility</h3>
        <div className="flex items-center justify-between">
           <span className="text-[15px] font-medium text-gray-800">Publish on save</span>
           <label className="relative inline-flex items-center cursor-pointer">
             <input type="checkbox" name="IsActivated" checked={isActivated} onChange={onChange} className="sr-only peer" />
             <div className="w-12 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[3px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#111827]"></div>
           </label>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-white p-6 rounded-[20px] shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-5 mt-1">
        <h3 className="text-[16px] font-bold text-gray-900">Order Status</h3>
        <span className="px-2 py-0.5 bg-[#064E3B] text-white text-[10px] font-bold uppercase tracking-wider rounded">Live</span>
      </div>
      <div className="bg-[#F9FAFB] rounded-[16px] p-4 flex items-center justify-between border border-gray-100">
        <div>
          <div className="font-bold text-[14px] text-gray-900 mb-0.5">Active</div>
          <div className="text-[12px] text-gray-500">Visible to customers</div>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" name="IsActivated" checked={isActivated} onChange={onChange} className="sr-only peer" />
          <div className="w-12 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[3px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#111827]"></div>
        </label>
      </div>
    </div>
  );
};
export default OrderVisibility;

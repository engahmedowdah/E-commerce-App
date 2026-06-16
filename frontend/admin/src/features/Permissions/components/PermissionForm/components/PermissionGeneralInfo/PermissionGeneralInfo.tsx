import type { IPermission } from "../../../../../../shared/types/Permissions/IPermission.types";
import React from 'react';
interface Props {
  mode: 'create' | 'edit';
  formData: {
    Name: string;
    Description: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}
const PermissionGeneralInfo: React.FC<Props> = ({ mode, formData, onChange }) => {
  const isCreate = mode === 'create';
  return (
    <div className="bg-white p-8 rounded-[20px] shadow-sm border border-gray-100">
      <h3 className={`${isCreate ? 'text-[13px] tracking-widest uppercase' : 'text-[17px]'} font-bold text-gray-900 mb-8`}>
        {isCreate ? 'General Information' : 'Permission Details'}
      </h3>
      <div className="mb-6">
        <label className={`block ${isCreate ? 'text-[14px] text-gray-900' : 'text-[12px] text-gray-500 tracking-widest uppercase'} font-bold mb-2`}>
          {isCreate ? 'Permission Name' : 'Permission Title'}
        </label>
        <input
          type="text"
          name="Name"
          value={(formData as unknown as IPermission).Name}
          onChange={onChange}
          className={`w-full bg-[#F3F4F6] border-none rounded-[12px] px-5 py-3.5 text-[15px] focus:bg-gray-200/50 focus:outline-none focus:ring-2 focus:ring-gray-900/10 transition-colors placeholder:text-gray-400`}
          placeholder={isCreate ? "e.g. Winter Solstice 2024" : "Summer Sale 2024"}
        />
      </div>
      <div className={isCreate ? 'mb-8' : ''}>
        <label className={`block ${isCreate ? 'text-[14px] text-gray-900' : 'text-[12px] text-gray-500 tracking-widest uppercase'} font-bold mb-2`}>
          {isCreate ? 'Description' : 'Editorial Description'}
        </label>
        <textarea
          name="Description"
          value={(formData as unknown as IPermission).Description}
          onChange={onChange}
          rows={isCreate ? 6 : 5}
          className="w-full bg-[#F3F4F6] border-none rounded-[12px] px-5 py-4 text-[15px] focus:bg-gray-200/50 focus:outline-none focus:ring-2 focus:ring-gray-900/10 transition-colors placeholder:text-gray-400"
          placeholder={isCreate ? "Describe the soul and story of this permission..." : "Our annual curated selection of seasonal essentials..."}
        ></textarea>
      </div>
    </div>
  );
};
export default PermissionGeneralInfo;

import type { IRole } from "../../../../../../shared/types/Roles/IRole.types";
import React from 'react';
interface Props {
  mode: 'create' | 'edit';
  formData: {
    Name: string;
    Description: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}
const RoleGeneralInfo: React.FC<Props> = ({ mode, formData, onChange }) => {
  const isCreate = mode === 'create';
  return (
    <div className="bg-white p-8 rounded-[20px] shadow-sm border border-gray-100">
      <h3 className={`${isCreate ? 'text-[13px] tracking-widest uppercase' : 'text-[17px]'} font-bold text-gray-900 mb-8`}>
        {isCreate ? 'General Information' : 'Role Details'}
      </h3>
      <div className="mb-6">
        <label className={`block ${isCreate ? 'text-[14px] text-gray-900' : 'text-[12px] text-gray-500 tracking-widest uppercase'} font-bold mb-2`}>
          {isCreate ? 'Role Name' : 'Role Title'}
        </label>
        <input
          type="text"
          name="Name"
          value={(formData as unknown as IRole).Name}
          onChange={onChange}
          className="w-full bg-[#F3F4F6] border-none rounded-[12px] px-5 py-3.5 text-[15px] focus:bg-gray-200/50 focus:outline-none focus:ring-2 focus:ring-gray-900/10 transition-colors placeholder:text-gray-400"
          placeholder={isCreate ? "e.g. Administrator" : "Sales Representative"}
        />
      </div>
      <div>
        <label className={`block ${isCreate ? 'text-[14px] text-gray-900' : 'text-[12px] text-gray-500 tracking-widest uppercase'} font-bold mb-2`}>
          Description
        </label>
        <textarea
          name="Description"
          value={(formData as unknown as IRole).Description}
          onChange={onChange}
          rows={isCreate ? 4 : 3}
          className="w-full bg-[#F3F4F6] border-none rounded-[12px] px-5 py-4 text-[15px] focus:bg-gray-200/50 focus:outline-none focus:ring-2 focus:ring-gray-900/10 transition-colors placeholder:text-gray-400"
          placeholder="Describe the responsibilities and access level of this role..."
        ></textarea>
      </div>
    </div>
  );
};
export default RoleGeneralInfo;

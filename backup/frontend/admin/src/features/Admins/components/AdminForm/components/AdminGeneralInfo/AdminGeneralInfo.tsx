import type { IAdmin } from "../../../../../../shared/types/Admins/IAdmin.types";
import type { IRole } from "../../../../../../shared/types/Roles/IRole.types";
import React, { useEffect, useState, useRef } from 'react';
import { GetAllRoles } from "../../../../../../business/services";
interface Props {
  mode: 'create' | 'edit';
  formData: {
    FirstName: string;
    LastName: string;
    IsActivated: boolean;
    RoleID: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}
const AdminGeneralInfo: React.FC<Props> = ({ mode, formData, onChange }) => {
  const isCreate = mode === 'create';
  const [roles, setRoles] = useState<IRole[]>([]);
  const [isRoleDropdownOpen, setIsRoleDropdownOpen] = useState(false);
  const [roleSearchTerm, setRoleSearchTerm] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    GetAllRoles({ limit: 20 })
      .then((res) => setRoles(res.data))
      .catch(() => {});
  }, []);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsRoleDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const filteredRoles = roles.filter(role =>
    role.Name.toLowerCase().includes(roleSearchTerm.toLowerCase())
  );
  const handleRoleSelect = (roleID: string) => {
    onChange({
      target: { name: 'RoleID', value: roleID }
    } as unknown as React.ChangeEvent<HTMLSelectElement>);
    setIsRoleDropdownOpen(false);
    setRoleSearchTerm("");
  };
  const selectedRoleName = roles.find(r => r._id === (formData as unknown as IAdmin).Role)?.Name || "Select Role";
  return (
    <div className="bg-white p-8 rounded-[20px] shadow-sm border border-gray-100">
      <h3 className={`${isCreate ? 'text-[13px] tracking-widest uppercase' : 'text-[17px]'} font-bold text-gray-900 mb-8`}>
        {isCreate ? 'General Information' : 'Admin Details'}
      </h3>
      <div className="mb-6">
        <label className={`block ${isCreate ? 'text-[14px] text-gray-900' : 'text-[12px] text-gray-500 tracking-widest uppercase'} font-bold mb-2`}>
          {isCreate ? 'Admin Name' : 'Admin Title'}
        </label>
        <input
          type="text"
          name="Name"
          value={(formData as unknown as IAdmin).FirstName}
          onChange={onChange}
          className={`w-full bg-[#F3F4F6] border-none rounded-[12px] px-5 py-3.5 text-[15px] focus:bg-gray-200/50 focus:outline-none focus:ring-2 focus:ring-gray-900/10 transition-colors placeholder:text-gray-400`}
          placeholder={isCreate ? "e.g. Winter Solstice 2024" : "Summer Sale 2024"}
        />
      </div>
      <div className="mb-6">
        <label className={`block ${isCreate ? 'text-[14px] text-gray-900' : 'text-[12px] text-gray-500 tracking-widest uppercase'} font-bold mb-2`}>
          Role
        </label>
        <div className="relative" ref={dropdownRef}>
          <div
            onClick={() => setIsRoleDropdownOpen(!isRoleDropdownOpen)}
            className="w-full bg-[#F3F4F6] border-none rounded-[12px] px-5 py-3.5 text-[15px] font-medium text-gray-800 cursor-pointer flex items-center justify-between"
          >
            <span className={formData.RoleID ? "text-gray-800" : "text-gray-400"}>{selectedRoleName}</span>
            <span className={`material-symbols-outlined text-gray-500 transition-transform duration-200 ${isRoleDropdownOpen ? 'rotate-180' : ''}`}>
              expand_more
            </span>
          </div>
          {isRoleDropdownOpen && (
            <div className="absolute z-10 w-full mt-2 bg-white border border-gray-100 rounded-[12px] shadow-lg overflow-hidden flex flex-col max-h-[300px]">
              <div className="p-3 border-b border-gray-50 sticky top-0 bg-white">
                <input
                  type="text"
                  placeholder="Search for a role..."
                  value={roleSearchTerm}
                  onChange={(e) => setRoleSearchTerm(e.target.value)}
                  className="w-full bg-[#F9FAFB] border border-gray-100 rounded-lg px-4 py-2.5 text-[14px] focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  autoFocus
                />
              </div>
              <div className="overflow-y-auto p-2 flex flex-col gap-1">
                {filteredRoles.length > 0 ? (
                  filteredRoles.map((role) => (
                    <button
                      key={role._id}
                      type="button"
                      onClick={() => handleRoleSelect(role._id as string)}
                      className={`text-left px-4 py-2.5 rounded-lg text-[14px] font-medium transition-colors ${
                        formData.RoleID === role._id
                          ? 'bg-primary/10 text-primary'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {role.Name}
                    </button>
                  ))
                ) : (
                  <div className="px-4 py-3 text-[14px] text-gray-500 text-center font-medium">
                    No roles found
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default AdminGeneralInfo;

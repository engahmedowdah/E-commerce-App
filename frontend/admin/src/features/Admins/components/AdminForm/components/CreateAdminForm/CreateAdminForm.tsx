import React from 'react';
import type { IAdmin } from "../../../../../../shared/types/Admins/IAdmin.types";
import AdminFormHeader from "../AdminFormHeader/AdminFormHeader";
import AdminGeneralInfo from "../AdminGeneralInfo/AdminGeneralInfo";
import AdminVisibility from "../AdminVisibility/AdminVisibility";
interface Props {
  formData: {
    FirstName: string;
    LastName: string;
    Email: string;
    RoleID: string;
    Phone: string;
    IsActivated: boolean;
  };
  loading?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  onSubmit: (e?: React.FormEvent) => void;
  onCancel: () => void;
}
const CreateAdminForm: React.FC<Props> = ({
  formData,
  loading,
  onChange,
  onSubmit,
  onCancel,
}) => {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-8 w-full max-w-7xl mx-auto">
      <AdminFormHeader
        mode="create"
        title={(formData as unknown as IAdmin).FirstName + " " + (formData as unknown as IAdmin).LastName}
        loading={loading}
        onCancel={onCancel}
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 flex flex-col gap-6">
          <AdminVisibility
            mode="create"
            isActivated={(formData as unknown as IAdmin).IsActivated}
            onChange={onChange}
          />
        </div>
        <div className="lg:col-span-7 flex flex-col gap-6 w-full">
          <AdminGeneralInfo
            mode="create"
            formData={formData}
            onChange={onChange}
          />
        </div>
      </div>
    </form>
  );
};
export default CreateAdminForm;

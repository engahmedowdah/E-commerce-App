import type { IUser } from "../../../../../../shared/types/Users/IUser.types";
import React from 'react';
import UserGeneralInfo from "../UserGeneralInfo/UserGeneralInfo";
import UserFormHeader from "../UserFormHeader/UserFormHeader";
import UserVisibility from "../UserVisibility/UserVisibility";
interface Props {
  formData: {
    FirstName: string;
    LastName: string;
    Email: string;
    Phone: string;
    IsActivated: boolean;
  };
  loading?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (e?: React.FormEvent) => void;
  onCancel: () => void;
}
const CreateUserForm: React.FC<Props> = ({
  formData,
  loading,
  onChange,
  onSubmit,
  onCancel,
}) => {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-8 w-full max-w-7xl mx-auto">
      <UserFormHeader
        mode="create"
        title={(formData as unknown as IUser).FirstName + " " + (formData as unknown as IUser).LastName}
        loading={loading}
        onCancel={onCancel}
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 flex flex-col gap-6">
          <UserVisibility
            mode="create"
            isActivated={(formData as unknown as IUser).IsActivated}
            onChange={onChange}
          />
        </div>
        <div className="lg:col-span-7 flex flex-col gap-6 w-full">
          <UserGeneralInfo
            mode="create"
            formData={formData}
            onChange={onChange}
          />
        </div>
      </div>
    </form>
  );
};
export default CreateUserForm;

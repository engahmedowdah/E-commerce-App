import type { IPermission } from "../../../../../../shared/types/Permissions/IPermission.types";
import React from 'react';
import {
  PermissionFormHeader,
  PermissionGeneralInfo,
  PermissionVisibility,
  PermissionSEOPreview,
} from '../';
interface Props {
  formData: {
    Name: string;
    Description: string;
    IsActivated: boolean;
  };
  loading?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (e?: React.FormEvent) => void;
  onCancel: () => void;
}
const CreatePermissionForm: React.FC<Props> = ({
  formData,
  loading,
  onChange,
  onSubmit,
  onCancel,
}) => {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-8 w-full max-w-7xl mx-auto">
      <PermissionFormHeader
        mode="create"
        title={(formData as unknown as IPermission).Name}
        loading={loading}
        onCancel={onCancel}
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 flex flex-col gap-6">
          <PermissionVisibility
            mode="create"
            isActivated={(formData as unknown as IPermission).IsActivated}
            onChange={onChange}
          />
        </div>
        <div className="lg:col-span-7 flex flex-col gap-6 w-full">
          <PermissionGeneralInfo
            mode="create"
            formData={formData}
            onChange={onChange}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PermissionSEOPreview
              mode="create"
              name={(formData as unknown as IPermission).Name}
              description={(formData as unknown as IPermission).Description!}
            />
          </div>
        </div>
      </div>
    </form>
  );
};
export default CreatePermissionForm;

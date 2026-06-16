import type { IPermission } from '../../../../../../shared/types/Permissions/IPermission.types';
import React from 'react';
import type { IRole } from '../../../../../../shared/types/Roles/IRole.types';
import {
  RoleFormHeader,
  RoleGeneralInfo,
  RoleVisibility,
  RoleAssignedPermissions,
} from '../';
interface Props {
  formData: {
    Name: string;
    Description: string;
    IsActivated: boolean;
    Permissions: string[];
  };
  assignedPermissions: IPermission[];
  initialData?: Partial<IRole>;
  loading?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onGenerateSlug: () => void;
  onSubmit: (e?: React.FormEvent) => void;
  onCancel: () => void;
  onAddPermissions: (permissions: IPermission[]) => void;
  onRemovePermission: (id: string) => void;
}
const EditRoleForm: React.FC<Props> = ({
  formData,
  assignedPermissions,
  loading,
  onChange,
  onSubmit,
  onCancel,
  onAddPermissions,
  onRemovePermission,
}) => {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-8 w-full max-w-6xl mx-auto">
      <RoleFormHeader
        mode="edit"
        title={(formData as unknown as IRole).Name}
        loading={loading}
        onCancel={onCancel}
      />
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-8 flex flex-col gap-6">
          <RoleGeneralInfo
            mode="edit"
            formData={formData}
            onChange={onChange}
          />
          <RoleAssignedPermissions
            permissions={assignedPermissions}
            onAddPermissions={onAddPermissions}
            onRemovePermission={onRemovePermission}
          />
        </div>
        <div className="md:col-span-4 flex flex-col gap-6">
          <RoleVisibility
            mode="edit"
            isActivated={(formData as unknown as IRole).IsActivated}
            onChange={onChange}
          />
        </div>
      </div>
    </form>
  );
};
export default EditRoleForm;

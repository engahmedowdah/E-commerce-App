import React, { useState, useEffect } from "react";
import type { IRole } from "../../../../shared/types/Roles/IRole.types";
import type { IPermission } from "../../../../shared/types/Permissions/IPermission.types";
import { GetAllPermissions } from "../../../../business/services/Permissions";
import { CreateRoleForm, EditRoleForm } from "./components";
interface RoleFormProps {
  mode: "create" | "edit";
  initialData?: Partial<IRole>;
  onSubmit: (data: IRole) => void;
  onCancel: () => void;
  loading?: boolean;
}
function resolveInitialPermissions(
  initial: (IPermission | string)[],
  allPerms: IPermission[]
): IPermission[] {
  return initial.flatMap((p) => {
    if (typeof p === "string") {
      const found = allPerms.find((ap) => ap._id === p);
      return found ? [found] : [];
    }
    return [p];
  });
}
const RoleForm = ({ mode, initialData, onSubmit, onCancel, loading }: RoleFormProps) => {
  const [assignedPermissions, setAssignedPermissions] = useState<IPermission[]>([]);
  useEffect(() => {
    GetAllPermissions({ limit: 200, sort: "name_asc" })
      .then((res) => {
        const perms = res.data ?? [];
        if (initialData?.Permissions?.length) {
          setAssignedPermissions(
            resolveInitialPermissions(
              initialData.Permissions as (IPermission | string)[],
              perms
            )
          );
        }
      })
      .catch(() => {});
  }, [initialData?.Permissions]);
  const [formData, setFormData] = useState({
    Name: initialData?.Name ?? "",
    Description: initialData?.Description ?? "",
    IsActivated: initialData?.IsActivated ?? false,
    Permissions: (initialData?.Permissions ?? []) as string[],
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };
  const handleAddPermissions = (newPerms: IPermission[]) => {
    setAssignedPermissions((prev) => {
      const existingIDs = new Set(prev.map((p) => p._id as string));
      const toAdd = newPerms.filter((p) => !existingIDs.has(p._id as string));
      return [...prev, ...toAdd];
    });
    setFormData((prev) => ({
      ...prev,
      Permissions: [
        ...prev.Permissions,
        ...newPerms
          .filter((p) => !prev.Permissions.includes(p._id as string))
          .map((p) => p._id as string),
      ],
    }));
  };
  const handleRemovePermission = (id: string) => {
    setAssignedPermissions((prev) => prev.filter((p) => p._id !== id));
    setFormData((prev) => ({
      ...prev,
      Permissions: prev.Permissions.filter((pid) => pid !== id),
    }));
  };
  const generateSlug = () => {
    const slug = formData.Name.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");
    setFormData((prev) => ({ ...prev, Slug: slug }));
  };
  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    onSubmit(formData as unknown as IRole);
  };
  if (mode === "create") {
    return (
      <CreateRoleForm
        formData={formData}
        assignedPermissions={assignedPermissions}
        loading={loading}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onCancel={onCancel}
        onAddPermissions={handleAddPermissions}
        onRemovePermission={handleRemovePermission}
      />
    );
  }
  return (
    <EditRoleForm
      formData={formData}
      assignedPermissions={assignedPermissions}
      initialData={initialData}
      loading={loading}
      onChange={handleChange}
      onGenerateSlug={generateSlug}
      onSubmit={handleSubmit}
      onCancel={onCancel}
      onAddPermissions={handleAddPermissions}
      onRemovePermission={handleRemovePermission}
    />
  );
};
export default RoleForm;

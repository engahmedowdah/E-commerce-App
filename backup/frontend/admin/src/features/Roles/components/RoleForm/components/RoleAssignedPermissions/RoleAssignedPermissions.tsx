import React, { useState } from "react";
import type { IPermission } from "../../../../../../shared/types/Permissions/IPermission.types";
import { PermissionSelectionModal } from "../../../../../../shared/components";
import { ConfirmModal } from "../../../../../../shared/components";
interface Props {
  permissions: IPermission[];
  onAddPermissions: (permissions: IPermission[]) => void;
  onRemovePermission: (id: string) => void;
}
const RoleAssignedPermissions: React.FC<Props> = ({
  permissions,
  onAddPermissions,
  onRemovePermission,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [permToRemove, setPermToRemove] = useState<string | null>(null);
  const existingIDs = permissions.map((p) => p._id as string);
  const handleRemoveClick = (id: string) => {
    setPermToRemove(id);
    setIsConfirmOpen(true);
  };
  const confirmRemove = () => {
    if (permToRemove) onRemovePermission(permToRemove);
    setIsConfirmOpen(false);
    setPermToRemove(null);
  };
  return (
    <>
      <div className="bg-white p-8 rounded-[20px] shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-[17px] font-bold text-gray-900">
            Assigned Permissions
            {permissions.length > 0 && (
              <span className="ml-2 px-2 py-0.5 text-[11px] font-bold bg-gray-100 text-gray-500 rounded-full">
                {permissions.length}
              </span>
            )}
          </h3>
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="text-[14px] font-bold text-gray-900 flex items-center gap-1.5 hover:text-gray-600 transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">add_circle</span>
            Add Permissions
          </button>
        </div>
        <div className="flex flex-col gap-2">
          {permissions.length > 0 ? (
            permissions.map((perm) => (
              <div
                key={perm._id as string}
                className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors border border-transparent hover:border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-50 rounded-[10px] flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-[18px] text-indigo-500">lock</span>
                  </div>
                  <div>
                    <div className="font-semibold text-[14px] text-gray-900">{perm.Name}</div>
                    {perm.Description && (
                      <div className="text-[12px] text-gray-500">{perm.Description}</div>
                    )}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleRemoveClick(perm._id as string)}
                  className="text-red-500/70 hover:text-red-600 p-2 transition-all mr-1"
                  title="Remove permission"
                >
                  <span className="material-symbols-outlined text-[18px]">link_off</span>
                </button>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-10 text-gray-400 gap-2">
              <span className="material-symbols-outlined text-[36px]">lock</span>
              <span className="text-[14px] font-medium">No permissions assigned</span>
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="mt-1 text-[13px] font-bold text-gray-900 underline underline-offset-2 hover:text-gray-600 transition-colors"
              >
                Assign your first permission
              </button>
            </div>
          )}
        </div>
      </div>
      <PermissionSelectionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddPermissions={onAddPermissions}
        existingPermissionIDs={existingIDs}
      />
      <ConfirmModal
        isOpen={isConfirmOpen}
        onClose={() => setIsConfirmOpen(false)}
        onConfirm={confirmRemove}
        title="Remove Permission"
        message="This will unassign the permission from this role. You can re-add it at any time."
        confirmText="Remove"
        cancelText="Cancel"
        type="warning"
      />
    </>
  );
};
export default RoleAssignedPermissions;

import "./EditRolePage.css";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import type { IRole } from "../../../../shared/types/Roles/IRole.types";
import { GetRoleByID, UpdateRole } from "../../../../business/services";
import { SuccessModal, useToast } from "../../../../shared/components";
import { RoleForm } from "../../components";
function EditRolePage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { success, error } = useToast();
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [role, setRole] = useState<IRole | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  useEffect(() => {
    if (id) {
      GetRoleByID({ RoleID: id })
        .then((res) => {
          setRole(res);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  }, [id]);
  const handleSubmit = async (data: IRole) => {
    if (!id) return;
    setSaving(true);
    try {
      await UpdateRole({ RoleID: id, role: data });
      success("Success", "Role updated successfully");
      setIsSuccessOpen(true);
    } catch (err: unknown) {
      error("Error", (err as { message?: string }).message || "Failed to update role");
    } finally {
      setSaving(false);
    }
  };
  const handleCancel = () => navigate("/roles");
  if (loading) {
    return (
      <div className="w-full h-[60vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900"></div>
      </div>
    );
  }
  if (!role) {
    return (
      <div className="p-8 text-center text-red-500 font-medium bg-red-50 rounded-xl m-8">
        Role not found
      </div>
    );
  }
  return (
    <div className="w-full p-4 md:p-8 bg-gray-50/20 min-h-screen">
      <RoleForm
        mode="edit"
        initialData={role}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        loading={saving}
      />
      <SuccessModal
        isOpen={isSuccessOpen}
        onClose={() => { setIsSuccessOpen(false); handleCancel(); }}
        title="Role Updated"
        message="Role updated successfully"
        buttonText="Go to Roles"
      />
    </div>
  );
}
export default EditRolePage;

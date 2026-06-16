import "./EditPermissionPage.css";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import type { IPermission } from "../../../../shared/types/Permissions/IPermission.types";
import { GetPermissionByID, UpdatePermission } from "../../../../business/services";
import { SuccessModal, useToast } from "../../../../shared/components";
import { PermissionForm } from "../../components";
function EditPermissionPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { success, error } = useToast();
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [permission, setPermission] = useState<IPermission | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  useEffect(() => {
    if (id) {
      GetPermissionByID({ PermissionID: id })
        .then((res) => {
          setPermission(res);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  }, [id]);
  const handleSubmit = async (data: IPermission) => {
    if (!id) return;
    setSaving(true);
    try {
      await UpdatePermission({ PermissionID: id, permission: data });
      success("Success", "Permission updated successfully");
      setIsSuccessOpen(true);
    } catch (err: unknown) {
      error("Error", (err as { message?: string }).message || "Failed to update permission");
    } finally {
      setSaving(false);
    }
  };
  const handleCancel = () => navigate("/permissions");
  if (loading) {
    return (
      <div className="w-full h-[60vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900"></div>
      </div>
    );
  }
  if (!permission) {
    return (
      <div className="p-8 text-center text-red-500 font-medium bg-red-50 rounded-xl m-8">
        Permission not found
      </div>
    );
  }
  return (
    <div className="w-full p-4 md:p-8 bg-gray-50/20 min-h-screen">
      <PermissionForm
        mode="edit"
        initialData={permission}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        loading={saving}
      />
      <SuccessModal
        isOpen={isSuccessOpen}
        onClose={() => { setIsSuccessOpen(false); handleCancel(); }}
        title="Permission Updated"
        message="Permission updated successfully"
        buttonText="Go to Permissions"
      />
    </div>
  );
}
export default EditPermissionPage;

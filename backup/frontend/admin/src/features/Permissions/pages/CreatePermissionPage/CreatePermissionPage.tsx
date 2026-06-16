import "./CreatePermissionPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { IPermission } from "../../../../shared/types/Permissions/IPermission.types";
import { CreatePermission } from "../..";
import { useToast, SuccessModal } from "../../../../shared/components";
import { PermissionForm } from "../../components";
function CreatePermissionPage() {
  const navigate = useNavigate();
  const { error } = useToast();
  const [loading, setLoading] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const handleSubmit = async (data: IPermission) => {
    setLoading(true);
    try {
      await CreatePermission({ permission: data });
      setIsSuccessModalOpen(true);
    } catch (err: unknown) {
      error("Error", (err as { message?: string }).message || "Failed to create permission");
    } finally {
      setLoading(false);
    }
  };
  const handleCancel = () => navigate("/permissions");
  const handleSuccessClose = () => {
    setIsSuccessModalOpen(false);
    navigate("/permissions");
  };
  return (
    <div className="w-full p-4 md:p-8 bg-gray-50/20 min-h-screen">
      <PermissionForm
        mode="create"
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        loading={loading}
      />
      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={handleSuccessClose}
        title="Permission Created"
        message="Permission created successfully"
        buttonText="Go to Permissions"
      />
    </div>
  );
}
export default CreatePermissionPage;

import "./CreateRolePage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { IRole } from "../../../../shared/types/Roles/IRole.types";
import { CreateRole } from "../..";
import { useToast, SuccessModal } from "../../../../shared/components";
import { RoleForm } from "../../components";
function CreateRolePage() {
  const navigate = useNavigate();
  const { error } = useToast();
  const [loading, setLoading] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const handleSubmit = async (data: IRole) => {
    setLoading(true);
    try {
      await CreateRole({ role: data });
      setIsSuccessModalOpen(true);
    } catch (err: unknown) {
      error("Error", (err as { message?: string }).message || "Failed to create role");
    } finally {
      setLoading(false);
    }
  };
  const handleCancel = () => navigate("/roles");
  const handleSuccessClose = () => {
    setIsSuccessModalOpen(false);
    navigate("/roles");
  };
  return (
    <div className="w-full p-4 md:p-8 bg-gray-50/20 min-h-screen">
      <RoleForm
        mode="create"
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        loading={loading}
      />
      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={handleSuccessClose}
        title="Role Created"
        message="Role created successfully"
        buttonText="Go to Roles"
      />
    </div>
  );
}
export default CreateRolePage;

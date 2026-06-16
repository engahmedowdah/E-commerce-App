import {useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DeleteAdmin } from "../../services";
import { useToast, ConfirmModal } from "../../../../shared/components";
const DeleteAdminPopup = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { success, error } = useToast();
  const [isModalOpen, setIsModalOpen] = useState(true);
  const handleConfirm = async () => {
    if (!id) return;
    try {
      await DeleteAdmin({ AdminID: id });
      success("Success", "Admin deleted successfully");
    } catch (err: unknown) {
      error("Error", (err as { message?: string }).message || "Failed to delete admin");
    } finally {
      setIsModalOpen(false);
      navigate("/admins");
    }
  };
  const handleClose = () => {
    setIsModalOpen(false);
    navigate("/admins");
  };
  return (
    <div className="flex items-center justify-center h-[60vh]">
      <ConfirmModal
        isOpen={isModalOpen}
        onClose={handleClose}
        onConfirm={handleConfirm}
        title="Confirm Removal"
        message="This admin will be removed from your dashboard. This action can be undone later by restoring from trash."
        confirmText="Remove"
        cancelText="Cancel"
        type="danger"
      />
      <div className="animate-pulse text-on-surface-variant font-medium">
        {!isModalOpen ? "Redirecting..." : "Waiting for confirmation..."}
      </div>
    </div>
  );
};
export default DeleteAdminPopup;

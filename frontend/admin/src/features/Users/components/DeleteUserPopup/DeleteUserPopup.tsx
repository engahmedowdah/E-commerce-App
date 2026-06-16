import {useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DeleteUser } from "../../services";
import { useToast, ConfirmModal } from "../../../../shared/components";
const DeleteUserPopup = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { success, error } = useToast();
  const [isModalOpen, setIsModalOpen] = useState(true);
  const handleConfirm = async () => {
    if (!id) return;
    try {
      await DeleteUser({ UserID: id });
      success("Success", "User deleted successfully");
    } catch (err: unknown) {
      error("Error", (err as { message?: string }).message || "Failed to delete user");
    } finally {
      setIsModalOpen(false);
      navigate("/users");
    }
  };
  const handleClose = () => {
    setIsModalOpen(false);
    navigate("/users");
  };
  return (
    <div className="flex items-center justify-center h-[60vh]">
      <ConfirmModal
        isOpen={isModalOpen}
        onClose={handleClose}
        onConfirm={handleConfirm}
        title="Confirm Removal"
        message="This user will be removed from your dashboard. This action can be undone later by restoring from trash."
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
export default DeleteUserPopup;

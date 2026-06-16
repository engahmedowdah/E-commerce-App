import "./AdminDetails.css";
import { useState } from "react";
import type { IAdmin } from "../../../../shared/types/Admins/IAdmin.types";
import LoadingAdmins from "../ListAdmins/LoadingAdmins/LoadingAdmins";
import { ConfirmModal, useToast } from "../../../../shared/components";
import {
  AdminDetailsHeader,
  AdminDetailsTabs,
  AdminDetailsContent,
} from "./components";
import { DeleteAdmin } from "../../../../business/services/Admins";
import { useNavigate } from "react-router-dom";
interface Props {
  admin?: IAdmin | null;
  Loading?: boolean;
}
const AdminDetails = ({ admin, Loading }: Props) => {
  const navigate = useNavigate();
  const { success, error } = useToast();
  const [activeTab, setActiveTab] = useState("Details");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  if (Loading) {
    return (
      <div className="py-12 flex justify-center bg-surface-container-lowest rounded-xl shadow-sm">
        <LoadingAdmins />
      </div>
    );
  }
  if (!admin) {
    return (
      <div className="py-16 flex flex-col items-center justify-center bg-surface-container-lowest rounded-xl shadow-sm border border-dashed border-surface-container-high w-full">
        <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-4">
          <span className="material-symbols-outlined text-3xl text-on-surface-variant">
            error
          </span>
        </div>
        <h4 className="text-lg font-bold text-primary mb-2">Admin Not Found</h4>
        <p className="text-sm font-medium text-on-surface-variant text-center">
            We couldn't find the admin details you're looking for.
        </p>
      </div>
    );
  }
  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await DeleteAdmin({ AdminID: admin._id as string });
      success("Admin Deleted", "The admin has been successfully moved to trash.");
      setIsDeleteModalOpen(false);
      navigate("/admins");
    } catch (err: unknown) {
      error("Error", (err as Error).message || "Failed to delete admin");
    } finally {
      setIsDeleting(false);
    }
  };
  return (
    <div className="flex flex-col flex-1 w-full max-w-[1200px] mx-auto">
      <AdminDetailsHeader
        admin={admin as IAdmin}
        onDelete={() => setIsDeleteModalOpen(true)}
      />
      <AdminDetailsTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <AdminDetailsContent
        activeTab={activeTab}
        admin={admin as IAdmin}
      />
      <ConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDelete}
        title="Delete Admin"
        message={`Are you sure you want to delete the admin "${(admin as IAdmin).FirstName} ${(admin as IAdmin).LastName}"? This action will move it to the trash.`}
        confirmText={isDeleting ? "Deleting..." : "Delete"}
        cancelText="Cancel"
        type="danger"
      />
    </div>
  );
};
export default AdminDetails;

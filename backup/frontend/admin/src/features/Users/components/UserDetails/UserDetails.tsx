import "./UserDetails.css";
import { useState } from "react";
import type { IUser } from "../../../../shared/types/Users/IUser.types";
import LoadingUsers from "../ListUsers/LoadingUsers/LoadingUsers";
import { ConfirmModal, useToast } from "../../../../shared/components";
import {
  UserDetailsHeader,
  UserDetailsTabs,
  UserDetailsContent,
} from "./components";
import { DeleteUser } from "../../../../business/services/Users";
import { useNavigate } from "react-router-dom";
interface Props {
  user?: IUser | null;
  Loading?: boolean;
}
const UserDetails = ({ user, Loading }: Props) => {
  const navigate = useNavigate();
  const { success, error } = useToast();
  const [activeTab, setActiveTab] = useState("Details");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  if (Loading) {
    return (
      <div className="py-12 flex justify-center bg-surface-container-lowest rounded-xl shadow-sm">
        <LoadingUsers />
      </div>
    );
  }
  if (!user) {
    return (
      <div className="py-16 flex flex-col items-center justify-center bg-surface-container-lowest rounded-xl shadow-sm border border-dashed border-surface-container-high w-full">
        <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-4">
          <span className="material-symbols-outlined text-3xl text-on-surface-variant">
            error
          </span>
        </div>
        <h4 className="text-lg font-bold text-primary mb-2">User Not Found</h4>
        <p className="text-sm font-medium text-on-surface-variant text-center">
            We couldn't find the user details you're looking for.
        </p>
      </div>
    );
  }
  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await DeleteUser({ UserID: user._id as string });
      success("User Deleted", "The user has been successfully moved to trash.");
      setIsDeleteModalOpen(false);
      navigate("/users");
    } catch (err: unknown) {
      error("Error", (err as Error).message || "Failed to delete user");
    } finally {
      setIsDeleting(false);
    }
  };
  return (
    <div className="flex flex-col flex-1 w-full max-w-[1200px] mx-auto">
      <UserDetailsHeader
        user={user as IUser}
        onDelete={() => setIsDeleteModalOpen(true)}
      />
      <UserDetailsTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <UserDetailsContent
        activeTab={activeTab}
        user={user as IUser}
      />
      <ConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDelete}
        title="Delete User"
        message={`Are you sure you want to delete the user "${user.FirstName} ${user.LastName}"? This action will move it to the trash.`}
        confirmText={isDeleting ? "Deleting..." : "Delete"}
        cancelText="Cancel"
        type="danger"
      />
    </div>
  );
};
export default UserDetails;

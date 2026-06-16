import "./CreateUserPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { IUser } from "../../../../shared/types/Users/IUser.types";
import { CreateUser } from "../..";
import { useToast, SuccessModal } from "../../../../shared/components";
import { UserForm } from "../../components";
function CreateUserPage() {
  const navigate = useNavigate();
  const { error } = useToast();
  const [loading, setLoading] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const handleSubmit = async (data: IUser) => {
    setLoading(true);
    try {
      await CreateUser({ email: data.Email, password: data.Password });
      setIsSuccessModalOpen(true);
    } catch (err: unknown) {
      error("Error", (err as { message?: string }).message || "Failed to create user");
    } finally {
      setLoading(false);
    }
  };
  const handleCancel = () => navigate("/users");
  const handleSuccessClose = () => {
    setIsSuccessModalOpen(false);
    navigate("/users");
  };
  return (
    <div className="w-full p-4 md:p-8 bg-gray-50/20 min-h-screen">
      <UserForm
        mode="create"
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        loading={loading}
      />
      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={handleSuccessClose}
        title="User Created"
        message="User created successfully"
        buttonText="Go to Users"
      />
    </div>
  );
}
export default CreateUserPage;

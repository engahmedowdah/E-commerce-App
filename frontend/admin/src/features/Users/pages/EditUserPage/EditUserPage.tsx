import "./EditUserPage.css";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import type { IUser } from "../../../../shared/types/Users/IUser.types";
import { GetUserByID, UpdateUser } from "../../../../business/services";
import { SuccessModal, useToast } from "../../../../shared/components";
import { UserForm } from "../../components";
function EditUserPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { success, error } = useToast();
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  useEffect(() => {
    if (id) {
      GetUserByID({ UserID: id })
        .then((res) => {
          setUser(res);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  }, [id]);
  const handleSubmit = async (data: IUser) => {
    if (!id) return;
    setSaving(true);
    try {
      await UpdateUser({ UserID: id, user: data });
      success("Success", "User updated successfully");
      setIsSuccessOpen(true);
    } catch (err: unknown) {
      error("Error", (err as { message?: string }).message || "Failed to update user");
    } finally {
      setSaving(false);
    }
  };
  const handleCancel = () => navigate("/users");
  if (loading) {
    return (
      <div className="w-full h-[60vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900"></div>
      </div>
    );
  }
  if (!user) {
    return (
      <div className="p-8 text-center text-red-500 font-medium bg-red-50 rounded-xl m-8">
        User not found
      </div>
    );
  }
  return (
    <div className="w-full p-4 md:p-8 bg-gray-50/20 min-h-screen">
      <UserForm
        mode="edit"
        initialData={user}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        loading={saving}
      />
      <SuccessModal
        isOpen={isSuccessOpen}
        onClose={() => { setIsSuccessOpen(false); handleCancel(); }}
        title="User Updated"
        message="User updated successfully"
        buttonText="Go to Users"
      />
    </div>
  );
}
export default EditUserPage;

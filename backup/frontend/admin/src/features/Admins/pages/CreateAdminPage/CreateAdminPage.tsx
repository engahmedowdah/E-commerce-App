import "./CreateAdminPage.css";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import type { IAdmin } from "../../../../shared/types/Admins/IAdmin.types";
import type { IRole } from "../../../../shared/types/Roles/IRole.types";
import { CreateAdmin, GetAllRoles } from "../../../../business/services";
import { useToast, SuccessModal } from "../../../../shared/components";
function CreateAdminPage() {
  const navigate = useNavigate();
  const { error } = useToast();
  const [loading, setLoading] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Phone: "",
    Password: "",
    PasswordConfirm: "",
    UserName: "",
    RoleID: "",
    IsActivated: false,
  });
  const [roles, setRoles] = useState<IRole[]>([]);
  const [isRoleDropdownOpen, setIsRoleDropdownOpen] = useState(false);
  const [roleSearchTerm, setRoleSearchTerm] = useState("");
  useEffect(() => {
    GetAllRoles({ limit: 300, sort: "name_asc" }).then(res => { if (res.data) setRoles(res.data); }).catch(() => {});
  }, []);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await CreateAdmin({ admin: formData as unknown as IAdmin });
      if (!res) {
        throw new Error("Please fill all required fields and select a Role");
      }
      setIsSuccessModalOpen(true);
    } catch (err: unknown) {
      error("Error", (err as { message?: string }).message || "Failed to create admin");
    } finally {
      setLoading(false);
    }
  };
  const handleCancel = () => navigate("/admins");
  const handleSuccessClose = () => { setIsSuccessModalOpen(false); navigate("/admins"); };
  return (
    <div className="w-full p-4 md:p-8 bg-gray-50/20 min-h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full max-w-5xl mx-auto">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center gap-2 text-sm text-on-surface-variant mb-2">
              <Link to="/admins" className="flex items-center gap-1 hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                <span className="font-medium">Admins</span>
              </Link>
              <span className="material-symbols-outlined text-[18px]">chevron_right</span>
              <span className="text-on-surface font-semibold">Add New Admin</span>
            </div>
            <h1 className="text-[40px] font-bold text-gray-900 mb-3 tracking-tight">Create Admin</h1>
            <p className="text-[15px] text-gray-600 max-w-xl leading-relaxed">
              Assign administrative roles to existing users.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button type="button" onClick={handleCancel} className="px-6 py-2.5 rounded-lg bg-gray-200/60 text-gray-800 font-bold text-sm hover:bg-gray-200 transition-colors">
              Discard
            </button>
            <button type="submit" disabled={loading} className="px-6 py-2.5 rounded-lg bg-[#111827] text-white font-bold text-sm hover:bg-black transition-colors flex items-center gap-2 shadow-sm">
              {loading && <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>}
              Save Admin
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="bg-white p-8 rounded-[20px] shadow-sm border border-gray-100">
              <h3 className="text-[13px] tracking-widest uppercase font-bold text-gray-900 mb-8">Admin Information</h3>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-[14px] text-gray-900 font-bold mb-2">First Name</label>
                  <input
                    type="text"
                    name="FirstName"
                    value={formData.FirstName}
                    onChange={handleChange}
                    placeholder="Enter first name"
                    className="w-full bg-[#F3F4F6] border-none rounded-[12px] px-5 py-3.5 text-[15px] focus:ring-2 focus:ring-[#111827] focus:outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[14px] text-gray-900 font-bold mb-2">Last Name</label>
                  <input
                    type="text"
                    name="LastName"
                    value={formData.LastName}
                    onChange={handleChange}
                    placeholder="Enter last name"
                    className="w-full bg-[#F3F4F6] border-none rounded-[12px] px-5 py-3.5 text-[15px] focus:ring-2 focus:ring-[#111827] focus:outline-none transition-all"
                    required
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-[14px] text-gray-900 font-bold mb-2">Email</label>
                <input
                  type="email"
                  name="Email"
                  value={formData.Email}
                  onChange={handleChange}
                  placeholder="Enter email address"
                  className="w-full bg-[#F3F4F6] border-none rounded-[12px] px-5 py-3.5 text-[15px] focus:ring-2 focus:ring-[#111827] focus:outline-none transition-all"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-[14px] text-gray-900 font-bold mb-2">UserName</label>
                <input
                  type="text"
                  name="UserName"
                  value={formData.UserName}
                  onChange={handleChange}
                  placeholder="Enter password"
                  className="w-full bg-[#F3F4F6] border-none rounded-[12px] px-5 py-3.5 text-[15px] focus:ring-2 focus:ring-[#111827] focus:outline-none transition-all"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-[14px] text-gray-900 font-bold mb-2">Phone</label>
                <input
                  type="text"
                  name="Phone"
                  value={formData.Phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  className="w-full bg-[#F3F4F6] border-none rounded-[12px] px-5 py-3.5 text-[15px] focus:ring-2 focus:ring-[#111827] focus:outline-none transition-all"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-[14px] text-gray-900 font-bold mb-2">Password</label>
                <input
                  type="password"
                  name="Password"
                  value={formData.Password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  className="w-full bg-[#F3F4F6] border-none rounded-[12px] px-5 py-3.5 text-[15px] focus:ring-2 focus:ring-[#111827] focus:outline-none transition-all"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-[14px] text-gray-900 font-bold mb-2">Password Confirm</label>
                <input
                  type="password"
                  name="PasswordConfirm"
                  value={formData.PasswordConfirm}
                  onChange={handleChange}
                  placeholder="Enter password confirm"
                  className="w-full bg-[#F3F4F6] border-none rounded-[12px] px-5 py-3.5 text-[15px] focus:ring-2 focus:ring-[#111827] focus:outline-none transition-all"
                  required
                />
              </div>
              <div className="mb-6 relative">
                <label className="block text-[14px] text-gray-900 font-bold mb-2">Select Role</label>
                <div
                  className="w-full bg-[#F3F4F6] border-none rounded-[12px] px-5 py-3.5 text-[15px] cursor-pointer flex justify-between items-center"
                  onClick={() => setIsRoleDropdownOpen(!isRoleDropdownOpen)}
                >
                  <span className={formData.RoleID ? "text-gray-900" : "text-gray-400"}>
                    {roles.find(r => r._id === formData.RoleID)?.Name || formData.RoleID || "Search for a role..."}
                  </span>
                  <span className="material-symbols-outlined text-[18px]">expand_more</span>
                </div>
                {isRoleDropdownOpen && (
                  <div className="absolute z-10 w-full mt-2 bg-white border border-gray-100 rounded-[12px] shadow-lg max-h-60 flex flex-col overflow-hidden">
                    <div className="p-2 border-b border-gray-100">
                      <input
                        type="text"
                        placeholder="Search roles..."
                        value={roleSearchTerm}
                        onChange={(e) => setRoleSearchTerm(e.target.value)}
                        className="w-full bg-[#F9FAFB] border-none rounded-[8px] px-3 py-2 text-[14px] focus:outline-none"
                      />
                    </div>
                    <div className="overflow-y-auto">
                      {roles.filter(r => (r.Name||"").toLowerCase().includes(roleSearchTerm.toLowerCase())).map(role => (
                        <div
                          key={role._id}
                          className="px-5 py-3 hover:bg-gray-50 cursor-pointer text-[14px] text-gray-700"
                          onClick={() => { setFormData(prev => ({...prev, RoleID: role._id as string})); setIsRoleDropdownOpen(false); setRoleSearchTerm(""); }}
                        >
                          {role.Name}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-6 w-full">
            <div className="bg-white p-6 rounded-[20px] shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-5 mt-1">
                <h3 className="text-[16px] font-bold text-gray-900">Admin Status</h3>
                <span className={`px-2 py-0.5 text-white text-[10px] font-bold uppercase tracking-wider rounded ${formData.IsActivated ? 'bg-[#064E3B]' : 'bg-red-800'}`}>
                  {formData.IsActivated ? 'Active' : 'Inactive'}
                </span>
              </div>
              <div className="bg-[#F9FAFB] rounded-[16px] p-4 flex items-center justify-between border border-gray-100">
                <div>
                  <div className="font-bold text-[14px] text-gray-900 mb-0.5">Active</div>
                  <div className="text-[12px] text-gray-500">Allow dashboard access</div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" name="IsActivated" checked={formData.IsActivated} onChange={handleChange} className="sr-only peer" />
                  <div className="w-12 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[3px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#111827]"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </form>
      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={handleSuccessClose}
        title="Admin Created"
        message="Admin created successfully"
        buttonText="Go to Admins"
      />
    </div>
  );
}
export default CreateAdminPage;

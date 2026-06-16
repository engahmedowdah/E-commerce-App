import "./EditAdminPage.css";
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import type { IAdmin } from "../../../../shared/types/Admins/IAdmin.types";
import type { IRole } from "../../../../shared/types/Roles/IRole.types";
import { GetAdminByID, UpdateAdmin, GetAllRoles } from "../../../../business/services";
import { SuccessModal, useToast } from "../../../../shared/components";
function EditAdminPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { success, error } = useToast();
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [admin, setAdmin] = useState<IAdmin | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Phone: "",
    Password:"",
    PasswordConfirm:"",
    UserName:"",
    RoleID: "",
    IsActivated: false,
  });
  const [roles, setRoles] = useState<IRole[]>([]);
  const [isRoleDropdownOpen, setIsRoleDropdownOpen] = useState(false);
  const [roleSearchTerm, setRoleSearchTerm] = useState("");
  useEffect(() => {
    GetAllRoles({ limit: 300, sort: "name_asc" }).then(res => setRoles(res.data)).catch(() => {});
    if (id) {
      GetAdminByID({ AdminID: id })
        .then((res) => {
          setAdmin(res);
          setFormData({
            FirstName: res.FirstName || "",
            LastName: res.LastName || "",
            Email: res.Email || "",
            Phone:res.Phone || "",
            Password:"", 
            PasswordConfirm:"",
            UserName:"",
            RoleID: (res.Role as IRole)._id || "",
            IsActivated: res.IsActivated ?? false,
          });
          setLoading(false);
        })
        .catch(() => { setLoading(false); });
    }
  }, [id]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!id || !admin) return;
    setSaving(true);
    try {
      await UpdateAdmin({ AdminID: id, admin: formData as unknown as IAdmin });
      if ((formData.FirstName !== admin.FirstName || formData.LastName !== admin.LastName || formData.Email !== admin.Email || formData.RoleID !== (admin.Role as unknown as IRole)?._id || formData.IsActivated !== admin.IsActivated)) {
        setAdmin(formData as unknown as IAdmin);
      }
      success("Success", "Admin updated successfully");
      setIsSuccessOpen(true);
    } catch (err) {
      error("Error", (err as Error).message || "Failed to update admin");
    } finally {
      setSaving(false);
    }
  };
  const handleCancel = () => navigate("/admins");
  const getFullName = (): string => {
    if (!admin) return "Admin";
    const first = admin.FirstName || "";
    const last = admin.LastName || "";
    return `${first} ${last}`.trim() || "Admin";
  };
  if (loading) {
    return (
      <div className="w-full h-[60vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900"></div>
      </div>
    );
  }
  if (!admin) {
    return (
      <div className="p-8 text-center text-red-500 font-medium bg-red-50 rounded-xl m-8">
        Admin not found
      </div>
    );
  }
  return (
    <div className="w-full p-4 md:p-8 bg-gray-50/20 min-h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full max-w-6xl mx-auto">
        <div className="flex justify-between items-end pb-2">
          <div>
            <div className="flex items-center gap-2 text-sm text-on-surface-variant mb-3">
              <Link to="/admins" className="flex items-center gap-1 hover:text-primary transition-colors hover-translate-y">
                <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                <span className="font-medium">Admins</span>
              </Link>
              <span className="material-symbols-outlined text-[18px]">chevron_right</span>
              <span className="text-on-surface font-semibold">Update Admin</span>
            </div>
            <h1 className="text-[38px] font-bold text-gray-900 mb-3 tracking-tight">{getFullName()}</h1>
            <p className="text-[15px] text-gray-600 max-w-xl leading-relaxed">Update administrative access, roles, and account settings.</p>
          </div>
          <div className="flex items-center gap-3">
            <button type="button" onClick={handleCancel} className="px-6 py-2.5 rounded-lg bg-gray-200/60 text-gray-800 font-bold text-sm hover:bg-gray-200 transition-colors">Cancel</button>
            <button type="submit" disabled={saving} className="px-6 py-2.5 rounded-lg bg-[#111827] text-white font-bold text-sm hover:bg-black transition-colors flex items-center gap-2 shadow-sm">
              {saving && <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>}
              Update Admin
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8 flex flex-col gap-6">
            <div className="bg-white p-8 rounded-[20px] shadow-sm border border-gray-100">
              <h3 className="text-[17px] font-bold text-gray-900 mb-8">Admin Details</h3>
              <div className="mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[12px] text-gray-500 tracking-widest uppercase font-bold mb-2">First Name</label>
                  <input type="text" name="FirstName" value={formData.FirstName} onChange={handleChange} className="w-full bg-[#F3F4F6] border-none rounded-[12px] px-5 py-3.5 text-[15px] focus:bg-gray-200/50 focus:outline-none focus:ring-2 focus:ring-gray-900/10 transition-colors placeholder:text-gray-400" placeholder="First Name" />
                </div>
                <div>
                  <label className="block text-[12px] text-gray-500 tracking-widest uppercase font-bold mb-2">Last Name</label>
                  <input type="text" name="LastName" value={formData.LastName} onChange={handleChange} className="w-full bg-[#F3F4F6] border-none rounded-[12px] px-5 py-3.5 text-[15px] focus:bg-gray-200/50 focus:outline-none focus:ring-2 focus:ring-gray-900/10 transition-colors placeholder:text-gray-400" placeholder="Last Name" />
                </div>
              </div>
              <div className="mt-6">
                <label className="block text-[12px] text-gray-500 tracking-widest uppercase font-bold mb-2">Email</label>
                <input type="text" name="Email" value={formData.Email} onChange={handleChange} className="w-full bg-[#F9FAFB] border border-gray-100 rounded-[12px] px-5 py-3.5 text-[15px] text-gray-600" placeholder={admin?.Email || "N/A"} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="mt-6">
                <label className="block text-[12px] text-gray-500 tracking-widest uppercase font-bold mb-2">Phone</label>
                <input type="text" name="Phone" value={formData.Phone} onChange={handleChange} className="w-full bg-[#F9FAFB] border border-gray-100 rounded-[12px] px-5 py-3.5 text-[15px] text-gray-600" placeholder={admin?.Phone || "N/A"} />
              </div>
              <div className="mt-6">
                <label className="block text-[12px] text-gray-500 tracking-widest uppercase font-bold mb-2">UserName</label>
                <input type="text" name="UserName" value={formData.UserName} onChange={handleChange} className="w-full bg-[#F9FAFB] border border-gray-100 rounded-[12px] px-5 py-3.5 text-[15px] text-gray-600" placeholder={admin?.UserName || "N/A"} />
              </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="mt-6">
                <label className="block text-[12px] text-gray-500 tracking-widest uppercase font-bold mb-2">Password</label>
                <input type="password" name="Password" value={formData.Password} onChange={handleChange} className="w-full bg-[#F9FAFB] border border-gray-100 rounded-[12px] px-5 py-3.5 text-[15px] text-gray-600" placeholder="N/A" />
              </div>
              <div className="mt-6">
                <label className="block text-[12px] text-gray-500 tracking-widest uppercase font-bold mb-2">Confirm Password</label>
                <input type="password" name="PasswordConfirm" value={formData.PasswordConfirm} onChange={handleChange} className="w-full bg-[#F9FAFB] border border-gray-100 rounded-[12px] px-5 py-3.5 text-[15px] text-gray-600" placeholder="N/A" />
              </div>
              </div>
              </div>
              <div className="mb-6 relative">
                <label className="block text-[12px] text-gray-500 tracking-widest uppercase font-bold mb-2">Role</label>
                <div
                  className="w-full bg-[#F3F4F6] border-none rounded-[12px] px-5 py-3.5 text-[15px] cursor-pointer flex justify-between items-center"
                  onClick={() => setIsRoleDropdownOpen(!isRoleDropdownOpen)}
                >
                  <span className={formData.RoleID ? "text-gray-900" : "text-gray-400"}>
                    {roles.find(r => r._id === formData.RoleID)?.Name || "Select a role"}
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
          <div className="md:col-span-4 flex flex-col gap-6">
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
                  <div className="text-[12px] text-gray-500">Allow login and dashboard access</div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" name="IsActivated" checked={formData.IsActivated} onChange={handleChange} className="sr-only peer" />
                  <div className="w-12 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[3px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#111827]"></div>
                </label>
              </div>
            </div>
            <div className="bg-white p-7 rounded-[20px] shadow-sm border border-gray-100">
              <h3 className="text-[16px] font-bold text-gray-900 mb-6 mt-1">Account Info</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-[11px] font-bold text-gray-500 tracking-widest uppercase mb-2">Admin ID</label>
                  <div className="w-full bg-[#F9FAFB] border border-gray-100 rounded-[12px] px-4 py-3 text-[13px] font-mono text-gray-600 select-all break-all">{admin._id || 'N/A'}</div>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-500 tracking-widest uppercase mb-2">Created</label>
                  <div className="w-full bg-[#F9FAFB] border border-gray-100 rounded-[12px] px-4 py-3 text-[13px] font-medium text-gray-600">
                    {admin.CreatedDate ? new Date(admin.CreatedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : 'Unknown'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <SuccessModal
        isOpen={isSuccessOpen}
        onClose={() => { setIsSuccessOpen(false); handleCancel(); }}
        title="Admin Updated"
        message="Admin updated successfully"
        buttonText="Go to Admins"
      />
    </div>
  );
}
export default EditAdminPage;

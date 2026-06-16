import React from 'react';
interface Props {
  name: string;
  email: string;
  role: string;
  phone?: string;
  username?: string;
}
const AdminDetailsInfo: React.FC<Props> = ({ name, email, role, phone, username }) => {
  return (
    <div className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/30 shadow-sm glass-panel hover:shadow-md transition-shadow">
      <h3 className="text-xl font-bold text-on-surface mb-8 flex items-center gap-3">
        <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
          <span className="material-symbols-outlined text-[18px]">info</span>
        </span>
        Basic Information
      </h3>
      <div className="space-y-8">
        <div className="group">
          <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wider mb-3">Name</p>
          <p className="text-lg font-medium text-on-surface bg-surface-container-low/50 p-4 rounded-xl border border-outline-variant/20 transition-colors group-hover:bg-surface-container-low">{name}</p>
        </div>
        <div className="group">
           <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wider mb-3">Email</p>
           <p className="text-base text-on-surface leading-relaxed bg-surface-container-low/50 p-5 rounded-xl border border-outline-variant/20 transition-colors group-hover:bg-surface-container-low min-h-[120px]">
              {email || <span className="italic text-on-surface-variant/70">No email provided.</span>}
           </p>
        </div>
        <div className="group">
           <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wider mb-3">Role</p>
           <p className="text-base text-on-surface leading-relaxed bg-surface-container-low/50 p-5 rounded-xl border border-outline-variant/20 transition-colors group-hover:bg-surface-container-low min-h-[120px]">
              {role || <span className="italic text-on-surface-variant/70">No role.</span>}
           </p>
        </div>
        <div className="group">
           <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wider mb-3">Phone</p>
           <p className="text-base text-on-surface leading-relaxed bg-surface-container-low/50 p-5 rounded-xl border border-outline-variant/20 transition-colors group-hover:bg-surface-container-low min-h-[120px]">
              {phone || <span className="italic text-on-surface-variant/70">No phone provided.</span>}
           </p>
        </div>
        <div className="group">
           <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wider mb-3">UserName</p>
           <p className="text-base text-on-surface leading-relaxed bg-surface-container-low/50 p-5 rounded-xl border border-outline-variant/20 transition-colors group-hover:bg-surface-container-low min-h-[120px]">
              {username || <span className="italic text-on-surface-variant/70">No username provided.</span>}
           </p>
        </div>
      </div>
    </div>
  );
};
export default AdminDetailsInfo;

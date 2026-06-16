import React from 'react';
interface Props {
  name: string;
  description: string;
}
const RoleDetailsInfo: React.FC<Props> = ({ name, description }) => {
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
           <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wider mb-3">Description</p>
           <p className="text-base text-on-surface leading-relaxed bg-surface-container-low/50 p-5 rounded-xl border border-outline-variant/20 transition-colors group-hover:bg-surface-container-low min-h-[120px]">
              {description || <span className="italic text-on-surface-variant/70">No description provided.</span>}
           </p>
        </div>
      </div>
    </div>
  );
};
export default RoleDetailsInfo;

import React from 'react';
import { Link } from 'react-router-dom';
import type { IPermission } from '../../../../../../shared/types/Permissions/IPermission.types';
interface Props {
  permissions: IPermission[];
}
const RoleDetailsPermissions: React.FC<Props> = ({ permissions }) => {
  return (
    <div className={`bg-surface-container-lowest rounded-3xl p-8 md:p-12 border border-outline-variant/30 shadow-sm glass-panel flex flex-col w-full hover:shadow-md transition-shadow mb-12 ${permissions.length === 0 ? 'justify-center items-center min-h-[24rem]' : 'justify-start items-stretch min-h-[24rem]'}`}>
      {permissions.length === 0 ? (
        <>
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 animate-pulse-slow">
            <span className="material-symbols-outlined text-4xl">inventory_2</span>
          </div>
          <h3 className="text-2xl font-bold text-on-surface mb-3 tracking-tight">Permissions Management</h3>
          <p className="text-on-surface-variant mb-6 text-center max-w-md">Manage permissions assigned to this role. You can add new permissions or remove existing ones.</p>
          <button className="px-6 py-2.5 bg-surface-container-highest text-on-surface rounded-xl font-semibold hover:bg-surface-container-high transition-colors shadow-sm flex items-center gap-2">
             <span className="material-symbols-outlined text-[18px]">add</span>
             Assign Permissions
          </button>
        </>
      ) : (
        <>
          <div className="w-full flex justify-between items-center border-b border-outline-variant/30 pb-4 mb-8">
              <h3 className="text-2xl font-bold text-on-surface flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[20px]">inventory_2</span>
                </span>
                Assigned Permissions
              </h3>
              <button className="px-6 py-2.5 bg-primary text-on-primary rounded-xl font-semibold hover:bg-primary/90 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">add</span>
                Assign Permissions
              </button>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in">
            {permissions.map((permission) => (
              <div key={permission._id} className="bg-surface-container-low rounded-2xl overflow-hidden border border-outline-variant/30 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group flex flex-col">
                <div className="p-5 flex flex-col flex-1">
                  <div className="mb-2">
                    <h4 className="text-lg font-bold text-on-surface mb-1 truncate group-hover:text-primary transition-colors">{(permission as IPermission).Name}</h4>
                  </div>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-outline-variant/20">
                    <div className="flex gap-2">
                       <Link
                         to={`/permissions/edit/${permission._id}`}
                         className="w-9 h-9 rounded-xl bg-surface-container-highest flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors"
                         title="Edit Permission"
                       >
                         <span className="material-symbols-outlined text-[16px]">edit</span>
                       </Link>
                       <Link
                         to={`/permissions/${permission._id}`}
                         className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-colors"
                         title="View Permission Details"
                       >
                         <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                       </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
export default RoleDetailsPermissions;

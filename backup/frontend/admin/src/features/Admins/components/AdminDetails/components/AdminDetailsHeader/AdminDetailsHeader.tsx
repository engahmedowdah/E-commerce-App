import React from 'react';
import { Link } from 'react-router-dom';
import type { IAdmin } from '../../../../../../shared/types/Admins/IAdmin.types';
interface Props {
  admin: IAdmin;
  onDelete: () => void;
}
const AdminDetailsHeader: React.FC<Props> = ({ admin, onDelete }) => {
  return (
    <>
      <div className="flex items-center gap-2 text-sm text-on-surface-variant mb-6">
        <Link to="/admins" className="flex items-center gap-1 hover:text-primary transition-colors hover-translate-y">
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          <span className="font-medium">Admins</span>
        </Link>
        <span className="material-symbols-outlined text-[18px]">chevron_right</span>
        <span className="text-on-surface font-semibold">{(admin as IAdmin).FirstName} {(admin as IAdmin).LastName}</span>
      </div>
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
        <div>
          <h1 className="text-[32px] md:text-[40px] font-extrabold text-on-surface mb-6 tracking-tight leading-tight glow-text-sm">
            {(admin as IAdmin).FirstName} {(admin as IAdmin).LastName}
          </h1>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-4 bg-surface-container-lowest/80 backdrop-blur-xl px-5 py-3 rounded-2xl border border-outline-variant/30 shadow-sm hover-lift group">
              <div className="w-12 h-12 rounded-xl bg-tertiary/10 flex items-center justify-center text-tertiary group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-2xl">calendar_today</span>
              </div>
              <div>
                <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-0.5 opacity-80">Created</p>
                <p className="text-lg font-bold text-on-surface">
                  {(admin as IAdmin).CreatedDate ? new Date((admin as IAdmin).CreatedDate!).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : 'Unknown'}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-surface-container-lowest/80 backdrop-blur-xl px-5 py-3 rounded-2xl border border-outline-variant/30 shadow-sm hover-lift group">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${(admin as IAdmin).IsActivated ? 'bg-green-500/10 text-green-600 dark:text-green-400' : 'bg-red-500/10 text-red-600 dark:text-red-400'}`}>
                <span className="material-symbols-outlined text-2xl">{(admin as IAdmin).IsActivated ? 'check_circle' : 'cancel'}</span>
              </div>
              <div>
                <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-0.5 opacity-80">Status</p>
                <p className={`text-lg font-bold ${(admin as IAdmin).IsActivated ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                  {(admin as IAdmin).IsActivated ? 'Active' : 'Inactive'}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0 mt-2 md:mt-0">
          <button
            onClick={onDelete}
            className="flex items-center justify-center w-12 h-12 rounded-2xl bg-error/10 text-error hover:bg-error hover:text-on-error transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:bg-error/20 active:scale-95 focus:outline-none"
          >
            <span className="material-symbols-outlined text-[20px]">delete</span>
          </button>
          <Link to={`/admins/edit/${admin._id}`} className="flex items-center gap-2 px-6 py-3 bg-primary text-on-primary rounded-2xl font-semibold hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98]">
            <span className="material-symbols-outlined text-[20px]">edit</span>
            Edit Admin
          </Link>
        </div>
      </div>
    </>
  );
};
export default AdminDetailsHeader;

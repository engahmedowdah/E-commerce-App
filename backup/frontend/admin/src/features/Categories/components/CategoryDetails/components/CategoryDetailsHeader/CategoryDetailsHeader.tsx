import React from 'react';
import { Link } from 'react-router-dom';
import type { ICategory } from '../../../../../../shared/types/Categories/ICategory.types';
interface Props {
  category: ICategory;
  onDelete: () => void;
}
const CategoryDetailsHeader: React.FC<Props> = ({ category, onDelete }) => {
  return (
    <>
      <div className="flex items-center gap-2 text-sm text-on-surface-variant mb-6">
        <Link to="/categories" className="flex items-center gap-1 hover:text-primary transition-colors hover-translate-y">
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          <span className="font-medium">Categories</span>
        </Link>
        <span className="material-symbols-outlined text-[18px]">chevron_right</span>
        <span className="text-on-surface font-semibold">{(category as ICategory).Name}</span>
      </div>
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
        <div>
          <h1 className="text-[32px] md:text-[40px] font-extrabold text-on-surface mb-6 tracking-tight leading-tight glow-text-sm">
            {(category as ICategory).Name}
          </h1>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-4 bg-surface-container-lowest/80 backdrop-blur-xl px-5 py-3 rounded-2xl border border-outline-variant/30 shadow-sm hover-lift group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-2xl">inventory_2</span>
              </div>
              <div>
                <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-0.5 opacity-80">Products</p>
                <p className="text-lg font-bold text-on-surface">{(category as ICategory)?.Products?.length || 0}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-surface-container-lowest/80 backdrop-blur-xl px-5 py-3 rounded-2xl border border-outline-variant/30 shadow-sm hover-lift group">
              <div className="w-12 h-12 rounded-xl bg-tertiary/10 flex items-center justify-center text-tertiary group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-2xl">calendar_today</span>
              </div>
              <div>
                <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-0.5 opacity-80">Created</p>
                <p className="text-lg font-bold text-on-surface">
                  {category?.CreatedDate ? new Date(category.CreatedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : 'Unknown'}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-surface-container-lowest/80 backdrop-blur-xl px-5 py-3 rounded-2xl border border-outline-variant/30 shadow-sm hover-lift group">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${(category as ICategory).IsActivated ? 'bg-green-500/10 text-green-600 dark:text-green-400' : 'bg-red-500/10 text-red-600 dark:text-red-400'}`}>
                <span className="material-symbols-outlined text-2xl">{(category as ICategory).IsActivated ? 'check_circle' : 'cancel'}</span>
              </div>
              <div>
                <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-0.5 opacity-80">Status</p>
                <p className={`text-lg font-bold ${(category as ICategory).IsActivated ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                  {(category as ICategory).IsActivated ? 'Active' : 'Inactive'}
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
          <Link to={`/categories/edit/${category._id}`} className="flex items-center gap-2 px-6 py-3 bg-primary text-on-primary rounded-2xl font-semibold hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98]">
            <span className="material-symbols-outlined text-[20px]">edit</span>
            Edit Category
          </Link>
        </div>
      </div>
    </>
  );
};
export default CategoryDetailsHeader;

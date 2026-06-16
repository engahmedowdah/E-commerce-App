import React from 'react';
import type { ISubcategory } from '../../../../../../shared/types/Subcategories/ISubcategory.types';
interface Props {
  subcategory: ISubcategory;
}
const SubcategoryDetailsSEO: React.FC<Props> = ({ subcategory }) => {
  return (
    <div className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/30 shadow-sm glass-panel hover:shadow-md transition-shadow">
      <h3 className="text-xl font-bold text-on-surface mb-8 flex items-center gap-3">
        <span className="w-8 h-8 rounded-lg bg-tertiary/10 flex items-center justify-center text-tertiary">
            <span className="material-symbols-outlined text-[18px]">travel_explore</span>
        </span>
        SEO Information
      </h3>
      <div className="space-y-6">
         <div className="pb-4 border-b border-outline-variant/20">
            <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-2">Slug</p>
            <p className="text-sm font-medium text-on-surface bg-surface-container-low/50 px-3 py-2 rounded-lg font-mono text-primary/90 select-all border border-outline-variant/20">/{(subcategory as ISubcategory).Slug}</p>
         </div>
         <div className="pb-4 border-b border-outline-variant/20">
            <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-2">Meta Title</p>
            <p className="text-base font-medium text-on-surface">{(subcategory as ISubcategory).Name} - Subcategory</p>
         </div>
         <div>
            <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-2">Meta Description</p>
            <p className="text-sm text-on-surface-variant leading-relaxed">
                {(subcategory as ISubcategory).Description?.substring(0, 150) || 'No meta description set for this subcategory. Add a description to improve SEO.'}
            </p>
         </div>
      </div>
    </div>
  );
};
export default SubcategoryDetailsSEO;

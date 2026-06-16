import React from 'react';
import type { ICollection } from '../../../../../../shared/types/Collections/ICollection.types';
interface Props {
  collection: ICollection;
}
const CollectionDetailsSEO: React.FC<Props> = ({ collection }) => {
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
            <p className="text-sm font-medium text-on-surface bg-surface-container-low/50 px-3 py-2 rounded-lg font-mono text-primary/90 select-all border border-outline-variant/20">/{collection.Slug}</p>
         </div>
         <div className="pb-4 border-b border-outline-variant/20">
            <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-2">Meta Title</p>
            <p className="text-base font-medium text-on-surface">{collection.Name} - Collection</p>
         </div>
         <div>
            <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-2">Meta Description</p>
            <p className="text-sm text-on-surface-variant leading-relaxed">
                {collection.Description?.substring(0, 150) || 'No meta description set for this collection. Add a description to improve SEO.'}
            </p>
         </div>
      </div>
    </div>
  );
};
export default CollectionDetailsSEO;

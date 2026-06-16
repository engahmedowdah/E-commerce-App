import React from 'react';
import type { ICountry } from '../../../../../../shared/types/Countries/ICountry.types';
interface Props {
  country: ICountry;
}
const CountryDetailsStatus: React.FC<Props> = ({ country }) => {
  return (
    <div className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/30 shadow-sm glass-panel hover:shadow-md transition-shadow">
      <h3 className="text-xl font-bold text-on-surface mb-8 flex items-center gap-3">
        <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-[18px]">monitoring</span>
        </span>
        Status Insight
      </h3>
      <div className="space-y-6">
         <div className="flex items-center justify-between p-4 bg-surface-container-low/50 rounded-xl border border-outline-variant/20">
            <span className="text-sm font-semibold text-on-surface-variant">Visibility</span>
            <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${(country as ICountry).IsActivated ? 'bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20'}`}>
               <span className={`w-2 h-2 rounded-full ${(country as ICountry).IsActivated ? 'bg-green-500 dark:bg-green-400 animate-pulse' : 'bg-red-500 dark:bg-red-400'}`}></span>
               {(country as ICountry).IsActivated ? 'Public' : 'Hidden'}
            </span>
         </div>
         <div className="flex items-center justify-between p-4 bg-surface-container-low/50 rounded-xl border border-outline-variant/20">
            <span className="text-sm font-semibold text-on-surface-variant">Published</span>
            <span className="text-sm font-bold text-on-surface">
               {country.CreatedDate ? new Date(country.CreatedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute:'2-digit' }) : 'Unknown'}
            </span>
         </div>
         <div className="flex items-center justify-between p-4 bg-surface-container-low/50 rounded-xl border border-outline-variant/20">
            <span className="text-sm font-semibold text-on-surface-variant">ID</span>
            <span className="text-xs font-mono font-medium text-on-surface-variant bg-surface-container-high/50 px-2 py-1 rounded select-all">
               {country._id || 'N/A'}
            </span>
         </div>
      </div>
    </div>
  );
};
export default CountryDetailsStatus;

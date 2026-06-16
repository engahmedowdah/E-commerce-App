import React from 'react';
import { Link } from 'react-router-dom';
interface Props {
  mode: 'create' | 'edit';
  title: string;
  loading?: boolean;
  onCancel: () => void;
  onSubmit?: (e?: React.FormEvent) => void;
}
const CountryFormHeader: React.FC<Props> = ({ mode, title, loading, onCancel }) => {
  const isCreate = mode === 'create';
  return (
    <div className={`flex justify-between ${isCreate ? 'items-start' : 'items-end pb-2'}`}>
      <div>
        <div className={`flex items-center gap-2 text-sm text-on-surface-variant ${isCreate ? 'mb-2' : 'mb-3'}`}>
          <Link to="/countries" className="flex items-center gap-1 hover:text-primary transition-colors hover-translate-y">
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            <span className="font-medium">Countries</span>
          </Link>
          <span className="material-symbols-outlined text-[18px]">chevron_right</span>
          <span className="text-on-surface font-semibold">{isCreate ? 'Add New Country' : 'Update Country'}</span>
        </div>
        <h1 className={`${isCreate ? 'text-[40px]' : 'text-[38px]'} font-bold text-gray-900 mb-3 tracking-tight`}>
          {isCreate ? 'Create Country' : (title || 'Update Country')}
        </h1>
        <p className="text-[15px] text-gray-600 max-w-xl leading-relaxed">
          {isCreate
            ? 'Curate a new series of luxury items for the global marketplace. Defined by elegance and editorial precision.'
            : 'Update country details, hero imagery, and associated products.'}
        </p>
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onCancel}
          className="px-6 py-2.5 rounded-lg bg-gray-200/60 text-gray-800 font-bold text-sm hover:bg-gray-200 transition-colors"
        >
          {isCreate ? 'Discard' : 'Cancel'}
        </button>
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-2.5 rounded-lg bg-[#111827] text-white font-bold text-sm hover:bg-black transition-colors flex items-center gap-2 shadow-sm"
        >
          {loading && <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>}
          {isCreate ? 'Save Country' : 'Update Country'}
        </button>
      </div>
    </div>
  );
};
export default CountryFormHeader;

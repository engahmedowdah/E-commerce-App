import React from 'react';
import type { ICountry } from '../../../../../../shared/types/Countries/ICountry.types';
import {
  CountryFormHeader,
  CountryGeneralInfo,
  CountryVisibility,
} from '../';
interface Props {
  formData: {
    Name: string;
    Slug: string;
    CurrencySymbol: string;
    IsActivated: boolean;
  };
  initialData?: Partial<ICountry>;
  loading?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onGenerateSlug: () => void;
  onSubmit: (e?: React.FormEvent) => void;
  onCancel: () => void;
}
const EditCountryForm: React.FC<Props> = ({
  formData,
  loading,
  onChange,
  onGenerateSlug,
  onSubmit,
  onCancel,
}) => {
  return (
    <>
      <form onSubmit={onSubmit} className="flex flex-col gap-8 w-full max-w-6xl mx-auto">
        <CountryFormHeader
          mode="edit"
          title={(formData as unknown as ICountry).Name}
          loading={loading}
          onCancel={onCancel}
        />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8 flex flex-col gap-6">
            <CountryGeneralInfo
              mode="edit"
              formData={formData}
              onChange={onChange}
              onGenerateSlug={onGenerateSlug}
            />
          </div>
          <div className="md:col-span-4 flex flex-col gap-6">
            <CountryVisibility
              mode="edit"
              isActivated={(formData as unknown as ICountry).IsActivated}
              onChange={onChange}
            />
            <div className="bg-white p-7 rounded-[20px] shadow-sm border border-gray-100">
              <h3 className="text-[16px] font-bold text-gray-900 mb-6 mt-1">Publishing</h3>
              <div className="mb-5">
                <label className="block text-[11px] font-bold text-gray-500 tracking-widest uppercase mb-3">Start Date</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-3.5 text-[18px] text-gray-400">calendar_today</span>
                  <input type="text" readOnly value="June 01, 2024" className="w-full bg-[#F9FAFB] border border-gray-100 rounded-[12px] pl-11 pr-4 py-3.5 text-[14px] font-medium text-gray-900 focus:outline-none cursor-default" />
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-500 tracking-widest uppercase mb-3">End Date</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-3.5 text-[18px] text-gray-400">calendar_today</span>
                  <input type="text" readOnly value="August 31, 2024" className="w-full bg-[#F9FAFB] border border-gray-100 rounded-[12px] pl-11 pr-4 py-3.5 text-[14px] font-medium text-gray-900 focus:outline-none cursor-default" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
export default EditCountryForm;

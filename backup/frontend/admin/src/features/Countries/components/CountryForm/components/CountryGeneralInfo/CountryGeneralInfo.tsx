import type { ICountry } from "../../../../../../shared/types/Countries/ICountry.types";
import React from 'react';
interface Props {
  mode: 'create' | 'edit';
  formData: {
    Name: string;
    Slug: string;
    CurrencySymbol: string;
    IsActivated: boolean;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onGenerateSlug: () => void;
}
const CountryGeneralInfo: React.FC<Props> = ({ mode, formData, onChange, onGenerateSlug }) => {
  const isCreate = mode === 'create';
  return (
    <div className="bg-white p-8 rounded-[20px] shadow-sm border border-gray-100">
      <h3 className={`${isCreate ? 'text-[13px] tracking-widest uppercase' : 'text-[17px]'} font-bold text-gray-900 mb-8`}>
        {isCreate ? 'General Information' : 'Country Details'}
      </h3>
      <div className="mb-6">
        <label className={`block ${isCreate ? 'text-[14px] text-gray-900' : 'text-[12px] text-gray-500 tracking-widest uppercase'} font-bold mb-2`}>
          {isCreate ? 'Country Name' : 'Country Title'}
        </label>
        <input
          type="text"
          name="Name"
          value={(formData as unknown as ICountry).Name}
          onChange={onChange}
          className="w-full bg-[#F3F4F6] border-none rounded-[12px] px-5 py-3.5 text-[15px] focus:bg-gray-200/50 focus:outline-none focus:ring-2 focus:ring-gray-900/10 transition-colors placeholder:text-gray-400"
          placeholder={isCreate ? "e.g. Saudi Arabia" : "Saudi Arabia"}
        />
      </div>
      <div className="mb-6">
        <label className={`block ${isCreate ? 'text-[14px] text-gray-900' : 'text-[12px] text-gray-500 tracking-widest uppercase'} font-bold mb-2`}>
          Slug
        </label>
        <div className="flex gap-3">
          <input
            type="text"
            name="Slug"
            value={(formData as unknown as ICountry).Slug}
            onChange={onChange}
            className="w-full bg-[#F3F4F6] border-none rounded-[12px] px-5 py-3.5 text-[15px] focus:bg-gray-200/50 focus:outline-none focus:ring-2 focus:ring-gray-900/10 transition-colors placeholder:text-gray-400"
            placeholder={isCreate ? "e.g. saudi-arabia" : "saudi-arabia"}
          />
          <button
            type="button"
            onClick={onGenerateSlug}
            className="px-5 bg-[#F3F4F6] hover:bg-gray-200 text-gray-600 font-bold text-[14px] rounded-[12px] transition-colors whitespace-nowrap"
          >
            {isCreate ? 'Auto-generate' : 'Generate'}
          </button>
        </div>
      </div>
      <div className="mb-8">
        <label className={`block ${isCreate ? 'text-[14px] text-gray-900' : 'text-[12px] text-gray-500 tracking-widest uppercase'} font-bold mb-2`}>
          Currency Symbol
        </label>
        <input
          type="text"
          name="CurrencySymbol"
          value={(formData as unknown as ICountry).CurrencySymbol}
          onChange={onChange}
          className="w-full bg-[#F3F4F6] border-none rounded-[12px] px-5 py-3.5 text-[15px] focus:bg-gray-200/50 focus:outline-none focus:ring-2 focus:ring-gray-900/10 transition-colors placeholder:text-gray-400"
          placeholder="e.g. SAR"
        />
      </div>
    </div>
  );
};
export default CountryGeneralInfo;

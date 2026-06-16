import type { ICategory } from "../../../../../../shared/types/Categories/ICategory.types";
import React from 'react';
interface Props {
  mode: 'create' | 'edit';
  formData: {
    Name: string;
    Slug: string;
    Description: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onGenerateSlug: () => void;
}
const CategoryGeneralInfo: React.FC<Props> = ({ mode, formData, onChange, onGenerateSlug }) => {
  const isCreate = mode === 'create';
  return (
    <div className="bg-white p-8 rounded-[20px] shadow-sm border border-gray-100">
      <h3 className={`${isCreate ? 'text-[13px] tracking-widest uppercase' : 'text-[17px]'} font-bold text-gray-900 mb-8`}>
        {isCreate ? 'General Information' : 'Category Details'}
      </h3>
      <div className="mb-6">
        <label className={`block ${isCreate ? 'text-[14px] text-gray-900' : 'text-[12px] text-gray-500 tracking-widest uppercase'} font-bold mb-2`}>
          {isCreate ? 'Category Name' : 'Category Title'}
        </label>
        <input
          type="text"
          name="Name"
          value={(formData as unknown as ICategory).Name}
          onChange={onChange}
          className={`w-full bg-[#F3F4F6] border-none rounded-[12px] px-5 py-3.5 text-[15px] focus:bg-gray-200/50 focus:outline-none focus:ring-2 focus:ring-gray-900/10 transition-colors placeholder:text-gray-400`}
          placeholder={isCreate ? "e.g. Winter Solstice 2024" : "Summer Sale 2024"}
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
            value={(formData as unknown as ICategory).Slug}
            onChange={onChange}
            className="w-full bg-[#F3F4F6] border-none rounded-[12px] px-5 py-3.5 text-[15px] focus:bg-gray-200/50 focus:outline-none focus:ring-2 focus:ring-gray-900/10 transition-colors placeholder:text-gray-400"
            placeholder={isCreate ? "e.g. winter-solstice-2024" : "summer-sale-2024"}
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
      <div className={isCreate ? 'mb-8' : ''}>
        <label className={`block ${isCreate ? 'text-[14px] text-gray-900' : 'text-[12px] text-gray-500 tracking-widest uppercase'} font-bold mb-2`}>
          {isCreate ? 'Description' : 'Editorial Description'}
        </label>
        <textarea
          name="Description"
          value={(formData as unknown as ICategory).Description}
          onChange={onChange}
          rows={isCreate ? 6 : 5}
          className="w-full bg-[#F3F4F6] border-none rounded-[12px] px-5 py-4 text-[15px] focus:bg-gray-200/50 focus:outline-none focus:ring-2 focus:ring-gray-900/10 transition-colors placeholder:text-gray-400"
          placeholder={isCreate ? "Describe the soul and story of this category..." : "Our annual curated selection of seasonal essentials..."}
        ></textarea>
      </div>
    </div>
  );
};
export default CategoryGeneralInfo;

import React from 'react';
interface Props {
  mode: 'create' | 'edit';
  name?: string;
  slug?: string;
  description?: string;
}
const SubcategorySEOPreview: React.FC<Props> = ({ mode, name, slug, description }) => {
  const isCreate = mode === 'create';
  if (isCreate) {
    return (
      <div className="bg-white p-8 rounded-[20px] shadow-sm border border-gray-100 flex flex-col justify-between">
        <div>
          <h3 className="text-[13px] font-bold text-gray-900 tracking-widest uppercase flex items-center gap-3 mb-4">
            <span className="material-symbols-outlined text-[20px]">search</span> SEO PREVIEW
          </h3>
          <p className="text-[14px] text-gray-600 mb-6 leading-relaxed">Customize how this subcategory appears in search engines like Google.</p>
        </div>
        <button type="button" className="text-[14px] font-bold text-gray-900 hover:text-gray-600 flex items-center gap-1.5 self-start">
          Edit SEO Settings <span className="material-symbols-outlined text-[16px]">open_in_new</span>
        </button>
      </div>
    );
  }
  return (
    <div className="bg-white p-7 rounded-[20px] shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-6 mt-1">
        <h3 className="text-[16px] font-bold text-gray-900">SEO Preview</h3>
        <button type="button" className="text-[12px] font-bold text-gray-900 hover:text-gray-600 transition-colors">Edit</button>
      </div>
      <div className="bg-[#F8FAFC] p-5 rounded-[16px] border border-blue-100/50">
        <div className="text-[17px] font-medium text-[#1E3A8A] mb-1.5 leading-snug">{name || "Summer Sale 2024"} | Premium Seasonal Subcategory</div>
        <div className="text-[13px] text-[#166534] mb-2.5 truncate font-medium">www.curator-store.com &rsaquo; subcategories &rsaquo; {slug || "summer-2024"}</div>
        <div className="text-[13px] text-[#475569] line-clamp-2 leading-relaxed">
          {description || "Discover the Summer Sale 2024 subcategory. High-end linen wear, expertly tailored to match modern lifestyle and ultimate comfort."}
        </div>
      </div>
    </div>
  );
};
export default SubcategorySEOPreview;

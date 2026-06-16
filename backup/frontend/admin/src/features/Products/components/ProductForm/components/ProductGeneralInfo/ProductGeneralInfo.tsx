import type { ICategory } from "../../../../../../shared/types/Categories/ICategory.types";
import type { ISubcategory } from "../../../../../../shared/types/Subcategories/ISubcategory.types";
import React from 'react';
interface Props {
  mode: 'create' | 'edit';
  formData: {
    Name: string;
    Description: string;
    Price: number;
    Stock: number;
    CategoryIDs: string[];
    SubCategoryIDs: string[];
  };
  categories: ICategory[];
  subcategories: ISubcategory[];
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}
const ProductGeneralInfo: React.FC<Props> = ({ mode, formData, categories, subcategories, onChange }) => {
  const isCreate = mode === 'create';
  const selectedCategoryID = formData.CategoryIDs[0] || '';
  const filteredSubcategories = selectedCategoryID
    ? subcategories.filter(sub => sub.CategoryID === selectedCategoryID)
    : subcategories;
  return (
    <div className="bg-white p-8 rounded-[20px] shadow-sm border border-gray-100">
      <h3 className={`${isCreate ? 'text-[13px] tracking-widest uppercase' : 'text-[17px]'} font-bold text-gray-900 mb-8`}>
        {isCreate ? 'General Information' : 'Product Details'}
      </h3>
      <div className="mb-6">
        <label className={`block ${isCreate ? 'text-[14px] text-gray-900' : 'text-[12px] text-gray-500 tracking-widest uppercase'} font-bold mb-2`}>
          {isCreate ? 'Product Name' : 'Product Title'}
        </label>
        <input
          type="text"
          name="Name"
          value={formData.Name}
          onChange={onChange}
          className="w-full bg-[#F3F4F6] border-none rounded-[12px] px-5 py-3.5 text-[15px] focus:bg-gray-200/50 focus:outline-none focus:ring-2 focus:ring-gray-900/10 transition-colors placeholder:text-gray-400"
          placeholder={isCreate ? "e.g. Winter Solstice 2024" : "Summer Sale 2024"}
        />
      </div>
      <div className="mb-6">
        <label className={`block ${isCreate ? 'text-[14px] text-gray-900' : 'text-[12px] text-gray-500 tracking-widest uppercase'} font-bold mb-2`}>
          {isCreate ? 'Description' : 'Editorial Description'}
        </label>
        <textarea
          name="Description"
          value={formData.Description}
          onChange={onChange}
          rows={isCreate ? 6 : 5}
          className="w-full bg-[#F3F4F6] border-none rounded-[12px] px-5 py-4 text-[15px] focus:bg-gray-200/50 focus:outline-none focus:ring-2 focus:ring-gray-900/10 transition-colors placeholder:text-gray-400"
          placeholder={isCreate ? "Describe the soul and story of this product..." : "Our annual curated selection of seasonal essentials..."}
        ></textarea>
      </div>
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-[14px] font-bold text-gray-900 mb-2">Price ($)</label>
          <input
            type="number"
            step="0.01"
            name="Price"
            value={formData.Price}
            onChange={onChange}
            className="w-full bg-[#F3F4F6] border-none rounded-[12px] px-5 py-3.5 text-[15px] focus:bg-gray-200/50 focus:outline-none focus:ring-2 focus:ring-gray-900/10 transition-colors placeholder:text-gray-400"
            placeholder="0.00"
          />
        </div>
        <div>
          <label className="block text-[14px] font-bold text-gray-900 mb-2">Stock Quantity</label>
          <input
            type="number"
            name="Stock"
            value={formData.Stock}
            onChange={onChange}
            className="w-full bg-[#F3F4F6] border-none rounded-[12px] px-5 py-3.5 text-[15px] focus:bg-gray-200/50 focus:outline-none focus:ring-2 focus:ring-gray-900/10 transition-colors placeholder:text-gray-400"
            placeholder="0"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-[14px] font-bold text-gray-900 mb-2">Category</label>
          <div className="relative">
            <select
              name="CategoryIDs"
              value={selectedCategoryID}
              onChange={onChange}
              className="w-full bg-[#F3F4F6] border-none rounded-[12px] px-5 py-3.5 text-[15px] focus:outline-none appearance-none font-medium text-gray-800"
            >
              <option value="">Select Category</option>
              {categories.map(cat => (
                <option key={cat._id} value={cat._id}>{cat.Name}</option>
              ))}
            </select>
            <span className="material-symbols-outlined absolute right-4 top-3.5 text-gray-500 pointer-events-none">expand_more</span>
          </div>
        </div>
        <div>
          <label className="block text-[14px] font-bold text-gray-900 mb-2">Subcategory</label>
          <div className="relative">
            <select
              name="SubCategoryIDs"
              value={formData.SubCategoryIDs[0] || ''}
              onChange={onChange}
              className="w-full bg-[#F3F4F6] border-none rounded-[12px] px-5 py-3.5 text-[15px] focus:outline-none appearance-none font-medium text-gray-800"
            >
              <option value="">Select Subcategory</option>
              {filteredSubcategories.map(sub => (
                <option key={sub._id} value={sub._id}>{sub.Name}</option>
              ))}
            </select>
            <span className="material-symbols-outlined absolute right-4 top-3.5 text-gray-500 pointer-events-none">expand_more</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductGeneralInfo;

import React, { useState } from 'react';
import type { IProduct } from '../../../../../../shared/types/Products/IProduct.types';
import type { ICategory } from '../../../../../../shared/types/Categories/ICategory.types';
import type { ICollection } from '../../../../../../shared/types/Collections/ICollection.types';
import type { ISubcategory } from '../../../../../../shared/types/Subcategories/ISubcategory.types';
import { ProductSelectionModal } from '../../../../../../shared/components';
interface Props {
  products: IProduct[];
  onAddProducts: (products: IProduct[]) => void;
  onDeleteProduct: (id: string) => void;
}
const SubcategoryAssociatedProducts: React.FC<Props> = ({ products, onAddProducts, onDeleteProduct }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const existingIDs = products.map((p) => p._id as string);
  return (
    <div className="bg-white p-8 rounded-[20px] shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-[17px] font-bold text-gray-900">
          Associated Products
          {products.length > 0 && (
            <span className="ml-2 px-2 py-0.5 text-[11px] font-bold bg-gray-100 text-gray-500 rounded-full">
              {products.length}
            </span>
          )}
        </h3>
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="text-[14px] font-bold text-gray-900 flex items-center gap-1.5 hover:text-gray-600 transition-colors"
        >
          <span className="material-symbols-outlined text-[18px]">add_circle</span>
          Add Products
        </button>
      </div>
      <div className="flex flex-col gap-3">
        {products && products.length > 0 ? (
          products.map((product: IProduct) => (
            <div
              key={product._id}
              className="flex items-start justify-between p-3.5 hover:bg-gray-50 rounded-xl transition-all border border-transparent hover:border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="w-[52px] h-[52px] bg-gradient-to-br from-slate-100 to-slate-200 rounded-[10px] overflow-hidden flex items-center justify-center flex-shrink-0 mt-0.5">
                  {(product.Images?.[0] as unknown as { URL?: string })?.URL ? (
                    <img
                      src={(product.Images[0] as unknown as { URL?: string }).URL}
                      alt={product.Name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="material-symbols-outlined text-[20px] text-slate-400">inventory_2</span>
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <div className="font-bold text-[15px] text-gray-900 leading-snug">{product.Name}</div>
                  <div className="text-[12px] text-gray-500 font-semibold flex items-center gap-1.5 flex-wrap">
                    <span>${product.Price?.toLocaleString() ?? "—"}</span>
                    <span>•</span>
                    <span>Stock: {product.Stock ?? "—"}</span>
                  </div>
                  <div className="flex flex-col gap-1 mt-1.5 text-[11px] text-gray-400 font-medium">
                    {product.Subcategories && product.Subcategories.length > 0 && (
                      <div className="flex items-center gap-1 flex-wrap">
                        <span className="font-semibold uppercase tracking-wider text-[9px] bg-indigo-50 text-indigo-700 px-1.5 py-0.5 rounded-md">Subcategories</span>
                        <span className="text-gray-600">{product.Subcategories.map((c: ISubcategory) => c.Name).join(", ")}</span>
                      </div>
                    )}
                    {product.Categories && product.Categories.length > 0 && (
                      <div className="flex items-center gap-1 flex-wrap">
                        <span className="font-semibold uppercase tracking-wider text-[9px] bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded-md">Categories</span>
                        <span className="text-gray-600">{product.Categories.map((c: ICategory) => c.Name).join(", ")}</span>
                      </div>
                    )}
                    {product.Collections && product.Collections.length > 0 && (
                      <div className="flex items-center gap-1 flex-wrap">
                        <span className="font-semibold uppercase tracking-wider text-[9px] bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded-md">Collections</span>
                        <span className="text-gray-600">{product.Collections.map((c: ICollection) => c.Name).join(", ")}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="text-red-500/70 hover:text-red-600 p-2 transition-all mr-1 self-start mt-0.5"
                onClick={() => onDeleteProduct(product._id as string)}
                title="Remove from subcategory"
              >
                <span className="material-symbols-outlined text-[18px] cursor-pointer">link_off</span>
              </button>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-10 text-gray-400 gap-2">
            <span className="material-symbols-outlined text-[36px]">inventory_2</span>
            <span className="text-[14px] font-medium">No associated products</span>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="mt-1 text-[13px] font-bold text-gray-900 underline underline-offset-2 hover:text-gray-600 transition-colors"
            >
              Add your first product
            </button>
          </div>
        )}
      </div>
      <ProductSelectionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddProducts={onAddProducts}
        existingProductIDs={existingIDs}
        title="Add Products to Subcategory"
        pageType="subcategory"
      />
    </div>
  );
};
export default SubcategoryAssociatedProducts;

import React from 'react';
import type { IProduct } from '../../../../../../shared/types/Products/IProduct.types';
interface Props {
  product: IProduct;
}
const ProductDetailsSEO: React.FC<Props> = ({ product }) => {
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
            <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-2">Meta Title</p>
            <p className="text-base font-medium text-on-surface">{(product as IProduct).Name} - Product</p>
         </div>
         <div>
            <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-2">Meta Description</p>
            <p className="text-sm text-on-surface-variant leading-relaxed">
                {(product as IProduct).Description?.substring(0, 150) || 'No meta description set for this product. Add a description to improve SEO.'}
            </p>
         </div>
      </div>
    </div>
  );
};
export default ProductDetailsSEO;

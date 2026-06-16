import React from 'react';
import type { IProduct } from '../../../../../../shared/types/Products/IProduct.types';
interface Props {
  products: IProduct[];
  onDeleteProduct: (id: string) => void;
}
const RoleAssociatedProducts: React.FC<Props> = ({ products, onDeleteProduct }) => {
  return (
    <div className="bg-white p-8 rounded-[20px] shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-[17px] font-bold text-gray-900">Associated Products</h3>
        <button type="button" className="text-[14px] font-bold text-gray-900 flex items-center gap-1.5 hover:text-gray-600 transition-colors">
          <span className="material-symbols-outlined text-[18px]">add_circle</span> Add Products
        </button>
      </div>
      <div className="flex flex-col gap-2">
        {products && products.length > 0 ? (
          products.map((product: IProduct) => (
            <div
              key={product._id}
              className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors group cursor-default border border-transparent hover:border-gray-100"
            >
              <div className="flex items-center gap-4">
                <div className="w-[60px] h-[60px] bg-slate-200 rounded-[10px] overflow-hidden flex items-center justify-center">
                  <div className="w-8 h-8 bg-slate-100 rounded-sm shadow-sm rotate-3"></div>
                </div>
                <div>
                  <div className="font-bold text-[15px] text-gray-900 mb-0.5">
                    {(product as any).Name}
                  </div>
                  <div className="text-[13px] text-gray-500 font-medium">
                    SKU: {(product as any).Name} &nbsp;•&nbsp; ${product.Price}
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="text-red-600/80 hover:text-red-700 p-2 transition-all mr-2"
                onClick={() => onDeleteProduct(product._id as string)}
              >
                <span className="material-symbols-outlined text-[18px] cursor-pointer">delete</span>
              </button>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500 py-4">No associated products</div>
        )}
      </div>
    </div>
  );
};
export default RoleAssociatedProducts;

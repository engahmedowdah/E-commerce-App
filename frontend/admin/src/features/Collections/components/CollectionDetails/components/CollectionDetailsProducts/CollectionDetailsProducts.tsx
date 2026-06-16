import React from 'react';
import { Link } from 'react-router-dom';
import type { IProduct } from '../../../../../../shared/types/Products/IProduct.types';
interface Props {
  products: IProduct[];
}
const CollectionDetailsProducts: React.FC<Props> = ({ products }) => {
  return (
    <div className={`bg-surface-container-lowest rounded-3xl p-8 md:p-12 border border-outline-variant/30 shadow-sm glass-panel flex flex-col w-full hover:shadow-md transition-shadow mb-12 ${products.length === 0 ? 'justify-center items-center min-h-[24rem]' : 'justify-start items-stretch min-h-[24rem]'}`}>
      {products.length === 0 ? (
        <>
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 animate-pulse-slow">
            <span className="material-symbols-outlined text-4xl">inventory_2</span>
          </div>
          <h3 className="text-2xl font-bold text-on-surface mb-3 tracking-tight">Products Management</h3>
          <p className="text-on-surface-variant mb-6 text-center max-w-md">Manage products assigned to this collection. You can add new products or remove existing ones.</p>
          <button className="px-6 py-2.5 bg-surface-container-highest text-on-surface rounded-xl font-semibold hover:bg-surface-container-high transition-colors shadow-sm flex items-center gap-2">
             <span className="material-symbols-outlined text-[18px]">add</span>
             Assign Products
          </button>
        </>
      ) : (
        <>
          <div className="w-full flex justify-between items-center border-b border-outline-variant/30 pb-4 mb-8">
              <h3 className="text-2xl font-bold text-on-surface flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[20px]">inventory_2</span>
                </span>
                Assigned Products
              </h3>
              <button className="px-6 py-2.5 bg-primary text-on-primary rounded-xl font-semibold hover:bg-primary/90 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">add</span>
                Assign Products
              </button>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in">
            {products.map((product) => (
              <div key={product._id} className="bg-surface-container-low rounded-2xl overflow-hidden border border-outline-variant/30 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group flex flex-col">
                <div className="w-full h-48 bg-surface-container relative overflow-hidden">
                  {product.Images && product.Images.length > 0 ? (
                    <img
                      src={`${import.meta.env.VITE_API_BASE_URL?.replace('/api/v1', '') || 'http://localhost:5000'}/${product.Images[0].Path}`}
                      alt={(product as IProduct).Name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-on-surface-variant/40 bg-surface-container-low">
                      <span className="material-symbols-outlined text-4xl mb-2 opacity-50">image_not_supported</span>
                      <span className="text-xs font-medium uppercase tracking-wider">No Image</span>
                    </div>
                  )}
                  <div className="absolute top-3 right-3 flex flex-col gap-2 items-end">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm backdrop-blur-md ${(product as IProduct).IsActivated ? 'bg-green-500/90 text-white' : 'bg-surface-container-highest/90 text-on-surface'}`}>
                      {(product as IProduct).IsActivated ? 'Active' : 'Draft'}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm backdrop-blur-md ${product.Stock > 0 ? 'bg-primary/90 text-white' : 'bg-error/90 text-white'}`}>
                      {product.Stock > 0 ? `${product.Stock} in stock` : 'Out of stock'}
                    </span>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="mb-2">
                    <h4 className="text-lg font-bold text-on-surface mb-1 truncate group-hover:text-primary transition-colors">{(product as IProduct).Name}</h4>
                    <p className="text-sm text-on-surface-variant line-clamp-2 min-h-[2.5rem]">
                      {(product as IProduct).Description || 'No description provided.'}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-outline-variant/20">
                    <span className="text-xl font-black text-on-surface">${product.Price.toFixed(2)}</span>
                    <div className="flex gap-2">
                       <Link
                         to={`/products/edit/${product._id}`}
                         className="w-9 h-9 rounded-xl bg-surface-container-highest flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors"
                         title="Edit Product"
                       >
                         <span className="material-symbols-outlined text-[16px]">edit</span>
                       </Link>
                       <Link
                         to={`/products/details/${product._id}`}
                         className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-colors"
                         title="View Details"
                       >
                         <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                       </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
export default CollectionDetailsProducts;

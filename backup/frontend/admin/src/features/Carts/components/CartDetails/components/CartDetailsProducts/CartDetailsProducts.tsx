import React from 'react';
import { Link } from 'react-router-dom';
import type { ICartProduct } from '../../../../../../shared/types/CartProducts/ICartProduct.types';
interface Props {
  products: ICartProduct[];
}
const CartDetailsProducts: React.FC<Props> = ({ products }) => {
  return (
    <div className={`bg-surface-container-lowest rounded-3xl p-8 md:p-12 border border-outline-variant/30 shadow-sm glass-panel flex flex-col w-full hover:shadow-md transition-shadow mb-12 ${products.length === 0 ? 'justify-center items-center min-h-[24rem]' : 'justify-start items-stretch min-h-[24rem]'}`}>
      {products?.length === 0 ? (
        <>
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 animate-pulse-slow">
            <span className="material-symbols-outlined text-4xl">inventory_2</span>
          </div>
          <h3 className="text-2xl font-bold text-on-surface mb-3 tracking-tight">No Products Found</h3>
          <p className="text-on-surface-variant mb-6 text-center max-w-md">No products assigned to this cart.</p>
        </>
      ) : (
        <>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in">
            {products.map((product) => {
              if (!product.Product) {
                return (
                  <div key={product.ProductID.toString()} className="bg-surface-container-low rounded-2xl overflow-hidden border border-error/30 shadow-sm flex flex-col p-5 items-center justify-center text-center min-h-[20rem]">
                    <span className="material-symbols-outlined text-4xl text-error mb-2">error</span>
                    <h4 className="text-lg font-bold text-on-surface mb-1">Product Unavailable</h4>
                    <p className="text-sm text-on-surface-variant mb-4">This product might have been deleted or is currently unavailable.</p>
                    <span className="text-xs text-on-surface-variant opacity-70">Product ID: {product.ProductID.toString()}</span>
                  </div>
                );
              }
              return (
              <div key={product.ProductID} className="bg-surface-container-low rounded-2xl overflow-hidden border border-outline-variant/30 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group flex flex-col">
                <div className="w-full h-48 bg-surface-container relative overflow-hidden">
                  {product.Product.Images && product.Product.Images.length > 0 ? (
                    <img
                      src={`${import.meta.env.VITE_API_BASE_URL?.replace('/api/v1', '') || 'http://localhost:5000'}/${product.Product.Images[0].Path}`}
                      alt={product.Product.Name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-on-surface-variant/40 bg-surface-container-low">
                      <span className="material-symbols-outlined text-4xl mb-2 opacity-50">image_not_supported</span>
                      <span className="text-xs font-medium uppercase tracking-wider">No Image</span>
                    </div>
                  )}
                  <div className="absolute top-3 right-3 flex flex-col gap-2 items-end">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm backdrop-blur-md ${product.Product.IsActivated ? 'bg-green-500/90 text-white' : 'bg-surface-container-highest/90 text-on-surface'}`}>
                      {product.Product.IsActivated ? 'Active' : 'Draft'}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm backdrop-blur-md ${product.Product.Stock > 0 ? 'bg-primary/90 text-white' : 'bg-error/90 text-white'}`}>
                      {product.Product.Stock > 0 ? `${product.Product.Stock} in stock` : 'Out of stock'}
                    </span>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="mb-2">
                    <div className="flex justify-between items-start gap-2 mb-1">
                      <h4 className="text-lg font-bold text-on-surface truncate group-hover:text-primary transition-colors">{product.Product.Name}</h4>
                      <span className="flex-shrink-0 px-2.5 py-0.5 bg-primary/10 text-primary rounded-md text-xs font-bold whitespace-nowrap border border-primary/20 shadow-sm">
                        Qty: {product.Quantity}
                      </span>
                    </div>
                    <p className="text-sm text-on-surface-variant line-clamp-2 min-h-[2.5rem]">
                      {product.Product.Description || 'No description provided.'}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-outline-variant/20">
                    <span className="text-xl font-black text-on-surface">${product.Product.Price?.toFixed(2) || '0.00'}</span>
                    <div className="flex gap-2">
                       <Link
                         to={`/products/edit/${product.Product._id}`}
                         className="w-9 h-9 rounded-xl bg-surface-container-highest flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors"
                         title="Edit Product"
                       >
                         <span className="material-symbols-outlined text-[16px]">edit</span>
                       </Link>
                       <Link
                         to={`/products/${product.Product._id}`}
                         className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-colors"
                         title="View Details"
                       >
                         <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                       </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          </div>
        </>
      )}
    </div>
  );
};
export default CartDetailsProducts;

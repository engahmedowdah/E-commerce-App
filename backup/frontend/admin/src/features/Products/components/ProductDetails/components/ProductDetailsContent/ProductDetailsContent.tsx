import type { IProduct } from '../../../../../../shared/types/Products/IProduct.types';
import {
  ProductDetailsInfo,
  ProductDetailsImages,
  ProductDetailsSEO,
  ProductDetailsStatus,
  ProductDetailsSettings,
} from "..";
import type { ICategory } from '../../../../../../shared/types/Categories/ICategory.types';
import type { ISubcategory } from '../../../../../../shared/types/Subcategories/ISubcategory.types';
interface Props {
  activeTab: string;
  product: IProduct;
}
const ProductDetailsContent: React.FC<Props> = ({ activeTab, product }) => {
  return (
    <div className="relative animate-fade-in">
      {activeTab === 'Details' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-8 flex flex-col">
            <ProductDetailsInfo
              name={product.Name}
              description={product.Description as string}
              price={product.Price}
              stock={product.Stock}
              categoryName={product.Categories?.map((c: ICategory) => c.Name).join(', ') || 'N/A'}
              subcategoryName={product.Subcategories?.map((sc: ISubcategory) => sc.Name).join(', ') || 'N/A'}
            />
            <ProductDetailsImages />
          </div>
          <div className="space-y-8 flex flex-col">
            <ProductDetailsSEO product={product} />
            <ProductDetailsStatus product={product} />
          </div>
        </div>
      )}
      {activeTab === 'Settings' && (
        <ProductDetailsSettings />
      )}
    </div>
  );
};
export default ProductDetailsContent;

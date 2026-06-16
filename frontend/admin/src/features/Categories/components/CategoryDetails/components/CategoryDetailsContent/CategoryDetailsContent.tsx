import type { ICategory } from '../../../../../../shared/types/Categories/ICategory.types';
import type { IProduct } from '../../../../../../shared/types/Products/IProduct.types';
import {
  CategoryDetailsInfo,
  CategoryDetailsSEO,
  CategoryDetailsStatus,
  CategoryDetailsProducts,
  CategoryDetailsSettings,
} from "..";
interface Props {
  activeTab: string;
  category: ICategory;
}
const CategoryDetailsContent: React.FC<Props> = ({ activeTab, category }) => {
  return (
    <div className="relative animate-fade-in">
      {activeTab === 'Details' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-8 flex flex-col">
            <CategoryDetailsInfo
              name={(category as ICategory).Name}
              description={(category as ICategory).Description as string}
            />
          </div>
          <div className="space-y-8 flex flex-col">
            <CategoryDetailsSEO category={category} />
            <CategoryDetailsStatus category={category} />
          </div>
        </div>
      )}
      {activeTab === 'Products' && (
        <CategoryDetailsProducts products={(category as ICategory)?.Products as IProduct[] || []} />
      )}
      {activeTab === 'Settings' && (
        <CategoryDetailsSettings />
      )}
    </div>
  );
};
export default CategoryDetailsContent;

import type { ISubcategory } from '../../../../../../shared/types/Subcategories/ISubcategory.types';
import type { IProduct } from '../../../../../../shared/types/Products/IProduct.types';
import {
  SubcategoryDetailsInfo,
  SubcategoryDetailsSEO,
  SubcategoryDetailsStatus,
  SubcategoryDetailsProducts,
  SubcategoryDetailsSettings,
} from "..";
interface Props {
  activeTab: string;
  subcategory: ISubcategory;
}
const SubcategoryDetailsContent: React.FC<Props> = ({ activeTab, subcategory }) => {
  return (
    <div className="relative animate-fade-in">
      {activeTab === 'Details' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-8 flex flex-col">
            <SubcategoryDetailsInfo
              name={(subcategory as ISubcategory).Name}
              description={(subcategory as ISubcategory).Description as string}
            />
          </div>
          <div className="space-y-8 flex flex-col">
            <SubcategoryDetailsSEO subcategory={subcategory} />
            <SubcategoryDetailsStatus subcategory={subcategory} />
          </div>
        </div>
      )}
      {activeTab === 'Products' && (
        <SubcategoryDetailsProducts products={(subcategory as ISubcategory)?.Products as IProduct[] || []} />
      )}
      {activeTab === 'Settings' && (
        <SubcategoryDetailsSettings />
      )}
    </div>
  );
};
export default SubcategoryDetailsContent;

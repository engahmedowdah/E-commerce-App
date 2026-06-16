import type { ICollection } from '../../../../../../shared/types/Collections/ICollection.types';
import type { IProduct } from '../../../../../../shared/types/Products/IProduct.types';
import {
  CollectionDetailsInfo,
  CollectionDetailsSEO,
  CollectionDetailsStatus,
  CollectionDetailsProducts,
  CollectionDetailsSettings,
} from "..";
interface Props {
  activeTab: string;
  collection: ICollection;
}
const CollectionDetailsContent: React.FC<Props> = ({ activeTab, collection }) => {
  return (
    <div className="relative animate-fade-in">
      {activeTab === 'Details' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-8 flex flex-col">
            <CollectionDetailsInfo
              name={(collection as ICollection).Name}
              description={(collection as ICollection).Description as string}
            />
          </div>
          <div className="space-y-8 flex flex-col">
            <CollectionDetailsSEO collection={collection} />
            <CollectionDetailsStatus collection={collection} />
          </div>
        </div>
      )}
      {activeTab === 'Products' && (
        <CollectionDetailsProducts products={(collection as ICollection)?.Products as IProduct[] || []} />
      )}
      {activeTab === 'Settings' && (
        <CollectionDetailsSettings />
      )}
    </div>
  );
};
export default CollectionDetailsContent;

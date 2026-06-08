//Styles
import "./CollectionDashboardOverview.css";

//Components
import { ListCollectionDashboardOverviewCards } from "../";

//Types
import type { ICollection } from "../../../../../shared/types/Collections/ICollection.types";

//Props
interface Props {
  collections: ICollection[];
  Loading?: boolean;
}

const CollectionDashboardOverview = ({ collections, Loading }: Props) => {
  return (
    <div className="collection-dashboard-overview">
      <ListCollectionDashboardOverviewCards 
        collections={collections} 
        Loading={Loading} 
      />
    </div>
  );
};

export default CollectionDashboardOverview;

import "./CollectionDashboardOverview.css";
import { ListCollectionDashboardOverviewCards } from "../";
interface Props {
  stats: { totalItems: number; activeItems: number; inactiveItems: number; avgProducts: number };
  Loading?: boolean;
}
const CollectionDashboardOverview = ({ stats, Loading }: Props) => {
  return (
    <div className="collection-dashboard-overview">
      <ListCollectionDashboardOverviewCards
        stats={stats}
        Loading={Loading}
      />
    </div>
  );
};
export default CollectionDashboardOverview;

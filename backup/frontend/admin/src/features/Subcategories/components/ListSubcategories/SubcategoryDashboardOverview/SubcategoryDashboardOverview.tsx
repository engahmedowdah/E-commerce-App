import "./SubcategoryDashboardOverview.css";
import { ListSubcategoryDashboardOverviewCards } from "../";
interface Props {
  stats: { totalItems: number; activeItems: number; inactiveItems: number; avgProducts: number };
  Loading?: boolean;
}
const SubcategoryDashboardOverview = ({ stats, Loading }: Props) => {
  return (
    <div className="subcategory-dashboard-overview">
      <ListSubcategoryDashboardOverviewCards
        stats={stats}
        Loading={Loading}
      />
    </div>
  );
};
export default SubcategoryDashboardOverview;

import "./CategoryDashboardOverview.css";
import { ListCategoryDashboardOverviewCards } from "../";
interface Props {
  stats: { totalItems: number; activeItems: number; inactiveItems: number; avgProducts: number };
  Loading?: boolean;
}
const CategoryDashboardOverview = ({ stats, Loading }: Props) => {
  return (
    <div className="category-dashboard-overview">
      <ListCategoryDashboardOverviewCards
        stats={stats}
        Loading={Loading}
      />
    </div>
  );
};
export default CategoryDashboardOverview;

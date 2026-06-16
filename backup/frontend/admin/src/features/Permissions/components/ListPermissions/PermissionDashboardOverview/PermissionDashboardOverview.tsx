import "./PermissionDashboardOverview.css";
import { ListPermissionDashboardOverviewCards } from "../";
interface Props {
  stats: { totalItems: number; activeItems: number; inactiveItems: number };
  Loading?: boolean;
}
const PermissionDashboardOverview = ({ stats, Loading }: Props) => {
  return (
    <div className="permission-dashboard-overview">
      <ListPermissionDashboardOverviewCards
        stats={stats}
        Loading={Loading}
      />
    </div>
  );
};
export default PermissionDashboardOverview;

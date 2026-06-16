import "./RoleDashboardOverview.css";
import { ListRoleDashboardOverviewCards } from "../";
interface Props {
  stats: { totalItems: number; activeItems: number; inactiveItems: number; totalPermissions: number; avgPermissions: number };
  Loading?: boolean;
}
const RoleDashboardOverview = ({ stats, Loading }: Props) => {
  return (
    <div className="role-dashboard-overview">
      <ListRoleDashboardOverviewCards
        stats={stats}
        Loading={Loading}
      />
    </div>
  );
};
export default RoleDashboardOverview;

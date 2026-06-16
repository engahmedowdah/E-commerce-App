import "./AdminDashboardOverview.css";
import { ListAdminDashboardOverviewCards } from "../";
interface Props {
  stats: { totalItems: number; activeItems: number; inactiveItems: number };
  Loading?: boolean;
}
const AdminDashboardOverview = ({ stats, Loading }: Props) => {
  return (
    <div className="admin-dashboard-overview">
      <ListAdminDashboardOverviewCards
        stats={stats}
        Loading={Loading}
      />
    </div>
  );
};
export default AdminDashboardOverview;

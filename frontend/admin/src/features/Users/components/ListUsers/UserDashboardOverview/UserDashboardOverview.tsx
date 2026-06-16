import "./UserDashboardOverview.css";
import { ListUserDashboardOverviewCards } from "../";
interface Props {
  stats: { totalItems: number; activeItems: number; inactiveItems: number };
  Loading?: boolean;
}
const UserDashboardOverview = ({ stats, Loading }: Props) => {
  return (
    <div className="user-dashboard-overview">
      <ListUserDashboardOverviewCards
        stats={stats}
        Loading={Loading}
      />
    </div>
  );
};
export default UserDashboardOverview;

import "./OrderStatusDashboardOverview.css";
import { ListOrderStatusDashboardOverviewCards } from "../";
interface Props {
  stats: { totalItems: number; activeItems: number; inactiveItems: number };
  Loading?: boolean;
}
const OrderStatusDashboardOverview = ({ stats, Loading }: Props) => {
  return (
    <div className="orderstatus-dashboard-overview">
      <ListOrderStatusDashboardOverviewCards
        stats={stats}
        Loading={Loading}
      />
    </div>
  );
};
export default OrderStatusDashboardOverview;

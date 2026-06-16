import "./OrderDashboardOverview.css";
import { ListOrderDashboardOverviewCards } from "../";
interface Props {
  stats: { totalItems: number; avgProducts: number; totalProducts: number; totalAmount: number; statusCounts: Record<string, number> };
  Loading?: boolean;
}
const OrderDashboardOverview = ({ stats, Loading }: Props) => {
  return (
    <div className="order-dashboard-overview">
      <ListOrderDashboardOverviewCards
        stats={stats}
        Loading={Loading}
      />
    </div>
  );
};
export default OrderDashboardOverview;

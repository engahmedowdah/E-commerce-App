import "./CartDashboardOverview.css";
import { ListCartDashboardOverviewCards } from "../";
interface Props {
  stats: { totalItems: number; totalProducts: number; avgProducts: number };
  Loading?: boolean;
}
const CartDashboardOverview = ({ stats, Loading }: Props) => {
  return (
    <div className="cart-dashboard-overview">
      <ListCartDashboardOverviewCards
        stats={stats}
        Loading={Loading}
      />
    </div>
  );
};
export default CartDashboardOverview;

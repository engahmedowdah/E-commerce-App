import "./PaymentDashboardOverview.css";
import { ListPaymentDashboardOverviewCards } from "../";
interface Props {
  stats: { totalItems: number; activeItems: number; inactiveItems: number; totalAmount: number };
  Loading?: boolean;
}
const PaymentDashboardOverview = ({ stats, Loading }: Props) => {
  return (
    <div className="payment-dashboard-overview">
      <ListPaymentDashboardOverviewCards
        stats={stats}
        Loading={Loading}
      />
    </div>
  );
};
export default PaymentDashboardOverview;

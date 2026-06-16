import "./PaymentMethodDashboardOverview.css";
import { ListPaymentMethodDashboardOverviewCards } from "../";
interface Props {
  stats: { totalItems: number; activeItems: number; inactiveItems: number; };
  Loading?: boolean;
}
const PaymentMethodDashboardOverview = ({ stats, Loading }: Props) => {
  return (
    <div className="paymentmethod-dashboard-overview">
      <ListPaymentMethodDashboardOverviewCards
        stats={stats}
        Loading={Loading}
      />
    </div>
  );
};
export default PaymentMethodDashboardOverview;

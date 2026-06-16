import "./PaymentStatusDashboardOverview.css";
import { ListPaymentStatusDashboardOverviewCards } from "../";
interface Props {
  stats: { totalItems: number; activeItems: number; inactiveItems: number; };
  Loading?: boolean;
}
const PaymentStatusDashboardOverview = ({ stats, Loading }: Props) => {
  return (
    <div className="paymentstatus-dashboard-overview">
      <ListPaymentStatusDashboardOverviewCards
        stats={stats}
        Loading={Loading}
      />
    </div>
  );
};
export default PaymentStatusDashboardOverview;

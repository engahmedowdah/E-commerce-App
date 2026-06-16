import "./ProductDashboardOverview.css";
import { ListProductDashboardOverviewCards } from "../";
interface Props {
  stats: { totalItems: number; activeItems: number; inactiveItems: number; };
  Loading?: boolean;
}
const ProductDashboardOverview = ({ stats, Loading }: Props) => {
  return (
    <div className="product-dashboard-overview">
      <ListProductDashboardOverviewCards
        stats={stats}
        Loading={Loading}
      />
    </div>
  );
};
export default ProductDashboardOverview;

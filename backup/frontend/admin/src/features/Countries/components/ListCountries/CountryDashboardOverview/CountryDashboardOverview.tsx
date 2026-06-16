import "./CountryDashboardOverview.css";
import { ListCountryDashboardOverviewCards } from "../";
interface Props {
  stats: { totalItems: number; activeItems: number; inactiveItems: number; totalCities: number; avgCities: number };
  Loading?: boolean;
}
const CountryDashboardOverview = ({ stats, Loading }: Props) => {
  return (
    <div className="country-dashboard-overview">
      <ListCountryDashboardOverviewCards
        stats={stats}
        Loading={Loading}
      />
    </div>
  );
};
export default CountryDashboardOverview;

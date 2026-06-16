import React from "react";
import { CountryDashboardOverviewCard } from "..";
import useTranslation from "../../../../../shared/i18n/useTranslation";
interface Props {
  stats: { totalItems: number; activeItems: number; inactiveItems: number };
  Loading?: boolean;
}
const ListCountryDashboardOverviewCards: React.FC<Props> = ({ stats, Loading }) => {
  const t = useTranslation();
  const s = t.stats as Record<string, string>;
  const cards = [
    { label: s.totalCountries, value: stats.totalItems,     icon: "inventory_2",  variant: "primary" as const },
    { label: s.active,          value: stats.activeItems,   icon: "check_circle", variant: "success" as const },
    { label: s.inactive,        value: stats.inactiveItems, icon: "pause_circle", variant: "warning" as const },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <CountryDashboardOverviewCard key={index} label={card.label} value={card.value} icon={card.icon} variant={card.variant} loading={Loading} />
      ))}
    </div>
  );
};
export default ListCountryDashboardOverviewCards;

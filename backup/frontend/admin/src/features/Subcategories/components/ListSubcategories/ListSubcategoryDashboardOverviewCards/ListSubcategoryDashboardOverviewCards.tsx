import React from "react";
import { SubcategoryDashboardOverviewCard } from "..";
import useTranslation from "../../../../../shared/i18n/useTranslation";
interface Props {
  stats: { totalItems: number; activeItems: number; inactiveItems: number; avgProducts: number };
  Loading?: boolean;
}
const ListSubcategoryDashboardOverviewCards: React.FC<Props> = ({ stats, Loading }) => {
  const t = useTranslation();
  const s = t.stats as Record<string, string>;
  const cards = [
    { label: s.totalSubcategories, value: stats.totalItems,     icon: "inventory_2",  variant: "primary" as const },
    { label: s.active,              value: stats.activeItems,   icon: "check_circle", variant: "success" as const },
    { label: s.inactive,            value: stats.inactiveItems, icon: "pause_circle", variant: "warning" as const },
    { label: s.avgProducts,         value: stats.avgProducts,   icon: "analytics",    variant: "info"    as const },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <SubcategoryDashboardOverviewCard key={index} label={card.label} value={card.value} icon={card.icon} variant={card.variant} loading={Loading} />
      ))}
    </div>
  );
};
export default ListSubcategoryDashboardOverviewCards;

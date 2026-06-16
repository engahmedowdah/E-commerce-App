import React from "react";
import { CartDashboardOverviewCard } from "..";
import useTranslation from "../../../../../shared/i18n/useTranslation";
interface Props {
  stats: { totalItems: number; totalProducts: number; avgProducts: number };
  Loading?: boolean;
}
const ListCartDashboardOverviewCards: React.FC<Props> = ({ stats, Loading }) => {
  const t = useTranslation();
  const s = t.stats as Record<string, string>;
  const avgProducts = stats.avgProducts ? stats.avgProducts.toFixed(2) : "0.00";
  const cards = [
    { label: s.totalCarts,    value: stats.totalItems,   icon: "inventory_2", variant: "primary" as const },
    { label: s.totalProducts, value: stats.totalProducts, icon: "analytics",  variant: "info"    as const },
    { label: s.avgProducts,   value: avgProducts,         icon: "analytics",  variant: "info"    as const },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <CartDashboardOverviewCard key={index} label={card.label} value={card.value} icon={card.icon} variant={card.variant} loading={Loading} />
      ))}
    </div>
  );
};
export default ListCartDashboardOverviewCards;

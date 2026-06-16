import React from "react";
import { OrderDashboardOverviewCard } from "..";
import useTranslation from "../../../../../shared/i18n/useTranslation";
interface Props {
  stats: { totalItems: number; activeItems?: number; inactiveItems?: number };
  Loading?: boolean;
}
const ListOrderDashboardOverviewCards: React.FC<Props> = ({ stats, Loading }) => {
  const t = useTranslation();
  const s = t.stats as Record<string, string>;
  const cards = [
    { label: s.totalOrders, value: stats.totalItems,           icon: "inventory_2",  variant: "primary" as const },
    { label: s.pending,      value: stats.activeItems ?? 0,    icon: "schedule",     variant: "warning" as const },
    { label: s.completed,    value: stats.inactiveItems ?? 0,  icon: "check_circle", variant: "success" as const },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <OrderDashboardOverviewCard key={index} label={card.label} value={card.value} icon={card.icon} variant={card.variant} loading={Loading} />
      ))}
    </div>
  );
};
export default ListOrderDashboardOverviewCards;

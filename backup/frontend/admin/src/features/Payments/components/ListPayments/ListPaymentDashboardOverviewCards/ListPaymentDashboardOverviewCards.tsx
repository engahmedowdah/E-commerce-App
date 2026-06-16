import React from "react";
import { PaymentDashboardOverviewCard } from "..";
import useTranslation from "../../../../../shared/i18n/useTranslation";
interface Props {
  stats: { totalItems: number; activeItems: number; inactiveItems: number; totalAmount: number };
  Loading?: boolean;
}
const ListPaymentDashboardOverviewCards: React.FC<Props> = ({ stats, Loading }) => {
  const t = useTranslation();
  const s = t.stats as Record<string, string>;
  const cards = [
    { label: s.totalPayments, value: stats.totalItems,   icon: "inventory_2",  variant: "primary" as const },
    { label: s.totalAmount,    value: stats.totalAmount,  icon: "check_circle", variant: "success" as const },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      {cards.map((card, index) => (
        <PaymentDashboardOverviewCard key={index} label={card.label} value={card.value} icon={card.icon} variant={card.variant} loading={Loading} />
      ))}
    </div>
  );
};
export default ListPaymentDashboardOverviewCards;

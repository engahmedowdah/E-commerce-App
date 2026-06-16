import React from "react";
import { RoleDashboardOverviewCard } from "..";
import useTranslation from "../../../../../shared/i18n/useTranslation";
interface Props {
  stats: { totalItems: number; activeItems: number; inactiveItems: number; totalPermissions: number; avgPermissions: number };
  Loading?: boolean;
}
const ListRoleDashboardOverviewCards: React.FC<Props> = ({ stats, Loading }) => {
  const t = useTranslation();
  const s = t.stats as Record<string, string>;
  const avgPermissions = stats.avgPermissions ? stats.avgPermissions.toFixed(2) : "0.00";
  const cards = [
    { label: s.totalRoles,        value: stats.totalItems,              icon: "inventory_2",  variant: "primary" as const },
    { label: s.active,             value: stats.activeItems,            icon: "check_circle", variant: "success" as const },
    { label: s.inactive,           value: stats.inactiveItems,          icon: "pause_circle", variant: "warning" as const },
    { label: s.totalPermissions,   value: stats.totalPermissions ?? 0,  icon: "lock",         variant: "primary" as const },
    { label: s.avgPermissions,     value: avgPermissions,               icon: "check_circle", variant: "success" as const },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <RoleDashboardOverviewCard key={index} label={card.label} value={card.value} icon={card.icon} variant={card.variant} loading={Loading} />
      ))}
    </div>
  );
};
export default ListRoleDashboardOverviewCards;

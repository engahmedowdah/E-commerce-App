import React from "react";
import DashboardStatCard from "../DashboardStatCard/DashboardStatCard";
import type { DashboardStats } from "../../hooks/useDashboard";
import "./DashboardOverview.css";

interface Props {
  stats: DashboardStats;
  loading: boolean;
}

const DashboardOverview: React.FC<Props> = ({ stats, loading }) => {
  const statConfig = [
    { label: "Products", value: stats.products, icon: "📦", color: "blue", href: "/products" },
    { label: "Orders", value: stats.orders, icon: "🛒", color: "emerald", href: "/orders" },
    { label: "Categories", value: stats.categories, icon: "🏷️", color: "violet", href: "/categories" },
    { label: "Subcategories", value: stats.subcategories, icon: "📁", color: "amber", href: "/subcategories" },
    { label: "Collections", value: stats.collections, icon: "✨", color: "pink", href: "/collections" },
    { label: "Carts", value: stats.carts, icon: "🛍️", color: "orange", href: "/carts" },
    { label: "Payments", value: stats.payments, icon: "💳", color: "teal", href: "/payments" },
    { label: "Users", value: stats.users, icon: "👥", color: "indigo", href: "/users" },
    { label: "Admins", value: stats.admins, icon: "🛡️", color: "cyan", href: "/admins" },
    { label: "Countries", value: stats.countries, icon: "🌍", color: "rose", href: "/countries" },
    { label: "Roles", value: stats.roles, icon: "🔑", color: "lime", href: "/roles" },
    { label: "Permissions", value: stats.permissions, icon: "🔒", color: "slate", href: "/permissions" },
  ];

  return (
    <div className="dash-overview">
      <div className="dash-overview__grid">
        {statConfig.map((card, idx) => (
          <DashboardStatCard
            key={idx}
            label={card.label}
            value={card.value}
            icon={card.icon}
            color={card.color}
            href={card.href}
            loading={loading}
          />
        ))}
      </div>
    </div>
  );
};

export default DashboardOverview;

import React from "react";
import "./DashboardStatCard.css";

interface Props {
  label: string;
  value: number;
  icon: string;
  color: string;
  href?: string;
  loading?: boolean;
}

const DashboardStatCard: React.FC<Props> = ({ label, value, icon, color, href, loading }) => {
  const content = (
    <div className={`dash-stat-card dash-stat-card--${color}`}>
      <div className="dash-stat-card__icon-wrap">
        <span className="dash-stat-card__icon">{icon}</span>
      </div>
      <div className="dash-stat-card__body">
        <span className="dash-stat-card__label">{label}</span>
        {loading ? (
          <span className="dash-stat-card__skeleton" />
        ) : (
          <span className="dash-stat-card__value">{value.toLocaleString()}</span>
        )}
      </div>
      {href && <span className="dash-stat-card__arrow">→</span>}
    </div>
  );

  if (href) {
    return <a href={href} className="dash-stat-card__link">{content}</a>;
  }
  return content;
};

export default DashboardStatCard;

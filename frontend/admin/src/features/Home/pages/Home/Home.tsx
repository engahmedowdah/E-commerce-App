import React from "react";
import useDashboard from "../../hooks/useDashboard";
import DashboardOverview from "../../components/DashboardOverview/DashboardOverview";
import "./Home.css";

const Home: React.FC = () => {
  const { stats, loading, refetch } = useDashboard();

  return (
    <div className="admin-dashboard">
      <header className="admin-dashboard__header">
        <div className="admin-dashboard__title-wrap">
          <h1 className="admin-dashboard__title">Dashboard Overview</h1>
          <p className="admin-dashboard__subtitle">
            Real-time storefront metrics and management controls
          </p>
        </div>
        <button
          className={`admin-dashboard__refresh-btn ${
            loading ? "admin-dashboard__refresh-btn--loading" : ""
          }`}
          onClick={refetch}
          disabled={loading}
        >
          <span className="admin-dashboard__refresh-icon">🔄</span>
          {loading ? "Refreshing..." : "Refresh Stats"}
        </button>
      </header>

      <DashboardOverview stats={stats} loading={loading} />
    </div>
  );
};

export default Home;

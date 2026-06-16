import "./PaymentStatusDashboardOverviewCard.css";
import React from "react";
interface Props {
  label: string;
  value: string | number;
  icon: string;
  variant?: 'primary' | 'success' | 'warning' | 'info' | 'error';
  loading?: boolean;
}
const PaymentStatusDashboardOverviewCard: React.FC<Props> = ({
  label,
  value,
  icon,
  variant = 'primary',
  loading
}) => {
  if (loading) {
    return (
      <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-surface-container-high animate-pulse">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-surface-container"></div>
          <div className="space-y-2">
            <div className="h-4 w-20 bg-surface-container rounded"></div>
            <div className="h-6 w-12 bg-surface-container rounded"></div>
          </div>
        </div>
      </div>
    );
  }
  const variantClasses = {
    primary: 'bg-primary/10 text-primary',
    success: 'bg-success/10 text-success',
    warning: 'bg-warning/10 text-warning',
    info: 'bg-info/10 text-info',
    error: 'bg-error/10 text-error',
  };
  return (
    <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-surface-container-high hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${variantClasses[variant]}`}>
          <span className="material-symbols-outlined text-2xl">{icon}</span>
        </div>
        <div>
          <p className="text-sm font-medium text-on-surface-variant mb-0.5">{label}</p>
          <h3 className="text-2xl font-black text-on-surface leading-none">{value}</h3>
        </div>
      </div>
    </div>
  );
};
export default PaymentStatusDashboardOverviewCard;

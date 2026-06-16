import React from 'react';
const OrderDetailsSettings: React.FC = () => {
  return (
    <div className="bg-surface-container-lowest rounded-3xl p-12 border border-outline-variant/30 shadow-sm glass-panel flex flex-col justify-center items-center h-64 hover:shadow-md transition-shadow mb-12">
      <div className="w-20 h-20 rounded-full bg-tertiary/10 flex items-center justify-center text-tertiary mb-6 hover:rotate-90 transition-transform duration-700">
        <span className="material-symbols-outlined text-4xl">settings</span>
      </div>
      <h3 className="text-2xl font-bold text-on-surface mb-3 tracking-tight">Order Settings</h3>
      <p className="text-on-surface-variant text-center max-w-md">Configure advanced settings, URL handles, and metadata for this order.</p>
    </div>
  );
};
export default OrderDetailsSettings;

import React from 'react';
import type { IOrder } from '../../../../../../shared/types/Orders/IOrder.types';
interface Props {
  order: IOrder;
}
const OrderDetailsStatus: React.FC<Props> = ({ order }) => {
  return (
    <div className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/30 shadow-sm glass-panel hover:shadow-md transition-shadow">
      <h3 className="text-xl font-bold text-on-surface mb-8 flex items-center gap-3">
        <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-[18px]">monitoring</span>
        </span>
        Status Insight
      </h3>
      <div className="space-y-6">
         <div className="flex items-center justify-between p-4 bg-surface-container-low/50 rounded-xl border border-outline-variant/20">
            <span className="text-sm font-semibold text-on-surface-variant">Published</span>
            <span className="text-sm font-medium text-on-surface">
               {order.CreatedDate ? new Date(order.CreatedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute:'2-digit' }) : 'Unknown'}
            </span>
         </div>
         <div className="flex items-center justify-between p-4 bg-surface-container-low/50 rounded-xl border border-outline-variant/20">
            <span className="text-sm font-semibold text-on-surface-variant">ID</span>
            <span className="text-xs font-mono text-on-surface-variant bg-surface-container-high/50 px-2 py-1 rounded select-all">
               {order._id || 'N/A'}
            </span>
         </div>
      </div>
    </div>
  );
};
export default OrderDetailsStatus;

import React from 'react';
import type { IOrder } from '../../../../../../shared/types/Orders/IOrder.types';
interface Props {
  order: IOrder;
}
const OrderDetailsInfo: React.FC<Props> = ({ order }) => {
  const getInitials = (firstName: string = '', lastName: string = '') => {
    return ((firstName[0] || '') + (lastName[0] || '')).toUpperCase();
  };
  const getStatusClass = (statusName: string = '') => {
    const s = statusName.toLowerCase();
    if (s.includes('deliver') || s.includes('complete') || s.includes('paid') || s.includes('success')) {
      return 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400 border-emerald-200';
    }
    if (s.includes('pend') || s.includes('wait') || s.includes('process')) {
      return 'bg-amber-50 text-amber-700 dark:bg-amber-950/30 dark:text-amber-400 border-amber-200';
    }
    if (s.includes('cancel') || s.includes('refund') || s.includes('fail')) {
      return 'bg-rose-50 text-rose-700 dark:bg-rose-950/30 dark:text-rose-400 border-rose-200';
    }
    return 'bg-sky-50 text-sky-700 dark:bg-sky-950/30 dark:text-sky-400 border-sky-200';
  };
  return (
    <div className="w-full space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant/30 shadow-sm flex items-center gap-4 hover:bg-surface-container-low/20 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
          </div>
          <div>
            <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">OrderStatus</p>
            <p className="text-sm font-black text-on-surface">{order.OrderStatus?.Name || 'N/A'}</p>
          </div>
        </div>
        <div className="bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant/30 shadow-sm flex items-center gap-4 hover:bg-surface-container-low/20 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
            <span className="material-symbols-outlined text-[20px]">payments</span>
          </div>
          <div>
            <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Grand Total</p>
            <p className="text-sm font-black text-on-surface">{order.Payment?.CurrencySymbol || '$'}{order.Payment?.Amount?.toFixed(2) || '0.00'}</p>
          </div>
        </div>
        <div className="bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant/30 shadow-sm flex items-center gap-4 hover:bg-surface-container-low/20 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center">
            <span className="material-symbols-outlined text-[20px]">credit_card</span>
          </div>
          <div>
            <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Payment Status</p>
            <p className="text-sm font-black text-on-surface">{order.Payment?.PaymentStatus?.Name || 'Pending'}</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-surface-container-lowest rounded-3xl p-6 border border-outline-variant/30 shadow-sm flex flex-col justify-between space-y-6">
          <div>
            <h3 className="text-base font-bold text-on-surface mb-6 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-primary rounded-full"></span>
              Customer Profile & Shipping
            </h3>
            <div className="flex items-center gap-4 bg-surface-container-low/30 p-4 rounded-2xl border border-outline-variant/10">
              <div className="w-14 h-14 rounded-full bg-primary/10 text-primary font-black flex items-center justify-center text-lg border border-primary/20">
                {getInitials(order.User?.FirstName, order.User?.LastName)}
              </div>
              <div className="space-y-0.5">
                <h4 className="text-base font-bold text-on-surface">
                  {order.User?.FirstName + ' ' + order.User?.LastName}
                </h4>
                <p className="text-xs text-on-surface-variant font-medium">{order.User?.Email || 'No email provided'}</p>
              </div>
            </div>
            <div className="mt-5 space-y-3">
              <span className="text-[10px] font-extrabold text-on-surface-variant uppercase tracking-widest block pl-1">
                Delivery Location
              </span>
              <div className="bg-surface-container-low/30 p-5 rounded-2xl border border-outline-variant/10 flex gap-3.5">
                <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5">location_on</span>
                {order.Address ? (
                  <div className="space-y-1 text-sm text-on-surface leading-relaxed">
                    <p className="font-bold">{order.Address.AddressLine1}</p>
                    {order.Address.AddressLine2 && <p className="text-on-surface-variant font-medium">{order.Address.AddressLine2}</p>}
                    <p className="text-xs font-semibold text-primary mt-1">
                      {order.Address.City?.Name}, {order.Address.Country?.Name}
                    </p>
                  </div>
                ) : (
                  <span className="italic text-on-surface-variant/70 text-sm">No address provided.</span>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-surface-container-lowest rounded-3xl p-6 border border-outline-variant/30 shadow-sm flex flex-col justify-between space-y-6">
          <div>
            <h3 className="text-base font-bold text-on-surface mb-6 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-emerald-500 rounded-full"></span>
              Payment & Invoice
            </h3>
            <div className="space-y-1">
              <div className="flex justify-between items-center py-3 border-b border-outline-variant/15 text-sm">
                <span className="font-semibold text-on-surface-variant">Payment Method</span>
                <span className="font-bold text-on-surface flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-on-surface-variant">payment</span>
                  {order.Payment?.PaymentMethod?.Name || 'Not specified'}
                </span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-outline-variant/15 text-sm">
                <span className="font-semibold text-on-surface-variant">Payment Status</span>
                <span className={`px-2.5 py-0.5 rounded-md border text-[11px] font-bold uppercase ${getStatusClass(order.Payment?.PaymentStatus?.Name)}`}>
                  {order.Payment?.PaymentStatus?.Name || 'Pending'}
                </span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-outline-variant/15 text-sm">
                <span className="font-semibold text-on-surface-variant">Currency</span>
                <span className="font-bold text-on-surface uppercase">{order.Payment?.CurrencySymbol || 'USD ($)'}</span>
              </div>
              <div className="flex justify-between items-baseline pt-4 pb-2 text-sm">
                <span className="font-black text-on-surface">Total Amount</span>
                <span className="text-2xl font-black text-primary">
                  {order.Payment?.CurrencySymbol || '$'}{order.Payment?.Amount?.toFixed(2) || '0.00'}
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center text-[10px] text-on-surface-variant/80 bg-surface-container-low/40 px-4 py-2.5 rounded-xl border border-outline-variant/10">
            <span className="font-semibold">Transaction ID</span>
            <span className="font-mono bg-surface-container-lowest px-2 py-0.5 rounded border border-outline-variant/5">
              {order.Payment?._id?.slice(-12).toUpperCase() || 'N/A'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderDetailsInfo;

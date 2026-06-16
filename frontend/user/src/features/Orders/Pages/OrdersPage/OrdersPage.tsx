import React, { useState } from 'react';

const ordersData = [
  {
    id: 'SS-90421',
    date: '14 أكتوبر 2023',
    total: '850.00 ر.س',
    status: 'pending', // pending, delivered, cancelled
    statusLabel: 'جاري التنفيذ',
    expectedDelivery: 'متوقع وصوله: 17 أكتوبر',
    title: 'حذاء رياضي أحمر + 2 منتج آخر',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCbcppKV5lk9_kw2wEZt-SHXdcpQkac_dzmxqaoxOONpqRypLzVhFZpcD2Aq2RXfDRw1v61oMZBmglDuZIHzEpIEBRhqmLm9V-r5Ze2thSNns9XS6v7XDF1LYIpaBoTi30PdT-xwWjItIVZTiHsrjoJp0vOaOQkUPMkGRo5vs-UeoqQXQeZlYMtwYLA-Frt1fMvKWkAUVrrtADkPGa3_sHtaWuv2eQVy6DQiXYK_SqxwOyfqHFiYXD3LZomQldWzQ1by89l0EeJlBE',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDoo_8KA_mWzPTrQfe5WLYfMMD81FLLpJ2CjqxPLkN7TqAH0ZEEDTM4n5UcBK67hGpW_-MPp1SQv-zRvD8MMXk1myd7EcCPQtREy7ezfWrfGnfksqmxuz5ReBlbv_1O3SPdTzma2F2P_s2HJ-bXG5qTcSE7t3ioavva4cJby9mTqcDN0Cue9ZMtlw1VxzbRDdNLA5Ijwey7YGGDjGJxK_me3SicjYM0dg5oK6daXkf2EsWDwdCyX0g9D2QeDVrRB7_42D7vSmvp5AU'
    ],
    extraCount: 1,
    month: 'أكتوبر 2023'
  },
  {
    id: 'SS-89210',
    date: '28 سبتمبر 2023',
    total: '1,240.00 ر.س',
    status: 'delivered',
    statusLabel: 'تم التوصيل',
    title: 'بوت سويد عصري - كولكشن الخريف',
    details: 'المقاس: 42 | اللون: لافندر',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCHBQ8PwyYsv_6OqCAkUrvI4RbZQV7c0ai4epqh8ofQYIP67_FL8z3bfY2IOhkL-XQ50VspmTAm4wyRVnD2y8xxT1tWISR9FUWovtOEDmoT4cQ_nbJJmo5YVEhnB2Oy9rexHdQgeO0fx5Ty4VDds9N-d4xhly2mXmSf2YBkujNfbTnISBAIST2FKNw7oNJ_vTc5TB1wId3q2g7dMcL_ygitZmeTQcVWtxHoILW9g1xzOpZB7JDzL7PXfInDsY4zUrNTIjZoTUKuyng'
    ],
    month: 'سبتمبر 2023'
  },
  {
    id: 'SS-87554',
    date: '12 سبتمبر 2023',
    total: '320.00 ر.س',
    status: 'delivered',
    statusLabel: 'تم التوصيل',
    title: 'حذاء كاجوال جلد أبيض',
    details: 'المقاس: 40 | اللون: أبيض',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDy_Qzg5HMX5gTqBwyyds0j8srbsPLmDL916fcAp6Mc2lHDSTGr8D6msPY3hu9RhRdn-XF3QLXf7fqTTfzkIJ_60EVmkPvi9X6QaFaxhTlGM0e99T4hZG0a-0X-yugk6CVYbjtDHHjloPwepvNBdBtPeJsCAZ1kk2F1QbunDSitb155mjBvJK1dtFbI5lbtTxiH70MoAvhXlQjpWCBhD5O_P9Ws-i9dY7lmD_Z3whuHMTIdHxR1AAg5ML32YnxHt6vx4B66pioQKFE'
    ],
    month: 'سبتمبر 2023'
  }
];

function OrdersPage(): React.ReactNode {
  const [activeTab, setActiveTab] = useState<'all' | 'pending' | 'delivered' | 'cancelled'>('all');
  const [timeFilter, setTimeFilter] = useState('3months');

  const filteredOrders = ordersData.filter(order => {
    if (activeTab === 'all') return true;
    return order.status === activeTab;
  });

  return (
    <main className="pt-8 pb-section-gap px-container-margin max-w-6xl mx-auto text-right">
      {/* Breadcrumbs */}
      <nav className="flex text-on-surface-variant text-[12px] mb-4 gap-1 justify-start">
        <span className="text-on-surface font-bold">طلباتي</span>
        <span>/</span>
        <a className="hover:text-primary no-underline text-on-surface-variant" href="/">الرئيسية</a>
      </nav>

      {/* Header Info */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-gutter mb-8">
        <div className="space-y-2">
          <h1 className="font-headline-xl text-on-surface">تاريخ الطلبات</h1>
          <p className="text-on-surface-variant max-w-xl text-body-lg">
            قم بإدارة طلباتك وتتبع شحناتك الحالية. يمكنك أيضاً عرض الفواتير وإعادة شراء منتجاتك المفضلة.
          </p>
        </div>
        <div className="flex gap-2 justify-start">
          <div className="relative">
            <select 
              value={timeFilter}
              onChange={(e) => setTimeFilter(e.target.value)}
              className="appearance-none bg-surface-container-highest border-none rounded-lg px-8 py-2 text-sm font-label-bold focus:ring-primary/20 text-right cursor-pointer"
            >
              <option value="3months">آخر 3 أشهر</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
            </select>
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">expand_more</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 mb-8 border-b border-surface-container-highest overflow-x-auto whitespace-nowrap justify-start">
        <button 
          onClick={() => setActiveTab('all')}
          className={`pb-3 px-2 font-label-bold text-sm bg-transparent border-none cursor-pointer ${
            activeTab === 'all' ? 'text-primary border-b-2 border-primary border-solid' : 'text-on-surface-variant hover:text-on-surface'
          }`}
        >
          جميع الطلبات ({ordersData.length})
        </button>
        <button 
          onClick={() => setActiveTab('pending')}
          className={`pb-3 px-2 font-label-bold text-sm bg-transparent border-none cursor-pointer ${
            activeTab === 'pending' ? 'text-primary border-b-2 border-primary border-solid' : 'text-on-surface-variant hover:text-on-surface'
          }`}
        >
          جاري التنفيذ ({ordersData.filter(o => o.status === 'pending').length})
        </button>
        <button 
          onClick={() => setActiveTab('delivered')}
          className={`pb-3 px-2 font-label-bold text-sm bg-transparent border-none cursor-pointer ${
            activeTab === 'delivered' ? 'text-primary border-b-2 border-primary border-solid' : 'text-on-surface-variant hover:text-on-surface'
          }`}
        >
          تم التوصيل ({ordersData.filter(o => o.status === 'delivered').length})
        </button>
        <button 
          onClick={() => setActiveTab('cancelled')}
          className={`pb-3 px-2 font-label-bold text-sm bg-transparent border-none cursor-pointer ${
            activeTab === 'cancelled' ? 'text-primary border-b-2 border-primary border-solid' : 'text-on-surface-variant hover:text-on-surface'
          }`}
        >
          الملغاة ({ordersData.filter(o => o.status === 'cancelled').length})
        </button>
      </div>

      {/* Orders List */}
      <div className="flex flex-col gap-gutter">
        {filteredOrders.length === 0 ? (
          <div className="text-center py-20 bg-surface-container-lowest rounded-xl border border-outline-variant/30">
            <span className="material-symbols-outlined text-5xl text-on-surface-variant mb-4">receipt_long</span>
            <p className="text-on-surface-variant font-label-bold">لا يوجد طلبات في هذا القسم حالياً.</p>
          </div>
        ) : (
          filteredOrders.map(order => (
            <div key={order.id} className="bg-white border border-surface-variant/40 rounded-xl overflow-hidden shadow-sm">
              <div className="bg-surface-container-low px-6 py-4 flex flex-wrap justify-between items-center gap-4 border-b border-surface-container-highest">
                <div className="flex gap-8 flex-wrap">
                  <div>
                    <span className="block text-[11px] text-on-surface-variant font-bold mb-0.5">رقم الطلب</span>
                    <span className="font-label-bold text-sm">#{order.id}</span>
                  </div>
                  <div>
                    <span className="block text-[11px] text-on-surface-variant font-bold mb-0.5">تم الطلب في</span>
                    <span className="text-sm">{order.date}</span>
                  </div>
                  <div>
                    <span className="block text-[11px] text-on-surface-variant font-bold mb-0.5">الإجمالي</span>
                    <span className="font-price-display text-primary">{order.total}</span>
                  </div>
                </div>
                <div>
                  <span className={`flex items-center gap-1.5 px-3 py-1 font-bold text-[12px] rounded-full border ${
                    order.status === 'delivered' 
                      ? 'bg-green-50 text-green-700 border-green-100' 
                      : 'bg-secondary-container/30 text-secondary border-secondary/20'
                  }`}>
                    <span className={`w-2 h-2 rounded-full ${order.status === 'delivered' ? 'bg-green-600' : 'bg-secondary'}`}></span>
                    {order.statusLabel}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-col md:flex-row justify-between gap-gutter">
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-4 space-x-reverse">
                      {order.images.map((img, idx) => (
                        <div key={idx} className="w-16 h-16 rounded-lg border-2 border-white shadow-sm overflow-hidden bg-surface-container">
                          <img alt="product" className="w-full h-full object-cover" src={img} />
                        </div>
                      ))}
                      {order.extraCount && (
                        <div className="w-16 h-16 rounded-lg border-2 border-white shadow-sm bg-surface-container-highest flex items-center justify-center text-[12px] font-bold text-on-surface-variant">
                          +{order.extraCount}
                        </div>
                      )}
                    </div>
                    <div>
                      <p className="font-label-bold text-sm text-right">{order.title}</p>
                      {order.details && <p className="text-[12px] text-on-surface-variant text-right">{order.details}</p>}
                      {order.expectedDelivery && <p className="text-[12px] text-on-surface-variant text-right">{order.expectedDelivery}</p>}
                    </div>
                  </div>
                  <div className="flex items-center gap-3 justify-end mt-4 md:mt-0">
                    <button className="px-5 py-2 text-sm font-label-bold border border-outline rounded-lg hover:bg-surface-container transition-colors bg-white cursor-pointer">تفاصيل الطلب</button>
                    {order.status === 'delivered' ? (
                      <button className="px-5 py-2 text-sm font-label-bold bg-primary text-on-primary rounded-lg hover:bg-primary/90 active:scale-[0.98] transition-all border-none cursor-pointer">إعادة الطلب</button>
                    ) : (
                      <button className="px-5 py-2 text-sm font-label-bold bg-on-surface text-surface rounded-lg hover:opacity-90 active:scale-[0.98] transition-all flex items-center gap-2 border-none cursor-pointer">
                        <span className="material-symbols-outlined text-[18px]">local_shipping</span>
                        تتبع الشحنة
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Pagination */}
      <div className="mt-section-gap flex justify-between items-center border-t border-surface-container-highest pt-gutter">
        <button className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors text-sm font-bold bg-transparent border-none cursor-pointer disabled:opacity-30" disabled>
          <span className="material-symbols-outlined">chevron_right</span>
          السابق
        </button>
        <div className="flex gap-2">
          <button className="w-8 h-8 rounded bg-primary text-on-primary font-bold text-[12px] border-none">1</button>
          <button className="w-8 h-8 rounded hover:bg-surface-container text-on-surface font-bold text-[12px] bg-transparent border-none cursor-pointer">2</button>
          <button className="w-8 h-8 rounded hover:bg-surface-container text-on-surface font-bold text-[12px] bg-transparent border-none cursor-pointer">3</button>
        </div>
        <button className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors text-sm font-bold bg-transparent border-none cursor-pointer">
          التالي
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
      </div>
    </main>
  );
}

export default OrdersPage;

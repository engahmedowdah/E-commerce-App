import React, { useState } from 'react';

const orderItems = [
  {
    name: 'نايكي إير ماكس',
    details: 'المقاس: 42 | اللون: أحمر',
    price: '450 ر.س',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6Np8zcqpzXbXZBqkqeoIbNpMzu_XSYufkcG6ZYRqvBALoHV0Tm9UZpcY0eWiEcfmvYf-PrXyeqSgfzndfAe5iDQu7BScdGXNn4tf8BqJIn4xJtYc-alrnZLLmyj3KuJZ_sfARrKQQFev1XglbqIhm1HyiZ7fp26Qgr9Gz7dn6JFnr6qB5oMAHjfOzPYc_mvO8-LPJOBY6Wttp4rr8KHE7ddMzlhZTwTjb3vk8C4E7KyVJ0tmO7Wp-yFVzwgNXn8cUkBsShf2CrFs',
  },
  {
    name: 'حذاء جلدي فاخر',
    details: 'المقاس: 43 | اللون: بيج',
    price: '620 ر.س',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHUzN-z1O5tHHuTAiZPS5XRq9n0S1svEjoP2O5jufV8b0Dlm3KUppQB7F1e3Z_sPeRpzT4T7ijIl9mas-2OvIzWkSF5NPWg6dYPajuOw6fBdBcuclZG6MVMpaE9PmHDnhXuVkAJwGugNBS2YuCf5JeTIR-8ho5rWVnPHwRZRLZvHMxXukM5tKOvF6zzHhA2alfJc9XliwVPQnKFutJLj7ARQnBFXRgV9WbQmRsdfBbcftQjPabbM0CEUxCZZAS_HjGOsDlm1wtkKU',
  },
];

function CheckoutPage(): React.ReactNode {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'applepay' | 'cod'>('card');
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <main className="max-w-2xl mx-auto px-container-margin py-24 text-center space-y-6">
        <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
          <span className="material-symbols-outlined text-5xl">check_circle</span>
        </div>
        <h1 className="font-headline-xl text-3xl text-on-surface">تم استلام طلبك بنجاح!</h1>
        <p className="text-body-lg text-on-surface-variant max-w-md mx-auto">
          نشكرك على تسوقك معنا. تم إرسال تفاصيل الطلب وتأكيده إلى بريدك الإلكتروني. رقم الطلب الخاص بك هو #849372.
        </p>
        <button 
          onClick={() => window.location.href = '/'}
          className="bg-primary text-white font-label-bold px-8 py-4 rounded-xl hover:opacity-90 active:scale-95 transition-all cursor-pointer border-none"
        >
          العودة للرئيسية
        </button>
      </main>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-container-margin py-section-gap">
      <h1 className="font-headline-xl text-headline-xl mb-8 text-right">إتمام الطلب</h1>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Forms */}
        <div className="lg:col-span-8 space-y-8 order-2 lg:order-1">
          {/* Shipping Address Section */}
          <section className="bg-surface-container-lowest rounded-xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary">local_shipping</span>
              <h2 className="font-headline-lg text-headline-lg">عنوان الشحن</h2>
            </div>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-right" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block font-label-bold text-label-bold mb-2">الاسم الأول</label>
                <input className="w-full bg-surface-container-low border-none rounded-lg p-3 focus:ring-2 focus:ring-primary-container text-right" placeholder="أدخل اسمك الأول" type="text" />
              </div>
              <div>
                <label className="block font-label-bold text-label-bold mb-2">اسم العائلة</label>
                <input className="w-full bg-surface-container-low border-none rounded-lg p-3 focus:ring-2 focus:ring-primary-container text-right" placeholder="أدخل اسم العائلة" type="text" />
              </div>
              <div className="md:col-span-2">
                <label className="block font-label-bold text-label-bold mb-2">العنوان بالتفصيل</label>
                <input className="w-full bg-surface-container-low border-none rounded-lg p-3 focus:ring-2 focus:ring-primary-container text-right" placeholder="اسم الشارع، رقم المبنى، الشقة" type="text" />
              </div>
              <div>
                <label className="block font-label-bold text-label-bold mb-2">المدينة</label>
                <input className="w-full bg-surface-container-low border-none rounded-lg p-3 focus:ring-2 focus:ring-primary-container text-right" placeholder="الرياض" type="text" />
              </div>
              <div>
                <label className="block font-label-bold text-label-bold mb-2">الرمز البريدي</label>
                <input className="w-full bg-surface-container-low border-none rounded-lg p-3 focus:ring-2 focus:ring-primary-container text-right" placeholder="12345" type="text" />
              </div>
              <div className="md:col-span-2">
                <label className="block font-label-bold text-label-bold mb-2">رقم الهاتف</label>
                <input className="w-full bg-surface-container-low border-none rounded-lg p-3 focus:ring-2 focus:ring-primary-container text-left" dir="ltr" placeholder="+966 5X XXX XXXX" type="tel" />
              </div>
            </form>
          </section>

          {/* Payment Method Section */}
          <section className="bg-surface-container-lowest rounded-xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary">payments</span>
              <h2 className="font-headline-lg text-headline-lg">طريقة الدفع</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <button 
                onClick={() => setPaymentMethod('card')}
                className={`relative flex flex-col items-center gap-2 p-4 border-2 rounded-xl cursor-pointer transition-all bg-transparent ${
                  paymentMethod === 'card' ? 'border-primary-container bg-surface-container-lowest' : 'border-transparent bg-surface-container-low'
                }`}
              >
                <span className="material-symbols-outlined text-3xl">credit_card</span>
                <span className="font-label-bold text-label-bold">بطاقة ائتمان</span>
              </button>
              <button 
                onClick={() => setPaymentMethod('applepay')}
                className={`relative flex flex-col items-center gap-2 p-4 border-2 rounded-xl cursor-pointer transition-all bg-transparent ${
                  paymentMethod === 'applepay' ? 'border-primary-container bg-surface-container-lowest' : 'border-transparent bg-surface-container-low'
                }`}
              >
                <span className="material-symbols-outlined text-3xl">account_balance_wallet</span>
                <span className="font-label-bold text-label-bold">Apple Pay</span>
              </button>
              <button 
                onClick={() => setPaymentMethod('cod')}
                className={`relative flex flex-col items-center gap-2 p-4 border-2 rounded-xl cursor-pointer transition-all bg-transparent ${
                  paymentMethod === 'cod' ? 'border-primary-container bg-surface-container-lowest' : 'border-transparent bg-surface-container-low'
                }`}
              >
                <span className="material-symbols-outlined text-3xl">payments</span>
                <span className="font-label-bold text-label-bold">الدفع عند الاستلام</span>
              </button>
            </div>

            {paymentMethod === 'card' && (
              <div className="space-y-4 text-right">
                <div>
                  <label className="block font-label-bold text-label-bold mb-2">رقم البطاقة</label>
                  <div className="relative">
                    <input className="w-full bg-surface-container-low border-none rounded-lg p-3 pr-12 focus:ring-2 focus:ring-primary-container text-right" placeholder="0000 0000 0000 0000" type="text" />
                    <span className="material-symbols-outlined absolute left-3 top-3 text-on-surface-variant">lock</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-label-bold text-label-bold mb-2">تاريخ الانتهاء</label>
                    <input className="w-full bg-surface-container-low border-none rounded-lg p-3 focus:ring-2 focus:ring-primary-container text-right" placeholder="MM/YY" type="text" />
                  </div>
                  <div>
                    <label className="block font-label-bold text-label-bold mb-2">رمز الأمان (CVV)</label>
                    <input className="w-full bg-surface-container-low border-none rounded-lg p-3 focus:ring-2 focus:ring-primary-container text-right" placeholder="123" type="text" />
                  </div>
                </div>
              </div>
            )}

            {paymentMethod === 'applepay' && (
              <div className="text-center py-6 bg-surface-container-low rounded-xl">
                <span className="material-symbols-outlined text-4xl text-on-surface-variant">contactless</span>
                <p className="mt-2 font-label-bold">انقر على الزر لإتمام الدفع بواسطة Apple Pay</p>
              </div>
            )}

            {paymentMethod === 'cod' && (
              <div className="text-center py-6 bg-surface-container-low rounded-xl">
                <span className="material-symbols-outlined text-4xl text-on-surface-variant">local_atm</span>
                <p className="mt-2 font-label-bold">سيتم دفع المبلغ نقداً أو عبر بطاقة مدى للمندوب عند استلام الشحنة.</p>
              </div>
            )}
          </section>
        </div>

        {/* Right Column: Order Summary */}
        <aside className="lg:col-span-4 order-1 lg:order-2">
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant text-right">
            <h2 className="font-headline-md text-headline-md mb-6">ملخص الطلب</h2>
            <div className="space-y-4 mb-6 border-b border-outline-variant pb-6">
              {orderItems.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-20 h-20 bg-primary-fixed rounded-lg overflow-hidden flex-shrink-0">
                    <img className="w-full h-full object-cover" alt={item.name} src={item.image} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-label-bold text-label-bold">{item.name}</h3>
                    <p className="text-body-sm text-on-surface-variant">{item.details}</p>
                    <p className="font-price-display text-price-display mt-1">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-3 mb-8">
              <div className="flex justify-between font-body-lg text-body-lg">
                <span className="text-on-surface-variant">المجموع الفرعي</span>
                <span>1070 ر.س</span>
              </div>
              <div className="flex justify-between font-body-lg text-body-lg">
                <span className="text-on-surface-variant">الشحن</span>
                <span className="text-green-600">مجاني</span>
              </div>
              <div className="flex justify-between font-body-lg text-body-lg">
                <span className="text-on-surface-variant">الضريبة (15%)</span>
                <span>160.5 ر.س</span>
              </div>
              <div className="flex justify-between font-headline-md text-headline-md pt-3 border-t border-dashed border-outline-variant">
                <span>الإجمالي</span>
                <span className="text-primary">1230.5 ر.س</span>
              </div>
            </div>
            <button 
              onClick={handlePlaceOrder}
              className="w-full bg-black text-white font-label-bold text-label-bold py-4 rounded-xl uppercase hover:opacity-90 transition-all flex items-center justify-center gap-2 cursor-pointer border-none"
            >
              <span>تأكيد وطلب</span>
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <p className="text-center text-body-sm text-on-surface-variant mt-4">
              بالنقر على "تأكيد"، فإنك توافق على <a className="underline" href="#">الشروط والأحكام</a>
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
}

export default CheckoutPage;

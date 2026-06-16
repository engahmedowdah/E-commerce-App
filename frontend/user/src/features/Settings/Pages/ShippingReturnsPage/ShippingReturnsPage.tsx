import React from 'react';

function ShippingReturnsPage(): React.ReactNode {
  return (
    <main className="max-w-4xl mx-auto px-container-margin py-section-gap text-right space-y-10">
      <div>
        <h1 className="font-headline-xl text-headline-xl text-on-surface mb-4">الشحن والإرجاع</h1>
        <p className="text-body-lg text-on-surface-variant">
          نحن في Sole & Style نسعى لتقديم أفضل تجربة شحن واسترجاع مرنة لضمان رضاكم الكامل.
        </p>
      </div>

      <section className="bg-surface-container-lowest rounded-2xl p-8 border border-outline-variant/30 space-y-6">
        <h2 className="font-headline-lg text-primary flex items-center gap-3 justify-end">
          سياسة الشحن والتوصيل
          <span className="material-symbols-outlined">local_shipping</span>
        </h2>
        <p className="text-body-lg text-on-surface-variant leading-relaxed">
          نقوم بشحن جميع طلباتكم داخل المملكة العربية السعودية عبر شركائنا المعتمدين في مجال الخدمات اللوجستية.
        </p>
        <ul className="space-y-3 list-none p-0 m-0 text-on-surface-variant">
          <li className="flex items-center gap-2 justify-end">
            <span>توصيل مجاني للطلبات التي تزيد قيمتها عن 200 ر.س</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
          </li>
          <li className="flex items-center gap-2 justify-end">
            <span>توصيل سريع خلال 24 - 48 ساعة داخل مدينة الرياض</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
          </li>
          <li className="flex items-center gap-2 justify-end">
            <span>توصيل لباقي مدن المملكة خلال 3 - 5 أيام عمل</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
          </li>
        </ul>
      </section>

      <section className="bg-surface-container-lowest rounded-2xl p-8 border border-outline-variant/30 space-y-6">
        <h2 className="font-headline-lg text-primary flex items-center gap-3 justify-end">
          سياسة الإرجاع والاستبدال
          <span className="material-symbols-outlined">assignment_return</span>
        </h2>
        <p className="text-body-lg text-on-surface-variant leading-relaxed">
          إذا لم تكن راضياً تماماً عن مشترياتك، يمكنك إرجاعها أو استبدالها بكل سهولة.
        </p>
        <ul className="space-y-3 list-none p-0 m-0 text-on-surface-variant">
          <li className="flex items-center gap-2 justify-end">
            <span>يجب تقديم طلب الإرجاع أو الاستبدال خلال 14 يوماً من استلام المنتج</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
          </li>
          <li className="flex items-center gap-2 justify-end">
            <span>يجب أن يكون المنتج غير مستخدم وفي عبوته وتغليفه الأصلي مع كامل الملصقات</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
          </li>
          <li className="flex items-center gap-2 justify-end">
            <span>يتم إرجاع المبالغ إلى نفس بطاقة الدفع المستخدمة خلال 7 - 14 يوم عمل</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default ShippingReturnsPage;

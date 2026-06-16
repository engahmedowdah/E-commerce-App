import React from 'react';

function PrivacyPolicyPage(): React.ReactNode {
  return (
    <main className="max-w-4xl mx-auto px-container-margin py-section-gap text-right space-y-10">
      <div>
        <h1 className="font-headline-xl text-headline-xl text-on-surface mb-4">سياسة الخصوصية</h1>
        <p className="text-body-lg text-on-surface-variant">
          نحن نقدر ثقتكم بنا لحماية معلوماتكم الشخصية. توضح هذه الصفحة كيف نجمع ونستخدم ونحمي بياناتكم.
        </p>
      </div>

      <div className="space-y-8 text-on-surface-variant leading-relaxed">
        <section className="space-y-3">
          <h2 className="font-headline-lg text-on-surface">1. جمع المعلومات</h2>
          <p>
            نقوم بجمع المعلومات التي تزودوننا بها مباشرة عند التسجيل في المتجر، مثل الاسم، البريد الإلكتروني، رقم الهاتف، وعنوان الشحن والدفع.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-headline-lg text-on-surface">2. استخدام المعلومات</h2>
          <p>
            نستخدم البيانات التي نجمعها لمعالجة طلبات الشراء، تقديم الدعم الفني، تحسين تجربة التسوق، وإرسال التحديثات أو العروض الترويجية.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-headline-lg text-on-surface">3. حماية البيانات</h2>
          <p>
            نطبق أعلى معايير الأمان والتشفير لحماية بياناتكم الحساسة وتفاصيل بطاقاتكم الائتمانية من أي وصول غير مصرح به.
          </p>
        </section>
      </div>
    </main>
  );
}

export default PrivacyPolicyPage;

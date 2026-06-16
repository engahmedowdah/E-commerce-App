import React from 'react';

function TermsOfServicePage(): React.ReactNode {
  return (
    <main className="max-w-4xl mx-auto px-container-margin py-section-gap text-right space-y-10">
      <div>
        <h1 className="font-headline-xl text-headline-xl text-on-surface mb-4">الشروط والأحكام</h1>
        <p className="text-body-lg text-on-surface-variant">
          يرجى قراءة هذه الشروط بعناية قبل استخدام متجر Sole & Style. باستخدامك للموقع، فإنك توافق على هذه الشروط.
        </p>
      </div>

      <div className="space-y-8 text-on-surface-variant leading-relaxed">
        <section className="space-y-3">
          <h2 className="font-headline-lg text-on-surface">1. شروط الحساب</h2>
          <p>
            أنت مسؤول عن الحفاظ على سرية معلومات حسابك وكلمة المرور، وعن تحديد الصلاحيات للوصول إلى جهازك أو حسابك.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-headline-lg text-on-surface">2. شروط البيع والأسعار</h2>
          <p>
            تخضع جميع الأسعار المعروضة للتغيير دون إشعار مسبق. ونحتفظ بالحق في تعديل أو إلغاء أي طلب شراء في حال حدوث خطأ تسعير واضح.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-headline-lg text-on-surface">3. القانون الحاكم</h2>
          <p>
            تخضع هذه الشروط والأحكام وتفسر بموجب القوانين والأنظمة المعمول بها في المملكة العربية السعودية.
          </p>
        </section>
      </div>
    </main>
  );
}

export default TermsOfServicePage;

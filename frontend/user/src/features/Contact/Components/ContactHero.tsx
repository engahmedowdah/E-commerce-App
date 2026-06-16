import React from 'react';

function ContactHero(): React.ReactNode {
  return (
    <div className="mb-12 text-center md:text-right">
      <h1 className="font-headline-xl text-headline-xl mb-4 text-on-surface">تواصل معنا</h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
        نحن هنا لمساعدتك. إذا كان لديك أي استفسار حول منتجاتنا أو خدماتنا، فلا تتردد في مراسلتنا.
      </p>
    </div>
  );
}

export default ContactHero;

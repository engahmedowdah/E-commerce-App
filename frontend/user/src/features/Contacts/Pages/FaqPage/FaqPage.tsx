import React, { useState } from 'react';

const faqs = [
  {
    question: 'كيف يمكنني تتبع طلبي؟',
    answer: 'بمجرد شحن طلبك، سنرسل لك بريداً إلكترونياً يحتوي على رقم التتبع ورابط لموقع شركة الشحن لمتابعة حالة شحنتك خطوة بخطوة. كما يمكنك تتبعها مباشرة من صفحة "طلباتي" في حسابك.',
  },
  {
    question: 'ما هي مدة التوصيل المتوقعة؟',
    answer: 'يستغرق التوصيل داخل الرياض من يوم إلى يومي عمل، ولباقي مدن المملكة العربية السعودية من 3 إلى 5 أيام عمل.',
  },
  {
    question: 'ما هي سياسة الإرجاع والاستبدال الخاصة بكم؟',
    answer: 'يمكنك إرجاع أو استبدال المنتجات خلال 14 يوماً من تاريخ الاستلام، بشرط أن تكون في حالتها الأصلية وعبوتها الأصلية ومعها فاتورة الشراء.',
  },
  {
    question: 'هل جميع المنتجات في Sole & Style أصلية؟',
    answer: 'نعم، نضمن لك بنسبة 100% أن جميع المنتجات المعروضة في متجرنا أصلية وتأتي مباشرة من الماركات العالمية الرسمية أو الموزعين المعتمدين.',
  },
  {
    question: 'ما هي طرق الدفع المتاحة؟',
    answer: 'نوفر طرق دفع متعددة وآمنة تشمل: بطاقات الائتمان (فيزا، ماستركارد)، مدى (Mada)، Apple Pay، والدفع عند الاستلام.',
  },
];

function FaqPage(): React.ReactNode {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="max-w-4xl mx-auto px-container-margin py-section-gap text-right">
      <h1 className="font-headline-xl text-headline-xl text-on-surface mb-4">الأسئلة الشائعة</h1>
      <p className="text-body-lg text-on-surface-variant mb-12">
        إليك إجابات على أكثر الأسئلة شيوعاً. إذا لم تجد الإجابة التي تبحث عنها، يمكنك دائماً التواصل معنا.
      </p>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className="bg-surface-container-lowest rounded-2xl border border-outline-variant/30 overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => toggleFaq(index)}
              className="w-full px-6 py-5 flex items-center justify-between text-right font-headline-md text-on-surface hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
            >
              <span className={`material-symbols-outlined transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-primary' : 'text-on-surface-variant'}`}>
                expand_more
              </span>
              <span>{faq.question}</span>
            </button>
            <div 
              className={`transition-all duration-300 overflow-hidden ${
                openIndex === index ? 'max-h-48 border-t border-outline-variant/20' : 'max-h-0'
              }`}
            >
              <p className="px-6 py-5 text-body-lg text-on-surface-variant leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default FaqPage;

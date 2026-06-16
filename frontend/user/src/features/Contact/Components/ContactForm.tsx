import React, { useState } from 'react';

function ContactForm(): React.ReactNode {
  const [buttonText, setButtonText] = useState('إرسال الرسالة');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setButtonText('تم الإرسال بنجاح!');
    setIsSuccess(true);
    
    setTimeout(() => {
      setButtonText('إرسال الرسالة');
      setIsSuccess(false);
      (e.target as HTMLFormElement).reset();
    }, 3000);
  };

  return (
    <section className="bg-surface-container-lowest p-8 rounded-[24px] shadow-[0_10px_40px_rgba(0,0,0,0.03)]">
      <h2 className="font-headline-lg text-headline-lg mb-8 text-on-surface">أرسل لنا رسالة</h2>
      <form className="space-y-6" id="contactForm" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-label-bold text-label-bold text-on-surface-variant">الاسم الكامل</label>
            <input className="w-full bg-surface-container-low border-none rounded-xl p-4 font-body-lg form-input-focus transition-all text-right focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="أدخل اسمك" type="text" required />
          </div>
          <div className="space-y-2">
            <label className="font-label-bold text-label-bold text-on-surface-variant">البريد الإلكتروني</label>
            <input className="w-full bg-surface-container-low border-none rounded-xl p-4 font-body-lg form-input-focus transition-all text-right focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="email@example.com" type="email" required />
          </div>
        </div>
        <div className="space-y-2">
          <label className="font-label-bold text-label-bold text-on-surface-variant">الموضوع</label>
          <select className="w-full bg-surface-container-low border-none rounded-xl p-4 font-body-lg form-input-focus transition-all text-right appearance-none focus:outline-none focus:ring-2 focus:ring-primary/20">
            <option>استفسار عام</option>
            <option>خدمة العملاء</option>
            <option>طلبات الجملة</option>
            <option>أخرى</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="font-label-bold text-label-bold text-on-surface-variant">الرسالة</label>
          <textarea className="w-full bg-surface-container-low border-none rounded-xl p-4 font-body-lg form-input-focus transition-all text-right focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="كيف يمكننا مساعدتك؟" rows={5} required></textarea>
        </div>
        <button 
          className={`w-full ${isSuccess ? 'bg-green-600' : 'bg-on-surface'} text-surface-container-lowest font-label-bold text-label-bold py-4 rounded-[16px] uppercase tracking-wider hover:opacity-90 active:scale-[0.98] transition-all`} 
          type="submit"
        >
          {buttonText}
        </button>
      </form>
    </section>
  );
}

export default ContactForm;

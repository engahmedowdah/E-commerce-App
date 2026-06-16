
export default function NewsletterCTA() {
  return (
    <section className="bg-primary-container rounded-[40px] p-16 my-section-gap text-center relative overflow-hidden">
      <div className="relative z-10">
        <h2 className="font-headline-xl text-[40px] text-on-primary-container font-black mb-4">انضم إلى مجتمعنا</h2>
        <p className="font-body-lg text-body-lg text-on-primary-container/80 mb-10 max-w-xl mx-auto">سجل الآن للحصول على تنبيهات حصرية حول المجموعات الجديدة والخصومات الخاصة.</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
          <input className="w-full px-6 py-4 rounded-2xl border-none focus:ring-2 focus:ring-primary text-body-lg outline-none" placeholder="بريدك الإلكتروني" type="email" />
          <button className="bg-black text-white px-10 py-4 rounded-2xl font-label-bold text-label-bold whitespace-nowrap hover:scale-105 transition-transform border-none cursor-pointer">اشترك الآن</button>
        </div>
      </div>
    </section>
  );
}

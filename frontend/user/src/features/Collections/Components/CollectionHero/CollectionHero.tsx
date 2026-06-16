
export default function CollectionHero() {
  return (
    <section className="relative h-[500px] rounded-[32px] overflow-hidden my-section-gap group cursor-pointer">
      <div className="absolute inset-0 bg-gradient-to-l from-black/60 to-transparent z-10"></div>
      <img 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
        alt="Summer Collection" 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtWnCtHo8S-RR0K4NpuXnBC-HLq0qdjN4clsaBqWpYAroqxd1eEC5_vZQWxdDtFZ1NjwDirhq9jhs2F_jcw19XMoPYRyyhEECaL5nacvP4XE05enNKW2KWuNxakBF4k47-Fie0exTIsM0iRShExT6HeWeV4v9DHUsAxj7D10jBLY_HaaMpVimqLxTajw16lHM4gnM5m7fjjVP8VJGbMbpyUz4l1EN_Gm6SZXj-fvW-8DlDznmXkARxJ1RfkMCuGYv0R3J_FKIam9I" 
      />
      <div className="relative z-20 h-full flex flex-col justify-center items-start px-16 max-w-2xl">
        <span className="bg-primary-container text-on-primary-container px-4 py-1 rounded-full font-label-bold text-label-bold mb-4">عرض محدود</span>
        <h1 className="font-headline-xl text-[56px] leading-[1.1] text-white font-black mb-6">مجموعة الصيف المتألقة</h1>
        <p className="font-body-lg text-body-lg text-white/90 mb-8 max-w-md">اكتشف التشكيلة الجديدة التي تجمع بين الراحة الفائقة والأناقة العصرية. احصل على خصم 20% لفترة محدودة.</p>
        <div className="flex gap-4">
          <button className="bg-white text-black px-8 py-4 rounded-xl font-label-bold text-label-bold uppercase hover:bg-primary-fixed transition-colors border-none cursor-pointer">تسوق الآن</button>
          <button className="border-2 border-white text-white bg-transparent px-8 py-4 rounded-xl font-label-bold text-label-bold uppercase hover:bg-white/10 transition-colors cursor-pointer">اكتشف المزيد</button>
        </div>
      </div>
    </section>
  );
}

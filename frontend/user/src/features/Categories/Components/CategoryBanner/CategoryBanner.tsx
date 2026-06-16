
export default function CategoryBanner() {
  return (
    <div className="relative w-full h-80 rounded-[2rem] overflow-hidden mb-12 group cursor-pointer">
      <img 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
        alt="Running Collection" 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUC6sKovDqHLsuw48Sn8G5pWMeFfIY5oTbyGYOT7cx0xKZeBsDT5PaaVjUlaBNeug3uKwopZQv1nHwLxPTi6wnq-1TsLg0fYoMeIzSPk5Vycz1q1QSIOoMXfMipJXx7f4av8iHLpG_5brs9510w4EknTKxErz2TlWr4-HklpEjfZ10bkvQwkMuWMzEn4DIjqrNq9_jl4QvxeQn_zc27YqH76jUBQKEmwkGnFxq2QkpvWdtAwO7Oq2qWpaQUW3PnDwzxIfb3QiyAgs" 
      />
      <div className="absolute inset-0 bg-gradient-to-l from-black/60 to-transparent flex flex-col justify-center items-end px-12 text-white">
        <span className="bg-primary text-on-primary px-4 py-1 rounded-full text-label-bold mb-4">وصلنا حديثاً</span>
        <h1 className="font-headline-xl text-headline-xl mb-2">مجموعة الجري لعام 2024</h1>
        <p className="font-body-lg text-body-lg mb-6 max-w-sm text-right opacity-90">اكتشف الراحة والأداء الفائق مع أحدث تقنيات الوسائد الهوائية والتصاميم العصرية.</p>
        <button className="bg-surface-container-lowest text-on-surface px-8 py-3 rounded-full font-label-bold uppercase hover:bg-primary hover:text-on-primary transition-all cursor-pointer border-none">تسوق الآن</button>
      </div>
    </div>
  );
}

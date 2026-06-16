
export default function CategoryGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
      {/* Large Card 1 */}
      <div className="md:col-span-2 relative h-[450px] rounded-[2rem] overflow-hidden group cursor-pointer">
        <div className="absolute inset-0 bg-[#E3F2FD] transition-colors group-hover:bg-[#BBDEFB]"></div>
        <img 
          className="absolute bottom-0 right-0 w-4/5 h-4/5 object-contain transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-4" 
          alt="Classic Leather Shoes" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlz08E0aHUPJjfYNqiUHsXI2SsDkoTXr8GagC-7onME-QSMRxxr8XSQJuiuxnoyBderaF-JoR_z-qrVJxoyyRFhK-hR_ZkAyH2O0J707jhzSPncVBAzVmYbBKPjeS9RCcNnLxcB5ey8fHm_h0Gzp3GsqGvpOu3-8INeoLVO8eqRvO0EWeDA2tAY3dOFJc5o4cCdmnvIAAxqx6Zjli_11HAFK6spyetGK3c8M443M5iW964IC8Q0Tt_w48xg7mKYMAhWCjA18YQ9jM" 
        />
        <div className="absolute top-10 left-10 text-right">
          <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2">أحذية الجلد الكلاسيكية</h3>
          <p className="font-body-sm text-on-surface-variant mb-4">لإطلالة عمل أنيقة ومريحة</p>
          <span className="text-primary font-label-bold flex items-center gap-2 transition-transform group-hover:translate-x-[-5px]">
            اكتشف المزيد
            <span className="material-symbols-outlined">arrow_back</span>
          </span>
        </div>
      </div>

      {/* Tall Card 1 */}
      <div className="relative h-[450px] rounded-[2rem] overflow-hidden group cursor-pointer">
        <div className="absolute inset-0 bg-[#FCE4EC] transition-colors group-hover:bg-[#F8BBD0]"></div>
        <img 
          className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-110 transition-transform duration-500" 
          alt="Handbags" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCw6phHFoqVZ3XgX1HmFiIrM2N3E9eeNM6uLbf8hOwQGo23daagb25oPdiyyXuxuU0wN4UB8tPNg24hduB1NIXqypzWzSOtbA7fGUYiyHkLivvLPcARwYx7NsfDoTS1OthHDvw9A1eWHDmE6IN3nttBcyYLsvXNirFwOiichtfMc1TCZmwuWCWifaFOomOEwYTTnqNsuDpM3m9Mr-SdmdfarqvPfqCDsWEdfNVRNbMHdmTT_5V6eGpgX2Yf9G-yrRMXQ3HZtHysf8M" 
        />
        <div className="absolute bottom-10 inset-x-10 text-center">
          <h3 className="font-headline-md text-headline-md text-on-surface mb-1">حقائب اليد</h3>
          <div className="w-12 h-1 bg-primary mx-auto mb-4 rounded-full"></div>
          <button className="bg-on-surface text-surface py-2 px-6 rounded-full font-label-bold text-sm cursor-pointer hover:opacity-90 transition-opacity border-none">عرض الكل</button>
        </div>
      </div>

      {/* Small Card 1 */}
      <div className="relative h-[300px] rounded-[2rem] overflow-hidden group bg-surface-container-lowest shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-outline-variant/30 cursor-pointer hover:shadow-lg transition-shadow">
        <div className="p-8 h-full flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <span className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
              <span className="material-symbols-outlined" data-icon="handyman">handyman</span>
            </span>
            <span className="font-price-display text-primary">خصم 20%</span>
          </div>
          <div>
            <h4 className="font-headline-md text-headline-md mb-2">حقائب الظهر</h4>
            <p className="font-body-sm text-on-surface-variant">مثالية للدراسة والسفر</p>
          </div>
        </div>
      </div>

      {/* Small Card 2 */}
      <div className="md:col-span-2 relative h-[300px] rounded-[2rem] overflow-hidden group cursor-pointer">
        <div className="absolute inset-0 bg-[#F1F8E9] transition-colors group-hover:bg-[#DCEDC8]"></div>
        <img 
          className="absolute -right-20 -bottom-10 w-full h-full object-contain group-hover:-translate-x-8 transition-transform duration-500" 
          alt="Casual Shoes" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3rbUUsRI-ou_UkpTV9xn3GrC3cYBoZZpHGAOTCu5izkv4pQDVtc962mX0OD0adUQhMJh28KAGcv8rJ0P2rcygjarvJG3mtacw0WuMzI_08SS7cu2K_vWZtvlDn3a1tf8AwCuWd0v1J9PrdwASvzvuSoJYRDkXebX58EW8KitM8BlVjRjVZ9OxWGYqpuzzpZgKIVoTLmIjVgXbXF1T00Mp4kUsrTYH051jZ2GTfq5VB-CtscI6eUgz9BGmHNEIP17iQkhu_ZPIpcQ" 
        />
        <div className="relative p-10 h-full flex flex-col justify-center max-w-xs">
          <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2">أحذية كاجوال</h3>
          <p className="font-body-sm text-on-surface-variant mb-6">تصاميم تناسب كل يوم وكل مناسبة</p>
          <span className="inline-flex items-center gap-2 font-label-bold text-primary group-hover:gap-4 transition-all">
            تسوق التشكيلة
            <span className="material-symbols-outlined">arrow_back</span>
          </span>
        </div>
      </div>
    </div>
  );
}

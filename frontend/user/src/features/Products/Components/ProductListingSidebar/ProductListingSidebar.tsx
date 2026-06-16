
export default function ProductListingSidebar() {
  return (
    <aside className="w-64 flex-shrink-0 hidden lg:block">
      <div className="sticky top-24 space-y-8">
        {/* Categories */}
        <section>
          <h3 className="font-headline-md text-headline-md mb-4 border-r-4 border-primary pr-3">الفئات</h3>
          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer group">
              <input defaultChecked className="rounded border-outline-variant text-primary focus:ring-primary w-5 h-5 cursor-pointer" type="checkbox" />
              <span className="text-body-lg group-hover:text-primary transition-colors">أحذية رياضية</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer group">
              <input className="rounded border-outline-variant text-primary focus:ring-primary w-5 h-5 cursor-pointer" type="checkbox" />
              <span className="text-body-lg group-hover:text-primary transition-colors">أحذية كلاسيكية</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer group">
              <input className="rounded border-outline-variant text-primary focus:ring-primary w-5 h-5 cursor-pointer" type="checkbox" />
              <span className="text-body-lg group-hover:text-primary transition-colors">صنادل</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer group">
              <input className="rounded border-outline-variant text-primary focus:ring-primary w-5 h-5 cursor-pointer" type="checkbox" />
              <span className="text-body-lg group-hover:text-primary transition-colors">أحذية جري</span>
            </label>
          </div>
        </section>

        {/* Sizes */}
        <section>
          <h3 className="font-headline-md text-headline-md mb-4 border-r-4 border-primary pr-3">المقاس</h3>
          <div className="grid grid-cols-4 gap-2">
            {[38, 39, 40, 41, 42, 43, 44].map((size) => (
              <button 
                key={size}
                className={`w-12 h-12 flex items-center justify-center rounded-lg transition-all text-label-bold font-label-bold cursor-pointer ${
                  size === 39 
                    ? 'bg-on-background text-surface border-transparent' 
                    : 'border border-outline-variant hover:border-primary hover:text-primary bg-transparent text-on-surface'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </section>

        {/* Colors */}
        <section>
          <h3 className="font-headline-md text-headline-md mb-4 border-r-4 border-primary pr-3">اللون</h3>
          <div className="flex flex-wrap gap-3">
            <button className="w-8 h-8 rounded-full bg-black ring-2 ring-offset-2 ring-primary border-none cursor-pointer"></button>
            <button className="w-8 h-8 rounded-full bg-white border border-outline-variant cursor-pointer"></button>
            <button className="w-8 h-8 rounded-full bg-blue-600 border-none cursor-pointer"></button>
            <button className="w-8 h-8 rounded-full bg-red-500 border-none cursor-pointer"></button>
            <button className="w-8 h-8 rounded-full bg-pink-400 border-none cursor-pointer"></button>
            <button className="w-8 h-8 rounded-full bg-gray-400 border-none cursor-pointer"></button>
          </div>
        </section>

        {/* Price Range */}
        <section>
          <h3 className="font-headline-md text-headline-md mb-4 border-r-4 border-primary pr-3">نطاق السعر</h3>
          <input className="w-full accent-primary cursor-pointer" max="1000" min="0" step="50" type="range" />
          <div className="flex justify-between mt-4 text-body-sm font-bold">
            <span>0 ر.س</span>
            <span>1000+ ر.س</span>
          </div>
        </section>

        <button className="w-full bg-on-background text-surface py-4 rounded-xl font-bold uppercase tracking-wider hover:opacity-90 transition-opacity border-none cursor-pointer">تطبيق الفلاتر</button>
      </div>
    </aside>
  );
}

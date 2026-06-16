import { useState } from 'react';

export default function CategorySidebar() {
  const [activeCategory, setActiveCategory] = useState('أحذية رياضية');

  const categories = [
    'أحذية رياضية',
    'أحذية كلاسيكية',
    'صنادل وصيفيات',
    'حقائب ظهر',
    'حقائب يد فاخرة'
  ];

  return (
    <aside className="w-full md:w-64 flex-shrink-0">
      <div className="sticky top-24 space-y-8">
        <div>
          <h2 className="font-headline-md text-headline-md mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined" data-icon="filter_list">filter_list</span>
            الفئات الرئيسيّة
          </h2>
          <ul className="space-y-3">
            {categories.map((cat) => (
              <li key={cat}>
                <button 
                  onClick={() => setActiveCategory(cat)}
                  className={`w-full flex items-center justify-between p-3 rounded-xl font-label-bold transition-colors cursor-pointer border-none ${
                    activeCategory === cat 
                      ? 'bg-primary-container text-on-primary-container' 
                      : 'hover:bg-surface-container-high text-on-surface-variant bg-transparent'
                  }`}
                >
                  <span>{cat}</span>
                  <span className="material-symbols-outlined text-sm">chevron_left</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="pt-6 border-t border-outline-variant">
          <h3 className="font-label-bold text-on-surface-variant mb-4">تصفية حسب المقاس</h3>
          <div className="grid grid-cols-3 gap-2">
            {[38, 39, 40, 41, 42, 43].map((size) => (
              <button 
                key={size}
                className={`h-10 rounded-lg flex items-center justify-center font-body-sm transition-all cursor-pointer ${
                  size === 39 
                    ? 'bg-inverse-surface text-surface border-none' 
                    : 'border border-outline-variant hover:border-primary bg-transparent text-on-surface'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-outline-variant">
          <h3 className="font-label-bold text-on-surface-variant mb-4">نطاق السعر</h3>
          <input className="w-full h-2 bg-secondary-container rounded-lg appearance-none cursor-pointer accent-primary" type="range" />
          <div className="flex justify-between mt-2 font-body-sm text-on-surface-variant">
            <span>0 ر.س</span>
            <span>2000 ر.س</span>
          </div>
        </div>
      </div>
    </aside>
  );
}

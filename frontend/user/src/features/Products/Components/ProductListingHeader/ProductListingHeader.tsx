
export default function ProductListingHeader() {
  return (
    <div className="mb-section-gap">
      <nav className="flex items-center gap-2 text-body-sm text-on-surface-variant mb-4">
        <a className="hover:text-primary" href="#">الرئيسية</a>
        <span className="material-symbols-outlined text-[16px]">chevron_left</span>
        <span className="font-bold text-on-surface">الأحذية</span>
      </nav>
      <div className="flex justify-between items-end">
        <div>
          <h1 className="font-headline-xl text-headline-xl mb-2">أحدث التشكيلات</h1>
          <p className="text-on-surface-variant">استكشف مجموعتنا المختارة من الأحذية العصرية لكل المناسبات.</p>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-body-sm text-on-surface-variant">عرض 24 من أصل 120 منتج</span>
          <div className="relative inline-block text-right group">
            <button className="flex items-center gap-2 bg-surface-container-highest px-4 py-2 rounded-lg text-body-sm font-bold border-none cursor-pointer">
              الترتيب حسب: الأحدث
              <span className="material-symbols-outlined">expand_more</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

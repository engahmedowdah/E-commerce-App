
export default function ProductPagination() {
  return (
    <div className="mt-section-gap flex justify-center items-center gap-2">
      <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface-container-highest text-on-surface-variant hover:bg-primary hover:text-white transition-all border-none cursor-pointer">
        <span className="material-symbols-outlined">chevron_right</span>
      </button>
      <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold border-none cursor-pointer">1</button>
      <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface-container-highest text-on-surface-variant hover:bg-primary hover:text-white transition-all font-bold border-none cursor-pointer">2</button>
      <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface-container-highest text-on-surface-variant hover:bg-primary hover:text-white transition-all font-bold border-none cursor-pointer">3</button>
      <span className="px-2">...</span>
      <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface-container-highest text-on-surface-variant hover:bg-primary hover:text-white transition-all font-bold border-none cursor-pointer">10</button>
      <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface-container-highest text-on-surface-variant hover:bg-primary hover:text-white transition-all border-none cursor-pointer">
        <span className="material-symbols-outlined">chevron_left</span>
      </button>
    </div>
  );
}

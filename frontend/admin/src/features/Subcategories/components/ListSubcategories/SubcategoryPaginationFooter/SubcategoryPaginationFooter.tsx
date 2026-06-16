import "./SubcategoryPaginationFooter.css"
interface SubcategoryPaginationFooterProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  limit: number;
  onPageChange: (page: number) => void;
  onLimitChange: (limit: number) => void;
}
const SubcategoryPaginationFooter = ({
  currentPage,
  totalPages,
  totalItems,
  limit,
  onPageChange,
  onLimitChange
}: SubcategoryPaginationFooterProps) => {
  const startItem = (currentPage - 1) * limit + 1;
  const endItem = Math.min(currentPage * limit, totalItems);
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }
    return pages;
  };
  return (
    <div className="px-6 py-4 bg-surface-container-low/20 flex flex-col md:flex-row items-center justify-between border-t border-surface-container gap-4">
      <div className="flex items-center gap-4">
        <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-widest">
          Showing {totalItems === 0 ? 0 : startItem} to {endItem} of {totalItems}
        </p>
        <div className="flex items-center gap-2">
          <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-widest">Limit</label>
          <select
            className="bg-surface-container-highest border border-surface-container rounded px-2 py-1 text-sm outline-none cursor-pointer text-on-surface"
            value={limit}
            onChange={(e) => onLimitChange(Number(e.target.value))}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
          </select>
        </div>
      </div>
      <div className="flex gap-1">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-container-high text-on-surface-variant transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="material-symbols-outlined text-sm">
            chevron_left
          </span>
        </button>
        {getPageNumbers().map((pageNum, idx) => (
          pageNum === '...' ? (
            <span key={`ellipsis-${idx}`} className="px-2 self-center text-on-surface-variant">
              ...
            </span>
          ) : (
            <button
              key={pageNum}
              onClick={() => onPageChange(pageNum as number)}
              className={`w-8 h-8 flex items-center justify-center rounded-lg font-bold shadow-sm transition-colors ${
                currentPage === pageNum
                  ? 'bg-surface-container-highest text-primary'
                  : 'hover:bg-surface-container-high text-on-surface-variant'
              }`}
            >
              {pageNum}
            </button>
          )
        ))}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages || totalPages === 0}
          className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-container-high text-on-surface-variant transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="material-symbols-outlined text-sm">
            chevron_right
          </span>
        </button>
      </div>
    </div>
  )
}
export default SubcategoryPaginationFooter;

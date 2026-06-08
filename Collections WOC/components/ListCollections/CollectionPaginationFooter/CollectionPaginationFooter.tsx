//Styles
import "./CollectionPaginationFooter.css"

const CollectionPaginationFooter = () => {
    return (
        <div className="px-6 py-4 bg-surface-container-low/20 flex items-center justify-between border-t border-surface-container">
            <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-widest">
              Showing 1 to 4 of 24 results
            </p>
            <div className="flex gap-1">
              <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-surface-container-highest text-primary font-bold shadow-sm">
                1
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-container-high text-on-surface-variant transition-colors">
                2
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-container-high text-on-surface-variant transition-colors">
                3
              </button>
              <span className="px-2 self-center text-on-surface-variant">
                ...
              </span>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-container-high text-on-surface-variant transition-colors">
                <span className="material-symbols-outlined text-sm">
                  chevron_right
                </span>
              </button>
            </div>
        </div>
    )
}

export default CollectionPaginationFooter;

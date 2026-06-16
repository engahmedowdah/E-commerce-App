import "./OrderListHeader.css"
import React, { useState, useRef, useEffect } from "react";
type TSort = "newest" | "oldest" | "name_asc" | "name_desc" | "total_amount_desc" | "total_amount_asc" | "price_asc" | "price_desc";
interface IProps {
  currentSort?: TSort;
  onSortChange?: (sort: TSort) => void;
}
const OrderListHeader: React.FC<IProps> = ({ currentSort = "newest", onSortChange }) => {
    const [isSortOpen, setIsSortOpen] = useState(false);
    const sortRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
                setIsSortOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    const sortOptions = [
        { value: "newest", label: "Newest First" },
        { value: "oldest", label: "Oldest First" },
        { value: "name_asc", label: "Name (A-Z)" },
        { value: "name_desc", label: "Name (Z-A)" },
        { value: "price_asc", label: "Price (Low to High)" },
        { value: "price_desc", label: "Price (High to Low)" },
    ];
    return (
        <div className="px-6 py-4 border-b border-surface-container flex items-center justify-between">
            <h3 className="text-lg font-bold text-primary">All Orders</h3>
            <div className="flex gap-2">
              <div className="relative" ref={sortRef}>
                  <button
                    onClick={() => setIsSortOpen(!isSortOpen)}
                    title="Sort"
                    className="p-2 hover:bg-surface-container-low rounded-lg transition-colors text-on-surface-variant flex items-center justify-center">
                    <span className="material-symbols-outlined">filter_list</span>
                  </button>
                  {isSortOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-surface-container-lowest border border-surface-container rounded-xl shadow-lg z-50 py-2">
                      <div className="px-4 py-2 text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                        Sort By
                      </div>
                      {sortOptions.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => {
                            if (onSortChange) onSortChange(option.value as TSort);
                            setIsSortOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2 text-sm hover:bg-surface-container-low transition-colors ${
                            currentSort === option.value ? "text-primary bg-primary/10 font-medium" : "text-on-surface"
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  )}
              </div>
              <button className="p-2 hover:bg-surface-container-low rounded-lg transition-colors text-on-surface-variant flex items-center justify-center">
                <span className="material-symbols-outlined">download</span>
              </button>
            </div>
        </div>
    )
}
export default OrderListHeader;

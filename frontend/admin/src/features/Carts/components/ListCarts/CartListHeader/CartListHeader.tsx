import { useState, useEffect, useRef } from "react";
interface CartListHeaderProps {
    onSortChange?: (sort: string) => void;
    currentSort?: string;
}
const CartListHeader = ({ onSortChange, currentSort = "newest" }: CartListHeaderProps) => {
    const [isSortOpen, setIsSortOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
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
        { value: "price_desc", label: "Price (High to Low)" }
    ];
    const handleSortSelect = (value: string) => {
        if (onSortChange) onSortChange(value);
        setIsSortOpen(false);
    };
    return (
        <div className="px-6 py-4 border-b border-surface-container flex items-center justify-between">
            <h3 className="text-lg font-bold text-primary">All Carts</h3>
            <div className="flex gap-2">
              <div className="relative" ref={dropdownRef}>
                <button
                  className={`p-2 hover:bg-surface-container-low rounded-lg transition-colors ${isSortOpen ? 'bg-surface-container-low text-primary' : 'text-on-surface-variant'}`}
                  onClick={() => setIsSortOpen(!isSortOpen)}
                >
                  <span className="material-symbols-outlined">filter_list</span>
                </button>
                {isSortOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-surface-container-lowest border border-surface-container rounded-lg shadow-lg z-10 py-1">
                    {sortOptions.map((option) => (
                      <button
                        key={option.value}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-surface-container-low transition-colors ${currentSort === option.value ? 'text-primary font-medium bg-surface-container-low/50' : 'text-on-surface'}`}
                        onClick={() => handleSortSelect(option.value)}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <button className="p-2 hover:bg-surface-container-low rounded-lg transition-colors text-on-surface-variant">
                <span className="material-symbols-outlined">download</span>
              </button>
            </div>
        </div>
    )
}
export default CartListHeader;

import React from 'react';
interface Props {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}
const CartDetailsTabs: React.FC<Props> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex items-center gap-8 border-b border-outline-variant/30 mb-8 overflow-x-auto scrollbar-hide">
      {['Details', 'Products', 'Settings'].map(tab => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`pb-4 text-sm font-bold transition-all relative whitespace-nowrap ${
            activeTab === tab
              ? 'text-primary'
              : 'text-on-surface-variant hover:text-on-surface'
          }`}
        >
          {tab}
          {activeTab === tab && (
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-primary rounded-t-full shadow-[0_-2px_10px_rgba(var(--color-primary),0.5)]"></span>
          )}
        </button>
      ))}
    </div>
  );
};
export default CartDetailsTabs;

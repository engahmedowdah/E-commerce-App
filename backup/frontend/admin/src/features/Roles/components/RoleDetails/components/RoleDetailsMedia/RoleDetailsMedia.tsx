import React from 'react';
const RoleDetailsMedia: React.FC = () => {
  return (
    <div className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/30 shadow-sm glass-panel hover:shadow-md transition-shadow flex-1">
       <h3 className="text-xl font-bold text-on-surface mb-8 flex items-center gap-3">
        <span className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
          <span className="material-symbols-outlined text-[18px]">imagesmode</span>
        </span>
        Media
       </h3>
       <div className="w-full h-64 bg-surface-container-low/30 rounded-2xl border-2 border-dashed border-outline-variant/50 flex flex-col items-center justify-center text-on-surface-variant transition-all hover:bg-surface-container-low/50 hover:border-primary/50 group cursor-pointer overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <span className="material-symbols-outlined text-5xl mb-4 opacity-40 group-hover:scale-110 group-hover:opacity-100 group-hover:text-primary transition-all duration-300">image</span>
          <p className="text-sm font-semibold tracking-wide">No image uploaded</p>
          <p className="text-xs mt-2 opacity-60">Click to upload or drag and drop</p>
       </div>
    </div>
  );
};
export default RoleDetailsMedia;

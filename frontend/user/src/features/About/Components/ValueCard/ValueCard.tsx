import React from 'react'
import './ValueCard.css'

interface ValueCardProps {
  title: string;
  description: string;
  icon: string;
  textColor: string;
  bgColor: string;
}

function ValueCard({ title, description, icon, textColor, bgColor }: ValueCardProps): React.ReactNode {
  return (
    <div className="bg-surface-container-lowest p-10 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all group">
      <div className={`w-16 h-16 ${bgColor} flex items-center justify-center rounded-xl mb-6 group-hover:scale-110 transition-transform`}>
        <span
          className={`material-symbols-outlined ${textColor} text-3xl`}
        >
          {icon}
        </span>
      </div>
      <h3 className="font-headline-md text-headline-md mb-4">{title}</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default ValueCard
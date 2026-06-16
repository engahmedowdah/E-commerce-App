import React from 'react';
import ValueCardGrid from '../ValueCardGrid/ValueCardGrid';

function CoreValuesSection(): React.ReactNode {
  return (
    <section className="py-section-gap bg-surface-container-low">
      <div className="px-container-margin max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline-xl text-headline-xl">قيمنا الجوهرية</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
        </div>
        <ValueCardGrid/>
      </div>
    </section>
  );
}

export default CoreValuesSection;

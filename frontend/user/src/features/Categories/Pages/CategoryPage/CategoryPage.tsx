import React from 'react';
import CategorySidebar from '../../Components/CategorySidebar/CategorySidebar';
import CategoryBanner from '../../Components/CategoryBanner/CategoryBanner';
import CategoryGrid from '../../Components/CategoryGrid/CategoryGrid';
import QuickLinks from '../../Components/QuickLinks/QuickLinks';

function CategoryPage(): React.ReactNode {
  return (
    <div className="max-w-7xl mx-auto px-container-margin py-section-gap flex flex-col md:flex-row gap-gutter">
      <CategorySidebar />
      <section className="flex-1">
        <CategoryBanner />
        <CategoryGrid />
        <QuickLinks />
      </section>
    </div>
  );
}

export default CategoryPage;

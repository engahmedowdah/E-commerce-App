import React from 'react';
import { Hero, MostCategories, ArrivedRecently, FeaturesSection, Sponsors, SubscribeUs } from '../../Components';
import { useStore } from '../../../../services/storeContext';

function HomePage(): React.ReactNode {
  const { products } = useStore();

  return (
    <div className="bg-surface text-on-surface overflow-x-hidden">
      <Hero/>
      <MostCategories/>
      <ArrivedRecently products={products.slice(0, 4)} />
      <FeaturesSection />
      <Sponsors />
      <SubscribeUs />
    </div>
  );
}

export default HomePage;

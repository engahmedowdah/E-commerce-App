import React from 'react';
import CollectionHero from '../../Components/CollectionHero/CollectionHero';
import CollectionGrid from '../../Components/CollectionGrid/CollectionGrid';
import NewsletterCTA from '../../Components/NewsletterCTA/NewsletterCTA';

function CollectionsPage(): React.ReactNode {
  return (
    <main className="max-w-7xl mx-auto px-container-margin py-base">
      <CollectionHero />
      <CollectionGrid />
      <NewsletterCTA />
    </main>
  );
}

export default CollectionsPage;

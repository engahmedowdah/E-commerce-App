import React from 'react';
import { StoryImageWrapper, StoryTextContent } from '../';
function StorySection(): React.ReactNode {
  return (
    <section className="py-section-gap px-container-margin max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter transition-all duration-1000 ease-out opacity-100 translate-y-0">
        <StoryTextContent/>
        <StoryImageWrapper/>
      </div>
    </section>
  );
}

export default StorySection;

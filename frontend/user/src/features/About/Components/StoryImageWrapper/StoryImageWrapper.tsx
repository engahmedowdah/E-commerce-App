import React from 'react'
import OurStoryImage from '../../../../assets/About/OurStoryImage.png';

function StoryImageWrapper(): React.ReactNode {
  return (
    <div className="md:col-span-5 rounded-xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.08)] bg-primary-container">
      <img
        className="w-full h-full object-cover"
        data-alt="A minimalist workshop space where a skilled designer is sketching footwear concepts on a clean wooden table. The room is filled with soft natural light streaming through large windows, highlighting the pastel-colored fabric swatches and shoe lasts. The atmosphere is optimistic and creative, focusing on the craftsmanship and ease of design that defines the brand identity. High-contrast functional elements like black tools stand out against the soft background."
        src={OurStoryImage}
      />
    </div>
  );
}

export default StoryImageWrapper

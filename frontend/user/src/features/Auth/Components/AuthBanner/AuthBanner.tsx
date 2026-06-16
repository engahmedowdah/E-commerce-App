import React, { useEffect, useRef } from 'react';

function AuthBanner(): React.ReactNode {
  const cardRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const img = imgRef.current;
    if (!card || !img) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = card.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      img.style.transform = `rotate(2deg) translate(${x * 20}px, ${y * 20}px)`;
    };

    const handleMouseLeave = () => {
      img.style.transform = `rotate(2deg) translate(0, 0)`;
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section ref={cardRef} className="hidden md:flex md:w-1/2 login-card-gradient relative p-12 flex-col justify-between overflow-hidden" style={{ background: 'linear-gradient(135deg, #ffd9e0 0%, #ffb1c4 100%)' }}>
      {/* Decorative Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-primary-container rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-80 h-80 bg-secondary-container rounded-full opacity-30 blur-3xl"></div>
      
      <div className="relative z-10">
        <h1 className="font-headline-xl text-headline-xl text-on-primary-fixed mb-4">Sole & Style</h1>
        <p className="font-body-lg text-body-lg text-on-primary-fixed-variant max-w-sm leading-relaxed">
          اكتشف أحدث صيحات الموضة في عالم الأحذية والحقائب. سجل دخولك الآن لتجربة تسوق فريدة مصممة خصيصاً لك.
        </p>
      </div>
      
      <div className="relative z-10">
        <img 
          ref={imgRef}
          className="w-full h-64 object-cover rounded-[24px] shadow-2xl transform hover:rotate-2 transition-transform duration-500" 
          alt="Sports sneaker" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwew_SUnJyUemci-KPIgtjqr2Z_ktX253hf5nGRhIa2wZWprRVrD3WpK8IFhoqhsNwpuQoikiGTFP_vlgex2Qyg2rM-06qtmrcJ-wrIuyPjRd_lfMkx0QJQcwH4Ydcl2ae5G27YxiuQYj820CqMxRGiU-VXqlfgj1MbNdWWmXQWQfTEqQLlgbi1yVNdygpjgpeSXDHK1rXh-uHFdUmwwZNYLfShERiZo6N4vfNElqzrIAIzKBc8jXH67VIt59iPiu6Vz9cGDSDOEI"
        />
      </div>
    </section>
  );
}

export default AuthBanner;

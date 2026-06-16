import React, { useEffect, useState } from 'react';

function MapSection(): React.ReactNode {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="space-y-8">
      {/* Map Section */}
      <div className="relative w-full h-[400px] rounded-[32px] overflow-hidden shadow-lg group">
        <img 
          alt="Location Map" 
          className="w-full h-full object-cover grayscale-[20%] transition-transform duration-700" 
          style={{ transform: `scale(1.05) translateY(${scrollY * 0.05}px)` }}
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSF4B8AM5WvRkHnmbr6_hwyMKXGBguck3VDCh8hhupBaFY98FEhDackCN4t4cQuP2sRS36-EMwHrivEOTL8btoboQR9KPnstWTkGq9RxzEPc0wsQfI7VTS3j253EW47GUiUtz6lP6xZYSCvhOckoouP9sxw6QAa3EJtavONNuGhMG90fvyXIH0YOtwuK4JeHCWmjgO_HmQN78jKmkzmUdsheDCGopY2Ks8gUcC0y-YZR15RGBkPWSGcoMEXAAvSt1t89R9uEhyjXY"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-on-surface/40 to-transparent"></div>
        <div className="absolute bottom-6 right-6 left-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl flex justify-between items-center">
          <div>
            <h4 className="font-headline-md text-headline-md text-on-surface">موقعنا في الرياض</h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant">شارع التحلية، حي العليا</p>
          </div>
          <a className="bg-on-surface text-white px-6 py-2 rounded-full font-label-bold text-sm hover:scale-105 transition-transform" href="https://maps.google.com" target="_blank" rel="noreferrer">
            فتح في الخرائط
          </a>
        </div>
      </div>

      {/* Social Proof / Atmospheric Card */}
      <div className="relative overflow-hidden bg-primary-container rounded-[32px] p-8 text-on-primary-container flex items-center justify-between">
        <div>
          <h3 className="font-headline-lg text-headline-lg mb-2">تابعنا على إنستغرام</h3>
          <p className="font-body-lg text-body-lg opacity-80">انضم إلى أكثر من 50,000 محب للموضة</p>
        </div>
        <span className="material-symbols-outlined text-[64px] opacity-20">celebration</span>
        {/* Decorative Circle */}
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
      </div>
    </div>
  );
}

export default MapSection;

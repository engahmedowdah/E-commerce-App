import React from 'react'
import './Hero.css'

function Hero() : React.ReactNode {
  return (
<section className="relative min-h-[60vh] flex items-center overflow-hidden bg-surface py-20">
<div className="container mx-auto px-container-margin relative z-10">
<div className="text-center max-w-3xl mx-auto">
<span className="inline-block px-4 py-1 bg-primary-container text-on-primary-container rounded-full text-label-bold font-label-bold mb-6">وصل حديثاً</span>
<h1 className="font-headline-xl text-5xl md:text-[64px] leading-tight mb-8 text-on-surface">ارتقِ بأسلوبك مع<br/><span className="text-primary">Sole &amp; Style</span></h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl mx-auto">اكتشف تشكيلتنا الجديدة من الأحذية والإكسسوارات المصممة لتمنحك الأناقة والراحة التي تستحقها في كل خطوة.</p>
<button className="bg-on-background text-on-primary font-label-bold px-12 py-5 rounded-full hover:shadow-xl transition-all hover:scale-105 active:scale-95 uppercase tracking-wider">تسوق الآن</button>
</div>
</div>
</section>
  )
}

export default Hero

import React from 'react'
import './AboutHero.css'

import AboutHeroImage from '../../../../assets/About/HeroImage.png';


function AboutHero() : React.ReactNode {
  return (
<section className="relative h-[819px] flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 ">
<img className="w-full h-full object-cover" data-alt="A high-fashion footwear photography set featuring a pair of vibrant, modern sneakers displayed on a pastel pink pedestal against a soft blue studio background. The lighting is ethereal and diffused, creating a dreamlike, youthful atmosphere. The scene is clean and minimalist, reflecting a premium retail environment for trend-conscious shoppers. Deep blacks and bright whites are used as accents to provide high-contrast clarity." src={AboutHeroImage}/>
</div>
<div className="relative z-10 text-center px-container-margin max-w-4xl">
<h1 className="font-headline-xl text-headline-xl text-on-secondary-container mb-6">خطواتك.. بأسلوبك الخاص</h1>
<p className="font-body-lg text-body-lg text-on-secondary-container max-w-2xl mx-auto leading-relaxed">
                    نحن في Sole &amp; Style نؤمن أن الأحذية ليست مجرد قطعة ملابس، بل هي تعبير عن هويتك وطاقتك. منذ انطلاقنا، هدفنا هو تقديم المزيج المثالي بين الراحة الفائقة والتصميم العصري المبتكر.
                </p>
</div>
<div className="absolute bottom-10 animate-bounce">
<span className="material-symbols-outlined text-on-secondary-container text-4xl">expand_more</span>
</div>
</section>
  )
}

export default AboutHero

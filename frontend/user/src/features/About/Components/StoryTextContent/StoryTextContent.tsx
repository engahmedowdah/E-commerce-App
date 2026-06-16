import React from 'react'
import './StoryTextContent.css'

function StoryTextContent(): React.ReactNode {
  return (
    <div className="md:col-span-7 bg-white p-12 rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.05)] flex flex-col justify-center">
      <span className="text-primary font-label-bold text-label-bold mb-4">قصتنا</span>
      <h2 className="font-headline-xl text-headline-xl mb-6">كيف بدأنا الرحلة</h2>
      <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-6">
        بدأت Sole &amp; Style كحلم بسيط لمجموعة من المبدعين الشباب الذين أرادوا تغيير مفهوم تسوق
        الأحذية. كنا نبحث عن شيء يجمع بين الروح الشبابية المتمردة وبين الفخامة الهادئة.
      </p>
      <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
        اليوم، نحن فخورون بأن نكون الوجهة الأولى لكل من يبحث عن التميز، حيث نحرص على اختيار كل
        منتج بعناية فائقة لضمان أعلى معايير الجودة والأناقة التي تليق بكم.
      </p>
    </div>
  );
}

export default StoryTextContent

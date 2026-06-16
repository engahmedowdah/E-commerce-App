import React from 'react';

function VisionSection(): React.ReactNode {
  return (
    <section className="py-24 px-container-margin max-w-4xl mx-auto text-center">
      <h2 className="font-headline-xl text-headline-xl mb-8">رؤيتنا للمستقبل</h2>
      <p className="font-body-lg text-body-lg text-on-surface-variant leading-loose mb-12">
        نطمح في Sole &amp; Style أن نكون العلامة التجارية الرائدة عالمياً التي تلهم الأجيال للتعبير عن أنفسهم بكل حرية وثقة. نحن لا نبيع الأحذية فقط، بل نصنع الأدوات التي تمكنك من السير نحو أهدافك بجمال وراحة لا تضاهى.
      </p>
      <button className="bg-black text-white px-10 py-4 rounded-lg font-label-bold text-label-bold uppercase tracking-wider hover:opacity-80 transition-opacity">
        اكتشف مجموعتنا الجديدة
      </button>
    </section>
  );
}

export default VisionSection;

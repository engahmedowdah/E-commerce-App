import React from 'react'
import './ValueCardGrid.css'
import { ValueCard } from '../../'

function ValueCardGrid(): React.ReactNode {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <ValueCard title="الاستدامة" description="نلتزم بمسؤوليتنا تجاه الكوكب من خلال استخدام مواد صديقة للبيئة وعمليات تصنيع واعية." icon="eco" textColor="text-primary" bgColor="bg-primary-fixed" />
      <ValueCard title="الابتكار" description="نسعى دائماً لتحدي المألوف وتقديم تصاميم تسبق العصر، تجمع بين الجرأة والعملية." icon="bolt" textColor="text-secondary" bgColor="bg-secondary-fixed" />
      <ValueCard title="المجتمع" description="عملاؤنا هم عائلتنا، نحن نبني جسوراً من الثقة والتواصل المستمر لنلبي تطلعاتكم دائماً." icon="groups" textColor="text-tertiary" bgColor="bg-tertiary-fixed" />
    </div>
  )
}

export default ValueCardGrid
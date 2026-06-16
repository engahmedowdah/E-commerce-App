import { Link } from 'react-router-dom';

export default function QuickLinks() {
  const links = ['نايكي', 'أديداس', 'حقائب جلدية', 'مقاسات خاصة', 'إصدارات محدودة', 'الأكثر مبيعاً'];
  
  return (
    <div className="mt-section-gap">
      <h3 className="font-headline-md text-headline-md mb-6">روابط سريعة</h3>
      <div className="flex flex-wrap gap-3">
        {links.map((link) => (
          <Link 
            key={link}
            to="#"
            className="px-6 py-2 bg-surface-container-low rounded-full hover:bg-primary-container hover:text-on-primary-container transition-colors font-body-sm"
          >
            {link}
          </Link>
        ))}
      </div>
    </div>
  );
}

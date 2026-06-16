import React from 'react';
import './Footer.css';

function Footer(): React.ReactNode {
  return (
    <footer className="bg-surface-container-high dark:bg-surface-dim full-width border-t border-outline-variant">
<div className="flex flex-col md:flex-row justify-between items-center w-full px-container-margin py-section-gap max-w-7xl mx-auto">
<div className="mb-8 md:mb-0">
<div className="font-headline-md text-headline-md text-on-surface dark:text-on-surface mb-2">Sole &amp; Style</div>
<div className="font-body-sm text-body-sm text-on-surface-variant dark:text-on-surface-variant max-w-xs text-right md:text-right">
                    نسعى دائماً لتقديم الأفضل في عالم الموضة والأناقة لخطواتك اليومية.
                </div>
</div>
<nav className="flex flex-wrap justify-center gap-8 mb-8 md:mb-0">
<a className="font-body-sm text-body-sm font-bold text-primary dark:text-primary-fixed-dim hover:text-primary dark:hover:text-primary-fixed-dim underline transition-all" href="#">About Us</a>
<a className="font-body-sm text-body-sm text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim underline transition-all" href="#">Shipping &amp; Returns</a>
<a className="font-body-sm text-body-sm text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim underline transition-all" href="#">Privacy Policy</a>
<a className="font-body-sm text-body-sm text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim underline transition-all" href="#">Contact</a>
</nav>
<div className="flex flex-col items-center md:items-end gap-4">
<div className="flex gap-4">
<span className="material-symbols-outlined text-on-surface hover:opacity-70 cursor-pointer transition-opacity">public</span>
<span className="material-symbols-outlined text-on-surface hover:opacity-70 cursor-pointer transition-opacity">share</span>
<span className="material-symbols-outlined text-on-surface hover:opacity-70 cursor-pointer transition-opacity">mail</span>
</div>
<div className="font-body-sm text-body-sm text-on-surface dark:text-on-surface">© 2024 Sole &amp; Style. All rights reserved.</div>
</div>
</div>
</footer>
  );
}

export default Footer;

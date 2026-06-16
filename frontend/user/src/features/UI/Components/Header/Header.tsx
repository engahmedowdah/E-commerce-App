import React from 'react';
import "./Header.css";
import { useNavigate } from 'react-router-dom';

function Header(): React.ReactNode {
  const navigate = useNavigate();
  return (
    <header className="bg-surface-container-lowest dark:bg-inverse-surface shadow-[0_4px_20px_rgba(0,0,0,0.05)] full-width top-0 sticky z-50">
      <div className="flex justify-between items-center w-full px-container-margin py-4 max-w-7xl mx-auto">
        <div 
          onClick={() => navigate('/')}
          className="cursor-pointer font-headline-lg text-headline-lg font-black text-primary dark:text-primary-fixed-dim tracking-tight"
        >
          Sole &amp; Style
        </div>
        <nav className="hidden md:flex gap-8 items-center">
          <a onClick={() => navigate('/products')} className="font-body-lg text-body-lg text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors hover:opacity-80 cursor-pointer">Footwear</a>
          <a onClick={() => navigate('/products?category=bags')} className="font-body-lg text-body-lg text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors hover:opacity-80 cursor-pointer">Bags</a>
          <a onClick={() => navigate('/products?filter=new')} className="font-body-lg text-body-lg text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors hover:opacity-80 cursor-pointer">New Arrivals</a>
          <a onClick={() => navigate('/products?filter=sale')} className="font-body-lg text-body-lg text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors hover:opacity-80 cursor-pointer">Sale</a>
          <a onClick={() => navigate('/about')} className="font-body-lg text-body-lg text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors hover:opacity-80 cursor-pointer">About Us</a>
        </nav>
        <div className="flex items-center gap-4">
          <div className="hidden lg:block relative">
            <input 
              onKeyDown={(e) => e.key === 'Enter' && navigate(`/products?search=${(e.target as HTMLInputElement).value}`)}
              className="bg-surface-container rounded-full px-6 py-2 text-body-sm focus:outline-none focus:ring-2 focus:ring-primary w-64 text-right" 
              placeholder="Search..." 
              type="text"
            />
          </div>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-primary dark:text-primary-fixed-dim hover:opacity-80 transition-opacity cursor-pointer scale-95 active:scale-90 transition-transform" onClick={() => navigate('/wishlist')}>favorite</span>
            <span className="material-symbols-outlined text-primary dark:text-primary-fixed-dim hover:opacity-80 transition-opacity cursor-pointer scale-95 active:scale-90 transition-transform" onClick={() => navigate('/cart')}>shopping_cart</span>
            <span className="material-symbols-outlined text-primary dark:text-primary-fixed-dim hover:opacity-80 transition-opacity cursor-pointer scale-95 active:scale-90 transition-transform" onClick={() => navigate('/login')}>person</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

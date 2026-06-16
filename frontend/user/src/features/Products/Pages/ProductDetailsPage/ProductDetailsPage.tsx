import React, { useState } from 'react';

const thumbnails = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBjnqR6fj9IjldZGpzlBInJQLIXoBVaOc0tJDTm5c50-91b2C0u8SwNxm8RouoLP34zU_ZoxP4Ztk7tXaQQKT5sVfJY9Ujma63z9UUOUuOj0wFuoIOxgo-HiaK584JEo-V10Ny6v1DVKd9oez4hMnxnZJ4vxeFXKT-Qcsf7RotBu4brwFZIvh5uXWEHYOcTfyTdEic6OcCsmdqIaWsm6EVrqI8bkjVff4anP_FPCzIN3YQPL-C5MM9Z-ZweiDXKU2bRerx-mj4GEs8',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAIjp4KrwFTHo9f5hrKPvGdMMN0yeUVbL--e3JPwY24ZEsNIReXXJMcAZ1ZFSVq1hMRBQuV3m0E6EwZ4O4MyUVl555BAZN-DJWelyiXlHxtOXVPXt_AlBDEAMMrsyeUV80Daecl-Xc3wWwu_-eQCbACzMRH460mfrjkbzOWdfhClOM5f1NFbolpjALu5KO5ccaTtdxKruA10d8CaDvCVDs3BkZD4JIm1lUhbNFM5LfxO4TIqcYl3eStyhsOYNYEvh4fneJb4tvZClM',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuD5Xk92ST4bEw-7nfVFLyJBovJJGj51eZThVpddj6uuvBgwowBcqnt1yHbtTKy3cRPxcACRUMd5cB3EAEShE47pjqBnkQ6EEavHmqrMQ2PeQZb8T8GZaCQc1Kq_zPlER8Vj2VOzTejt-CI1aR-2fsuxwQ2wtjinHsqeqim1YgSuar6BbgCXzS-Ty0jKAyYlH2tTJLrBDP6RVeUogXmCqDFJtZjWZEJktIh4nWcsP4YMYXxhKiv30NH4Wtn0wMWznqmPtY-7gHYA4Pw',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAHN4yaP2j58cRDxzWN6YFu8EKWyWWokf-Y2RxEb7Oru6TsCqQILbol8LQM7OM_V32LYibf-HSQnZx3yijun8kbmOI1ltGKc7JHMvULDh-2QqgdYK1BuCB3lk75PGaVX-g7ggyk95QrwUddGlwCNxe2i1RlF637vBAKfQqYgE7qigJQdUdxBo9l75kceIkGRecs4t9EW4Uahzv609xbiUCe_sa0KzOP3Qw2z_wwfW1P_MkRDjRn2TDv1vD8xi9JXmnlE2elbRVjjuY',
];

const mainImage = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNJ-W6l8SUcII7hiEnhW2P1MlHG5idc68AgwUX-cEYm8otL74x8XiB0ZBsoeKai_7f5ll5kVV41rPlcjGQj8oodCx8Q5IPBvqXcUz2NG2Bu6Ems1ISSIVTQVmDKIGRA1weWz5JpRSlMu96VeDEI734_aKKGtpATV8YOFoybF7Fm8Ns8gecEw_ZAIaBFwSnKItLxgh_SkHbRtnjpBP6Sgg68peQbm-PckA85Xr9qd4lRXc17ZJWscuPGWlH-rql2agHwhd2NhLfWt8';

const sizes = [38, 39, 40, 41, 42, 43, 44, 45];
const colors = [
  { name: 'أحمر حيوي', hex: '#FF0000' },
  { name: 'أسود داكن', hex: '#191c1d' },
  { name: 'أبيض ناصع', hex: '#ffffff' },
  { name: 'أزرق كلاسيكي', hex: '#4c5a9d' }
];

const similarProducts = [
  { name: 'حقيبة كلاسيك فاخرة', type: 'حقائب يد', price: '420.00 ر.س', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrEECju3jpsSllYxNcK3CVRON-tGHMHAJArIyucosVxuo3Pj60_jTwhqn3_TPgwSV-tR7giCz0mZijhxGbterPSQi1skmCkiYc40vaELq_jHqPeA1PBEWTFBNWOHhDcO3ZGr0nf59XmpgNxRl6Xgzk9kE6Ge0r6EH4jtHoBqQXKt9DPY6Y3KoVvrpy5RxmADrjgfoKX-H_qIk_jFinKTcu0Z_RYu1f_heTPoLctwR49HHn8qFXSH3CuQGRspn7RJipetbtMwH2JAs' },
  { name: 'أديداس ألترابوست 21', type: 'أحذية ركض', price: '690.00 ر.س', oldPrice: '850.00', badge: 'خصم', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCs3mJoUOJJ0hxnivpWlD8bWzUd_xsKT-WN5zwrfQtQ_GqqjvdIE6l8fO8KZb-xllLbKa2gNizMFyK5qiPjni7oe61RCHAAQD94UNxt_dXMkXaYCiNFFHE3vubXxnkEflm4hXutXU_7aiZnN0C8vFZu2mEinOjoUpzqWjzlNJZbtsv9h02V1lcLpgkQh-kyRJKh2Wr-4VBi17Y2i-2h5PjzGaLjF-q5h4rGYxBq9SPOAjA6TSzHOBfLirC6SoKp8WQEJLO52-YQZOE' },
  { name: 'حقيبة كروس عصرية', type: 'حقائب كتف', price: '310.00 ر.س', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEJ1MzF7-mBAjKBdS4Y9nV7fvVEYkE9vpTen436W9CczUHIj5cu8iA4DiX8tmHCOZjHbzclLT9VZbZ5QT2BrZaJYxQMNG5-ZeKuuz8Ry9MR8AnhiPvIEY7fKb7E3Z9s6FXjyUPGIMgEIRmvWfNzldOZAl45khwfjSVNNq52GF2DHAxNRJjwhixRkyRiyzuSazaxI54Kp2lVuF3FqfBhrdgGgm8VZDd_4QR4oJukJS6r6BSlFwZB2CIqU_PCieEvUT39ikKlRXZkKo' },
  { name: 'نايك جوردن لو', type: 'أحذية عصرية', price: '540.00 ر.س', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcee35cgClwUTJCqWNGVafc2AfKCq-qchaS3ryTufXaJU-0OGrSO_LA_GZy9E6LW8NGUduqb0GIr59pQAI7FjER9LtaiZVDHuk_LjfMFzDrU-n2hKylXqpkh1S1UwbsPnB-bSYHbIpHvESlvUVSEdW8aKrmKjRm0u6IGKzs9-NZA8xnw67V-Sf_ezxSFJks6ntvQdLL-LuX5Ln8gPI-vrvTwxsyOEI_ZbQ7mv-WSJI5_ROGP8BuLZ9P_M2IVfEehU53qBKWpO5EI0' },
];

function ProductDetailsPage(): React.ReactNode {
  const [selectedSize, setSelectedSize] = useState(38);
  const [selectedColor, setSelectedColor] = useState('#FF0000');
  const [activeThumb, setActiveThumb] = useState(0);
  const [currentImage, setCurrentImage] = useState(mainImage);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleThumbClick = (index: number) => {
    setActiveThumb(index);
    setCurrentImage(thumbnails[index]);
  };

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 3000);
  };

  return (
    <main className="pt-8 pb-section-gap max-w-7xl mx-auto px-container-margin text-right">
      {/* Breadcrumbs */}
      <nav className="flex gap-2 mb-8 text-body-sm text-on-surface-variant justify-start">
        <span className="font-bold text-on-surface">نايك إير ماكس بلس</span>
        <span>/</span>
        <a className="hover:text-primary transition-colors no-underline text-on-surface-variant" href="#">الأحذية النسائية</a>
        <span>/</span>
        <a className="hover:text-primary transition-colors no-underline text-on-surface-variant" href="/">الرئيسية</a>
      </nav>

      {addedToCart && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded-xl flex items-center justify-between gap-3 animate-fade-in text-right">
          <span>تمت إضافة المنتج بنجاح إلى حقيبة التسوق!</span>
          <span className="material-symbols-outlined text-green-600">check_circle</span>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Side: Product Info */}
        <div className="lg:col-span-5 space-y-8 order-2 lg:order-1">
          <div className="space-y-4">
            <span className="inline-block bg-primary-fixed text-on-primary-fixed-variant px-4 py-1 rounded-full font-label-bold text-[12px] uppercase tracking-wider">وصل حديثاً</span>
            <h1 className="font-headline-xl text-[40px] leading-tight text-on-surface">نايك إير ماكس بلس</h1>
            <div className="flex items-center gap-4 justify-start">
              <span className="text-body-sm text-on-surface-variant font-label-bold">(124 تقييم من العملاء)</span>
              <div className="flex text-[#FFB800]">
                {[1,2,3,4].map(i => (
                  <span key={i} className="material-symbols-outlined text-[20px]">star</span>
                ))}
                <span className="material-symbols-outlined text-[20px]">star_half</span>
              </div>
            </div>
            <div className="flex items-baseline gap-4 justify-start">
              <span className="font-price-display text-[28px] text-primary">850.00 ر.س</span>
              <span className="text-on-surface-variant line-through text-body-sm">1,100.00 ر.س</span>
            </div>
          </div>
          <p className="text-body-lg font-body-lg text-on-surface-variant leading-relaxed border-b border-solid border-surface-variant pb-8">
            يجمع حذاء نايك إير ماكس بلس بين الراحة الأسطورية والتصميم الجريء المستوحى من الشاطئ بلمسة عصرية. توفر وحدات Max Air في الكعب ومقدمة القدم توسيداً خفيف الوزن، بينما تضمن الأجزاء العلوية المتينة أناقة لا ملاك لها.
          </p>

          {/* Selection Blocks */}
          <div className="space-y-8">
            {/* Color Selector */}
            <div className="space-y-4">
              <h3 className="font-label-bold text-on-surface flex items-center gap-2 justify-start">
                <span>{colors.find(c => c.hex === selectedColor)?.name}</span>
                <span className="text-on-surface-variant font-normal">:اللون المتوفر</span>
              </h3>
              <div className="flex gap-4 justify-start">
                {colors.map((color) => (
                  <button 
                    key={color.hex}
                    onClick={() => setSelectedColor(color.hex)}
                    className={`w-12 h-12 rounded-full border-2 border-solid border-white shadow-sm transition-all hover:scale-105 active:scale-95 cursor-pointer ${
                      selectedColor === color.hex ? 'ring-4 ring-offset-2 ring-primary' : 'hover:ring-2 hover:ring-offset-2 hover:ring-surface-variant'
                    }`}
                    style={{ backgroundColor: color.hex }}
                  />
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <button className="text-primary font-label-bold text-body-sm underline decoration-primary/30 underline-offset-4 hover:decoration-primary bg-transparent border-none cursor-pointer">دليل المقاسات</button>
                <h3 className="font-label-bold text-on-surface">المقاس (EU)</h3>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => size !== 45 && setSelectedSize(size)}
                    className={`py-4 border border-solid rounded-xl font-label-bold transition-all cursor-pointer ${
                      size === 45 
                        ? 'bg-surface-container/50 text-on-surface-variant/40 border-transparent cursor-not-allowed' 
                        : selectedSize === size 
                          ? 'bg-primary text-white border-transparent' 
                          : 'border-surface-variant hover:border-primary hover:text-primary bg-transparent'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button 
              onClick={handleAddToCart}
              className="flex-[3] bg-primary text-white py-5 px-8 rounded-2xl font-label-bold text-lg flex items-center justify-center gap-3 shadow-lg shadow-primary/20 hover:bg-primary-container hover:text-on-primary-container hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 border-none cursor-pointer"
            >
              <span className="material-symbols-outlined">shopping_cart</span>
              أضف إلى السلة
            </button>
            <button className="flex-1 p-5 border-2 border-solid border-surface-variant rounded-2xl hover:border-primary hover:text-primary transition-all flex items-center justify-center group bg-transparent cursor-pointer">
              <span className="material-symbols-outlined group-hover:scale-125 transition-transform">favorite</span>
            </button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 gap-6 pt-8 border-t border-solid border-surface-variant text-right">
            <div className="flex items-center gap-3 justify-end">
              <div>
                <p className="font-label-bold text-body-sm">أصلي 100%</p>
                <p className="text-[12px] text-on-surface-variant">ضمان الجودة والمنشأ</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-xl">verified_user</span>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-end">
              <div>
                <p className="font-label-bold text-body-sm">توصيل سريع</p>
                <p className="text-[12px] text-on-surface-variant">خلال 2-4 أيام عمل</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-xl">local_shipping</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Image Gallery */}
        <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
          <div className="aspect-[4/5] bg-surface-container rounded-[2.5rem] overflow-hidden custom-shadow group cursor-zoom-in relative">
            <img alt="Nike Air Max" className="w-full h-full object-contain mix-blend-multiply p-12 transition-transform duration-700 group-hover:scale-110" src={currentImage} />
            <button className="absolute bottom-6 right-6 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors border-none cursor-pointer">
              <span className="material-symbols-outlined text-on-surface">fullscreen</span>
            </button>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {thumbnails.map((thumb, index) => (
              <button 
                key={index}
                onClick={() => handleThumbClick(index)}
                className={`aspect-square bg-surface-container rounded-3xl overflow-hidden border-2 border-solid transition-all hover:scale-105 cursor-pointer ${
                  activeThumb === index ? 'border-primary' : 'border-transparent hover:border-outline-variant'
                }`}
              >
                <img className="w-full h-full object-cover p-2" src={thumb} alt={`Thumbnail ${index + 1}`} />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product Features Section */}
      <section className="mt-24 pt-16 border-t border-solid border-surface-variant">
        <div className="text-center mb-16 space-y-2">
          <h2 className="font-headline-lg text-[32px] text-on-surface">لماذا تختار هذا المنتج؟</h2>
          <p className="text-on-surface-variant">مميزات صممت خصيصاً لراحتك وأناقتك اليومية</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-surface p-10 rounded-[2.5rem] border border-solid border-surface-variant text-center space-y-6 hover:shadow-xl transition-all hover:-translate-y-2 group">
            <div className="w-20 h-20 bg-primary-fixed text-primary rounded-3xl flex items-center justify-center mx-auto transition-transform group-hover:rotate-6">
              <span className="material-symbols-outlined text-4xl">air</span>
            </div>
            <div className="space-y-3">
              <h4 className="font-headline-md text-xl text-on-surface">نظام تهوية فائق</h4>
              <p className="text-body-sm text-on-surface-variant leading-relaxed">أجزاء علوية من نسيج شبكي مصمم خصيصاً لضمان تدفق الهواء والحفاظ على برودة القدمين طوال اليوم.</p>
            </div>
          </div>
          <div className="bg-surface p-10 rounded-[2.5rem] border border-solid border-surface-variant text-center space-y-6 hover:shadow-xl transition-all hover:-translate-y-2 group">
            <div className="w-20 h-20 bg-secondary-fixed text-secondary rounded-3xl flex items-center justify-center mx-auto transition-transform group-hover:rotate-6">
              <span className="material-symbols-outlined text-4xl">electric_bolt</span>
            </div>
            <div className="space-y-3">
              <h4 className="font-headline-md text-xl text-on-surface">توسيد سريع الاستجابة</h4>
              <p className="text-body-sm text-on-surface-variant leading-relaxed">وحدات Air القصوى توفر دعماً مثالياً وراحة لا مثيل لها مع كل خطوة تخطوها في يومك المزدحم.</p>
            </div>
          </div>
          <div className="bg-surface p-10 rounded-[2.5rem] border border-solid border-surface-variant text-center space-y-6 hover:shadow-xl transition-all hover:-translate-y-2 group">
            <div className="w-20 h-20 bg-[#E8FEF5] text-[#14A44D] rounded-3xl flex items-center justify-center mx-auto transition-transform group-hover:rotate-6">
              <span className="material-symbols-outlined text-4xl">security</span>
            </div>
            <div className="space-y-3">
              <h4 className="font-headline-md text-xl text-on-surface">ثبات فائق</h4>
              <p className="text-body-sm text-on-surface-variant leading-relaxed">نعل خارجي مطاطي بنمط متطور يوفر ثباتاً ممتازاً على مختلف الأسطح وفي جميع الظروف الجوية.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Products Section */}
      <section className="mt-24">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
          <a className="group text-primary font-label-bold flex items-center gap-2 hover:opacity-80 transition-opacity no-underline" href="/products">
            <span className="material-symbols-outlined text-xl group-hover:-translate-x-1 transition-transform">arrow_back</span>
            مشاهدة الكل
          </a>
          <div>
            <h2 className="font-headline-lg text-[32px] text-on-surface">منتجات قد تعجبك</h2>
            <p className="text-on-surface-variant mt-2">اكتشف تشكيلتنا المختارة لك بعناية</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {similarProducts.map((product, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="aspect-[4/5] bg-surface-container rounded-[2rem] overflow-hidden relative mb-6">
                <img alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={product.image} />
                <button className="absolute top-5 left-5 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white border-none cursor-pointer">
                  <span className="material-symbols-outlined text-on-surface text-xl">favorite</span>
                </button>
              </div>
              <div className="space-y-1 px-2 text-right">
                <h4 className="font-label-bold text-on-surface group-hover:text-primary transition-colors">{product.name}</h4>
                <p className="text-[12px] text-on-surface-variant">{product.type}</p>
                <div className="flex items-center gap-2 justify-end">
                  {product.oldPrice && <p className="text-[12px] text-on-surface-variant line-through">{product.oldPrice} ر.س</p>}
                  <p className="font-price-display text-primary mt-2">{product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default ProductDetailsPage;
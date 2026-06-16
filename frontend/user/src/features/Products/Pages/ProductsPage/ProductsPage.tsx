import React from 'react';
import "./ProductsPage.css";

/*
interface Product {
  id: number;
  brand: string;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  bg: string;
  colors: string[];
  badge?: string;
  isOutOfStock?: boolean;
}
*/

/*
const productsList: Product[] = [
  {
    id: 1,
    brand: 'نايكي اير ماكس',
    name: 'كلاسيك ريبوند 2.0',
    price: 599,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDnL9gCMOtpn5SRw1WhPQcU-Nb4MQ_WU5kEgxryow9hpVtSLirY_if6Hobrz6LoOYkfAOGBarKDgKueFV_EwKWZ3MaGdUXA7Ye9W4dljmiSXtjvb9EjwgsGp5zdyuoRpw3ml8bY9RvjoUimkSZ2E4nncWrXnWFkDKszrlMLXf3K1tn1P98R1riFFzj4UKN5w-kYNaKoGupUakcHfgjJmwPlhGw0DBdTS8EvFjVvMgdx_GCpOOPhGoczDGgeCkTxZTmn9jugbN0aj98',
    bg: '#FFEDF1',
    colors: ['#000000', '#ef4444'],
    badge: 'جديد'
  },
  {
    id: 2,
    brand: 'فانس أولد سكول',
    name: 'الترا وايت كانفاس',
    price: 349,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYtimGdPKfkHQIcczv2aYprR28zS2eCAGSsZE-2W_Ri9YihwE3eImrBgMqpSC5Wdmgz6_-M5o0c7ILs3SUorik6QOWPiRp0UcdKL20R_s6Xt8d83syFPhtom9gNJLggaowl9m7vPiR_R70oRMALagw1xWvwI9hBJchbyna_jyBYl3Vx1vpE0Xy9PgJf8FbIau_huz7fnJ5QLf_Kq7b5f9ukkwR8DoYMrDmZaEGioIedfbSM6u8ykhjUWXtGQpEA-P241TVGsTenHA',
    bg: '#E3F2FD',
    colors: ['#ffffff', '#2563eb']
  },
  {
    id: 3,
    brand: 'أديداس أورجينالز',
    name: 'سبورت نيون برو',
    price: 420,
    oldPrice: 525,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFxAqcZPIUPBDu3XYx-fNgYs6YaVTthOA14XVTg9qzL6RyRpi0WAJRVbizBLftmkoyTdEF-GOaUlMVV1tDpRMLtUlFuwnUgRMq5qGc7J0GehnMAkO_JqXBeZ4BLkghwy1EySx_LJMUWN1onJHQ_gFACVwLW-dfNPcNHSZ9mdf3SC79BKv_28hvw5zDScAdyNNGeVcDbya-N7pzspb1C_NaZTUI2DV0JD2zlaLvkXwmMfpaSkopkK1vwhpd54tUYMhRiSXySkNSMW4',
    bg: '#F5F5F5',
    colors: ['#10b981'],
    badge: 'خصم 20%'
  },
  {
    id: 4,
    brand: 'كونفرس شاتوه',
    name: 'بيور إليجانس',
    price: 499,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJVk67hpAHUGsM_wlO55lsWS00P0iJe-Wpx-p2OMdvzE3uc0eDiCgCkA88gXtT4S-BuW3hnmJgfmSYEC5OdNQPTfM7ZG8PKbWSVrz979yzM-Wo7Bieho6W0Sov3MaN3fJRLE40tEcdlWnZrEX2LnxHQomrwLUPp2ltQhs7pXnxsoUTUZwZ6Zty8efO9vh83o5Co1pL1xDhqzXK6xQkQ5yp4Vr_IjQTRVwB4_CgncKKZKB5GCiaActaEhXYNKrB2M579F908C3xovg',
    bg: '#FFF4E0',
    colors: ['#eab308', '#ffffff']
  },
  {
    id: 5,
    brand: 'ريبوك كلاسيك',
    name: 'باستيل دريم',
    price: 375,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8Pg8pTKf6rEb-9C7cM3Ft-dSdx5VQZ82KNF4_aZEFnPxxo2nxTtidIiQJzaEGQddAIaKXDov-H4X-jIQGSDschn6r-Ucv3KCN4kCT1xMjTihJ4yJURCXsAP_ssgZUSWBndWpNCi2IYJg-yvl-YeWeJiGPA0vZLVhtNOJ_cW8zV9npAzwGjUHzMZDYiZbzG8yX4SZHThxYrT_4ZjEKYkjeNRX61WuBZFqlgBLfautXcowZBpqozt9x1GzwohpdbjFkNVcfzTR-6mI',
    bg: '#F3E5F5',
    colors: ['#a855f7']
  },
  {
    id: 6,
    brand: 'تيمبرلاند بريميوم',
    name: 'بوت المغامرة',
    price: 850,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDisdKll6hWWVUiLGbckdzcGH67Z0Yp5NOHSe5mlA7L9xl-PjYy94OwvfNPOTZFX5cB6EfvWEY2c40Bsmrngmyl4-DLpyWU7WHcxc_RR26Q0bVVwJ_hgSIRNzqQCnpBafHNxd47njpiKiL9tkrAYONc8XwwTzlXOuWUTXIVwXX3Hq6nYEFR9u981chtpj-2853yjDyDs4oIvRJxWWwRXSB_Vbbt3WbfSmZGzF4ku68GBLlvgI8nj6AXy5oeuWQ1SMvp7AfhyFnW8iQ',
    bg: '#E8F5E9',
    colors: ['#065f46']
  },
  {
    id: 7,
    brand: 'بوما ميرور',
    name: 'ديلي وايت',
    price: 299,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdH2ad2hpiGAJzS8glpgG4DFh-uPvG3g3BviAasEyBUSF7OmEp97duO9CWxpBJxfgGUDKI5K32ufxXPUe1EDRgLO9dIB148jIMv19d8CTPC42tgjtR-AINJNcwYVoGF9BWqM8iKnODQ80ihuzm2lE3WL2Tx_ASv-g52rZs3kuS8cZmjGZyBCl5mRztv00LJ_KaHI_SGPUG9HmqCaYpB7HySO3uT9nHkMSmKp2bo_Vo5C-6glUkH3_ODTZ3yICIV9O0KUjvwzm1mYw',
    bg: '#FFFDE7',
    colors: ['#ffffff', '#9ca3af']
  },
  {
    id: 8,
    brand: 'نيو بالانس 574',
    name: 'إيرث تون كلاسيك',
    price: 450,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAY0alrYmDxwxsT15x1ul-NdCvxIo260aH8fBXLmotxHk5IRR7nmv-4rz0rVPfYlwrFtSBcJSBm-oYfGwBYjQamBFjn8rRdBYB-Ozn9KaCdGL7alxalPcMUwTzkIiXL2RHdChb-j1lY5-uC5AQv9ZAu6GTGfOkSm98DYoSto8O99Y5AS0Gupy6Uer-o-e86W1oWIabPM16Hz8-13y26gISNrei3JEw-trJ3ajCKNhV6u9e5qdZKuifZAbnwZwgHxia6tHRyxMMk9uI',
    bg: '#FFEBEE',
    colors: ['#78350f'],
    isOutOfStock: true
  }
];
*/

function ProductsPage(): React.ReactNode {
  // const navigate = useNavigate();
  // const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  // const [priceLimit, setPriceLimit] = useState(1000);

  return (
<main className="max-w-7xl mx-auto px-container-margin py-section-gap">
<div className="mb-section-gap">
<nav className="flex items-center gap-2 text-body-sm text-on-surface-variant mb-4">
<a className="hover:text-primary" href="#">الرئيسية</a>
<span className="material-symbols-outlined text-[16px]">chevron_left</span>
<span className="font-bold text-on-surface">الأحذية</span>
</nav>
<div className="flex justify-between items-end">
<div>
<h1 className="font-headline-xl text-headline-xl mb-2">أحدث التشكيلات</h1>
<p className="text-on-surface-variant">استكشف مجموعتنا المختارة من الأحذية العصرية لكل المناسبات.</p>
</div>
<div className="flex items-center gap-4">
<span className="text-body-sm text-on-surface-variant">عرض 24 من أصل 120 منتج</span>
<div className="relative inline-block text-right group">
<button className="flex items-center gap-2 bg-surface-container-highest px-4 py-2 rounded-lg text-body-sm font-bold">
                            الترتيب حسب: الأحدث
                            <span className="material-symbols-outlined">expand_more</span>
</button>
</div>
</div>
</div>
</div>
<div className="flex gap-gutter">
<aside className="w-64 hidden lg:block">
<div className="sticky top-24 space-y-8">
<section>
<h3 className="font-headline-md text-headline-md mb-4 border-r-4 border-primary pr-3">الفئات</h3>
<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer group">
<input className="rounded border-outline-variant text-primary focus:ring-primary w-5 h-5" type="checkbox"/>
<span className="text-body-lg group-hover:text-primary transition-colors">أحذية رياضية</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="rounded border-outline-variant text-primary focus:ring-primary w-5 h-5" type="checkbox"/>
<span className="text-body-lg group-hover:text-primary transition-colors">أحذية كلاسيكية</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="rounded border-outline-variant text-primary focus:ring-primary w-5 h-5" type="checkbox"/>
<span className="text-body-lg group-hover:text-primary transition-colors">صنادل</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="rounded border-outline-variant text-primary focus:ring-primary w-5 h-5" type="checkbox"/>
<span className="text-body-lg group-hover:text-primary transition-colors">أحذية جري</span>
</label>
</div>
</section>
<section>
<h3 className="font-headline-md text-headline-md mb-4 border-r-4 border-primary pr-3">المقاس</h3>
<div className="grid grid-cols-4 gap-2">
<button className="w-12 h-12 flex items-center justify-center rounded-lg border border-outline-variant hover:border-primary hover:text-primary transition-all text-label-bold font-label-bold">38</button>
<button className="w-12 h-12 flex items-center justify-center rounded-lg bg-on-background text-surface border-transparent text-label-bold font-label-bold">39</button>
<button className="w-12 h-12 flex items-center justify-center rounded-lg border border-outline-variant hover:border-primary hover:text-primary transition-all text-label-bold font-label-bold">40</button>
<button className="w-12 h-12 flex items-center justify-center rounded-lg border border-outline-variant hover:border-primary hover:text-primary transition-all text-label-bold font-label-bold">41</button>
<button className="w-12 h-12 flex items-center justify-center rounded-lg border border-outline-variant hover:border-primary hover:text-primary transition-all text-label-bold font-label-bold">42</button>
<button className="w-12 h-12 flex items-center justify-center rounded-lg border border-outline-variant hover:border-primary hover:text-primary transition-all text-label-bold font-label-bold">43</button>
<button className="w-12 h-12 flex items-center justify-center rounded-lg border border-outline-variant hover:border-primary hover:text-primary transition-all text-label-bold font-label-bold">44</button>
</div>
</section>
<section>
<h3 className="font-headline-md text-headline-md mb-4 border-r-4 border-primary pr-3">اللون</h3>
<div className="flex flex-wrap gap-3">
<button className="w-8 h-8 rounded-full bg-black ring-2 ring-offset-2 ring-primary"></button>
<button className="w-8 h-8 rounded-full bg-white border border-outline-variant"></button>
<button className="w-8 h-8 rounded-full bg-blue-600"></button>
<button className="w-8 h-8 rounded-full bg-red-500"></button>
<button className="w-8 h-8 rounded-full bg-pink-400"></button>
<button className="w-8 h-8 rounded-full bg-gray-400"></button>
</div>
</section>
<section>
<h3 className="font-headline-md text-headline-md mb-4 border-r-4 border-primary pr-3">نطاق السعر</h3>
<input className="w-full accent-primary" max="1000" min="0" step="50" type="range"/>
<div className="flex justify-between mt-4 text-body-sm font-bold">
<span>0 ر.س</span>
<span>1000+ ر.س</span>
</div>
</section>
<button className="w-full bg-on-background text-surface py-4 rounded-xl font-bold uppercase tracking-wider hover:opacity-90 transition-opacity">تطبيق الفلاتر</button>
</div>
</aside>
<div className="flex-grow">
<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-gutter">
<div className="group bg-surface-container-lowest rounded-[16px] overflow-hidden product-card-shadow transition-all duration-300">
<div className="relative bg-[#FFEDF1] h-64 flex items-center justify-center overflow-hidden">
<span className="absolute top-4 right-4 bg-primary text-white text-[10px] px-2 py-1 rounded-full font-bold uppercase z-10">جديد</span>
<button className="absolute top-4 left-4 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-opacity z-10">
<span className="material-symbols-outlined text-[20px]">favorite</span>
</button>
<img className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" data-alt="A side view of a vibrant red performance sneaker against a soft pastel pink studio background. The shoe is angled to show its sleek aerodynamic design and textured sole. The lighting is high-key and bright, reflecting a youthful and energetic fashion aesthetic consistent with the Sole and Style brand. Soft shadows ground the product, making it appear to float slightly." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnL9gCMOtpn5SRw1WhPQcU-Nb4MQ_WU5kEgxryow9hpVtSLirY_if6Hobrz6LoOYkfAOGBarKDgKueFV_EwKWZ3MaGdUXA7Ye9W4dljmiSXtjvb9EjwgsGp5zdyuoRpw3ml8bY9RvjoUimkSZ2E4nncWrXnWFkDKszrlMLXf3K1tn1P98R1riFFzj4UKN5w-kYNaKoGupUakcHfgjJmwPlhGw0DBdTS8EvFjVvMgdx_GCpOOPhGoczDGgeCkTxZTmn9jugbN0aj98"/>
</div>
<div className="p-4">
<p className="text-body-sm text-on-surface-variant mb-1">نايكي اير ماكس</p>
<h4 className="font-headline-md text-headline-md mb-3 text-on-surface group-hover:text-primary transition-colors">كلاسيك ريبوند 2.0</h4>
<div className="flex justify-between items-center">
<span className="font-price-display text-price-display text-primary">599 ر.س</span>
<div className="flex gap-1">
<div className="w-3 h-3 rounded-full bg-black"></div>
<div className="w-3 h-3 rounded-full bg-red-500"></div>
</div>
</div>
</div>
</div>
<div className="group bg-surface-container-lowest rounded-[16px] overflow-hidden product-card-shadow transition-all duration-300">
<div className="relative bg-[#E3F2FD] h-64 flex items-center justify-center overflow-hidden">
<img className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" data-alt="A high-angle shot of a classic black and white canvas high-top sneaker on a light sky-blue background. The shoe features clean white laces and a contrasting white rubber toe cap. The photography is minimalist and crisp, with even, soft lighting that highlights the texture of the canvas material and the bold silhouette of the footwear." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYtimGdPKfkHQIcczv2aYprR28zS2eCAGSsZE-2W_Ri9YihwE3eImrBgMqpSC5Wdmgz6_-M5o0c7ILs3SUorik6QOWPiRp0UcdKL20R_s6Xt8d83syFPhtom9gNJLggaowl9m7vPiR_R70oRMALagw1xWvwI9hBJchbyna_jyBYl3Vx1vpE0Xy9PgJf8FbIau_huz7fnJ5QLf_Kq7b5f9ukkwR8DoYMrDmZaEGioIedfbSM6u8ykhjUWXtGQpEA-P241TVGsTenHA"/>
</div>
<div className="p-4">
<p className="text-body-sm text-on-surface-variant mb-1">فانس أولد سكول</p>
<h4 className="font-headline-md text-headline-md mb-3 text-on-surface group-hover:text-primary transition-colors">الترا وايت كانفاس</h4>
<div className="flex justify-between items-center">
<span className="font-price-display text-price-display text-primary">349 ر.س</span>
<div className="flex gap-1">
<div className="w-3 h-3 rounded-full bg-white border border-outline-variant"></div>
<div className="w-3 h-3 rounded-full bg-blue-600"></div>
</div>
</div>
</div>
</div>
<div className="group bg-surface-container-lowest rounded-[16px] overflow-hidden product-card-shadow transition-all duration-300">
<div className="relative bg-[#F5F5F5] h-64 flex items-center justify-center overflow-hidden">
<span className="absolute top-4 right-4 bg-on-background text-white text-[10px] px-2 py-1 rounded-full font-bold uppercase z-10">خصم 20%</span>
<img className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" data-alt="A stylish lime green lifestyle sneaker shown from a three-quarter perspective on a neutral off-white background. The shoe design is futuristic with complex layering of materials and a chunky sole. The lighting is bright and modern, creating a professional e-commerce feel while maintaining a playful and tactile visual appeal with soft, ambient shadows." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFxAqcZPIUPBDu3XYx-fNgYs6YaVTthOA14XVTg9qzL6RyRpi0WAJRVbizBLftmkoyTdEF-GOaUlMVV1tDpRMLtUlFuwnUgRMq5qGc7J0GehnMAkO_JqXBeZ4BLkghwy1EySx_LJMUWN1onJHQ_gFACVwLW-dfNPcNHSZ9mdf3SC79BKv_28hvw5zDScAdyNNGeVcDbya-N7pzspb1C_NaZTUI2DV0JD2zlaLvkXwmMfpaSkopkK1vwhpd54tUYMhRiSXySkNSMW4"/>
</div>
<div className="p-4">
<p className="text-body-sm text-on-surface-variant mb-1">أديداس أورجينالز</p>
<h4 className="font-headline-md text-headline-md mb-3 text-on-surface group-hover:text-primary transition-colors">سبورت نيون برو</h4>
<div className="flex justify-between items-center">
<div className="flex gap-2 items-center">
<span className="font-price-display text-price-display text-primary">420 ر.س</span>
<span className="text-body-sm text-on-surface-variant line-through">525 ر.س</span>
</div>
</div>
</div>
</div>
<div className="group bg-surface-container-lowest rounded-[16px] overflow-hidden product-card-shadow transition-all duration-300">
<div className="relative bg-[#FFF4E0] h-64 flex items-center justify-center overflow-hidden">
<img className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" data-alt="A minimalist white sneaker with subtle gold accents displayed on a warm peach-colored background. The image captures the shoe's elegant simplicity and premium leather finish. The overall aesthetic is clean and high-end, utilizing soft, diffused lighting that enhances the creamy tones of the composition and aligns with the brand's sophisticated fashion-forward identity." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJVk67hpAHUGsM_wlO55lsWS00P0iJe-Wpx-p2OMdvzE3uc0eDiCgCkA88gXtT4S-BuW3hnmJgfmSYEC5OdNQPTfM7ZG8PKbWSVrz979yzM-Wo7Bieho6W0Sov3MaN3fJRLE40tEcdlWnZrEX2LnxHQomrwLUPp2ltQhs7pXnxsoUTUZwZ6Zty8efO9vh83o5Co1pL1xDhqzXK6xQkQ5yp4Vr_IjQTRVwB4_CgncKKZKB5GCiaActaEhXYNKrB2M579F908C3xovg"/>
</div>
<div className="p-4">
<p className="text-body-sm text-on-surface-variant mb-1">كونفرس شاتوه</p>
<h4 className="font-headline-md text-headline-md mb-3 text-on-surface group-hover:text-primary transition-colors">بيور إليجانس</h4>
<div className="flex justify-between items-center">
<span className="font-price-display text-price-display text-primary">499 ر.س</span>
<div className="flex gap-1">
<div className="w-3 h-3 rounded-full bg-[#E5B80B]"></div>
<div className="w-3 h-3 rounded-full bg-white border border-outline-variant"></div>
</div>
</div>
</div>
</div>
<div className="group bg-surface-container-lowest rounded-[16px] overflow-hidden product-card-shadow transition-all duration-300">
<div className="relative bg-[#F3E5F5] h-64 flex items-center justify-center overflow-hidden">
<img className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" data-alt="A pair of trendy multi-colored chunky sneakers in pastel shades of purple, yellow, and blue. The shoes are staged against a soft lavender background with high-key lighting. The style is playful and energetic, emphasizing the tactile textures and bold design patterns. This visual is perfect for a youthful, fashion-focused audience looking for expressive footwear." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8Pg8pTKf6rEb-9C7cM3Ft-dSdx5VQZ82KNF4_aZEFnPxxo2nxTtidIiQJzaEGQddAIaKXDov-H4X-jIQGSDschn6r-Ucv3KCN4kCT1xMjTihJ4yJURCXsAP_ssgZUSWBndWpNCi2IYJg-yvl-YeWeJiGPA0vZLVhtNOJ_cW8zV9npAzwGjUHzMZDYiZbzG8yX4SZHThxYrT_4ZjEKYkjeNRX61WuBZFqlgBLfautXcowZBpqozt9x1GzwohpdbjFkNVcfzTR-6mI"/>
</div>
<div className="p-4">
<p className="text-body-sm text-on-surface-variant mb-1">ريبوك كلاسيك</p>
<h4 className="font-headline-md text-headline-md mb-3 text-on-surface group-hover:text-primary transition-colors">باستيل دريم</h4>
<div className="flex justify-between items-center">
<span className="font-price-display text-price-display text-primary">375 ر.س</span>
</div>
</div>
</div>
<div className="group bg-surface-container-lowest rounded-[16px] overflow-hidden product-card-shadow transition-all duration-300">
<div className="relative bg-[#E8F5E9] h-64 flex items-center justify-center overflow-hidden">
<img className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" data-alt="A dark forest green leather boot with rugged textures, presented on a light mint green background. The lighting is focused and cinematic, highlighting the durability and quality of the materials. The composition is balanced and professional, creating a sense of reliability and style for an outdoor-inspired footwear collection." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDisdKll6hWWVUiLGbckdzcGH67Z0Yp5NOHSe5mlA7L9xl-PjYy94OwvfNPOTZFX5cB6EfvWEY2c40Bsmrngmyl4-DLpyWU7WHcxc_RR26Q0bVVwJ_hgSIRNzqQCnpBafHNxd47njpiKiL9tkrAYONc8XwwTzlXOuWUTXIVwXX3Hq6nYEFR9u981chtpj-2853yjDyDs4oIvRJxWWwRXSB_Vbbt3WbfSmZGzF4ku68GBLlvgI8nj6AXy5oeuWQ1SMvp7AfhyFnW8iQ"/>
</div>
<div className="p-4">
<p className="text-body-sm text-on-surface-variant mb-1">تيمبرلاند بريميوم</p>
<h4 className="font-headline-md text-headline-md mb-3 text-on-surface group-hover:text-primary transition-colors">بوت مغامرة</h4>
<div className="flex justify-between items-center">
<span className="font-price-display text-price-display text-primary">850 ر.س</span>
</div>
</div>
</div>
<div className="group bg-surface-container-lowest rounded-[16px] overflow-hidden product-card-shadow transition-all duration-300">
<div className="relative bg-[#FFFDE7] h-64 flex items-center justify-center overflow-hidden">
<img className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" data-alt="A crisp, white lifestyle sneaker with minimal gray detailing shown in profile on a pale yellow background. The lighting is clean and high-contrast, bringing out the subtle textures of the upper material. The overall vibe is fresh and modern, perfect for a contemporary casual wardrobe, maintaining the brand's focus on ease and clarity." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdH2ad2hpiGAJzS8glpgG4DFh-uPvG3g3BviAasEyBUSF7OmEp97duO9CWxpBJxfgGUDKI5K32ufxXPUe1EDRgLO9dIB148jIMv19d8CTPC42tgjtR-AINJNcwYVoGF9BWqM8iKnODQ80ihuzm2lE3WL2Tx_ASv-g52rZs3kuS8cZmjGZyBCl5mRztv00LJ_KaHI_SGPUG9HmqCaYpB7HySO3uT9nHkMSmKp2bo_Vo5C-6glUkH3_ODTZ3yICIV9O0KUjvwzm1mYw"/>
</div>
<div className="p-4">
<p className="text-body-sm text-on-surface-variant mb-1">بوما ميرور</p>
<h4 className="font-headline-md text-headline-md mb-3 text-on-surface group-hover:text-primary transition-colors">ديلي وايت</h4>
<div className="flex justify-between items-center">
<span className="font-price-display text-price-display text-primary">299 ر.س</span>
</div>
</div>
</div>
<div className="group bg-surface-container-lowest rounded-[16px] overflow-hidden product-card-shadow transition-all duration-300">
<div className="relative bg-[#FFEBEE] h-64 flex items-center justify-center overflow-hidden">
<span className="absolute top-4 right-4 bg-primary text-white text-[10px] px-2 py-1 rounded-full font-bold z-10">نفذت الكمية</span>
<img className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 opacity-60" data-alt="A detailed shot of a brown leather casual shoe with intricate stitching and high-quality leather grain, placed on a light pink background. The lighting is soft and ambient, emphasizing the warmth of the leather and the craftsmanship of the product. The mood is calm and professional, appealing to customers looking for timeless classic styles." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAY0alrYmDxwxsT15x1ul-NdCvxIo260aH8fBXLmotxHk5IRR7nmv-4rz0rVPfYlwrFtSBcJSBm-oYfGwBYjQamBFjn8rRdBYB-Ozn9KaCdGL7alxalPcMUwTzkIiXL2RHdChb-j1lY5-uC5AQv9ZAu6GTGfOkSm98DYoSto8O99Y5AS0Gupy6Uer-o-e86W1oWIabPM16Hz8-13y26gISNrei3JEw-trJ3ajCKNhV6u9e5qdZKuifZAbnwZwgHxia6tHRyxMMk9uI"/>
</div>
<div className="p-4 opacity-60">
<p className="text-body-sm text-on-surface-variant mb-1">نيو بالانس 574</p>
<h4 className="font-headline-md text-headline-md mb-3 text-on-surface">إيرث تون كلاسيك</h4>
<div className="flex justify-between items-center">
<span className="font-price-display text-price-display text-primary">450 ر.س</span>
</div>
</div>
</div>
</div>
<div className="mt-section-gap flex justify-center items-center gap-2">
<button className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface-container-highest text-on-surface-variant hover:bg-primary hover:text-white transition-all">
<span className="material-symbols-outlined">chevron_right</span>
</button>
<button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold">1</button>
<button className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface-container-highest text-on-surface-variant hover:bg-primary hover:text-white transition-all font-bold">2</button>
<button className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface-container-highest text-on-surface-variant hover:bg-primary hover:text-white transition-all font-bold">3</button>
<span className="px-2">...</span>
<button className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface-container-highest text-on-surface-variant hover:bg-primary hover:text-white transition-all font-bold">10</button>
<button className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface-container-highest text-on-surface-variant hover:bg-primary hover:text-white transition-all">
<span className="material-symbols-outlined">chevron_left</span>
</button>
</div>
</div>
</div>
</main>
  );
}

export default ProductsPage;

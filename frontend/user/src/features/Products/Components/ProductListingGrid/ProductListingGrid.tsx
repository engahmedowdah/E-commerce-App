import { useNavigate } from 'react-router-dom';

export default function ProductListingGrid() {
  const navigate = useNavigate();
  const products = [
    {
      id: 1,
      badge: 'جديد',
      title: 'كلاسيك ريبوند 2.0',
      brand: 'نايكي اير ماكس',
      price: '599 ر.س',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDnL9gCMOtpn5SRw1WhPQcU-Nb4MQ_WU5kEgxryow9hpVtSLirY_if6Hobrz6LoOYkfAOGBarKDgKueFV_EwKWZ3MaGdUXA7Ye9W4dljmiSXtjvb9EjwgsGp5zdyuoRpw3ml8bY9RvjoUimkSZ2E4nncWrXnWFkDKszrlMLXf3K1tn1P98R1riFFzj4UKN5w-kYNaKoGupUakcHfgjJmwPlhGw0DBdTS8EvFjVvMgdx_GCpOOPhGoczDGgeCkTxZTmn9jugbN0aj98',
      bg: '#FFEDF1',
      colors: [{ bg: 'bg-black', border: false }, { bg: 'bg-red-500', border: false }]
    },
    {
      id: 2,
      title: 'الترا وايت كانفاس',
      brand: 'فانس أولد سكول',
      price: '349 ر.س',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYtimGdPKfkHQIcczv2aYprR28zS2eCAGSsZE-2W_Ri9YihwE3eImrBgMqpSC5Wdmgz6_-M5o0c7ILs3SUorik6QOWPiRp0UcdKL20R_s6Xt8d83syFPhtom9gNJLggaowl9m7vPiR_R70oRMALagw1xWvwI9hBJchbyna_jyBYl3Vx1vpE0Xy9PgJf8FbIau_huz7fnJ5QLf_Kq7b5f9ukkwR8DoYMrDmZaEGioIedfbSM6u8ykhjUWXtGQpEA-P241TVGsTenHA',
      bg: '#E3F2FD',
      colors: [{ bg: 'bg-white', border: true }, { bg: 'bg-blue-600', border: false }]
    },
    {
      id: 3,
      badge: 'خصم 20%',
      badgeDark: true,
      title: 'سبورت نيون برو',
      brand: 'أديداس أورجينالز',
      price: '420 ر.س',
      oldPrice: '525 ر.س',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFxAqcZPIUPBDu3XYx-fNgYs6YaVTthOA14XVTg9qzL6RyRpi0WAJRVbizBLftmkoyTdEF-GOaUlMVV1tDpRMLtUlFuwnUgRMq5qGc7J0GehnMAkO_JqXBeZ4BLkghwy1EySx_LJMUWN1onJHQ_gFACVwLW-dfNPcNHSZ9mdf3SC79BKv_28hvw5zDScAdyNNGeVcDbya-N7pzspb1C_NaZTUI2DV0JD2zlaLvkXwmMfpaSkopkK1vwhpd54tUYMhRiSXySkNSMW4',
      bg: '#F5F5F5'
    },
    {
      id: 4,
      title: 'بيور إليجانس',
      brand: 'كونفرس شاتوه',
      price: '499 ر.س',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJVk67hpAHUGsM_wlO55lsWS00P0iJe-Wpx-p2OMdvzE3uc0eDiCgCkA88gXtT4S-BuW3hnmJgfmSYEC5OdNQPTfM7ZG8PKbWSVrz979yzM-Wo7Bieho6W0Sov3MaN3fJRLE40tEcdlWnZrEX2LnxHQomrwLUPp2ltQhs7pXnxsoUTUZwZ6Zty8efO9vh83o5Co1pL1xDhqzXK6xQkQ5yp4Vr_IjQTRVwB4_CgncKKZKB5GCiaActaEhXYNKrB2M579F908C3xovg',
      bg: '#FFF4E0',
      colors: [{ bg: 'bg-[#E5B80B]', border: false }, { bg: 'bg-white', border: true }]
    },
    {
      id: 5,
      title: 'باستيل دريم',
      brand: 'ريبوك كلاسيك',
      price: '375 ر.س',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8Pg8pTKf6rEb-9C7cM3Ft-dSdx5VQZ82KNF4_aZEFnPxxo2nxTtidIiQJzaEGQddAIaKXDov-H4X-jIQGSDschn6r-Ucv3KCN4kCT1xMjTihJ4yJURCXsAP_ssgZUSWBndWpNCi2IYJg-yvl-YeWeJiGPA0vZLVhtNOJ_cW8zV9npAzwGjUHzMZDYiZbzG8yX4SZHThxYrT_4ZjEKYkjeNRX61WuBZFqlgBLfautXcowZBpqozt9x1GzwohpdbjFkNVcfzTR-6mI',
      bg: '#F3E5F5'
    },
    {
      id: 6,
      title: 'بوت المغامرة',
      brand: 'تيمبرلاند بريميوم',
      price: '850 ر.س',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDisdKll6hWWVUiLGbckdzcGH67Z0Yp5NOHSe5mlA7L9xl-PjYy94OwvfNPOTZFX5cB6EfvWEY2c40Bsmrngmyl4-DLpyWU7WHcxc_RR26Q0bVVwJ_hgSIRNzqQCnpBafHNxd47njpiKiL9tkrAYONc8XwwTzlXOuWUTXIVwXX3Hq6nYEFR9u981chtpj-2853yjDyDs4oIvRJxWWwRXSB_Vbbt3WbfSmZGzF4ku68GBLlvgI8nj6AXy5oeuWQ1SMvp7AfhyFnW8iQ',
      bg: '#E8F5E9'
    },
    {
      id: 7,
      title: 'ديلي وايت',
      brand: 'بوما ميرور',
      price: '299 ر.س',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdH2ad2hpiGAJzS8glpgG4DFh-uPvG3g3BviAasEyBUSF7OmEp97duO9CWxpBJxfgGUDKI5K32ufxXPUe1EDRgLO9dIB148jIMv19d8CTPC42tgjtR-AINJNcwYVoGF9BWqM8iKnODQ80ihuzm2lE3WL2Tx_ASv-g52rZs3kuS8cZmjGZyBCl5mRztv00LJ_KaHI_SGPUG9HmqCaYpB7HySO3uT9nHkMSmKp2bo_Vo5C-6glUkH3_ODTZ3yICIV9O0KUjvwzm1mYw',
      bg: '#FFFDE7'
    },
    {
      id: 8,
      badge: 'نفذت الكمية',
      title: 'إيرث تون كلاسيك',
      brand: 'نيو بالانس 574',
      price: '450 ر.س',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAY0alrYmDxwxsT15x1ul-NdCvxIo260aH8fBXLmotxHk5IRR7nmv-4rz0rVPfYlwrFtSBcJSBm-oYfGwBYjQamBFjn8rRdBYB-Ozn9KaCdGL7alxalPcMUwTzkIiXL2RHdChb-j1lY5-uC5AQv9ZAu6GTGfOkSm98DYoSto8O99Y5AS0Gupy6Uer-o-e86W1oWIabPM16Hz8-13y26gISNrei3JEw-trJ3ajCKNhV6u9e5qdZKuifZAbnwZwgHxia6tHRyxMMk9uI',
      bg: '#FFEBEE',
      outOfStock: true
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-gutter">
      {products.map(product => (
        <div 
          key={product.id} 
          onClick={() => navigate(`/products/${product.id}`)}
          className="group bg-surface-container-lowest rounded-[16px] overflow-hidden product-card-shadow transition-all duration-300 cursor-pointer hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
        >
          <div className="relative h-64 flex items-center justify-center overflow-hidden" style={{ backgroundColor: product.bg }}>
            {product.badge && (
              <span className={`absolute top-4 right-4 text-[10px] px-2 py-1 rounded-full font-bold uppercase z-10 ${product.badgeDark ? 'bg-on-background text-white' : 'bg-primary text-white'}`}>
                {product.badge}
              </span>
            )}
            <button className="absolute top-4 left-4 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-opacity z-10 cursor-pointer border-none hover:bg-white">
              <span className="material-symbols-outlined text-[20px]">favorite</span>
            </button>
            <img 
              className={`w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 ${product.outOfStock ? 'opacity-60' : ''}`} 
              alt={product.title} 
              src={product.image} 
            />
          </div>
          <div className={`p-4 ${product.outOfStock ? 'opacity-60' : ''}`}>
            <p className="text-body-sm text-on-surface-variant mb-1">{product.brand}</p>
            <h4 className="font-headline-md text-headline-md mb-3 text-on-surface group-hover:text-primary transition-colors">{product.title}</h4>
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <span className="font-price-display text-price-display text-primary">{product.price}</span>
                {product.oldPrice && <span className="text-body-sm text-on-surface-variant line-through">{product.oldPrice}</span>}
              </div>
              {product.colors && (
                <div className="flex gap-1">
                  {product.colors.map((color, idx) => (
                    <div key={idx} className={`w-3 h-3 rounded-full ${color.bg} ${color.border ? 'border border-outline-variant' : ''}`}></div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface CartItem {
  id: number;
  name: string;
  price: number;
  size: number;
  color: string;
  quantity: number;
  bg: string;
  image: string;
}

const initialItems: CartItem[] = [
  {
    id: 1,
    name: 'حذاء نيون فليكس',
    price: 450,
    size: 42,
    color: 'وردي نيون',
    quantity: 1,
    bg: '#FFD1DC',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA27T0OCSRTYR36_r1LBCQpYXuC_c9gAk42n6ZrRODTv6CQdofHIJIkyBL60cKtnyLnFrRX_7lonxbswaxGIkI18UKq6w_FyXstvu9vwDDW_yPrQmtWoHwWlYiX2z0WvDT2278ZIPu3jGbzyJ5GVaez3xdPGnDEJyWQScNfQ53tSLLwgvSYfGTttVx1Q2160YArDfdoFsvZITL9b1FPQPuUcAO_8XCRqHAt95vqofHL3Jh66tSP58Uy611suCTSfC_YArRhZaiPsK0',
  },
  {
    id: 2,
    name: 'حذاء كلاود ووكر',
    price: 380,
    size: 40,
    color: 'أزرق سماوي',
    quantity: 1,
    bg: '#E0F7FA',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCN2l4WvpbU6uymWHDQEl0_4kQ4d5E14a1j2uGFA1xSkbMWDvyPlOfo6LSgwM2hH9nrt-jeNQ1sZBNYHeiXabwlx8dTopWB9xE6W-d03ZXyFGtLMMVlP0Z7wl-c0rN0P2xXiLrHGvahf_LZh9hNLi6nvaRkjJTuNfm3WH6yvC52uFQg6g4ZUK_dtkTEyWfYt__DV_X7KTdJ6HcHMNp_8NILMI_lITsX7GRZsxISFsxx_b3vAqi1hbJlbzN7k_HSuI0y59Qd9nAr0Gk',
  },
];

function CartPage(): React.ReactNode {
  const navigate = useNavigate();
  const [items, setItems] = useState<CartItem[]>(initialItems);

  const updateQuantity = (id: number, delta: number) => {
    setItems(prevItems =>
      prevItems
        .map(item => {
          if (item.id === id) {
            const nextQty = item.quantity + delta;
            return { ...item, quantity: Math.max(1, nextQty) };
          }
          return item;
        })
    );
  };

  const removeItem = (id: number) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.15;
  const total = subtotal + tax;

  return (
    <main className="max-w-7xl mx-auto px-container-margin py-section-gap min-h-screen text-right">
      <h1 className="font-headline-xl text-headline-xl mb-section-gap">حقيبة التسوق</h1>
      <div className="flex flex-col lg:flex-row gap-section-gap">
        {/* Product List */}
        <div className="flex-grow space-y-gutter order-2 lg:order-1">
          {items.length === 0 ? (
            <div className="text-center py-20 bg-surface-container-lowest rounded-xl border border-outline-variant/30">
              <span className="material-symbols-outlined text-5xl text-on-surface-variant mb-4">shopping_cart</span>
              <p className="text-on-surface-variant font-label-bold">حقيبة التسوق فارغة حالياً.</p>
              <button 
                onClick={() => navigate('/products')}
                className="mt-6 bg-primary text-white font-label-bold px-8 py-4 rounded-xl hover:opacity-95 active:scale-95 border-none cursor-pointer"
              >
                اذهب للمتجر
              </button>
            </div>
          ) : (
            items.map(item => (
              <div 
                key={item.id} 
                className="bg-surface-container-lowest rounded-xl p-card-padding flex gap-6 items-center cart-item-shadow text-right"
              >
                <div 
                  className="w-32 h-32 rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center" 
                  style={{ backgroundColor: item.bg }}
                >
                  <img alt={item.name} className="w-full h-full object-contain" src={item.image} />
                </div>
                <div className="flex-grow flex flex-col gap-1">
                  <div className="flex justify-between items-start">
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="text-on-surface-variant hover:text-error transition-colors bg-transparent border-none cursor-pointer"
                    >
                      <span className="material-symbols-outlined">delete</span>
                    </button>
                    <h3 className="font-headline-md text-headline-md">{item.name}</h3>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">المقاس: {item.size} | اللون: {item.color}</p>
                  <div className="flex justify-between items-end mt-4">
                    <span className="font-price-display text-price-display text-primary">{item.price * item.quantity} ر.س</span>
                    {/* Quantity Selector */}
                    <div className="flex items-center bg-surface-container-low rounded-full px-3 py-1 gap-4">
                      <button 
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-6 h-6 flex items-center justify-center font-bold hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
                      >
                        -
                      </button>
                      <span className="font-label-bold text-label-bold">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-6 h-6 flex items-center justify-center font-bold hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Summary Panel */}
        {items.length > 0 && (
          <aside className="w-full lg:w-96 flex-shrink-0 order-1 lg:order-2">
            <div className="bg-surface-container-lowest rounded-xl p-6 cart-item-shadow sticky top-28 text-right">
              <h2 className="font-headline-lg text-headline-lg mb-6">ملخص الطلب</h2>
              <div className="space-y-4 border-b border-outline-variant pb-6 mb-6">
                <div className="flex justify-between font-body-lg text-body-lg">
                  <span className="text-on-surface-variant">المجموع الفرعي</span>
                  <span className="font-label-bold">{subtotal} ر.س</span>
                </div>
                <div className="flex justify-between font-body-lg text-body-lg">
                  <span className="text-on-surface-variant">الشحن</span>
                  <span className="text-green-600 font-label-bold">مجاني</span>
                </div>
                <div className="flex justify-between font-body-lg text-body-lg">
                  <span className="text-on-surface-variant">الضريبة (15%)</span>
                  <span className="font-label-bold">{tax.toFixed(2)} ر.س</span>
                </div>
              </div>
              <div className="flex justify-between font-headline-lg text-headline-lg mb-8">
                <span>الإجمالي</span>
                <span className="text-primary">{total.toFixed(2)} ر.س</span>
              </div>
              <button 
                onClick={() => navigate('/checkout')}
                className="w-full bg-black text-white font-label-bold text-label-bold py-4 rounded-xl uppercase tracking-widest hover:bg-primary-container active:scale-95 transition-all shadow-lg border-none cursor-pointer"
              >
                إتمـام الشراء
              </button>
              <div className="mt-6 flex flex-col gap-4">
                <div className="flex items-center gap-2 text-on-surface-variant justify-start">
                  <span className="material-symbols-outlined text-primary-container">local_shipping</span>
                  <span className="font-body-sm text-body-sm">توصيل سريع خلال 2-3 أيام عمل</span>
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant justify-start">
                  <span className="material-symbols-outlined text-primary-container">verified_user</span>
                  <span className="font-body-sm text-body-sm">دفع آمن 100%</span>
                </div>
              </div>
            </div>
          </aside>
        )}
      </div>
    </main>
  );
}

export default CartPage;

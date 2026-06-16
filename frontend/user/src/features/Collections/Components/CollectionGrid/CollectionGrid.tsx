
export default function CollectionGrid() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter my-section-gap">
      {/* Shoes Collection (Large) */}
      <div className="md:col-span-8 relative h-[600px] rounded-[24px] overflow-hidden group cursor-pointer hover-lift shadow-[0_4px_30px_rgba(0,0,0,0.05)]">
        <div className="absolute inset-0 bg-[#E3F2FD] z-0"></div>
        <img 
          className="absolute inset-0 w-full h-full object-contain p-12 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-2 z-10" 
          alt="Sneakers" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPP-pdtFP2K6NjEroWK2o3DzS0HfdmnzPba7893n3DQGWZMxAQ5h1eiZD9R94DpbJ7JcGtvB0QnqHD6EhgZad_-mPzc3FGbSyL9Fd7ksJd2zujy_VHYjUn31FJaVxP_Z82A_VHVj8g_9i4r9YXXRwhRH4rcatD0XvVLmFnGYtNF42xYHBixb2TxSf0cIKMKhHu4LUubAr1rb-UR1OerjSfg9Q4vFn5r9PXpwkxlG7wztW8xSSYPDaCW44SbDXOxcA_2E01TD0rQD8" 
        />
        <div className="absolute bottom-0 right-0 left-0 p-8 z-20 glass-card m-6 rounded-[20px] flex justify-between items-center bg-white/80 backdrop-blur-md border border-white/30">
          <div>
            <h3 className="font-headline-lg text-headline-lg text-on-surface">الأحذية الرياضية</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">أداء عالٍ بلمسة عصرية</p>
          </div>
          <span className="material-symbols-outlined bg-black text-white p-3 rounded-full">arrow_forward</span>
        </div>
      </div>

      {/* Bags Collection */}
      <div className="md:col-span-4 relative h-[600px] rounded-[24px] overflow-hidden group cursor-pointer hover-lift shadow-[0_4px_30px_rgba(0,0,0,0.05)]">
        <div className="absolute inset-0 bg-[#FCE4EC] z-0"></div>
        <img 
          className="absolute inset-0 w-full h-full object-contain p-12 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-2 z-10" 
          alt="Handbags" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNNsFTwkxHbve11hAF2_jU9sCpthpYkxsZnYpuFUtF-kwD3Ag3eslaZAHQ3d6IF1GunqCvcORD9So8BgxEzq_EnHGmC3TmhdNTkfj5hPUUrjim_lQuEx9qV8mykOzmLnoK_nZtSae22wgUp6X4Fu5jRDgQdo1dd7-ItUYpoG5MsYfp_p9mIA0NFhB6tRWOdcsTLNPCXejpIZ8lhulEdSy6HTsLn5CnHiRYm0jt9xgoz9foPkOFjw4ls_zin8PtoHx3wZ0WQns5NvE" 
        />
        <div className="absolute bottom-0 right-0 left-0 p-8 z-20 glass-card m-6 rounded-[20px] bg-white/80 backdrop-blur-md border border-white/30">
          <h3 className="font-headline-md text-headline-md text-on-surface">حقائب اليد</h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant">أناقة لكل يوم</p>
        </div>
      </div>

      {/* Accessories Collection */}
      <div className="md:col-span-4 relative h-[400px] rounded-[24px] overflow-hidden group cursor-pointer hover-lift shadow-[0_4px_30px_rgba(0,0,0,0.05)]">
        <div className="absolute inset-0 bg-[#FFF3E0] z-0"></div>
        <img 
          className="absolute inset-0 w-full h-full object-contain p-16 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-2 z-10" 
          alt="Accessories" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDv4mBam5XbzsQB19qviEDl07Dbu_mI_TnD4cZoX_P8Z7XkCL3sSs2iJWNbS-J6-GOhoaGodRpYyCMaoneh4qnykMAr0bK46Ywtmr1ux4uzRi9Vdb-V4DtsaaOU8l2bclx-k3HVsZKw6tlBRyl7R4zs0ragde6GIZ66iPFDeRlKfC2IwNak6ZzeRLBYwKIJJld-d4mxvgd5jCwzfSh5xpMsJB8oUpNI251rPe7Gu_Ti4-wEesiTuaF2UGi-g651QCBFtecb9TbUiyg" 
        />
        <div className="absolute bottom-0 right-0 left-0 p-6 z-20 glass-card m-4 rounded-[16px] bg-white/80 backdrop-blur-md border border-white/30">
          <h3 className="font-headline-md text-headline-md text-on-surface">الإكسسوارات</h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant">اللمسة النهائية</p>
        </div>
      </div>

      {/* New Arrivals (Long) */}
      <div className="md:col-span-8 relative h-[400px] rounded-[24px] overflow-hidden group cursor-pointer hover-lift shadow-[0_4px_30px_rgba(0,0,0,0.05)]">
        <div className="absolute inset-0 bg-[#E8F5E9] z-0"></div>
        <div className="absolute inset-0 flex items-center justify-between px-16 z-10">
          <div className="max-w-xs">
            <h3 className="font-headline-xl text-headline-xl text-on-surface mb-2">وصل حديثاً</h3>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">كوني أول من يرتدي أحدث صيحات الموضة لهذا الموسم.</p>
            <button className="bg-black text-white px-6 py-3 rounded-full font-label-bold text-label-bold border-none cursor-pointer">استعرض الكل</button>
          </div>
          <img 
            className="w-64 h-auto object-contain transition-transform duration-500 group-hover:rotate-12" 
            alt="New Arrival Sneakers" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_l0np0-e_UG_qyNf3RRmUrMaVhn3bv9n79wxYpjfSrXQr1yprqvQY4kdaGpNHBsjZ1NwfWzxQtd8GCSogcU9yc93A2SP3IbI_UhwaaZjKbOOcF2570vyna_1njwB5VTOQXkAlfTFPPr-uhgNnhLaN5jJDJn77jl6pW3sMk76pJK2Thy4gJtS-p-0RV7030aGmZQFRtQ5jU6S6Le6_Z9DtDixbHLv8aH91Xiyw8gMUF5Zw2fULQGADTVwUUYhFEnuhsMzyINqCLn8" 
          />
        </div>
      </div>
    </section>
  );
}

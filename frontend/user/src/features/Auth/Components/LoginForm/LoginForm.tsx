import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginForm(): React.ReactNode {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
      <div className="mb-10 text-center md:text-right">
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">مرحباً بك مجدداً</h2>
        <p className="font-body-sm text-body-sm text-on-surface-variant">الرجاء إدخال تفاصيل حسابك للمتابعة</p>
      </div>

      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="block font-label-bold text-label-bold text-on-surface mb-2" htmlFor="email">البريد الإلكتروني</label>
          <div className="relative">
            <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant">mail</span>
            <input className="w-full px-12 py-4 bg-surface-container-low border-none rounded-xl font-body-lg text-body-lg focus:ring-2 focus:ring-primary-container transition-all" id="email" placeholder="example@domain.com" type="email" />
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="block font-label-bold text-label-bold text-on-surface" htmlFor="password">كلمة المرور</label>
            <Link to="/auth/reset-password" className="text-primary font-label-bold text-label-bold hover:underline">نسيت كلمة المرور؟</Link>
          </div>
          <div className="relative">
            <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant">lock</span>
            <input 
              className="w-full px-12 py-4 bg-surface-container-low border-none rounded-xl font-body-lg text-body-lg focus:ring-2 focus:ring-primary-container transition-all" 
              id="password" 
              placeholder="••••••••" 
              type={showPassword ? 'text' : 'password'} 
            />
            <button 
              className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary cursor-pointer border-none bg-transparent" 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              <span className="material-symbols-outlined">{showPassword ? 'visibility_off' : 'visibility'}</span>
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <input className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary cursor-pointer" id="remember" type="checkbox" />
          <label className="font-body-sm text-body-sm text-on-surface-variant cursor-pointer" htmlFor="remember">تذكرني على هذا الجهاز</label>
        </div>

        <button className="w-full bg-black text-white font-label-bold text-label-bold py-4 rounded-xl hover:bg-gray-900 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer" type="submit">
          <span>تسجيل الدخول</span>
          <span className="material-symbols-outlined">arrow_back</span>
        </button>

        <div className="relative py-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-outline-variant"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-surface-container-lowest text-on-surface-variant font-body-sm text-body-sm">أو المتابعة عبر</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-2 py-3 px-4 border border-outline-variant rounded-xl hover:bg-surface-container-low transition-colors cursor-pointer bg-transparent" type="button">
            <img alt="Google" className="w-5 h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKu3XMjlcsn40rmFtGTcOezW5cmm7xJz6IptN2J-Ik02xN-hVe_qbDGCjtbEKM0R0_bx4kU07gT-5Qxrlb9-lxhbL_1OcWX-HNpWffEK0lLwp8qm5Weqt5d2OaPb0Xqd84HoX6uM_3ZylJW82s4jP93wgNlocVnUsQ3QdtpNhibgsg_bFeVumU08QEPsMdAV3lCMkMCsfta2IX78Q8LVuHOz_EWFVUU_Ytp6vaf_d1nTMYG6ycXuOVSqoniTXhkjTTtKkiGV30ncY" />
            <span className="font-label-bold text-label-bold">Google</span>
          </button>
          <button className="flex items-center justify-center gap-2 py-3 px-4 border border-outline-variant rounded-xl hover:bg-surface-container-low transition-colors cursor-pointer bg-transparent" type="button">
            <img alt="Apple" className="w-5 h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9XZoo-HLnMw0Um-GhfxQtueA2MbjIz0C3ieNfasjar03TOIJbdOJN3y7erYDK90V4Q44l3e-d5d8koscKXwAzjPemaHhSl_MjNTEzRUCGFRx9CvT0Ri5ItMDWgHRbaxx_v6Gha7I4KVHxbswFJMxEFZB-QHWQrqyCsdC4OU3PGWAf7oz_4SfeE49_7Jfbg9uUxWFrBmlbeJkHbRA2qVsDH8-8F618frPEKT76CDPxi5HIg5mvACpyTIRAnFGizb0btrVRnViTcd0" />
            <span className="font-label-bold text-label-bold">Apple</span>
          </button>
        </div>
      </form>

      <div className="mt-8 text-center">
        <p className="font-body-sm text-body-sm text-on-surface-variant">
          ليس لديك حساب؟ 
          <Link className="text-primary font-label-bold text-label-bold hover:underline mr-1" to="/auth/register">إنشاء حساب جديد</Link>
        </p>
      </div>
    </section>
  );
}

export default LoginForm;

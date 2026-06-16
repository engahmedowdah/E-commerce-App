import React from 'react'
import './SubscribeUs.css'

function SubscribeUs() : React.ReactNode {
  const [email, setEmail] = React.useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEmail('')
  }

  return (
    <section className="py-section-gap container mx-auto px-container-margin w-full">
      <div className="bg-primary-container p-12 md:p-24 relative overflow-hidden flex flex-col items-center text-center w-full">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
        <h2 className="font-headline-xl text-on-primary-container mb-6 relative z-10">انضم إلى مجتمعنا</h2>
        <p className="font-body-lg text-on-primary-container/80 mb-10 max-w-xl relative z-10">
          اشترك في نشرتنا الإخبارية للحصول على آخر التحديثات، العروض الحصرية، وإشعار مسبق بالمنتجات الجديدة.
        </p>
        <form className="w-full max-w-md relative z-10 flex gap-2" onSubmit={handleSubmit}>
          <button 
            className="bg-on-background text-on-primary px-8 py-4 rounded-full font-label-bold hover:shadow-lg transition-all active:scale-95 border-none cursor-pointer" 
            type="submit"
          >
            اشترك
          </button>
          <input 
            className="bg-white border-none rounded-full px-6 py-4 focus:ring-4 focus:ring-white/20 text-right" 
            placeholder="بريدك الإلكتروني" 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </form>
      </div>
    </section>
  )
}

export default SubscribeUs

import "./ListCategoryFooter.css"
const ListCategoryFooter = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3 bg-primary-container text-white p-8 rounded-xl relative overflow-hidden flex flex-col justify-center min-h-[200px]">
            <div className="relative z-10">
              <h4 className="text-2xl font-black tracking-tight mb-2">
                Maximize your visibility.
              </h4>
              <p className="max-w-md text-on-primary-container text-sm leading-relaxed mb-6 font-medium">
                Use automated category rotations to keep your homepage fresh
                for recurring customers. Predictive analytics can now suggest
                products for your next curation.
              </p>
              <button className="bg-white text-primary px-5 py-2 rounded-xl text-sm font-bold transition-transform active:scale-95 duration-150">
                View Insights
              </button>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-secondary-fixed-dim/20 to-transparent rounded-full -mr-16 -mt-16 blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-primary-fixed/10 rounded-full blur-2xl"></div>
          </div>
          <div className="bg-tertiary-container text-tertiary-fixed-dim p-8 rounded-xl flex flex-col items-center justify-center text-center gap-4 border border-tertiary">
            <span className="material-symbols-outlined text-5xl">
              auto_awesome
            </span>
            <div>
              <p className="text-lg font-bold text-white">Smart Curation</p>
              <p className="text-xs font-medium opacity-80 mt-1">
                AI-powered grouping for higher conversion
              </p>
            </div>
          </div>
        </div>
    )
}
export default ListCategoryFooter;

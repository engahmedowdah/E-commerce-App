import { useState } from "react";
import { useToast } from "../../../../shared/components";

const LIMIT_OPTIONS = [5, 10, 15, 20];

const SORT_OPTIONS = [
  { value: "name_asc",       label: "Name A → Z" },
  { value: "name_desc",      label: "Name Z → A" },
  { value: "createdAt_desc", label: "Newest First" },
  { value: "createdAt_asc",  label: "Oldest First" },
];

const PRICE_SORT_OPTIONS = [
  { value: "price_asc",  label: "Price Low → High" },
  { value: "price_desc", label: "Price High → Low" },
];

const LANG_OPTIONS = [
  { value: "en", label: "English", native: "English", flag: "🇺🇸" },
  { value: "ar", label: "Arabic",  native: "العربية", flag: "🇸🇦" },
];

const LS_LIMIT      = "admin_default_limit";
const LS_SORT       = "admin_default_sort";
const LS_PRICE_SORT = "admin_default_price_sort";
const LS_LANG       = "admin_default_lang";

function SettingsPage() {
  const { success } = useToast();

  const [limit, setLimit] = useState<number>(() => {
    const stored = localStorage.getItem(LS_LIMIT);
    return stored ? Number(stored) : 20;
  });
  const [sort, setSort] = useState<string>(() => {
    return localStorage.getItem(LS_SORT) || "createdAt_desc";
  });
  const [priceSort, setPriceSort] = useState<string>(() => {
    return localStorage.getItem(LS_PRICE_SORT) || "price_asc";
  });
  const [lang, setLang] = useState<string>(() => {
    return localStorage.getItem(LS_LANG) || "en";
  });

  const handleSave = () => {
    localStorage.setItem(LS_LIMIT, String(limit));
    localStorage.setItem(LS_SORT, sort);
    localStorage.setItem(LS_PRICE_SORT, priceSort);
    localStorage.setItem(LS_LANG, lang);
    success("Saved", "Your default settings have been saved.");
  };

  const handleReset = () => {
    setLimit(20);
    setSort("createdAt_desc");
    setPriceSort("price_asc");
    setLang("en");
    localStorage.removeItem(LS_LIMIT);
    localStorage.removeItem(LS_SORT);
    localStorage.removeItem(LS_PRICE_SORT);
    localStorage.removeItem(LS_LANG);
    success("Reset", "Settings restored to defaults.");
  };

  return (
    <div className="w-full p-4 md:p-8 bg-gray-50/20 min-h-screen">
      <div className="flex flex-col gap-8 w-full max-w-3xl mx-auto">

        {/* Header */}
        <div>
          <h1 className="text-[32px] font-bold text-gray-900 tracking-tight mb-1">Settings</h1>
          <p className="text-[15px] text-gray-500">Customize your default dashboard preferences.</p>
        </div>

        {/* Language Preference */}
        <div className="bg-white rounded-[20px] border border-gray-100 shadow-sm overflow-hidden">
          <div className="px-8 py-5 border-b border-gray-100 flex items-center gap-3">
            <span className="material-symbols-outlined text-[20px] text-gray-400">language</span>
            <h2 className="text-[15px] font-bold text-gray-900">Language</h2>
            <span className="ml-auto text-[11px] font-bold text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full tracking-wider uppercase">
              API Response Language
            </span>
          </div>

          <div className="px-8 py-6">
            <label className="block text-[11px] font-bold text-gray-500 tracking-widest uppercase mb-3">
              Default Language
            </label>
            <div className="grid grid-cols-2 gap-3">
              {LANG_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  id={`lang-option-${opt.value}`}
                  type="button"
                  onClick={() => setLang(opt.value)}
                  className={`px-5 py-4 rounded-[12px] border transition-all duration-150 flex items-center gap-3 ${
                    lang === opt.value
                      ? "bg-[#111827] text-white border-[#111827] shadow-sm"
                      : "bg-gray-50 text-gray-600 border-gray-200 hover:border-gray-400 hover:text-gray-900"
                  }`}
                >
                  <span className="text-[22px] leading-none">{opt.flag}</span>
                  <div className="text-left">
                    <div className="text-[13px] font-bold">{opt.label}</div>
                    <div className={`text-[12px] ${lang === opt.value ? "text-gray-300" : "text-gray-400"}`}>
                      {opt.native}
                    </div>
                  </div>
                  {lang === opt.value && (
                    <span className="ml-auto material-symbols-outlined text-[18px]">check_circle</span>
                  )}
                </button>
              ))}
            </div>
            <p className="text-[12px] text-gray-400 mt-3">
              Sets the{" "}
              <code className="bg-gray-100 px-1 py-0.5 rounded text-gray-600 text-[11px]">Accept-Language</code>{" "}
              header sent with every API request. Arabic responses are returned when Arabic translations exist in the
              database.
            </p>
          </div>
        </div>

        {/* List Preferences */}
        <div className="bg-white rounded-[20px] border border-gray-100 shadow-sm overflow-hidden">
          <div className="px-8 py-5 border-b border-gray-100 flex items-center gap-3">
            <span className="material-symbols-outlined text-[20px] text-gray-400">table_rows</span>
            <h2 className="text-[15px] font-bold text-gray-900">List Preferences</h2>
          </div>

          <div className="px-8 py-6 flex flex-col gap-6">
            {/* Default Limit */}
            <div>
              <label className="block text-[11px] font-bold text-gray-500 tracking-widest uppercase mb-3">
                Default Items Per Page
              </label>
              <div className="flex flex-wrap gap-2">
                {LIMIT_OPTIONS.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setLimit(opt)}
                    className={`px-5 py-2 rounded-[10px] text-[13px] font-bold border transition-all duration-150 ${
                      limit === opt
                        ? "bg-[#111827] text-white border-[#111827] shadow-sm"
                        : "bg-gray-50 text-gray-600 border-gray-200 hover:border-gray-400 hover:text-gray-900"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
              <p className="text-[12px] text-gray-400 mt-2">
                Number of records shown per page across all list views.
              </p>
            </div>

            {/* Default Sort */}
            <div>
              <label className="block text-[11px] font-bold text-gray-500 tracking-widest uppercase mb-3">
                Default Sort Order
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {SORT_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setSort(opt.value)}
                    className={`px-4 py-2.5 rounded-[10px] text-[12px] font-bold border transition-all duration-150 text-center ${
                      sort === opt.value
                        ? "bg-[#111827] text-white border-[#111827] shadow-sm"
                        : "bg-gray-50 text-gray-600 border-gray-200 hover:border-gray-400 hover:text-gray-900"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
              <p className="text-[12px] text-gray-400 mt-2">
                Default sort applied when you open any list page.
              </p>
            </div>
          </div>
        </div>

        {/* Price Sort — independent section */}
        <div className="bg-white rounded-[20px] border border-gray-100 shadow-sm overflow-hidden">
          <div className="px-8 py-5 border-b border-gray-100 flex items-center gap-3">
            <span className="material-symbols-outlined text-[20px] text-gray-400">sell</span>
            <h2 className="text-[15px] font-bold text-gray-900">Price Sort</h2>
            <span className="ml-auto text-[11px] font-bold text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full tracking-wider uppercase">
              Products · Orders · Payments
            </span>
          </div>

          <div className="px-8 py-6">
            <label className="block text-[11px] font-bold text-gray-500 tracking-widest uppercase mb-3">
              Default Price Sort Order
            </label>
            <div className="grid grid-cols-2 gap-2">
              {PRICE_SORT_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setPriceSort(opt.value)}
                  className={`px-4 py-3 rounded-[10px] text-[13px] font-bold border transition-all duration-150 text-center flex items-center justify-center gap-2 ${
                    priceSort === opt.value
                      ? "bg-[#111827] text-white border-[#111827] shadow-sm"
                      : "bg-gray-50 text-gray-600 border-gray-200 hover:border-gray-400 hover:text-gray-900"
                  }`}
                >
                  <span className="material-symbols-outlined text-[16px]">
                    {opt.value === "price_asc" ? "arrow_upward" : "arrow_downward"}
                  </span>
                  {opt.label}
                </button>
              ))}
            </div>
            <p className="text-[12px] text-gray-400 mt-3">
              Applies only to pages that support price sorting. Does not affect the general sort order above.
            </p>
          </div>
        </div>

        {/* Current Values Summary */}
        <div className="bg-white rounded-[20px] border border-gray-100 shadow-sm overflow-hidden">
          <div className="px-8 py-5 border-b border-gray-100 flex items-center gap-3">
            <span className="material-symbols-outlined text-[20px] text-gray-400">info</span>
            <h2 className="text-[15px] font-bold text-gray-900">Current Defaults</h2>
          </div>
          <div className="px-8 py-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-gray-50 rounded-[14px] p-4 border border-gray-100">
              <div className="text-[11px] font-bold text-gray-400 tracking-widest uppercase mb-1">Language</div>
              <div className="text-[14px] font-bold text-gray-900 flex items-center gap-2">
                <span className="text-[18px]">{LANG_OPTIONS.find(o => o.value === lang)?.flag}</span>
                {LANG_OPTIONS.find(o => o.value === lang)?.label}
              </div>
            </div>
            <div className="bg-gray-50 rounded-[14px] p-4 border border-gray-100">
              <div className="text-[11px] font-bold text-gray-400 tracking-widest uppercase mb-1">Items Per Page</div>
              <div className="text-[22px] font-bold text-gray-900">{limit}</div>
            </div>
            <div className="bg-gray-50 rounded-[14px] p-4 border border-gray-100">
              <div className="text-[11px] font-bold text-gray-400 tracking-widest uppercase mb-1">Sort Order</div>
              <div className="text-[14px] font-bold text-gray-900">
                {SORT_OPTIONS.find(o => o.value === sort)?.label || sort}
              </div>
            </div>
            <div className="bg-gray-50 rounded-[14px] p-4 border border-gray-100">
              <div className="text-[11px] font-bold text-gray-400 tracking-widest uppercase mb-1">Price Sort</div>
              <div className="text-[14px] font-bold text-gray-900">
                {PRICE_SORT_OPTIONS.find(o => o.value === priceSort)?.label || priceSort}
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={handleReset}
            className="px-5 py-2.5 rounded-[10px] bg-gray-100 text-gray-700 text-[13px] font-bold hover:bg-gray-200 transition-colors"
          >
            Reset to Defaults
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="px-7 py-2.5 rounded-[10px] bg-[#111827] text-white text-[13px] font-bold hover:bg-black transition-colors shadow-sm"
          >
            Save Settings
          </button>
        </div>

      </div>
    </div>
  );
}
export default SettingsPage;

import "./ListSubcategoryHeader.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "../../../../../shared/i18n/useTranslation";
const ListSubcategoryHeader = () => {
  const navigate = useNavigate();
  const t = useTranslation();
  return (
    <div className="flex items-end justify-between">
      <div>
        <h2 className="text-4xl font-extrabold tracking-tight text-primary leading-none">{t.pages.subcategories.title}</h2>
        <p className="mt-2 text-on-surface-variant font-medium">{t.pages.subcategories.subtitle}</p>
      </div>
      <button onClick={() => navigate("/subcategories/create")} className="bg-gradient-to-br from-primary to-primary-container text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all active:scale-95 duration-150">
        <span className="material-symbols-outlined">add</span>
        {t.pages.subcategories.create}
      </button>
    </div>
  );
};
export default ListSubcategoryHeader;

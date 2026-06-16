import { useNavigate, useLocation } from "react-router-dom";
import useTranslation from "../../../../shared/i18n/useTranslation";

function Configuration() {
    const navigate = useNavigate();
    const location = useLocation();
    const t = useTranslation();

    const configItems = [
        { icon: "settings",        name: t.nav.settings, path: "/settings" },
        { icon: "account_circle",  name: t.nav.account,  path: "/account" },
    ];

    return (
        <div className="flex flex-col gap-1">
            {configItems.map(({ icon, name, path }) => {
                const isActive = location.pathname.startsWith(path);
                return (
                    <a
                        key={path}
                        className={`flex items-center gap-3 px-3 py-2.5 outline-none transition-all duration-200 ease-in-out cursor-pointer ${isActive ? "text-slate-900 border-r-[3px] border-slate-900 font-bold bg-surface-container-low" : "text-slate-500 font-medium hover:text-slate-900 hover:bg-slate-200/40 rounded-lg"}`}
                        onClick={(e) => { e.preventDefault(); navigate(path); }}
                        title={name}
                    >
                        <span className="material-symbols-outlined text-[20px]">{icon}</span>
                        <span className="font-inter text-[13px]">{name}</span>
                    </a>
                );
            })}
        </div>
    );
}
export default Configuration;

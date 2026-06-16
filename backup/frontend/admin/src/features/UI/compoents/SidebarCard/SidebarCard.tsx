import { useNavigate, useLocation } from "react-router-dom";
function SidebarCard({ icon, alt, name, path }: { icon: string, alt: string, name: string, path: string }) {
    const navigate = useNavigate();
    const location = useLocation();
    const isActive = location.pathname.startsWith(path);
    return (
        <a
            className={`flex items-center gap-3 px-3 py-2.5 outline-none transition-all duration-200 ease-in-out cursor-pointer ${isActive ? 'text-slate-900 border-r-[3px] border-slate-900 font-bold bg-surface-container-low' : 'text-slate-500 font-medium hover:text-slate-900 hover:bg-slate-200/40 rounded-lg'}`}
            onClick={(e) => {
                e.preventDefault();
                navigate(path);
            }}
            title={alt}
        >
            <span className="material-symbols-outlined text-[20px]" data-icon={icon}>{icon}</span>
            <span className="font-inter text-[13px]">{name}</span>
        </a>
    )
}
export default SidebarCard;

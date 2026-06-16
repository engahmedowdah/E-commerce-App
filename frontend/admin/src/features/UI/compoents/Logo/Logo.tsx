import { useNavigate } from "react-router-dom";
function Logo() {
    const navigator = useNavigate();
    return (
        <div className="hover:cursor-pointer text-left" onClick={() => navigator("/")}>
            <h1 className="text-xl font-black text-on-surface tracking-tighter leading-6">Executive Curator</h1>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mt-0.5">Admin Suite</p>
        </div>
    )
}
export default Logo;

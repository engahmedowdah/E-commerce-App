import Nav from "../Nav/Nav";
function Header() {
    return (
        <header className="w-full sticky top-0 z-40 bg-surface/90 backdrop-blur-md shadow-[0_1px_2px_0_rgba(0,0,0,0.04)] border-b border-surface-container-high flex items-center justify-between px-8 py-3.5">
            <div className="relative w-full max-w-md">
                <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">search</span>
                <input
                    type="text"
                    placeholder="Search administrators..."
                    className="w-full pl-11 pr-4 py-2 bg-surface-container-low hover:bg-surface-container rounded-full border-none focus:bg-white focus:ring-2 focus:ring-primary/20 text-sm font-medium text-on-surface placeholder:text-slate-400 outline-none transition-all duration-200"
                />
            </div>
            <Nav />
        </header>
    );
}
export default Header;

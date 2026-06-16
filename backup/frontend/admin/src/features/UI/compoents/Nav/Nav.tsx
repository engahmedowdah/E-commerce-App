import { useNavigate } from "react-router-dom";
function Nav() {
    const navigator = useNavigate();
    return (
        <nav className="flex items-center gap-4">
            <button className="text-slate-500 hover:text-slate-700 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
            </button>
            <button className="text-slate-500 hover:text-slate-700 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
            <div className="h-5 w-px bg-slate-200 mx-1"></div>
            <button
                className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                onClick={() => navigator("/login")}
            >
                Logout
            </button>
            <div className="w-8 h-8 rounded-xl bg-slate-200 overflow-hidden ml-2 cursor-pointer shadow-sm border border-slate-200">
                <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop"
                    alt="Current Admin"
                    className="w-full h-full object-cover"
                />
            </div>
        </nav>
    )
}
export default Nav;

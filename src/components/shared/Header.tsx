// src/components/shared/Header.tsx
import { Bell, UserCircle } from "lucide-react";

export default function Header() {
    return (
        <header className="h-16 border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-20 px-8 flex items-center justify-between">
            <div className="text-sm font-medium text-slate-400">
                System / <span className="text-slate-900">Requests</span>
            </div>

            <div className="flex items-center gap-4">
                <button className="relative p-2 text-slate-400 hover:bg-slate-50 rounded-full transition-colors">
                    <Bell size={20} />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
                </button>
                <div className="h-8 w-[1px] bg-slate-100 mx-2"></div>
                <div className="flex items-center gap-3 cursor-pointer group">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-bold text-slate-800 group-hover:text-primary transition-colors">Admin Account</p>
                        <p className="text-[10px] text-slate-400 font-medium tracking-tight">Enterprise Plan</p>
                    </div>
                    <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-500 border border-slate-200 overflow-hidden">
                        <UserCircle size={24} />
                    </div>
                </div>
            </div>
        </header>
    );
}
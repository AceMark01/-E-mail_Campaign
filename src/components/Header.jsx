import React from 'react';
import { Search, Bell, User } from 'lucide-react';

const Header = () => {
    return (
        <header className="bg-white/80 backdrop-blur-md sticky top-0 z-30 border-b border-slate-200 px-8 py-4 flex items-center justify-between">
            {/* Search Bar */}
            <div className="flex items-center gap-3 bg-slate-100 rounded-none px-4 py-2 w-96 transition-all focus-within:ring-2 focus-within:ring-indigo-100 focus-within:bg-white border border-transparent focus-within:border-slate-200">
                <Search size={18} className="text-slate-400" />
                <input
                    type="text"
                    placeholder="Search campaigns, users..."
                    className="bg-transparent border-none outline-none w-full text-sm text-slate-700 placeholder-slate-400"
                />
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-6">
                <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-none transition-colors">
                    <Bell size={20} />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-none ring-2 ring-white"></span>
                </button>

                <div className="flex items-center gap-3 pl-6 border-l border-slate-200">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-semibold text-slate-800">Jane Doe</p>
                        <p className="text-xs text-slate-500">Admin</p>
                    </div>
                    <div className="w-10 h-10 bg-indigo-100 rounded-none flex items-center justify-center text-indigo-600 border-2 border-white shadow-sm">
                        <User size={20} />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

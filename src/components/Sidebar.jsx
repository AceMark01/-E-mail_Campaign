import React from 'react';
import { LayoutDashboard, Send, Users, Settings, LogOut } from 'lucide-react';

const Sidebar = () => {
    const menuItems = [
        { icon: <LayoutDashboard size={20} />, label: 'Dashboard', active: true },
        { icon: <Send size={20} />, label: 'Campaigns', active: false },
        { icon: <Users size={20} />, label: 'Audience', active: false },
        { icon: <Settings size={20} />, label: 'Settings', active: false },
    ];

    return (
        <aside className="w-64 bg-slate-900 text-white min-h-screen hidden md:flex flex-col shadow-xl">
            <div className="p-6 border-b border-slate-800">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                    Ace Mail
                </h2>
                <p className="text-xs text-slate-400 mt-1">Campaign Manager</p>
            </div>

            <nav className="flex-1 py-6 space-y-2 px-4">
                {menuItems.map((item, index) => (
                    <button
                        key={index}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-none transition-all duration-200 ${item.active
                            ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20'
                            : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                            }`}
                    >
                        {item.icon}
                        <span className="font-medium">{item.label}</span>
                    </button>
                ))}
            </nav>

            <div className="p-4 border-t border-slate-800">
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-none text-slate-400 hover:bg-red-500/10 hover:text-red-400 transition-colors">
                    <LogOut size={20} />
                    <span className="font-medium">Logout</span>
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;

import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

const StatsCard = ({ icon, title, value, trend, trendValue, color }) => {
    const isPositive = trend === 'up';

    return (
        <div className="bg-white p-6 rounded-none shadow-sm border border-slate-100 transition-all hover:shadow-md hover:border-indigo-100 group">
            <div className="flex justify-between items-start mb-4">
                <div className={`${color} p-3 rounded-none text-white shadow-lg shadow-indigo-500/10 group-hover:scale-110 transition-transform`}>
                    {icon}
                </div>
                <div className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-none ${isPositive ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'
                    }`}>
                    {isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                    <span>{trendValue}</span>
                </div>
            </div>

            <div>
                <p className="text-slate-500 text-sm font-medium mb-1">{title}</p>
                <h3 className="text-3xl font-bold text-slate-800 tracking-tight">{value}</h3>
            </div>
        </div>
    );
};

export default StatsCard;

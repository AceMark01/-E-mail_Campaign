import React, { useEffect, useState } from 'react';
import { BarChart3, Mail, MailOpen, TrendingUp, RefreshCcw, Filter, Eye, EyeOff, Clock, Sparkles } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAnalytics, syncStats } from '../store/slices/analyticsSlice';

export default function AnalyticsTab({ setActiveTab, startTargetedCampaign }) {
    const dispatch = useDispatch();
    const { stats, loading, syncing, lastRefreshed } = useSelector(state => state.analytics);
    const [filter, setFilter] = useState('all'); // 'all', 'read', 'unread'

    const fetchStats = () => dispatch(fetchAnalytics());
    const syncResendStats = () => dispatch(syncStats()).then(() => fetchStats());

    useEffect(() => {
        const interval = setInterval(fetchStats, 10000); // Poll every 10s
        return () => clearInterval(interval);
    }, []);

    const openRate = stats.sent > 0 ? ((stats.opened / stats.sent) * 100).toFixed(1) : 0;
    const formattedDate = new Date(lastRefreshed);

    // Filter campaigns based on selection
    const filteredCampaigns = stats.campaigns.filter(c => {
        if (filter === 'read') return c.opened;
        if (filter === 'unread') return !c.opened;
        return true; // 'all'
    });

    const handleTargetUnopened = () => {
        const unopenedEmails = stats.campaigns.filter(c => !c.opened).map(c => c.email);
        startTargetedCampaign([...new Set(unopenedEmails)]);
    };

    const handleTargetReaders = () => {
        const openedEmails = stats.campaigns.filter(c => c.opened).map(c => c.email);
        startTargetedCampaign([...new Set(openedEmails)]);
    };

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                <div>
                    <h2 className="text-xl font-black text-gray-900 tracking-tight flex items-center gap-2">
                        Performance Metrics
                        <span className="text-xs font-bold bg-sky-100 text-sky-700 px-2 py-0.5 rounded-none">Live</span>
                    </h2>
                    <p className="text-gray-500 text-sm font-medium">Tracking delivery and engagement across all channels</p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-xs font-bold text-gray-500 bg-white px-4 py-2 rounded-xl border border-gray-200 shadow-sm whitespace-nowrap">
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                        </span>
                        Last Update: {formattedDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                    <button
                        onClick={syncResendStats}
                        disabled={syncing}
                        className={`p-2.5 rounded-xl bg-white border border-gray-200 shadow-sm transition-all hover:bg-sky-50 hover:text-sky-600 hover:border-sky-200 ${syncing ? 'opacity-50' : 'active:scale-95 hover:shadow-md'}`}
                        title="Force Sync with Gmail"
                    >
                        <RefreshCcw size={18} className={syncing ? 'animate-spin' : ''} />
                    </button>
                </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard
                    icon={<Mail />}
                    label="Total Delivered"
                    value={stats.sent.toLocaleString()}
                    color="bg-sky-600 text-white"
                    trend={stats.sent > 0 ? "+12.5%" : "No data"}
                    description="Successfully processed emails"
                />

                <StatCard
                    icon={<MailOpen />}
                    label="Unique Opens"
                    value={stats.opened.toLocaleString()}
                    subValue={`${stats.sent - stats.opened} messages unopened`}
                    color="bg-emerald-600 text-white"
                    trend={stats.opened > 0 ? "+5.2%" : "Awaiting opens"}
                    description="Verified recipient interactions"
                />
                <StatCard
                    icon={<TrendingUp />}
                    label="Overall Open Rate"
                    value={`${openRate}%`}
                    color="bg-indigo-600 text-white"
                    trend={`Industry: 20%`}
                    description="Performance versus benchmarks"
                />
            </div>

            {/* Daily Limits Section */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 relative overflow-hidden group">
                {/* Decorative background element */}
                <div className="absolute -right-10 -top-10 w-64 h-64 bg-sky-50 rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition-opacity"></div>

                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 relative z-10">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Daily Transmission Quota</h3>
                            <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full">Real-time</span>
                        </div>
                        <p className="text-sm text-gray-500 font-medium">Monitor your G-Suite / Gmail daily sending capacity</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="px-5 py-2.5 bg-gray-900 text-white rounded-xl text-sm font-bold shadow-md flex items-center gap-2 transition-transform hover:scale-105">
                            <Sparkles size={16} className="text-sky-400" /> Professional Plan
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                    <div className="relative p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors border border-gray-100 shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-3 bg-white text-gray-600 rounded-xl shadow-sm">
                                <Filter size={20} />
                            </div>
                            <span className="text-sm font-bold text-gray-600 uppercase tracking-wide">Daily Capacity</span>
                        </div>
                        <div className="flex items-baseline gap-2 mb-4">
                            <span className="text-4xl font-black text-gray-900 tracking-tight">{stats.limitInfo?.dailyLimit || 500}</span>
                            <span className="text-gray-500 font-medium text-sm">/ 24h</span>
                        </div>
                        <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-gray-400 rounded-full" style={{ width: '100%' }}></div>
                        </div>
                    </div>

                    <div className="relative p-6 bg-sky-50 rounded-2xl hover:bg-sky-100 transition-colors border border-sky-100 shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-3 bg-white text-sky-600 rounded-xl shadow-sm">
                                <Mail size={20} />
                            </div>
                            <span className="text-sm font-bold text-sky-700 uppercase tracking-wide">Consumption</span>
                        </div>
                        <div className="flex items-baseline gap-2 mb-4">
                            <span className="text-4xl font-black text-sky-700 tracking-tight">{stats.limitInfo?.usedToday || 0}</span>
                            <span className="text-sky-600 font-medium text-sm">used</span>
                        </div>
                        <div className="h-2 w-full bg-sky-200 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-sky-500 rounded-full transition-all duration-700 ease-out"
                                style={{ width: `${Math.min(100, ((stats.limitInfo?.usedToday || 0) / (stats.limitInfo?.dailyLimit || 500)) * 100)}%` }}
                            ></div>
                        </div>
                    </div>

                    <div className="relative p-6 bg-emerald-50 rounded-2xl hover:bg-emerald-100 transition-colors border border-emerald-100 shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-3 bg-white text-emerald-600 rounded-xl shadow-sm">
                                <TrendingUp size={20} />
                            </div>
                            <span className="text-sm font-bold text-emerald-700 uppercase tracking-wide">Available</span>
                        </div>
                        <div className="flex items-baseline gap-2 mb-4">
                            <span className="text-4xl font-black text-emerald-700 tracking-tight">{stats.limitInfo?.remaining || 500}</span>
                            <span className="text-emerald-600 font-medium text-sm">left</span>
                        </div>
                        <div className="h-2 w-full bg-emerald-200 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-emerald-500 rounded-full transition-all duration-700 ease-out"
                                style={{ width: `${Math.min(100, ((stats.limitInfo?.remaining || 0) / (stats.limitInfo?.dailyLimit || 500)) * 100)}%` }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Actions & Feed */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-6 border-b border-gray-100 flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                        <h3 className="font-bold text-gray-900 text-lg flex items-center gap-3 whitespace-nowrap">
                            <div className="p-2 bg-gray-100 rounded-lg text-gray-600"><BarChart3 size={18} /></div>
                            Recent Activity
                        </h3>

                        {/* Quick Targeted Buttons */}
                        <div className="flex items-center gap-3 sm:border-l sm:border-gray-200 sm:pl-6 shrink-0 flex-wrap">
                            <button
                                onClick={handleTargetUnopened}
                                className="text-sm bg-amber-50 text-amber-700 px-4 py-2 rounded-xl font-bold hover:bg-amber-100 transition-colors flex items-center gap-2 border border-amber-200 shadow-sm"
                            >
                                <Sparkles size={16} /> Target Unopened
                            </button>
                            <button
                                onClick={handleTargetReaders}
                                className="text-sm bg-emerald-50 text-emerald-700 px-4 py-2 rounded-xl font-bold hover:bg-emerald-100 transition-colors flex items-center gap-2 border border-emerald-200 shadow-sm"
                            >
                                <Sparkles size={16} /> Reward Readers
                            </button>
                        </div>
                    </div>

                    {/* Filter Buttons */}
                    <div className="flex items-center gap-3">
                        <Filter size={18} className="text-gray-400 hidden sm:block" />
                        <div className="inline-flex rounded-xl border border-gray-200 p-1 bg-gray-50 shadow-inner overflow-x-auto max-w-full">
                            <button
                                onClick={() => setFilter('all')}
                                className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-all whitespace-nowrap ${filter === 'all' ? 'bg-white text-gray-900 shadow-sm border border-gray-200' : 'text-gray-500 hover:text-gray-900'}`}
                            >
                                All ({stats.sent})
                            </button>
                            <button
                                onClick={() => setFilter('read')}
                                className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-all flex items-center gap-2 whitespace-nowrap ${filter === 'read' ? 'bg-emerald-100 text-emerald-800 shadow-sm border border-emerald-200' : 'text-gray-500 hover:text-emerald-700'}`}
                            >
                                <Eye size={16} /> Read ({stats.opened})
                            </button>
                            <button
                                onClick={() => setFilter('unread')}
                                className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-all flex items-center gap-2 whitespace-nowrap ${filter === 'unread' ? 'bg-gray-200 text-gray-800 shadow-sm border border-gray-300' : 'text-gray-500 hover:text-gray-800'}`}
                            >
                                <EyeOff size={16} /> Unread ({stats.sent - stats.opened})
                            </button>
                        </div>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left border-collapse">
                        <thead className="bg-gray-50/50 text-gray-400 uppercase text-[10px] tracking-[0.2em] font-black">
                            <tr>
                                <th className="px-8 py-5 border-b border-gray-100">Recipient Identity</th>
                                <th className="px-8 py-5 border-b border-gray-100">Campaign Subject</th>
                                <th className="px-8 py-5 border-b border-gray-100 hidden md:table-cell">Transmission</th>
                                <th className="px-8 py-5 border-b border-gray-100 text-right">Engagement</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {filteredCampaigns.length === 0 ? (
                                <tr>
                                    <td colSpan="4" className="text-center py-24 bg-gray-50/20">
                                        <div className="flex flex-col items-center gap-4 text-gray-300">
                                            <div className="w-20 h-20 rounded-none border border-dashed border-gray-200 flex items-center justify-center text-gray-200">
                                                <BarChart3 size={40} strokeWidth={1} />
                                            </div>
                                            <div className="text-center">
                                                <p className="text-sm font-bold text-gray-600 uppercase tracking-widest mb-1">Zero Signals Detected</p>
                                                <p className="text-xs text-gray-400 font-medium">Launch a campaign to start seeing real-time interaction data</p>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ) : (
                                filteredCampaigns.slice(0, 500).map((c) => (
                                    <tr key={c.id} className="hover:bg-sky-50/30 transition-all group cursor-default">
                                        <td className="px-8 py-5">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-bold shadow-sm overflow-hidden group-hover:bg-white group-hover:text-sky-600 transition-colors border border-gray-200">
                                                    <img src={`https://api.dicebear.com/7.x/initials/svg?seed=${c.email}`} alt="avatar" className="w-full h-full object-cover" />
                                                </div>
                                                <div>
                                                    <div className="font-bold text-gray-900">{c.email.split('@')[0]}</div>
                                                    <div className="text-xs text-gray-500 font-medium">{c.email}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-5">
                                            <div className="font-bold text-gray-700 max-w-[200px] truncate">{c.subject}</div>
                                            <div className="text-[10px] text-sky-500 font-black uppercase tracking-wider mt-0.5">Marketing Broadcaster</div>
                                        </td>
                                        <td className="px-8 py-5 hidden md:table-cell">
                                            <div className="flex flex-col">
                                                <span className="text-gray-900 font-bold text-xs">{new Date(c.sentAt).toLocaleDateString([], { month: 'short', day: 'numeric' })}</span>
                                                <span className="text-[10px] text-gray-400 font-bold">{new Date(c.sentAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-5 text-right">
                                            {c.opened ? (
                                                <div className="flex flex-col items-end gap-1">
                                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-none text-[10px] font-black bg-emerald-100 text-emerald-700 uppercase tracking-wider">
                                                        <span className="relative flex h-1.5 w-1.5">
                                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-none bg-emerald-400 opacity-75"></span>
                                                            <span className="relative inline-flex rounded-none h-1.5 w-1.5 bg-emerald-500"></span>
                                                        </span>
                                                        Interacted
                                                    </span>
                                                    <span className="text-[9px] text-gray-400 font-bold uppercase tracking-tighter">Opened {new Date(c.openedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                                </div>
                                            ) : (
                                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-none text-[10px] font-black bg-gray-100 text-gray-400 uppercase tracking-wider">
                                                    <Mail size={12} strokeWidth={3} />
                                                    Pending
                                                </span>
                                            )}
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Results count footer */}
                {filteredCampaigns.length > 0 && (
                    <div className="px-6 py-3 bg-gray-50 border-t border-gray-100 text-xs text-gray-500 flex justify-between items-center">
                        <span>Showing {Math.min(500, filteredCampaigns.length)} of {filteredCampaigns.length} results</span>
                        {filteredCampaigns.length > 500 && (
                            <span className="text-sky-600 font-medium">Displaying first 500 entries</span>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

function StatCard({ icon, label, value, subValue, color, trend, description }) {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex flex-col justify-between hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group">
            <div className="flex justify-between items-start mb-6">
                <div className={`p-4 rounded-xl ${color} shadow-md group-hover:scale-110 transition-transform`}>
                    {React.cloneElement(icon, { size: 28, strokeWidth: 2 })}
                </div>
                <div className="flex flex-col items-end">
                    {trend && (
                        <span className={`text-xs font-bold px-3 py-1 rounded-full ${trend.startsWith('+') ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-600'}`}>
                            {trend}
                        </span>
                    )}
                </div>
            </div>
            <div>
                <h4 className="text-4xl font-black text-gray-900 tracking-tight mb-2">{value}</h4>
                <p className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">{label}</p>
                {description && <p className="text-xs text-gray-400 font-medium">{description}</p>}
                {subValue && <span className="text-xs text-sky-700 font-semibold bg-sky-50 px-3 py-1 rounded-lg mt-3 inline-block border border-sky-100">{subValue}</span>}
            </div>
        </div>
    );
}

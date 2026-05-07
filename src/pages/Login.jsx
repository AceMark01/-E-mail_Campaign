import React, { useState } from 'react';
import { Mail, Lock, CheckCircle, AlertCircle, ArrowRight, Loader2 } from 'lucide-react';

export default function Login({ onLogin }) {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
        setError(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulated API delay
        await new Promise(resolve => setTimeout(resolve, 800));

        if (credentials.username === 'admin' && credentials.password === '123456') {
            // Success
            localStorage.setItem('ace_mail_user', JSON.stringify({ name: 'Admin User', role: 'admin' }));
            onLogin();
        } else {
            setError("Invalid credentials. Please try again.");
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center p-4 relative overflow-hidden">

            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-sky-200 rounded-full blur-[100px] opacity-30 animate-in fade-in duration-1000"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-pink-200 rounded-full blur-[100px] opacity-30 animate-in fade-in delay-500 duration-1000"></div>
            </div>

            <div className="w-full max-w-md bg-white rounded-none shadow-2xl border border-slate-100 p-8 z-10 animate-in slide-in-from-bottom-8 duration-700">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-sky-50 text-sky-600 rounded-none mb-4 shadow-sm">
                        <Mail size={32} />
                    </div>
                    <h1 className="text-2xl font-bold text-slate-900 mb-2 font-outfit uppercase tracking-tight">Login Portal</h1>
                    <p className="text-slate-500 text-sm">Sign in to manage your Ace Mail campaigns</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {error && (
                        <div className="bg-red-50 text-red-600 p-3 rounded-none text-sm flex items-center gap-2 animate-in fade-in">
                            <AlertCircle size={16} /> {error}
                        </div>
                    )}

                    <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 ml-1">Username / Email</label>
                        <div className="relative group">
                            <input
                                name="username"
                                type="text"
                                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-none focus:bg-white focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all placeholder-slate-400"
                                placeholder="Enter 'admin'"
                                value={credentials.username}
                                onChange={handleChange}
                                required
                            />
                            <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-sky-500 transition-colors" />
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 ml-1">Password</label>
                        <div className="relative group">
                            <input
                                name="password"
                                type="password"
                                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-none focus:bg-white focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all placeholder-slate-400"
                                placeholder="Enter '123456'"
                                value={credentials.password}
                                onChange={handleChange}
                                required
                            />
                            <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-sky-500 transition-colors" />
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <a href="#" className="text-xs font-semibold text-sky-600 hover:text-sky-700 transition-colors">Forgot Password?</a>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 bg-sky-600 text-white rounded-none font-bold text-lg hover:bg-sky-700 transition-all transform active:scale-[0.98] shadow-lg shadow-sky-200 flex justify-center items-center gap-2"
                    >
                        {loading ? <Loader2 size={24} className="animate-spin" /> : <>Sign In <ArrowRight size={20} /></>}
                    </button>

                    <div className="pt-4 text-center">
                        <p className="text-xs text-slate-400">Don't have an account? <a href="#" className="text-sky-600 font-bold hover:underline">Contact Sales</a></p>
                    </div>
                </form>
            </div>

            {/* --- STATIC SLIM FOOTER --- */}
            <div className="fixed bottom-0 left-0 w-full h-8 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50 border-t border-gray-100">
                <p className="text-gray-400 font-bold text-[10px] tracking-[0.3em] flex items-center gap-2 uppercase">
                    <span className="opacity-50">PRO</span>
                    <span>Powered by Ace Mail</span>
                </p>
            </div>

            <p className="mt-16 text-xs text-slate-400 z-10 pb-16">© 2026 Ace Mail. All rights reserved.</p>
        </div>
    );
}

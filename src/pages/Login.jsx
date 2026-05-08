import React, { useState } from 'react';
import { Mail, Lock, CheckCircle, AlertCircle, ArrowRight, Loader2, Sparkles } from 'lucide-react';

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
            localStorage.setItem('botivate_mail_session', JSON.stringify({ name: 'Admin User', role: 'admin' }));
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

            <div className="w-full max-w-md bg-white/90 backdrop-blur-xl rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-white p-8 z-10 animate-in slide-in-from-bottom-8 duration-700">
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center mb-5">
                        <img src="/src/assets/acelogo.png" alt="Ace Mail Logo" className="h-16 w-auto object-contain" />
                    </div>
                    <h1 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">Welcome Back</h1>
                    <p className="text-slate-500 text-sm font-medium">Sign in to manage your Ace Mail campaigns</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    {error && (
                        <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm flex items-center gap-3 animate-in fade-in border border-red-100 shadow-sm">
                            <AlertCircle size={18} className="shrink-0" /> {error}
                        </div>
                    )}

                    <div className="space-y-1.5">
                        <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                        <div className="relative group">
                            <input
                                name="username"
                                type="text"
                                className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-medium focus:bg-white focus:ring-4 focus:ring-sky-50 focus:border-sky-400 outline-none transition-all placeholder-slate-400"
                                placeholder="Enter your email"
                                value={credentials.username}
                                onChange={handleChange}
                                required
                            />
                            <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-sky-500 transition-colors" />
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-sm font-bold text-slate-700 ml-1">Password</label>
                        <div className="relative group">
                            <input
                                name="password"
                                type="password"
                                className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-medium focus:bg-white focus:ring-4 focus:ring-sky-50 focus:border-sky-400 outline-none transition-all placeholder-slate-400"
                                placeholder="Enter your password"
                                value={credentials.password}
                                onChange={handleChange}
                                required
                            />
                            <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-sky-500 transition-colors" />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 mt-2 bg-gradient-to-r from-sky-600 to-indigo-600 text-white rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-sky-200 transition-all transform active:scale-[0.98] flex justify-center items-center gap-2"
                    >
                        {loading ? <Loader2 size={24} className="animate-spin" /> : <>Sign In <ArrowRight size={20} /></>}
                    </button>
                </form>
            </div>

            {/* --- STATIC SLIM FOOTER --- */}
            <div className="fixed bottom-0 left-0 w-full h-8 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50 border-t border-gray-100">
                <p className="text-gray-400 font-bold text-[10px] tracking-[0.3em] flex items-center gap-2 uppercase">
                    <Sparkles size={14} className="text-pink-400" />
                    <span>Powered by Ace Mail</span>
                </p>
            </div>

            <p className="mt-16 text-xs text-slate-400 z-10 pb-16">© 2026 Ace Mail. All rights reserved.</p>
        </div>
    );
}

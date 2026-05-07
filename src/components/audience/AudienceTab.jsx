import React, { useState, useRef, useEffect } from 'react';
import { UserPlus, CheckSquare, Square, CheckCircle, X, Send, Loader2, Edit2, Trash2 } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../store/slices/audienceSlice';

export default function AudienceTab({
    users,
    currentUsers,
    selectedUserIds,
    setSelectedUserIds,
    toggleSelectUser,
    toggleSelectAllPage,
    handleSaveUser,
    isAddingUser,
    setIsAddingUser,
    handleAddUser,
    newUserName,
    setNewUserName,
    newUserEmail,
    setNewUserEmail,
    activeCategory,
    setActiveCategory,
    categories,
    editingUserId,
    setEditingUserId,
    editFormData,
    setEditFormData,
    sendCampaign,
    sendingToId,
    startEditingUser,
    currentPage,
    totalPages,
    setCurrentPage,
    switchTab
}) {
    const dispatch = useDispatch();
    const scrollRef = useRef(null);

    // Scroll to top when page changes
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [currentPage]);

    return (
        <div className="bg-white rounded-none shadow-sm border border-gray-100 flex flex-col h-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* --- STATIC HEADER SECTION --- */}
            <div className="p-6 pb-4 shrink-0 border-b border-gray-50 z-20 bg-white">
                <div className="flex justify-between items-center mb-0">
                    <div>
                        <h2 className="font-bold flex items-center gap-2 text-gray-900">
                            Target Audience
                            {selectedUserIds.length > 0 && (
                                <span className="bg-sky-600 text-white text-xs px-2 py-0.5 rounded-none animate-in fade-in zoom-in font-bold">
                                    {selectedUserIds.length}
                                </span>
                            )}
                        </h2>
                    </div>
                    <div className="flex gap-2">
                        {switchTab && (
                            <button
                                onClick={() => switchTab('templates')}
                                className="text-xs bg-sky-600 text-white px-4 py-1.5 rounded-none font-bold hover:bg-sky-700 transition-all flex items-center gap-1 shadow-md shadow-sky-100 active:scale-95"
                            >
                                <Send size={14} /> Send Campaign
                            </button>
                        )}
                        <button onClick={() => setIsAddingUser(!isAddingUser)} className="text-xs bg-sky-50 text-sky-700 px-3 py-1.5 rounded-none font-bold hover:bg-sky-100 transition-colors flex items-center gap-1"><UserPlus size={14} /> Add</button>
                        {selectedUserIds.length > 0 && <button onClick={() => setSelectedUserIds([])} className="text-xs text-red-500 border border-red-100 px-3 py-1.5 rounded-none hover:bg-red-50 transition-colors">Clear</button>}
                    </div>
                </div>

                {isAddingUser && (
                    <div className="mt-4 bg-gray-50/50 p-4 rounded-none border border-gray-200 animate-in slide-in-from-top-2">
                        <div className="flex justify-between items-center mb-3">
                            <h3 className="font-bold text-xs uppercase tracking-wide text-gray-500">New Subscriber Details</h3>
                            <button onClick={() => setIsAddingUser(false)} className="text-gray-400 hover:text-gray-600 bg-white rounded-none p-1"><X size={14} /></button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                            <input
                                placeholder="Full Name"
                                className="border border-gray-200 rounded-none p-2.5 text-sm focus:ring-2 focus:ring-sky-500 outline-none bg-white"
                                value={newUserName}
                                onChange={e => setNewUserName(e.target.value)}
                            />
                            <input
                                placeholder="Email Address"
                                className="border border-gray-200 rounded-none p-2.5 text-sm focus:ring-2 focus:ring-sky-500 outline-none bg-white"
                                value={newUserEmail}
                                onChange={e => setNewUserEmail(e.target.value)}
                            />
                        </div>
                        <div className="flex gap-3">
                            <select
                                className="border border-gray-200 rounded-none p-2.5 text-sm flex-1 bg-white focus:ring-2 focus:ring-sky-500 outline-none"
                                value={activeCategory}
                                onChange={(e) => setActiveCategory(e.target.value)}
                            >
                                {categories.filter(c => c !== "All").map(c => (
                                    <option key={c} value={c}>{c}</option>
                                ))}
                            </select>
                            <button onClick={handleAddUser} className="bg-sky-600 text-white px-6 py-2.5 rounded-none text-sm font-bold hover:bg-sky-700 transition-colors shadow-sm">
                                Save User
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* --- SCROLLABLE LIST SECTION --- */}
            <div ref={scrollRef} className="relative">
                <table className="w-full text-sm text-left border-collapse">
                    <thead className="bg-gray-50/50 uppercase text-[10px] font-black text-gray-400 sticky top-0 z-10 shadow-sm border-b border-gray-100 backdrop-blur-md">
                        <tr>
                            <th className="p-4 w-10">
                                <button onClick={toggleSelectAllPage} className="w-5 h-5 rounded-none border-2 border-gray-200 flex items-center justify-center hover:border-sky-500 transition-colors bg-white">
                                    {currentUsers.every(u => selectedUserIds.includes(u.id)) ? <CheckSquare size={14} className="text-sky-600" /> : null}
                                </button>
                            </th>
                            <th className="px-6 py-4 tracking-[0.1em]">Subscriber Identity</th>
                            <th className="px-6 py-4 tracking-[0.1em]">Verification Level</th>
                            <th className="px-6 py-4 text-right tracking-[0.1em]">Commands</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {currentUsers.map(u => (
                            <tr key={u.id} className={`transition-all group ${selectedUserIds.includes(u.id) ? 'bg-sky-50/50' : 'hover:bg-gray-50/80 cursor-default'}`}>
                                <td className="p-4">
                                    <button onClick={() => toggleSelectUser(u.id)} className={`w-5 h-5 rounded-none border-2 transition-all flex items-center justify-center ${selectedUserIds.includes(u.id) ? 'bg-sky-600 border-sky-600 text-white scale-110' : 'border-gray-200 bg-white group-hover:border-sky-300'}`}>
                                        {selectedUserIds.includes(u.id) ? <CheckSquare size={14} /> : null}
                                    </button>
                                </td>

                                {editingUserId === u.id ? (
                                    <>
                                        <td className="p-4" colSpan="2">
                                            <div className="flex gap-2">
                                                <input className="border-2 border-sky-100 rounded-none px-4 py-2 w-full text-sm focus:border-sky-500 outline-none transition-all shadow-sm" value={editFormData.name} onChange={e => setEditFormData({ ...editFormData, name: e.target.value })} autoFocus />
                                                <input className="border-2 border-sky-100 rounded-none px-4 py-2 w-full text-sm focus:border-sky-500 outline-none transition-all shadow-sm" value={editFormData.email} onChange={e => setEditFormData({ ...editFormData, email: e.target.value })} />
                                            </div>
                                        </td>
                                        <td className="p-4 text-right flex justify-end gap-2">
                                            <button onClick={handleSaveUser} className="p-2 bg-emerald-500 text-white rounded-none hover:bg-emerald-600 shadow-lg shadow-emerald-100 active:scale-95 transition-all"><CheckCircle size={16} strokeWidth={2.5} /></button>
                                            <button onClick={() => setEditingUserId(null)} className="p-2 bg-gray-100 text-gray-400 rounded-none hover:bg-gray-200 active:scale-95 transition-all"><X size={16} strokeWidth={2.5} /></button>
                                        </td>
                                    </>
                                ) : (
                                    <>
                                        <td className="px-6 py-3">
                                            <div className="flex items-center gap-4">
                                                <div className="w-8 h-8 rounded-none bg-gradient-to-br from-sky-50 to-indigo-50 flex items-center justify-center text-sky-600 font-black border border-white shadow-sm overflow-hidden group-hover:scale-110 transition-transform">
                                                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${u.email}`} alt="avatar" />
                                                </div>
                                                <div>
                                                    <p className="font-extrabold text-gray-900 leading-none mb-1">{u.name}</p>
                                                    <p className="text-[11px] text-gray-400 font-bold uppercase tracking-tight">{u.email}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-3">
                                            <div className="flex items-center gap-2">
                                                <span className={`w-2 h-2 rounded-none ${u.status === 'Active' ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`}></span>
                                                <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{u.status || 'Verified'}</span>
                                            </div>
                                            <div className="text-[9px] text-gray-300 font-bold uppercase tracking-tighter mt-1 px-4">System Authenticated</div>
                                        </td>
                                        <td className="px-6 py-3 text-right">
                                            <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
                                                <button onClick={() => startEditingUser(u)} className="p-2.5 bg-white border border-gray-100 rounded-none hover:text-blue-600 text-gray-400 hover:shadow-md transition-all active:scale-90" title="Modify Record"><Edit2 size={16} /></button>
                                                <button onClick={() => {
                                                    if (confirm("Delete this subscriber permanently?")) {
                                                        dispatch(deleteUser(u.id));
                                                    }
                                                }} className="p-2.5 bg-white border border-gray-100 rounded-none hover:text-red-600 text-gray-400 hover:shadow-md transition-all active:scale-90" title="Remove Subscriber"><Trash2 size={16} /></button>
                                                <button onClick={() => sendCampaign([u], "Single")} disabled={sendingToId === u.id} className="p-2.5 bg-sky-600 text-white rounded-none shadow-lg shadow-sky-100 hover:bg-sky-700 transition-all active:scale-90" title="Instant Transmission">{sendingToId === u.id ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}</button>
                                            </div>
                                        </td>
                                    </>
                                )}

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* --- STATIC FOOTER SECTION --- */}
            <div className="p-3 border-t border-gray-100 shrink-0 bg-gray-50/50 flex justify-between items-center text-xs text-gray-500">
                <span className="font-medium">Page {currentPage} of {totalPages}</span>
                <div className="flex gap-2">
                    <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1} className="px-3 py-1 border border-gray-200 bg-white rounded-none disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 font-medium transition-colors">Previous</button>
                    <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages} className="px-3 py-1 border border-gray-200 bg-white rounded-none disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 font-medium transition-colors">Next</button>
                </div>
            </div>
        </div>
    );
}

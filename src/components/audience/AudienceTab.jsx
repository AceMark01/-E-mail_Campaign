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
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 flex flex-col h-auto animate-in fade-in slide-in-from-bottom-4 duration-500 overflow-hidden">
            {/* --- STATIC HEADER SECTION --- */}
            <div className="p-6 pb-5 shrink-0 border-b border-gray-100 z-20 bg-white">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                        <h2 className="text-xl font-bold flex items-center gap-3 text-gray-900 tracking-tight">
                            Target Audience
                            {selectedUserIds.length > 0 && (
                                <span className="bg-sky-100 text-sky-700 text-xs px-2.5 py-1 rounded-full animate-in fade-in zoom-in font-bold">
                                    {selectedUserIds.length} Selected
                                </span>
                            )}
                        </h2>
                    </div>
                    <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                        {switchTab && (
                            <button
                                onClick={() => switchTab('templates')}
                                className="text-sm bg-sky-600 text-white px-4 py-2 rounded-xl font-bold hover:bg-sky-700 transition-all flex items-center gap-2 shadow-md shadow-sky-200 active:scale-95 flex-1 sm:flex-none justify-center"
                            >
                                <Send size={16} /> Send Campaign
                            </button>
                        )}
                        <button onClick={() => setIsAddingUser(!isAddingUser)} className="text-sm bg-sky-50 text-sky-700 px-4 py-2 rounded-xl font-bold hover:bg-sky-100 transition-colors flex items-center gap-2"><UserPlus size={16} /> Add</button>
                        {selectedUserIds.length > 0 && <button onClick={() => setSelectedUserIds([])} className="text-sm text-red-600 bg-red-50 px-4 py-2 rounded-xl font-bold hover:bg-red-100 transition-colors">Clear</button>}
                    </div>
                </div>

                {isAddingUser && (
                    <div className="mt-5 bg-gray-50 p-5 rounded-2xl border border-gray-200 animate-in slide-in-from-top-2">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-bold text-sm text-gray-700">New Subscriber Details</h3>
                            <button onClick={() => setIsAddingUser(false)} className="text-gray-400 hover:text-gray-600 bg-white rounded-lg p-1.5 shadow-sm border border-gray-200"><X size={16} /></button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <input
                                placeholder="Full Name"
                                className="border border-gray-200 rounded-xl p-3 text-sm focus:ring-4 focus:ring-sky-50 focus:border-sky-400 outline-none bg-white transition-all"
                                value={newUserName}
                                onChange={e => setNewUserName(e.target.value)}
                            />
                            <input
                                placeholder="Email Address"
                                className="border border-gray-200 rounded-xl p-3 text-sm focus:ring-4 focus:ring-sky-50 focus:border-sky-400 outline-none bg-white transition-all"
                                value={newUserEmail}
                                onChange={e => setNewUserEmail(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <select
                                className="border border-gray-200 rounded-xl p-3 text-sm flex-1 bg-white focus:ring-4 focus:ring-sky-50 focus:border-sky-400 outline-none transition-all"
                                value={activeCategory}
                                onChange={(e) => setActiveCategory(e.target.value)}
                            >
                                {categories.filter(c => c !== "All").map(c => (
                                    <option key={c} value={c}>{c}</option>
                                ))}
                            </select>
                            <button onClick={handleAddUser} className="bg-sky-600 text-white px-8 py-3 rounded-xl text-sm font-bold hover:bg-sky-700 transition-colors shadow-md w-full sm:w-auto">
                                Save User
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* --- SCROLLABLE LIST SECTION --- */}
            <div ref={scrollRef} className="relative overflow-x-auto">
                <table className="w-full text-sm text-left border-collapse">
                    <thead className="bg-gray-50/80 text-xs font-bold text-gray-500 sticky top-0 z-10 shadow-sm border-b border-gray-200 backdrop-blur-md">
                        <tr>
                            <th className="p-4 w-12 text-center">
                                <button onClick={toggleSelectAllPage} className="w-5 h-5 rounded border border-gray-300 flex items-center justify-center hover:border-sky-500 transition-colors bg-white shadow-sm">
                                    {currentUsers.every(u => selectedUserIds.includes(u.id)) ? <CheckSquare size={16} className="text-sky-600" /> : null}
                                </button>
                            </th>
                            <th className="px-6 py-4">Subscriber Identity</th>
                            <th className="px-6 py-4">Verification Level</th>
                            <th className="px-6 py-4 text-right">Commands</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {currentUsers.map(u => (
                            <tr key={u.id} className={`transition-all group ${selectedUserIds.includes(u.id) ? 'bg-sky-50/50' : 'hover:bg-gray-50/50 cursor-default'}`}>
                                <td className="p-4 text-center">
                                    <button onClick={() => toggleSelectUser(u.id)} className={`w-5 h-5 rounded border transition-all flex items-center justify-center shadow-sm ${selectedUserIds.includes(u.id) ? 'bg-sky-600 border-sky-600 text-white scale-110' : 'border-gray-300 bg-white group-hover:border-sky-400'}`}>
                                        {selectedUserIds.includes(u.id) ? <CheckSquare size={16} /> : null}
                                    </button>
                                </td>

                                {editingUserId === u.id ? (
                                    <>
                                        <td className="p-4" colSpan="2">
                                            <div className="flex gap-3">
                                                <input className="border border-gray-300 rounded-lg px-4 py-2 w-full text-sm focus:ring-2 focus:ring-sky-100 focus:border-sky-500 outline-none transition-all" value={editFormData.name} onChange={e => setEditFormData({ ...editFormData, name: e.target.value })} autoFocus />
                                                <input className="border border-gray-300 rounded-lg px-4 py-2 w-full text-sm focus:ring-2 focus:ring-sky-100 focus:border-sky-500 outline-none transition-all" value={editFormData.email} onChange={e => setEditFormData({ ...editFormData, email: e.target.value })} />
                                            </div>
                                        </td>
                                        <td className="p-4 text-right flex justify-end gap-2">
                                            <button onClick={handleSaveUser} className="p-2.5 bg-emerald-500 text-white rounded-xl hover:bg-emerald-600 shadow-md shadow-emerald-100 active:scale-95 transition-all"><CheckCircle size={18} /></button>
                                            <button onClick={() => setEditingUserId(null)} className="p-2.5 bg-gray-100 text-gray-500 rounded-xl hover:bg-gray-200 active:scale-95 transition-all"><X size={18} /></button>
                                        </td>
                                    </>
                                ) : (
                                    <>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-50 to-indigo-50 flex items-center justify-center text-sky-600 font-black border border-sky-100 shadow-sm overflow-hidden group-hover:scale-110 transition-transform">
                                                    <img src={`https://api.dicebear.com/7.x/initials/svg?seed=${u.email}`} alt="avatar" className="w-full h-full object-cover" />
                                                </div>
                                                <div>
                                                    <p className="font-bold text-gray-900 leading-tight mb-1">{u.name}</p>
                                                    <p className="text-xs text-gray-500">{u.email}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                <span className={`w-2 h-2 rounded-full ${u.status === 'Active' ? 'bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]' : 'bg-amber-500'}`}></span>
                                                <span className="text-xs font-bold text-gray-700">{u.status || 'Verified'}</span>
                                            </div>
                                            <div className="text-xs text-gray-400 mt-1 pl-4">System Authenticated</div>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex justify-end gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all md:translate-x-4 md:group-hover:translate-x-0">
                                                <button onClick={() => startEditingUser(u)} className="p-2.5 bg-white border border-gray-200 rounded-xl hover:text-sky-600 text-gray-500 hover:shadow-md hover:border-sky-200 transition-all active:scale-95" title="Modify Record"><Edit2 size={16} /></button>
                                                <button onClick={() => {
                                                    if (confirm("Delete this subscriber permanently?")) {
                                                        dispatch(deleteUser(u.id));
                                                    }
                                                }} className="p-2.5 bg-white border border-gray-200 rounded-xl hover:text-red-600 text-gray-500 hover:shadow-md hover:border-red-200 transition-all active:scale-95" title="Remove Subscriber"><Trash2 size={16} /></button>
                                                <button onClick={() => sendCampaign([u], "Single")} disabled={sendingToId === u.id} className="p-2.5 bg-sky-600 text-white rounded-xl shadow-md shadow-sky-200 hover:bg-sky-700 transition-all active:scale-95" title="Instant Transmission">{sendingToId === u.id ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}</button>
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
            <div className="p-4 border-t border-gray-100 shrink-0 bg-gray-50/50 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600">
                <span className="font-medium">Page {currentPage} of {totalPages}</span>
                <div className="flex gap-2">
                    <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1} className="px-4 py-2 border border-gray-200 bg-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 font-bold transition-colors shadow-sm">Previous</button>
                    <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages} className="px-4 py-2 border border-gray-200 bg-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 font-bold transition-colors shadow-sm">Next</button>
                </div>
            </div>
        </div>
    );
}

import React, { useState, useEffect } from 'react';
import { Mail, Users, Send, Loader2, CheckCircle, XCircle, Code, Eye, Edit2, Trash2, Sparkles, Upload, Link as LinkIcon, Bold, Italic } from 'lucide-react';

export default function CampaignTab({
    users,
    onSendCampaign,
    sendStatus,
    setSendStatus,
    lastResultDetails,
    setSubject,
    setMessage,
    subject,
    message,
    activeTemplateData,
    setActiveTemplateData,
    setActiveTab,
    categories,
    activeCategory,
    setActiveCategory,
    selectedUserIds,
    setSelectedUserIds,
    filteredUsers,
    setCurrentPage,
    triggerImageUpload,
    handleInsertLink,
    insertTextAtCursor
}) {
    const [showPreview, setShowPreview] = useState(false);

    // Auto-switch to preview mode when a template is selected
    useEffect(() => {
        if (activeTemplateData) {
            setShowPreview(true);
        } else {
            setShowPreview(false);
        }
    }, [activeTemplateData]);

    const EditorToolbar = () => (
        <div className="flex gap-1 p-2 bg-gray-50 border-b border-gray-100 rounded-xl overflow-x-auto">
            <button onClick={triggerImageUpload} className="p-2 text-sky-600 bg-sky-50 hover:bg-sky-100 rounded-lg flex items-center gap-1 font-bold text-xs" title="Upload from Computer">
                <Upload size={14} /> Add Image
            </button>
            <div className="w-px h-6 bg-gray-300 mx-1 self-center"></div>
            <button onClick={handleInsertLink} className="p-2 text-gray-500 hover:text-sky-600 hover:bg-white rounded-lg" title="Insert Link"><LinkIcon size={16} /></button>
            <button onClick={() => insertTextAtCursor("<b>Bold Text</b>")} className="p-2 text-gray-500 hover:text-sky-600 hover:bg-white rounded-lg" title="Bold"><Bold size={16} /></button>
            <button onClick={() => insertTextAtCursor("<i>Italic Text</i>")} className="p-2 text-gray-500 hover:text-sky-600 hover:bg-white rounded-lg" title="Italic"><Italic size={16} /></button>
            <button onClick={() => insertTextAtCursor("<br/>")} className="p-2 text-gray-500 hover:text-sky-600 hover:bg-white rounded-lg text-xs font-bold" title="Line Break">BR</button>
        </div>
    );

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden h-fit sticky top-6 animate-in fade-in slide-in-from-bottom-4 duration-500 flex flex-col">
            {sendStatus === "idle" && (
                <>
                    {/* --- PROFESSIONAL HEADER --- */}
                    <div className="bg-gray-50/80 border-b border-gray-200 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <div className="bg-sky-100 p-2.5 rounded-xl text-sky-600 shadow-sm border border-sky-200">
                                <Mail size={22} />
                            </div>
                            <div>
                                <h2 className="text-lg font-bold text-gray-900 leading-tight">New Campaign</h2>
                                <p className="text-xs text-gray-500 font-medium mt-0.5">Draft your message below</p>
                            </div>
                        </div>

                        {/* Mode Toggle Pills */}
                        <div className="flex bg-gray-100/50 border border-gray-200 p-1 rounded-xl shadow-inner self-start sm:self-auto">
                            {!activeTemplateData && (
                                <button
                                    onClick={() => setShowPreview(false)}
                                    className={`flex items-center gap-2 px-4 py-2 text-sm font-bold rounded-lg transition-all ${!showPreview ? 'bg-white text-gray-900 shadow-sm border border-gray-200' : 'text-gray-500 hover:text-gray-700'}`}
                                >
                                    <Code size={16} /> Write
                                </button>
                            )}
                            <button
                                onClick={() => setShowPreview(true)}
                                className={`flex items-center gap-2 px-4 py-2 text-sm font-bold rounded-lg transition-all ${showPreview || activeTemplateData ? 'bg-white text-gray-900 shadow-sm border border-gray-200' : 'text-gray-500 hover:text-gray-700'}`}
                            >
                                <Eye size={16} /> {activeTemplateData ? "Template Preview" : "Preview"}
                            </button>
                        </div>
                    </div>

                    <div className="p-2">
                        {/* Subject Line Input */}
                        <div className="relative group px-4 py-3">
                            <span className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 font-medium text-sm pointer-events-none group-focus-within:text-sky-500 transition-colors">Subject:</span>
                            <input
                                className="w-full pl-20 pr-4 py-3 bg-transparent border-b-2 border-gray-100 focus:border-sky-400 transition-colors outline-none text-gray-900 font-bold placeholder-gray-300 text-lg"
                                placeholder="Enter a catchy title..."
                                value={subject}
                                onChange={e => setSubject(e.target.value)}
                            />
                        </div>

                        {/* Editor Area */}
                        <div className="relative min-h-[150px] flex flex-col mt-2">
                            {!showPreview ? (
                                <>
                                    {/* Toolbar (Features on Top) */}
                                    <div className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b border-gray-100 px-4 py-3 flex items-center gap-2 overflow-x-auto no-scrollbar">
                                        <button onClick={() => insertTextAtCursor("<b>Bold</b>")} className="p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-800 rounded-lg transition-colors" title="Bold"><Bold size={16} /></button>
                                        <button onClick={() => insertTextAtCursor("<i>Italic</i>")} className="p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-800 rounded-lg transition-colors" title="Italic"><Italic size={16} /></button>
                                        <div className="w-px h-5 bg-gray-200 mx-2"></div>
                                        <button onClick={handleInsertLink} className="p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-800 rounded-lg transition-colors" title="Link"><LinkIcon size={16} /></button>
                                        <button onClick={triggerImageUpload} className="p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-800 rounded-lg transition-colors" title="Image"><Upload size={16} /></button>
                                        <div className="w-px h-5 bg-gray-200 mx-2"></div>
                                        <button onClick={() => insertTextAtCursor("<br/>")} className="px-3 py-1.5 text-xs font-bold text-gray-500 hover:text-gray-800 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors shadow-sm">BR</button>
                                    </div>

                                    <textarea
                                        className="flex-1 w-full p-6 focus:outline-none text-sm font-mono text-gray-700 leading-relaxed resize-none bg-white min-h-[200px]"
                                        placeholder="Start typing your email content here..."
                                        value={message}
                                        onChange={e => setMessage(e.target.value)}
                                    />
                                </>
                            ) : (
                                <div className="flex-1 w-full p-6 bg-white prose prose-sm max-w-none overflow-y-auto" dangerouslySetInnerHTML={{ __html: message || "<div class='text-center text-gray-300 italic mt-10'>Preview content will appear here...</div>" }} />
                            )}
                        </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="bg-gray-50 p-5 border-t border-gray-200">
                        {selectedUserIds.length > 0 ? (
                            <button onClick={() => { const targets = users.filter(u => selectedUserIds.includes(u.id)); onSendCampaign(targets, "Selected Bulk"); }} className="w-full py-4 bg-sky-600 text-white rounded-xl font-bold flex justify-center items-center gap-2 hover:bg-sky-700 transition-all shadow-md active:scale-[0.99]"><Send size={18} /> Send to ({selectedUserIds.length}) Recipients</button>
                        ) : (
                            <button onClick={() => onSendCampaign(filteredUsers, `Category: ${activeCategory}`)} className="w-full py-4 bg-gray-900 text-white rounded-xl font-bold flex justify-center items-center gap-2 hover:bg-black transition-all shadow-md active:scale-[0.99]"><Users size={18} /> Broadcast to All "{activeCategory}"</button>
                        )}
                    </div>
                </>
            )}
            {sendStatus === "sending" && <div className="text-center py-24"><Loader2 className="w-14 h-14 text-sky-600 animate-spin mx-auto mb-6" /><p className="font-bold text-lg text-gray-800">Connecting to Bridge Server...</p></div>}
            {sendStatus === "success" && <div className="text-center py-16"><CheckCircle className="w-20 h-20 text-emerald-500 mx-auto mb-6" /><h3 className="font-bold text-2xl text-gray-900 mb-2">Done!</h3><p className="text-gray-500 mb-8 font-medium">{lastResultDetails}</p><button onClick={() => { setSubject(""); setMessage(""); setSendStatus("idle"); setActiveTab('campaigns'); }} className="bg-gray-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-black transition-colors shadow-md">Back to Campaigns</button></div>}
            {sendStatus === "error" && <div className="text-center py-16"><XCircle className="w-20 h-20 text-red-500 mx-auto mb-6" /><h3 className="font-bold text-2xl text-gray-900 mb-2">Failed</h3><p className="text-red-500 mb-8 font-medium">{lastResultDetails}</p><button onClick={() => { setSubject(""); setSendStatus("idle"); }} className="bg-white border border-gray-300 text-gray-700 px-8 py-3 rounded-xl font-bold hover:bg-gray-50 transition-colors shadow-sm">Try Again</button></div>}
        </div>
    )
}

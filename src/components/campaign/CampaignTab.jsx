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
        <div className="flex gap-1 p-2 bg-gray-50 border-b border-gray-100 rounded-none overflow-x-auto">
            <button onClick={triggerImageUpload} className="p-2 text-sky-600 bg-sky-50 hover:bg-sky-100 rounded flex items-center gap-1 font-bold text-xs" title="Upload from Computer">
                <Upload size={14} /> Add Image
            </button>
            <div className="w-px h-6 bg-gray-300 mx-1 self-center"></div>
            <button onClick={handleInsertLink} className="p-2 text-gray-500 hover:text-sky-600 hover:bg-white rounded" title="Insert Link"><LinkIcon size={16} /></button>
            <button onClick={() => insertTextAtCursor("<b>Bold Text</b>")} className="p-2 text-gray-500 hover:text-sky-600 hover:bg-white rounded" title="Bold"><Bold size={16} /></button>
            <button onClick={() => insertTextAtCursor("<i>Italic Text</i>")} className="p-2 text-gray-500 hover:text-sky-600 hover:bg-white rounded" title="Italic"><Italic size={16} /></button>
            <button onClick={() => insertTextAtCursor("<br/>")} className="p-2 text-gray-500 hover:text-sky-600 hover:bg-white rounded text-xs font-bold" title="Line Break">BR</button>
        </div>
    );

    return (
        <div className="bg-white rounded-none shadow-xl border border-gray-100 overflow-hidden h-fit sticky top-6 animate-in fade-in slide-in-from-bottom-4 duration-500 flex flex-col">
            {sendStatus === "idle" && (
                <>
                    {/* --- PROFESSIONAL HEADER --- */}
                    <div className="bg-gray-50/50 border-b border-gray-100 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <div className="bg-sky-100 p-2 rounded-none text-sky-600">
                                <Mail size={20} />
                            </div>
                            <div>
                                <h2 className="font-bold text-gray-900 leading-tight">New Campaign</h2>
                                <p className="text-xs text-gray-400 font-medium">Draft your message below</p>
                            </div>
                        </div>

                        {/* Mode Toggle Pills */}
                        <div className="flex bg-white border border-gray-200 p-1 rounded-none shadow-sm self-start sm:self-auto">
                            {!activeTemplateData && (
                                <button
                                    onClick={() => setShowPreview(false)}
                                    className={`flex items-center gap-2 px-4 py-1.5 text-xs font-bold rounded-none transition-all ${!showPreview ? 'bg-sky-50 text-sky-700 ring-1 ring-sky-200 shadow-sm' : 'text-gray-500 hover:bg-gray-50'}`}
                                >
                                    <Code size={14} /> Write
                                </button>
                            )}
                            <button
                                onClick={() => setShowPreview(true)}
                                className={`flex items-center gap-2 px-4 py-1.5 text-xs font-bold rounded-none transition-all ${showPreview || activeTemplateData ? 'bg-sky-50 text-sky-700 ring-1 ring-sky-200 shadow-sm' : 'text-gray-500 hover:bg-gray-50'}`}
                            >
                                <Eye size={14} /> {activeTemplateData ? "Template Preview" : "Preview"}
                            </button>
                        </div>
                    </div>

                    <div className="p-1">
                        {/* Subject Line Input */}
                        <div className="relative group px-4 py-2">
                            <span className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 font-medium text-sm pointer-events-none group-focus-within:text-sky-500 transition-colors">Subject:</span>
                            <input
                                className="w-full pl-20 pr-4 py-3 bg-transparent border-b border-gray-100 focus:border-sky-500 transition-colors outline-none text-gray-900 font-medium placeholder-gray-300"
                                placeholder="Enter a catchy title..."
                                value={subject}
                                onChange={e => setSubject(e.target.value)}
                            />
                        </div>


                        {/* Editor Area */}
                        <div className="relative min-h-[150px] flex flex-col">
                            {!showPreview ? (
                                <>
                                    {/* Toolbar (Features on Top) */}
                                    <div className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b border-gray-100 px-3 py-2 flex items-center gap-1 overflow-x-auto no-scrollbar">
                                        <button onClick={() => insertTextAtCursor("<b>Bold</b>")} className="p-1.5 text-gray-500 hover:bg-gray-100 rounded-none transition-colors" title="Bold"><Bold size={14} /></button>
                                        <button onClick={() => insertTextAtCursor("<i>Italic</i>")} className="p-1.5 text-gray-500 hover:bg-gray-100 rounded-none transition-colors" title="Italic"><Italic size={14} /></button>
                                        <div className="w-px h-4 bg-gray-200 mx-1"></div>
                                        <button onClick={handleInsertLink} className="p-1.5 text-gray-500 hover:bg-gray-100 rounded-none transition-colors" title="Link"><LinkIcon size={14} /></button>
                                        <button onClick={triggerImageUpload} className="p-1.5 text-gray-500 hover:bg-gray-100 rounded-none transition-colors" title="Image"><Upload size={14} /></button>
                                        <div className="w-px h-4 bg-gray-200 mx-1"></div>
                                        <button onClick={() => insertTextAtCursor("<br/>")} className="px-1.5 py-0.5 text-[10px] font-bold text-gray-400 hover:text-gray-600 border border-gray-200 rounded-none hover:bg-gray-50 transition-colors">BR</button>
                                    </div>

                                    <textarea
                                        className="flex-1 w-full p-4 focus:outline-none text-sm font-mono text-gray-700 leading-relaxed resize-none bg-white min-h-[150px]"
                                        placeholder="Start typing your email content here..."
                                        value={message}
                                        onChange={e => setMessage(e.target.value)}
                                    />
                                </>
                            ) : (
                                <div className="flex-1 w-full p-4 bg-white prose prose-sm max-w-none overflow-y-auto" dangerouslySetInnerHTML={{ __html: message || "<div class='text-center text-gray-300 italic mt-10'>Preview content will appear here...</div>" }} />
                            )}
                        </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="bg-gray-50 p-4 border-t border-gray-100">
                        {selectedUserIds.length > 0 ? (
                            <button onClick={() => { const targets = users.filter(u => selectedUserIds.includes(u.id)); onSendCampaign(targets, "Selected Bulk"); }} className="w-full py-3.5 bg-sky-600 text-white rounded-none font-bold flex justify-center items-center gap-2 hover:bg-sky-700 transition-all shadow-lg shadow-sky-200 active:scale-[0.99]"><Send size={18} /> Send to ({selectedUserIds.length}) Recipients</button>
                        ) : (
                            <button onClick={() => onSendCampaign(filteredUsers, `Category: ${activeCategory}`)} className="w-full py-3.5 bg-slate-900 text-white rounded-none font-bold flex justify-center items-center gap-2 hover:bg-black transition-all shadow-lg active:scale-[0.99]"><Users size={18} /> Broadcast to All "{activeCategory}"</button>
                        )}
                    </div>
                </>
            )}
            {sendStatus === "sending" && <div className="text-center py-20"><Loader2 className="w-12 h-12 text-sky-600 animate-spin mx-auto mb-4" /><p className="font-bold">Connecting to Bridge Server...</p></div>}
            {sendStatus === "success" && <div className="text-center py-10"><CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" /><h3 className="font-bold text-xl">Done!</h3><p className="text-sm text-gray-500 mb-4">{lastResultDetails}</p><button onClick={() => { setSubject(""); setMessage(""); setSendStatus("idle"); setActiveTab('campaigns'); }} className="bg-gray-900 text-white px-6 py-2 rounded-none font-bold">Back to Campaigns</button></div>}
            {sendStatus === "error" && <div className="text-center py-10"><XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" /><h3 className="font-bold text-xl">Failed</h3><p className="text-sm text-red-500 mb-4">{lastResultDetails}</p><button onClick={() => { setSubject(""); setSendStatus("idle"); }} className="border px-6 py-2 rounded-none font-bold">Try Again</button></div>}
        </div>
    )
}

import React, { createContext, useContext, useState, useCallback } from 'react';
import { AlertTriangle, CheckCircle, Info, X, Loader2 } from 'lucide-react';

const PopupContext = createContext();

export const usePopup = () => {
    const context = useContext(PopupContext);
    if (!context) {
        throw new Error('usePopup must be used within a PopupProvider');
    }
    return context;
};

export const PopupProvider = ({ children }) => {
    const [popup, setPopup] = useState({
        isOpen: false,
        title: '',
        message: '',
        type: 'info', // 'success', 'error', 'info', 'loading', 'confirm'
        onConfirm: null,
        autoClose: true
    });

    const show = useCallback((message, type = 'info', title = '', onConfirm = null, autoClose = true) => {
        // Auto-generate title if missing
        let defaultTitle = 'Notification';
        if (type === 'error') defaultTitle = 'Error';
        if (type === 'success') defaultTitle = 'Success';
        if (type === 'confirm') defaultTitle = 'Confirm Action';

        setPopup({
            isOpen: true,
            message,
            type,
            title: title || defaultTitle,
            onConfirm,
            autoClose
        });
    }, []);

    const success = useCallback((message, title = 'Success') => show(message, 'success', title), [show]);
    const error = useCallback((message, title = 'Error') => show(message, 'error', title), [show]);
    const info = useCallback((message, title = 'Info') => show(message, 'info', title), [show]);
    const loading = useCallback((message, title = 'Please wait') => show(message, 'loading', title), [show]);

    // Confirm helper
    const confirm = useCallback((message, onConfirm, title = 'Are you sure?', options = {}) => {
        const autoClose = options.autoClose !== undefined ? options.autoClose : true;
        show(message, 'confirm', title, onConfirm, autoClose);
    }, [show]);

    const close = useCallback(() => {
        setPopup(prev => ({ ...prev, isOpen: false }));
    }, []);

    return (
        <PopupContext.Provider value={{ show, success, error, info, loading, confirm, close }}>
            {children}
            {popup.isOpen && (
                <CustomPopup
                    title={popup.title}
                    message={popup.message}
                    type={popup.type}
                    onClose={close}
                    onConfirm={popup.onConfirm}
                    autoClose={popup.autoClose}
                />
            )}
        </PopupContext.Provider>
    );
};

// Internal Component for the actual UI
const CustomPopup = ({ title, message, type, onClose, onConfirm, onCancel, autoClose = true }) => {
    const getStyles = () => {
        switch (type) {
            case 'error': return {
                bgIcon: 'bg-red-50', textIcon: 'text-red-500',
                borderColor: 'border-red-100', // for smart tip
                stripColor: 'bg-red-500',
                icon: <AlertTriangle size={32} />
            };
            case 'success': return {
                bgIcon: 'bg-green-50', textIcon: 'text-green-500',
                borderColor: 'border-green-100',
                stripColor: 'bg-green-500',
                icon: <CheckCircle size={32} />
            };
            case 'loading': return {
                bgIcon: 'bg-violet-50', textIcon: 'text-violet-500',
                borderColor: 'border-violet-100',
                stripColor: 'bg-violet-500 animate-pulse', // Pulse effect for loading
                icon: <Loader2 size={32} className="animate-spin" /> // Spin animation
            };
            case 'confirm': return {
                bgIcon: 'bg-amber-50', textIcon: 'text-amber-500',
                borderColor: 'border-amber-100',
                stripColor: 'bg-amber-500',
                icon: <Info size={32} />
            };
            default: return {
                bgIcon: 'bg-blue-50', textIcon: 'text-blue-500',
                borderColor: 'border-blue-100',
                stripColor: 'bg-blue-500',
                icon: <Info size={32} />
            };
        }
    };

    const styles = getStyles();

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-300 relative">

                {/* Header Decoration */}
                <div className={`h-2 w-full ${styles.stripColor}`}></div>

                {type !== 'loading' && (
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <X size={20} />
                    </button>
                )}

                <div className="p-6">
                    <div className="flex items-start gap-4">
                        <div className={`${styles.bgIcon} p-3 rounded-full ${styles.textIcon} shrink-0`}>
                            {styles.icon}
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
                            <div className="text-gray-600 mt-2 text-sm leading-relaxed whitespace-pre-line">
                                {message}
                            </div>

                            {/* Smart Tip for specific Error 535 */}
                            {type === 'error' && (message.includes("535") || message.includes("Username and Password")) && (
                                <div className="mt-4 bg-blue-50 text-blue-800 text-xs p-3 rounded-lg border border-blue-100 flex gap-2 items-start">
                                    <span className="text-xl">💡</span>
                                    <div>
                                        <strong>Possible Fix:</strong>
                                        <p className="mt-1">Google rejected your password. You likely need to use an <u>App Password</u> instead of your login password. Check your <code>.env</code> file.</p>
                                    </div>
                                </div>
                            )}
                            {type === 'error' && message.includes(".env") && (
                                <div className="mt-4 bg-amber-50 text-amber-800 text-xs p-3 rounded-lg border border-amber-100 flex gap-2 items-start">
                                    <span className="text-xl">⚠️</span>
                                    <div>
                                        <strong>Config Missing:</strong>
                                        <p className="mt-1">Please update the <code>.env</code> file with your real credentials and restart the server.</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="mt-8 flex justify-end gap-3">
                        {type === 'confirm' ? (
                            <>
                                <button
                                    onClick={() => { onCancel && onCancel(); onClose(); }}
                                    className="px-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-bold rounded-xl transition-all"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={() => {
                                        if (onConfirm) onConfirm();
                                        if (autoClose) onClose();
                                    }}
                                    className="px-6 py-2.5 bg-gray-900 hover:bg-black text-white text-sm font-bold rounded-xl transition-all hover:scale-105 active:scale-95 shadow-lg"
                                >
                                    Confirm
                                </button>
                            </>
                        ) : type !== 'loading' && (
                            <button
                                onClick={onClose}
                                className="px-6 py-2.5 bg-gray-900 hover:bg-black text-white text-sm font-bold rounded-xl transition-all hover:scale-105 active:scale-95 shadow-lg"
                            >
                                Dismiss
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

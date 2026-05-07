import React, { useState } from 'react';
import { Bold, Italic, AlignLeft, AlignCenter, AlignRight, Type, Image as ImageIcon, Minus } from 'lucide-react';

const FONTS = ["sans-serif", "Roboto", "Open Sans", "Lato", "Montserrat", "Playfair Display"];
const SIZES = [12, 14, 16, 18, 20, 24, 30, 36, 48, 60];

export const BlockToolbar = ({ block, onUpdate, type }) => {
    // Helper to generic update
    const set = (field, value) => {
        onUpdate(field, value);
    };

    if (type === 'divider' || type === 'spacer') return null;

    return (
        <div
            className="absolute -top-12 left-0 z-50 flex items-center gap-1 p-1 bg-slate-900 text-white rounded-none shadow-xl border border-slate-700 animate-in fade-in slide-in-from-bottom-2"
            onClick={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()} // Prevent drag start
        >
            {/* ALIGNMENT (Common to Text, Heading, Button, Image) */}
            <div className="flex bg-slate-800 rounded-none p-0.5">
                <button onClick={() => set('align', 'left')} className={`p-1.5 rounded-none hover:bg-slate-700 ${block.align === 'left' ? 'bg-slate-700 text-blue-400' : ''}`}><AlignLeft size={14} /></button>
                <button onClick={() => set('align', 'center')} className={`p-1.5 rounded-none hover:bg-slate-700 ${block.align === 'center' || !block.align ? 'bg-slate-700 text-blue-400' : ''}`}><AlignCenter size={14} /></button>
                <button onClick={() => set('align', 'right')} className={`p-1.5 rounded-none hover:bg-slate-700 ${block.align === 'right' ? 'bg-slate-700 text-blue-400' : ''}`}><AlignRight size={14} /></button>
            </div>

            {/* TEXT CONTROLS (Text, Heading, Button, Hero) */}
            {(type === 'text' || type === 'heading' || type === 'button' || type === 'hero') && (
                <>
                    <div className="w-px h-4 bg-slate-700 mx-1"></div>

                    {/* BOLD / ITALIC */}
                    <div className="flex bg-slate-800 rounded-none p-0.5">
                        <button onClick={() => set('fontWeight', block.fontWeight === 'bold' ? 'normal' : 'bold')} className={`p-1.5 rounded-none hover:bg-slate-700 ${block.fontWeight === 'bold' ? 'bg-slate-700 text-blue-400' : ''}`}><Bold size={14} /></button>
                        <button onClick={() => set('fontStyle', block.fontStyle === 'italic' ? 'normal' : 'italic')} className={`p-1.5 rounded-none hover:bg-slate-700 ${block.fontStyle === 'italic' ? 'bg-slate-700 text-blue-400' : ''}`}><Italic size={14} /></button>
                    </div>

                    <div className="w-px h-4 bg-slate-700 mx-1"></div>

                    {/* FONT FAMILY */}
                    <select
                        value={block.fontFamily || "sans-serif"}
                        onChange={(e) => set('fontFamily', e.target.value)}
                        className="bg-slate-800 text-xs border-none rounded-none px-2 py-1.5 focus:ring-1 focus:ring-blue-500 outline-none max-w-[80px]"
                    >
                        {FONTS.map(f => <option key={f} value={f}>{f}</option>)}
                    </select>

                    {/* FONT SIZE */}
                    <select
                        value={parseInt(block.fontSize) || (type === 'heading' ? 24 : 16)}
                        onChange={(e) => set('fontSize', `${e.target.value}px`)}
                        className="bg-slate-800 text-xs border-none rounded-none px-2 py-1.5 focus:ring-1 focus:ring-blue-500 outline-none w-14"
                    >
                        {SIZES.map(s => <option key={s} value={s}>{s}px</option>)}
                    </select>

                    {/* COLOR INPUT */}
                    <div className="relative w-6 h-6 ml-1 overflow-hidden rounded-none bg-slate-800 border border-slate-600">
                        <input
                            type="color"
                            value={block.color || (type === 'button' ? '#4f46e5' : '#334155')}
                            onChange={(e) => set('color', e.target.value)}
                            className="absolute -top-2 -left-2 w-10 h-10 cursor-pointer p-0 border-0"
                        />
                    </div>
                </>
            )}

            {/* IMAGE CONTROLS */}
            {type === 'image' && (
                <>
                    <div className="w-px h-4 bg-slate-700 mx-1"></div>
                    <span className="text-[10px] font-bold text-slate-400 px-1">SIZE</span>
                    <input
                        type="range"
                        min="20" max="100"
                        value={parseInt(block.width) || 100}
                        onChange={(e) => set('width', `${e.target.value}%`)}
                        className="w-20 h-1 bg-slate-700 rounded-none appearance-none cursor-pointer"
                    />
                </>
            )}
        </div>
    );
};

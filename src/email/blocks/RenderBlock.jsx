import React from "react";

// Shared styles for email compatibility
const textStyle = {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#334155",
    margin: "0",
    lineHeight: "1.6",
};

import { BlockToolbar } from "./BlockToolbar";

export const RenderBlock = ({ block, index, onUpdate, onImageClick, uneditable }) => {
    // We need a local state to track if we are hovering to show toolbar? 
    // Or just rely on the parent wrapper's hover? 
    // Actually, SortableBlockWrapper handles the drag handle. 
    // We can show the toolbar if the block is "focused" or just always when hovering the wrapper?
    // Let's rely on CSS group-hover from the wrapper if possible, or just render it.
    // For now, let's render it but hide it via CSS group-hover in the parent? 
    // No, simpler: just render it. The user clicks to edit.

    // Better UX: Show toolbar only when *focused* or *hovered*.
    // Since we don't track focus easily across all inputs, let's use a ref or local state for hover.
    const [isHovered, setIsHovered] = React.useState(false);

    const handleChange = (field, value) => {
        if (onUpdate) onUpdate(index, field, value);
    };

    // Construct dynamic styles
    const getStyles = (defaults = {}) => ({
        ...textStyle,
        ...defaults,
        fontSize: block.fontSize || defaults.fontSize,
        fontWeight: block.fontWeight || defaults.fontWeight,
        fontStyle: block.fontStyle || defaults.fontStyle,
        fontFamily: block.fontFamily || (defaults.fontFamily || "'Segoe UI', sans-serif"),
        color: block.color || defaults.color,
        textAlign: block.align || defaults.textAlign,
    });


    switch (block.type) {

        case "text":
            return (
                <div
                    style={{ padding: "10px 0", textAlign: block.align || 'left' }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="relative group"
                >
                    {!uneditable && isHovered && <BlockToolbar block={block} onUpdate={handleChange} type="text" />}
                    {uneditable ? (
                        <p style={getStyles({ fontSize: "16px" })}>{block.content}</p>
                    ) : (
                        <textarea
                            value={block.content}
                            onChange={(e) => handleChange("content", e.target.value)}
                            className="w-full bg-transparent border-none focus:ring-2 focus:ring-violet-500 rounded p-2 text-slate-700 resize-none overflow-hidden"
                            style={getStyles({ fontSize: "16px", minHeight: "60px" })}
                            placeholder="Type your text here..."
                        />
                    )}
                </div>
            );


        case "heading":
            return (
                <div
                    style={{ padding: "15px 0 5px", textAlign: block.align || 'left' }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="relative"
                >
                    {!uneditable && isHovered && <BlockToolbar block={block} onUpdate={handleChange} type="heading" />}
                    {uneditable ? (
                        <h2 style={getStyles({ fontSize: "24px", fontWeight: "bold", color: "#1e293b" })}>{block.content}</h2>
                    ) : (
                        <input
                            value={block.content}
                            onChange={(e) => handleChange("content", e.target.value)}
                            className="w-full bg-transparent border-none focus:ring-2 focus:ring-violet-500 rounded p-1 font-bold text-slate-900 hover:bg-slate-50"
                            style={getStyles({ fontSize: "24px", fontWeight: "bold", color: "#1e293b" })}
                            placeholder="Heading..."
                        />
                    )}
                </div>
            );


        case "image":
            return (
                <div
                    style={{ padding: "10px 0", textAlign: block.align || 'center' }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="relative"
                >
                    {!uneditable && isHovered && <BlockToolbar block={block} onUpdate={handleChange} type="image" />}
                    <img
                        src={block.src || "https://via.placeholder.com/600x200?text=Upload+Image"}
                        alt="Block"
                        style={{
                            width: block.width || "100%",
                            maxWidth: "100%",
                            borderRadius: "8px",
                            display: "inline-block", // allows text-align to work on parent
                            objectFit: "cover",
                            cursor: uneditable ? "default" : "pointer"
                        }}
                        onClick={() => !uneditable && onImageClick && onImageClick(index)}
                    />
                    {!uneditable && !block.src && (
                        <div className="text-center text-xs text-slate-400 mt-1">Click to upload image</div>
                    )}
                </div>
            );


        case "button":
            return (
                <div
                    style={{ padding: "15px 0", textAlign: block.align || "center" }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="relative"
                >
                    {!uneditable && isHovered && <BlockToolbar block={block} onUpdate={handleChange} type="button" />}
                    <div style={{ display: 'inline-block' }}>
                        {uneditable ? (
                            <a
                                href={block.url || "#"}
                                style={{
                                    display: "inline-block",
                                    backgroundColor: block.color || "#4f46e5",
                                    color: "#ffffff",
                                    padding: "12px 24px",
                                    borderRadius: "6px",
                                    textDecoration: "none",
                                    fontWeight: block.fontWeight || "bold",
                                    fontStyle: block.fontStyle,
                                    fontFamily: block.fontFamily,
                                    fontSize: block.fontSize || "16px",
                                }}
                            >
                                {block.text}
                            </a>
                        ) : (
                            <div className="flex flex-col gap-2 items-center">
                                <input
                                    value={block.text}
                                    onChange={(e) => handleChange("text", e.target.value)}
                                    className="text-white text-center px-6 py-3 rounded-md w-auto inline-block border-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    style={{
                                        width: "auto",
                                        backgroundColor: block.color || "#4f46e5",
                                        fontWeight: block.fontWeight || "bold",
                                        fontStyle: block.fontStyle,
                                        fontSize: block.fontSize || "16px",
                                        fontFamily: block.fontFamily,
                                    }}
                                />
                                <input
                                    value={block.url || ""}
                                    onChange={(e) => handleChange("url", e.target.value)}
                                    placeholder="https://"
                                    className="text-xs border border-slate-200 rounded px-2 py-1 w-48 text-center"
                                />
                            </div>
                        )}
                    </div>
                </div>
            );


        case "hero":
            return (
                <div
                    className="relative overflow-hidden bg-slate-50 py-12 px-6 rounded-3xl mb-6 group"
                    style={{ textAlign: block.align || 'center' }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {!uneditable && isHovered && <BlockToolbar block={block} onUpdate={handleChange} type="hero" />}

                    {/* Gradients */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-purple-200/40 rounded-full blur-3xl pointer-events-none"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-200/40 rounded-full blur-3xl pointer-events-none"></div>

                    <div className="relative z-10 flex flex-col items-center">
                        {/* Badge */}
                        <div className="bg-white/60 backdrop-blur-sm border border-white/50 px-4 py-1.5 rounded-full mb-6 inline-block">
                            {uneditable ? (
                                <span className="text-xs font-bold text-indigo-600 tracking-wide uppercase">{block.badge || "New"}</span>
                            ) : (
                                <input
                                    value={block.badge}
                                    onChange={(e) => handleChange("badge", e.target.value)}
                                    className="bg-transparent text-center text-xs font-bold text-indigo-600 tracking-wide uppercase border-none focus:ring-0 w-24"
                                    placeholder="BADGE"
                                />
                            )}
                        </div>

                        {/* Title */}
                        {uneditable ? (
                            <h1
                                className="text-4xl font-extrabold text-slate-900 mb-4 leading-tight tracking-tight"
                                style={{
                                    fontFamily: block.fontFamily,
                                    fontSize: block.fontSize || '36px',
                                    fontWeight: block.fontWeight,
                                    fontStyle: block.fontStyle,
                                    color: block.color
                                }}
                            >{block.title}</h1>
                        ) : (
                            <textarea
                                value={block.title}
                                onChange={(e) => handleChange("title", e.target.value)}
                                className="w-full bg-transparent text-center text-4xl font-extrabold text-slate-900 mb-4 leading-tight tracking-tight border-none focus:ring-0 resize-none hover:bg-slate-50/50 rounded"
                                style={{
                                    fontFamily: block.fontFamily,
                                    fontSize: block.fontSize || '36px',
                                    fontWeight: block.fontWeight,
                                    fontStyle: block.fontStyle,
                                    color: block.color || '#0f172a'
                                }}
                                placeholder="Main Headline"
                                rows={2}
                            />
                        )}

                        {/* Content */}
                        {uneditable ? (
                            <p className="text-slate-600 text-lg mb-0 max-w-md leading-relaxed mx-auto">{block.content}</p>
                        ) : (
                            <textarea
                                value={block.content}
                                onChange={(e) => handleChange("content", e.target.value)}
                                className="w-full bg-transparent text-center text-slate-600 text-lg mb-0 max-w-md leading-relaxed mx-auto border-none focus:ring-0 resize-none hover:bg-slate-50/50 rounded"
                                placeholder="Subtext goes here..."
                                rows={3}
                            />
                        )}
                    </div>
                </div>
            );


        case "spacer":
            return <div style={{ height: "30px" }}></div>;

        case "divider":
            return <hr style={{ border: "0", borderTop: "1px solid #e2e8f0", margin: "20px 0" }} />;

        default:
            return null;
    }
};

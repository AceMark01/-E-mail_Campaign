import React from "react";

export const EditableText = ({ field, value, placeholder, className, isHeader, uneditable, onUpdate, style: incomingStyle }) => {
    const Tag = isHeader ? "h1" : "p";
    const baseStyle = {
        margin: 0, // Reset default margins for emails
        ...incomingStyle
    };

    return (
        <Tag
            contentEditable={!uneditable}
            suppressContentEditableWarning
            onBlur={(e) => onUpdate?.(field, e.target.innerText)}
            style={baseStyle}
            className={`outline-none border border-transparent rounded-none px-2 transition-all duration-200 decoration-clone cursor-text ${className}`}
        >
            {value || placeholder || (isHeader ? "Enter Title" : "Enter text")}
        </Tag>
    );
};

export const EditableImg = ({ field, src, label, className, uneditable, onImageClick, style: incomingStyle }) => {
    // Email-safe styles for the image
    const imgStyle = {
        width: "100%",
        maxWidth: "100%",
        height: "auto",
        display: "block",
        border: "none",
        outline: "none",
        textDecoration: "none",
        ...incomingStyle
    };

    if (uneditable) {
        // Render simple image for email output, wrapped in a block to ensure spacing if needed
        return (
            <img
                src={src}
                alt={label || "Image"}
                style={imgStyle}
                width="600" // beneficial for Outlook
                className={className} // Keep classes for editor preview, but styles override
            />
        );
    }

    // Editable mode can keep the complex UI
    return (
        <div
            onClick={() => onImageClick?.(field)}
            style={incomingStyle}
            className={`group relative overflow-hidden bg-gray-50 border border-gray-100 rounded-none transition-all duration-300 cursor-pointer ${className}`}
        >
            {src ? (
                <>
                    <img src={src} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt={label} style={{ width: '100%', display: 'block' }} />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <span className="text-white font-medium text-sm backdrop-blur-sm bg-white/20 px-3 py-1 rounded-none border border-white/40">Change Image</span>
                    </div>
                </>
            ) : (
                <div className="w-full h-full min-h-[160px] flex flex-col items-center justify-center text-gray-400 gap-2 p-4">
                    <div className="w-10 h-10 rounded-none bg-gray-200 flex items-center justify-center">
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    </div>
                    <span className="text-sm font-medium text-gray-500">{label || "Upload Image"}</span>
                </div>
            )}
        </div>
    );
};

export const Button = ({ text, link, href, variant = "primary", style: incomingStyle }) => {
    const isPrimary = variant === "primary";
    const targetHref = href || link || "#";

    const baseStyle = {
        display: "inline-block",
        padding: "12px 32px",
        borderRadius: "0px",
        fontWeight: "600",
        fontSize: "14px",
        lineHeight: "1.5",
        textDecoration: "none",
        textAlign: "center",
        cursor: "pointer",
        ...incomingStyle
    };

    const primaryStyle = {
        backgroundColor: "#0c659f", // Fallback
        color: "#ffffff",
        border: "none",
        ...baseStyle,
    };

    const secondaryStyle = {
        backgroundColor: "#ffffff",
        color: "#0c659f",
        border: "1px solid #e0f2fe",
        ...baseStyle,
    };

    return (
        <a
            href={targetHref}
            style={isPrimary ? primaryStyle : secondaryStyle}
        >
            {text || "Click Here"}
        </a>
    );
};

export const StandardHeader = ({ uneditable }) => (
    <table border="0" cellPadding="0" cellSpacing="0" width="100%">
        <tbody>
            <tr>
                <td align="center" style={{ padding: '20px 0' }}>
                    <a href="#" style={{ textDecoration: 'none', fontSize: '24px', fontWeight: 'bold', color: '#0c659f', fontFamily: 'sans-serif' }}>
                        Ace Mail
                    </a>
                </td>
            </tr>
        </tbody>
    </table>
);

export const StandardFooter = ({ uneditable }) => (
    <table id="ace-mail-footer" border="0" cellPadding="0" cellSpacing="0" width="100%" style={{ backgroundColor: '#0f172a', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
        <tbody>
            {/* Main Footer Content */}
            <tr>
                <td style={{ padding: '50px 30px' }}>
                    <table border="0" cellPadding="0" cellSpacing="0" width="100%" style={{ maxWidth: '600px', margin: '0 auto' }}>
                        <tbody>
                            {/* Top Section: Logo & Description + Links */}
                            <tr>
                                <td>
                                    <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                                        <tbody>
                                            <tr>
                                                {/* Left Column: Branding */}
                                                <td valign="top" width="40%" style={{ paddingRight: '20px' }}>
                                                    {/* Logo */}
                                                    <div style={{ marginBottom: '15px' }}>
                                                        <div style={{ display: 'inline-block', backgroundColor: '#0c659f', padding: '8px', borderRadius: '0px', marginBottom: '10px' }}>
                                                            <span style={{ fontSize: '20px', color: '#ffffff', fontWeight: 'bold' }}>⚡</span>
                                                        </div>
                                                        <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#ffffff', marginLeft: '8px' }}>Ace Mail</span>
                                                    </div>
                                                    <p style={{ fontSize: '13px', lineHeight: '1.6', color: '#94a3b8', margin: '0 0 20px 0' }}>
                                                        Automate. Manage. Scale.
                                                    </p>
                                                    <p style={{ fontSize: '13px', lineHeight: '1.6', color: '#94a3b8', margin: '0 0 20px 0' }}>
                                                        Transforming businesses through cutting-edge AI automation solutions. We help companies streamline operations and scale beyond limits.
                                                    </p>
                                                    {/* Contact Info */}
                                                    <div style={{ marginTop: '20px' }}>
                                                        <p style={{ margin: '0 0 8px 0', fontSize: '13px', color: '#94a3b8' }}>
                                                            <span style={{ color: '#0c659f' }}>✉</span> info@ace-mail.in
                                                        </p>
                                                        <p style={{ margin: '0 0 8px 0', fontSize: '13px', color: '#94a3b8' }}>
                                                            <span style={{ color: '#0c659f' }}>📞</span> +919993023243
                                                        </p>
                                                        <p style={{ margin: '0', fontSize: '13px', color: '#94a3b8', lineHeight: '1.5' }}>
                                                            <span style={{ color: '#0c659f' }}>📍</span> Office No. 224 Block I Sri Ram Business Park Raipur CG
                                                        </p>
                                                    </div>
                                                </td>

                                                {/* Right Columns: Links */}
                                                <td valign="top" width="60%">
                                                    <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                                                        <tbody>
                                                            <tr>
                                                                {/* Quick Links */}
                                                                <td valign="top" width="33%" style={{ paddingRight: '10px' }}>
                                                                    <h4 style={{ margin: '0 0 15px 0', fontSize: '14px', fontWeight: 'bold', color: '#ffffff' }}>Quick Links</h4>
                                                                    <p style={{ margin: '0 0 8px 0' }}><a href="#" style={{ fontSize: '13px', color: '#94a3b8', textDecoration: 'none' }}>About Us</a></p>
                                                                    <p style={{ margin: '0 0 8px 0' }}><a href="#" style={{ fontSize: '13px', color: '#94a3b8', textDecoration: 'none' }}>Services</a></p>
                                                                    <p style={{ margin: '0 0 8px 0' }}><a href="#" style={{ fontSize: '13px', color: '#94a3b8', textDecoration: 'none' }}>Portfolio</a></p>
                                                                    <p style={{ margin: '0' }}><a href="#" style={{ fontSize: '13px', color: '#94a3b8', textDecoration: 'none' }}>Contact</a></p>
                                                                </td>

                                                                {/* Services */}
                                                                <td valign="top" width="33%" style={{ paddingRight: '10px' }}>
                                                                    <h4 style={{ margin: '0 0 15px 0', fontSize: '14px', fontWeight: 'bold', color: '#ffffff' }}>Services</h4>
                                                                    <p style={{ margin: '0 0 8px 0' }}><a href="#" style={{ fontSize: '13px', color: '#94a3b8', textDecoration: 'none' }}>AI Automation</a></p>
                                                                    <p style={{ margin: '0 0 8px 0' }}><a href="#" style={{ fontSize: '13px', color: '#94a3b8', textDecoration: 'none' }}>Cloud Solutions</a></p>
                                                                    <p style={{ margin: '0 0 8px 0' }}><a href="#" style={{ fontSize: '13px', color: '#94a3b8', textDecoration: 'none' }}>Data Analytics</a></p>
                                                                    <p style={{ margin: '0' }}><a href="#" style={{ fontSize: '13px', color: '#94a3b8', textDecoration: 'none' }}>Consulting</a></p>
                                                                </td>

                                                                {/* Resources */}
                                                                <td valign="top" width="33%">
                                                                    <h4 style={{ margin: '0 0 15px 0', fontSize: '14px', fontWeight: 'bold', color: '#ffffff' }}>Resources</h4>
                                                                    <p style={{ margin: '0 0 8px 0' }}><a href="#" style={{ fontSize: '13px', color: '#94a3b8', textDecoration: 'none' }}>Blog</a></p>
                                                                    <p style={{ margin: '0 0 8px 0' }}><a href="#" style={{ fontSize: '13px', color: '#94a3b8', textDecoration: 'none' }}>Case Studies</a></p>
                                                                    <p style={{ margin: '0 0 8px 0' }}><a href="#" style={{ fontSize: '13px', color: '#94a3b8', textDecoration: 'none' }}>Documentation</a></p>
                                                                    <p style={{ margin: '0' }}><a href="#" style={{ fontSize: '13px', color: '#94a3b8', textDecoration: 'none' }}>Support</a></p>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>

                            {/* Divider */}
                            <tr>
                                <td style={{ paddingTop: '30px' }}>
                                    <div style={{ borderTop: '1px solid #1e293b', margin: '0' }}></div>
                                </td>
                            </tr>

                            {/* Bottom Section: Copyright & Social */}
                            <tr>
                                <td style={{ paddingTop: '25px' }}>
                                    <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                                        <tbody>
                                            <tr>
                                                {/* Copyright & Links */}
                                                <td valign="middle" align="left">
                                                    <p style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#64748b' }}>
                                                        © {new Date().getFullYear()} Ace Mail. All rights reserved. |
                                                        <a href="#" style={{ color: '#64748b', textDecoration: 'none', marginLeft: '5px' }}>Privacy Policy</a> |
                                                        <a href="#" style={{ color: '#64748b', textDecoration: 'none', marginLeft: '5px' }}>Terms of Service</a>
                                                    </p>
                                                </td>

                                                {/* Social Icons */}
                                                <td valign="middle" align="right">
                                                    <table border="0" cellPadding="0" cellSpacing="0">
                                                        <tbody>
                                                            <tr>
                                                                <td style={{ paddingLeft: '8px' }}>
                                                                    <a href="#" style={{ display: 'inline-block', width: '32px', height: '32px', backgroundColor: '#1e293b', borderRadius: '0px', textAlign: 'center', lineHeight: '32px', textDecoration: 'none' }}>
                                                                        <span style={{ color: '#94a3b8', fontSize: '14px' }}>𝕏</span>
                                                                    </a>
                                                                </td>
                                                                <td style={{ paddingLeft: '8px' }}>
                                                                    <a href="#" style={{ display: 'inline-block', width: '32px', height: '32px', backgroundColor: '#1e293b', borderRadius: '0px', textAlign: 'center', lineHeight: '32px', textDecoration: 'none' }}>
                                                                        <span style={{ color: '#94a3b8', fontSize: '14px' }}>f</span>
                                                                    </a>
                                                                </td>
                                                                <td style={{ paddingLeft: '8px' }}>
                                                                    <a href="#" style={{ display: 'inline-block', width: '32px', height: '32px', backgroundColor: '#1e293b', borderRadius: '0px', textAlign: 'center', lineHeight: '32px', textDecoration: 'none' }}>
                                                                        <span style={{ color: '#94a3b8', fontSize: '14px' }}>in</span>
                                                                    </a>
                                                                </td>
                                                                <td style={{ paddingLeft: '8px' }}>
                                                                    <a href="#" style={{ display: 'inline-block', width: '32px', height: '32px', backgroundColor: '#1e293b', borderRadius: '0px', textAlign: 'center', lineHeight: '32px', textDecoration: 'none' }}>
                                                                        <span style={{ color: '#94a3b8', fontSize: '14px' }}>ig</span>
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            {/* POWERED BY ROW */}
            <tr>
                <td style={{
                    padding: '8px',
                    backgroundColor: '#ffffff',
                    borderTop: '1px solid #f1f5f9',
                    textAlign: 'center'
                }}>
                    <p style={{ margin: 0, color: '#94a3b8', fontSize: '10px', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase' }}>
                        POWERED BY BOTIVATE
                    </p>
                </td>
            </tr>
        </tbody>
    </table>
);

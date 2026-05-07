import React from "react";
import { EditableText, EditableImg, Button } from "../elements/Shared";

export const FlashSale = ({ data, onUpdate, onImageClick, uneditable }) => {
    const SaasThemeText = "#ffffff";
    const SaasThemeFontFamily = "'Inter', system-ui, sans-serif";

    const saleTheme = {
        primary: "#6366f1", // Indigo
        accent: "#8b5cf6", // Violet
        background: "#0f172a", // Slate 900
        text: SaasThemeText
    };

    const containerStyle = {
        maxWidth: '500px',
        margin: '0 auto',
        backgroundColor: saleTheme.background,
        borderRadius: '0px',
        overflow: 'hidden',
        border: `1px solid ${saleTheme.primary}`,
        boxShadow: '0 25px 50px -12px rgba(99, 102, 241, 0.25)',
        fontFamily: SaasThemeFontFamily
    };

    return (
        <div style={{ width: '100%', backgroundColor: '#f8fafc', padding: '40px 0' }}>
            <center>
                <div style={containerStyle}>
                    {/* TOP URGENCY STRIP */}
                    <div style={{ backgroundColor: saleTheme.primary, padding: '10px', textAlign: 'center' }}>
                        <span style={{ color: '#ffffff', fontSize: '11px', fontWeight: '900', letterSpacing: '3px', textTransform: 'uppercase' }}>
                            Limited Time Offer • Ends Tonight
                        </span>
                    </div>

                    {/* DUAL IMAGE GRID */}
                    <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                        <tbody>
                            <tr>
                                <td width="50%" valign="top">
                                    <EditableImg
                                        field="leftBanner"
                                        src={data.leftBanner || "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&h=400&fit=crop&q=80"}
                                        label="Fashion Shot 1"
                                        onImageClick={onImageClick}
                                        uneditable={uneditable}
                                        style={{ display: 'block', width: '100%', height: 'auto' }}
                                    />
                                </td>
                                <td width="50%" valign="top">
                                    <EditableImg
                                        field="rightBanner"
                                        src={data.rightBanner || "https://images.unsplash.com/photo-1529139513070-0a8ad81d745e?w=300&h=400&fit=crop&q=80"}
                                        label="Fashion Shot 2"
                                        onImageClick={onImageClick}
                                        uneditable={uneditable}
                                        style={{ display: 'block', width: '100%', height: 'auto' }}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    {/* CONTENT SECTION */}
                    <div style={{ padding: '48px 32px', textAlign: 'center' }}>
                        <div style={{ display: 'inline-block', backgroundColor: '#ffffff', padding: '4px 16px', borderRadius: '4px', marginBottom: '24px' }}>
                            <span style={{ color: saleTheme.background, fontWeight: 'bold', fontSize: '14px' }}>FLASH SALE</span>
                        </div>

                        <div style={{ marginBottom: '16px' }}>
                            <EditableText
                                field="title"
                                value={data.title || "UP TO 70% OFF EVERYTHING"}
                                isHeader
                                onUpdate={onUpdate}
                                uneditable={uneditable}
                                style={{
                                    fontSize: '36px',
                                    fontWeight: '900',
                                    color: '#ffffff',
                                    margin: 0,
                                    lineHeight: '1.1',
                                    letterSpacing: '-1px'
                                }}
                            />
                        </div>

                        <div style={{ marginBottom: '32px' }}>
                            <EditableText
                                field="content"
                                value={data.content || "The wait is over. Grab your favorites before they disappear forever."}
                                onUpdate={onUpdate}
                                uneditable={uneditable}
                                style={{ fontSize: '16px', color: '#94a3b8', margin: 0, lineHeight: '1.6' }}
                            />
                        </div>

                        <div style={{ marginBottom: '16px' }}>
                            <Button
                                text={data.ctaText || "SHOP THE SALE"}
                                href={data.ctaLink || "#"}
                                style={{
                                    backgroundColor: '#ffffff',
                                    color: saleTheme.background,
                                    padding: '18px 48px',
                                    borderRadius: '2px',
                                    fontSize: '16px',
                                    fontWeight: '900',
                                    border: 'none',
                                    letterSpacing: '1px',
                                    display: 'inline-block'
                                }}
                            />
                        </div>
                    </div>

                    {/* BOTTOM BAR */}
                    <div style={{ borderTop: `1px solid ${saleTheme.primary}`, padding: '24px', textAlign: 'center' }}>
                        <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                            <tbody>
                                <tr>
                                    <td align="center">
                                        <span style={{ color: '#64748b', fontSize: '12px', marginRight: '15px' }}>Free Shipping</span>
                                        <span style={{ color: '#64748b', fontSize: '12px', marginRight: '15px' }}>Free Returns</span>
                                        <span style={{ color: '#64748b', fontSize: '12px' }}>Secure Payment</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </center>
        </div>
    );
};

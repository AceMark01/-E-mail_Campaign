import React from "react";
import { EditableText, EditableImg, Button } from "../elements/Shared";

export const SpringClearance = ({ data, onUpdate, onImageClick, uneditable }) => {
    const SaasThemeText = "#064e3b";
    const SaasThemeFontFamily = "'Inter', system-ui, sans-serif";

    const springTheme = {
        primary: "#10b981", // Emerald 500
        secondary: "#facc15", // Yellow 400
        accent: "#d1fae5", // Emerald 100
        background: "#f0fdf4", // Emerald 50
        text: SaasThemeText
    };

    const containerStyle = {
        maxWidth: '560px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        borderRadius: '40px',
        overflow: 'hidden',
        boxShadow: '0 25px 50px -12px rgba(16, 185, 129, 0.15)',
        fontFamily: SaasThemeFontFamily,
        border: '1px solid #d1fae5'
    };

    return (
        <div style={{ width: '100%', backgroundColor: springTheme.background, padding: '80px 0' }}>
            <center>
                <div style={containerStyle}>
                    <div style={{ backgroundColor: springTheme.primary, padding: '12px', textAlign: 'center' }}>
                        <span style={{ color: '#ffffff', fontSize: '11px', fontWeight: '900', letterSpacing: '3px' }}>
                            ✿ THE SEASON OF RENEWAL IS HERE ✿
                        </span>
                    </div>

                    <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                        <tbody>
                            <tr>
                                <td style={{ padding: '0' }}>
                                    <EditableImg
                                        field="image"
                                        src={data.image || "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1200&h=600&fit=crop&q=80"}
                                        label="Spring Renewal Visual"
                                        onImageClick={onImageClick}
                                        uneditable={uneditable}
                                        style={{ display: 'block', width: '100%', height: 'auto', border: 'none' }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ padding: '64px 48px', textAlign: 'center' }}>
                                    <div style={{ marginBottom: '16px' }}>
                                        <span style={{
                                            backgroundColor: springTheme.accent,
                                            color: springTheme.primary,
                                            fontSize: '11px',
                                            fontWeight: '900',
                                            padding: '8px 24px',
                                            borderRadius: '100px',
                                            textTransform: 'uppercase',
                                            letterSpacing: '2px'
                                        }}>
                                            Final Clearance
                                        </span>
                                    </div>
                                    <EditableText
                                        field="title"
                                        value={data.title || "SPRING AWAKENING"}
                                        isHeader
                                        onUpdate={onUpdate}
                                        uneditable={uneditable}
                                        style={{
                                            fontSize: '48px',
                                            fontWeight: '900',
                                            color: springTheme.primary,
                                            margin: '0 0 20px 0',
                                            lineHeight: '1',
                                            letterSpacing: '-0.02em'
                                        }}
                                    />
                                    <EditableText
                                        field="content"
                                        value={data.content || "Bloom into the new season with our curated spring collection. We're making room for new beginnings—enjoy significant reductions across all categories."}
                                        onUpdate={onUpdate}
                                        uneditable={uneditable}
                                        style={{ fontSize: '18px', color: SaasThemeText, margin: '0 0 40px 0', lineHeight: '1.6' }}
                                    />

                                    <Button
                                        text={data.ctaText || "Explore the Bloom"}
                                        href={data.ctaLink || "#"}
                                        style={{
                                            backgroundColor: springTheme.primary,
                                            color: '#ffffff',
                                            padding: '20px 48px',
                                            borderRadius: '24px',
                                            fontSize: '16px',
                                            fontWeight: 'bold',
                                            border: 'none',
                                            width: '100%',
                                            boxShadow: '0 10px 15px -3px rgba(16, 185, 129, 0.3)',
                                            display: 'inline-block'
                                        }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td align="center" style={{ padding: '0 48px 48px 48px' }}>
                                    <div style={{
                                        padding: '24px',
                                        backgroundColor: springTheme.secondary,
                                        borderRadius: '24px',
                                        display: 'inline-block',
                                        width: '100%',
                                        boxSizing: 'border-box'
                                    }}>
                                        <p style={{ margin: 0, color: '#854d0e', fontSize: '12px', fontWeight: '900', letterSpacing: '1px' }}>
                                            USE CODE: BLOOM50 FOR AN EXTRA 50% OFF
                                        </p>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </center>
        </div>
    );
};

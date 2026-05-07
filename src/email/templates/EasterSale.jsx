import React from "react";
import { EditableText, EditableImg, Button } from "../elements/Shared";

export const EasterSale = ({ data, onUpdate, onImageClick, uneditable }) => {
    const SaasThemeText = "#4b2b6d";
    const SaasThemeFontFamily = "'Inter', system-ui, sans-serif";

    const easterTheme = {
        primary: "#a855f7", // Lavender 500
        secondary: "#4ade80", // Mint 400
        accent: "#facc15", // Lemon 400
        background: "#f5f3ff", // Lavender 50
        text: SaasThemeText
    };

    const containerStyle = {
        maxWidth: '560px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        borderRadius: '40px',
        overflow: 'hidden',
        boxShadow: '0 25px 50px -12px rgba(168, 85, 247, 0.15)',
        fontFamily: SaasThemeFontFamily,
        border: '1px solid #ede9fe'
    };

    return (
        <div style={{ width: '100%', backgroundColor: easterTheme.background, padding: '80px 0' }}>
            <center>
                <div style={containerStyle}>
                    <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                        <tbody>
                            <tr>
                                <td style={{ padding: '0' }}>
                                    <EditableImg
                                        field="image"
                                        src={data.image || "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=1200&h=600&fit=crop&q=80"}
                                        label="Easter Celebration Visual"
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
                                            backgroundColor: '#f5f3ff',
                                            color: easterTheme.primary,
                                            fontSize: '11px',
                                            fontWeight: '900',
                                            padding: '8px 20px',
                                            borderRadius: '100px',
                                            textTransform: 'uppercase',
                                            letterSpacing: '2px'
                                        }}>
                                            Spring Has Sprung
                                        </span>
                                    </div>
                                    <EditableText
                                        field="title"
                                        value={data.title || "Easter Hunt is On"}
                                        isHeader
                                        onUpdate={onUpdate}
                                        uneditable={uneditable}
                                        style={{
                                            fontSize: '48px',
                                            fontWeight: '900',
                                            color: easterTheme.primary,
                                            margin: '0 0 20px 0',
                                            lineHeight: '1',
                                            letterSpacing: '-0.05em'
                                        }}
                                    />
                                    <EditableText
                                        field="content"
                                        value={data.content || "Hop into our biggest sale of the year. Discover hidden savings across our entire spring collection. The hunt ends soon."}
                                        onUpdate={onUpdate}
                                        uneditable={uneditable}
                                        style={{ fontSize: '18px', color: SaasThemeText, margin: '0 0 40px 0', lineHeight: '1.6' }}
                                    />

                                    <div style={{ marginBottom: '16px' }}>
                                        <Button
                                            text={data.ctaText || "Find Your Savings"}
                                            href={data.ctaLink || "#"}
                                            style={{
                                                backgroundColor: easterTheme.secondary,
                                                color: '#064e3b',
                                                padding: '20px 48px',
                                                borderRadius: '24px',
                                                fontSize: '16px',
                                                fontWeight: 'bold',
                                                border: 'none',
                                                width: '100%',
                                                boxShadow: '0 10px 15px -3px rgba(74, 222, 128, 0.3)',
                                                display: 'inline-block'
                                            }}
                                        />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td align="center" style={{ padding: '0 48px 48px 48px' }}>
                                    <div style={{
                                        padding: '24px',
                                        backgroundColor: easterTheme.accent,
                                        borderRadius: '24px',
                                        display: 'inline-block',
                                        width: '100%',
                                        boxSizing: 'border-box'
                                    }}>
                                        <p style={{ margin: 0, color: '#854d0e', fontSize: '13px', fontWeight: '900', letterSpacing: '1px' }}>
                                            🐰 EXCLUSIVE: USE CODE BUNNY30 FOR 30% OFF 🐰
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

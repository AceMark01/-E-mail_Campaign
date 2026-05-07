import React from "react";
import { EditableText, EditableImg, Button } from "../elements/Shared";

export const SummerVibes = ({ data, onUpdate, onImageClick, uneditable }) => {
    const SaasThemeText = "#475569";
    const SaasThemeFontFamily = "'Inter', system-ui, sans-serif";

    const summerTheme = {
        primary: "#ff6b6b", // Coral
        secondary: "#1a365d", // Deep Ocean
        accent: "#fbd38d", // Golden Sand
        background: "#ffffff"
    };

    const containerStyle = {
        maxWidth: '600px',
        margin: '0 auto',
        backgroundColor: summerTheme.background,
        borderRadius: '32px',
        overflow: 'hidden',
        boxShadow: '0 30px 60px -12px rgba(26, 54, 93, 0.15)',
        fontFamily: SaasThemeFontFamily
    };

    return (
        <div style={{ width: '100%', backgroundColor: '#f7fafc', padding: '80px 0' }}>
            <center>
                <div style={containerStyle}>
                    <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                        <tbody>
                            <tr>
                                <td style={{ padding: '0' }}>
                                    <div style={{ position: 'relative' }}>
                                        <EditableImg
                                            field="image"
                                            src={data.image || "https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?w=1200&h=800&fit=crop&q=80"}
                                            label="Summer Escape"
                                            onImageClick={onImageClick}
                                            uneditable={uneditable}
                                            style={{ display: 'block', width: '100%', height: 'auto' }}
                                        />
                                        <div style={{ position: 'absolute', top: '24px', left: '24px', backgroundColor: summerTheme.accent, padding: '8px 16px', borderRadius: '100px', fontSize: '12px', fontWeight: '900', color: summerTheme.secondary, letterSpacing: '1px' }}>
                                            SUMMER '26
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ padding: '64px 48px', textAlign: 'center' }}>
                                    <div style={{ marginBottom: '20px' }}>
                                        <EditableText
                                            field="title"
                                            value={data.title || "Chasing the Eternal Sun"}
                                            isHeader
                                            onUpdate={onUpdate}
                                            uneditable={uneditable}
                                            style={{ fontSize: '48px', fontWeight: '900', color: summerTheme.secondary, margin: 0, lineHeight: '1.1', letterSpacing: '-0.02em' }}
                                        />
                                    </div>
                                    <div style={{ marginBottom: '40px' }}>
                                        <EditableText
                                            field="content"
                                            value={data.content || "Experience the ultimate seasonal collection. Crafted for those who find beauty in every sunset and adventure in every wave."}
                                            onUpdate={onUpdate}
                                            uneditable={uneditable}
                                            style={{ fontSize: '18px', color: '#4a5568', margin: 0, lineHeight: '1.6' }}
                                        />
                                    </div>
                                    <div style={{ marginBottom: '48px' }}>
                                        <Button
                                            text={data.ctaText || "Explore the Collection"}
                                            href={data.ctaLink || "#"}
                                            style={{
                                                backgroundColor: summerTheme.primary,
                                                color: '#ffffff',
                                                padding: '20px 48px',
                                                borderRadius: '16px',
                                                fontSize: '16px',
                                                fontWeight: '900',
                                                border: 'none',
                                                boxShadow: '0 15px 30px rgba(255, 107, 107, 0.3)'
                                            }}
                                        />
                                    </div>

                                    <div style={{ paddingTop: '48px', borderTop: '1px solid #edf2f7' }}>
                                        <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                                            <tbody>
                                                <tr>
                                                    <td width="33.33%" align="center">
                                                        <div style={{ color: summerTheme.secondary, fontWeight: '900', fontSize: '11px', letterSpacing: '2px' }}>BEACHWEAR</div>
                                                    </td>
                                                    <td width="33.33%" align="center">
                                                        <div style={{ color: summerTheme.secondary, fontWeight: '900', fontSize: '11px', letterSpacing: '2px' }}>ACCESSORIES</div>
                                                    </td>
                                                    <td width="33.33%" align="center">
                                                        <div style={{ color: summerTheme.secondary, fontWeight: '900', fontSize: '11px', letterSpacing: '2px' }}>TRAVEL</div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
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



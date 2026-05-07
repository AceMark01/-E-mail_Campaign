import React from "react";
import { EditableText, EditableImg, Button } from "../elements/Shared";

export const NewYearGreeting = ({ data, onUpdate, onImageClick, uneditable }) => {
    const SaasThemeText = "#475569";
    const SaasThemeFontFamily = "'Inter', system-ui, sans-serif";

    const festTheme = {
        primary: "#fafafa",
        accent: "#f59e0b", // Gold
        background: "#020617", // Deep Navy
        card: "rgba(255, 255, 255, 0.05)"
    };

    const containerStyle = {
        maxWidth: '600px',
        margin: '0 auto',
        backgroundColor: festTheme.background,
        borderRadius: '40px',
        overflow: 'hidden',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 0 50px rgba(245, 158, 11, 0.15)',
        fontFamily: "'Playfair Display', serif"
    };

    return (
        <div style={{ width: '100%', backgroundColor: '#000000', padding: '80px 0' }}>
            <center>
                <div style={containerStyle}>
                    <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                        <tbody>
                            <tr>
                                <td style={{ padding: '0' }}>
                                    <div style={{ position: 'relative' }}>
                                        <EditableImg
                                            field="image"
                                            src={data.image || "https://images.unsplash.com/photo-1546271876-0640a8ba7c6a?w=1000&h=500&fit=crop&q=80"}
                                            label="Celebration Image"
                                            onImageClick={onImageClick}
                                            uneditable={uneditable}
                                            style={{ display: 'block', width: '100%', height: 'auto', opacity: '0.8' }}
                                        />
                                        <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', height: '100px', background: 'linear-gradient(to bottom, transparent, #020617)' }}></div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ padding: '40px 60px 80px 60px', textAlign: 'center' }}>
                                    <div style={{ marginBottom: '24px' }}>
                                        <span style={{ color: festTheme.accent, fontSize: '14px', fontWeight: 'bold', letterSpacing: '6px', textTransform: 'uppercase' }}>
                                            The Countdown Begins
                                        </span>
                                    </div>

                                    <div style={{ marginBottom: '32px' }}>
                                        <EditableText
                                            field="title"
                                            value={data.title || "TWENTY TWENTY FIVE"}
                                            isHeader
                                            onUpdate={onUpdate}
                                            uneditable={uneditable}
                                            style={{
                                                fontSize: '56px',
                                                fontWeight: '900',
                                                color: '#ffffff',
                                                margin: 0,
                                                lineHeight: '1',
                                                letterSpacing: '4px'
                                            }}
                                        />
                                    </div>

                                    <div style={{
                                        backgroundColor: festTheme.card,
                                        padding: '40px',
                                        borderRadius: '24px',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        marginBottom: '48px',
                                        backdropFilter: 'blur(10px)'
                                    }}>
                                        <EditableText
                                            field="content"
                                            value={data.content || "A new year is a canvas of possibilities. May your 2025 be filled with bold ambitions, shared joys, and the courage to chase your brightest dreams."}
                                            onUpdate={onUpdate}
                                            uneditable={uneditable}
                                            style={{ fontSize: '20px', color: '#cbd5e1', margin: 0, lineHeight: '1.8', fontWeight: '300' }}
                                        />
                                    </div>

                                    <Button
                                        text={data.ctaText || "CHEERS TO THE FUTURE"}
                                        href={data.ctaLink || "#"}
                                        style={{
                                            backgroundColor: '#ffffff',
                                            color: '#000000',
                                            padding: '20px 40px',
                                            borderRadius: '100px',
                                            fontSize: '14px',
                                            fontWeight: 'bold',
                                            letterSpacing: '2px',
                                            border: 'none',
                                            boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
                                        }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ padding: '40px', textAlign: 'center', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
                                    <p style={{ margin: 0, color: festTheme.accent, fontSize: '12px', fontWeight: 'bold', letterSpacing: '2px' }}>
                                        SPARK THE IMAGINATION • 2025
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </center>
        </div>
    );
};



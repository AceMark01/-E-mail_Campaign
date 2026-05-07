import React from "react";
import { EditableText, EditableImg, Button } from "../elements/Shared";

export const SimpleCard = ({ data, onUpdate, onImageClick, uneditable }) => {
    const SaasThemeText = "#64748b";
    const SaasThemeFontFamily = "'Inter', system-ui, sans-serif";

    const cardTheme = {
        primary: "#0ea5e9", // Sky 500
        secondary: "#334155", // Slate 700
        background: "#f0f9ff", // Sky 50
        text: SaasThemeText
    };

    const containerStyle = {
        maxWidth: '520px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        borderRadius: '32px',
        overflow: 'hidden',
        boxShadow: '0 25px 50px -12px rgba(14, 165, 233, 0.15)',
        fontFamily: SaasThemeFontFamily
    };

    return (
        <div style={{ width: '100%', backgroundColor: cardTheme.background, padding: '80px 0' }}>
            <center>
                <div style={containerStyle}>
                    <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                        <tbody>
                            <tr>
                                <td style={{ padding: '0' }}>
                                    <EditableImg
                                        field="image"
                                        src={data.image || "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1200&h=600&fit=crop&q=80"}
                                        label="Inspiring Visual"
                                        onImageClick={onImageClick}
                                        uneditable={uneditable}
                                        style={{ display: 'block', width: '100%', height: 'auto', border: 'none' }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ padding: '48px 40px', textAlign: 'left' }}>
                                    <div style={{ marginBottom: '12px' }}>
                                        <span style={{ color: cardTheme.primary, fontSize: '11px', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase' }}>
                                            Featured Insight
                                        </span>
                                    </div>
                                    <EditableText
                                        field="title"
                                        value={data.title || "Elevate Your Space"}
                                        isHeader
                                        onUpdate={onUpdate}
                                        uneditable={uneditable}
                                        style={{ fontSize: '32px', fontWeight: '900', color: cardTheme.secondary, margin: '0 0 16px 0', lineHeight: '1.2', letterSpacing: '-0.025em' }}
                                    />
                                    <EditableText
                                        field="content"
                                        value={data.content || "Discover how intentional design and modern aesthetics can transform your daily environment into a sanctuary of productivity."}
                                        onUpdate={onUpdate}
                                        uneditable={uneditable}
                                        style={{ fontSize: '17px', lineHeight: '1.6', color: SaasThemeText, margin: '0 0 32px 0' }}
                                    />

                                    <Button
                                        text={data.ctaText || "Explore the Collection"}
                                        href={data.ctaLink || "#"}
                                        style={{
                                            backgroundColor: cardTheme.secondary,
                                            color: '#ffffff',
                                            padding: '16px 32px',
                                            borderRadius: '12px',
                                            fontSize: '15px',
                                            fontWeight: 'bold',
                                            border: 'none',
                                            display: 'inline-block'
                                        }}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div style={{ marginTop: '40px' }}>
                    <p style={{ color: '#94a3b8', fontSize: '11px', fontWeight: 'bold', letterSpacing: '4px' }}>EST. 2026 • THE EDITORIAL</p>
                </div>
            </center>
        </div>
    );
};




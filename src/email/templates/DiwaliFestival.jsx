import React from "react";
import { EditableText, EditableImg, Button } from "../elements/Shared";

export const DiwaliFestival = ({ data, onUpdate, onImageClick, uneditable }) => {
    const SaasThemeText = "#451a03";
    const SaasThemeFontFamily = "'Playfair Display', serif, system-ui";

    const diwaliTheme = {
        primary: "#ea580c", // Orange 600
        secondary: "#581c87", // Purple 900
        accent: "#facc15", // Amber 400
        background: "#fffbeb", // Amber 50
        text: SaasThemeText
    };

    const containerStyle = {
        maxWidth: '560px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        borderRadius: '32px',
        overflow: 'hidden',
        boxShadow: '0 25px 50px -12px rgba(88, 28, 135, 0.15)',
        fontFamily: SaasThemeFontFamily,
        border: `2px solid ${diwaliTheme.accent}`
    };

    return (
        <div style={{ width: '100%', backgroundColor: diwaliTheme.secondary, padding: '80px 0' }}>
            <center>
                <div style={containerStyle}>
                    <div style={{ backgroundColor: diwaliTheme.primary, padding: '12px', textAlign: 'center' }}>
                        <span style={{ color: diwaliTheme.accent, fontSize: '14px' }}>
                            🪔 🪔 🪔 🪔 🪔
                        </span>
                    </div>

                    <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                        <tbody>
                            <tr>
                                <td style={{ padding: '0' }}>
                                    <EditableImg
                                        field="image"
                                        src={data.image || "https://images.unsplash.com/photo-1508717272800-9fff97da7e8f?w=1200&h=600&fit=crop&q=80"}
                                        label="Festival of Lights Visual"
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
                                            color: diwaliTheme.primary,
                                            fontSize: '12px',
                                            fontWeight: '900',
                                            textTransform: 'uppercase',
                                            letterSpacing: '3px'
                                        }}>
                                            Festival of Lights
                                        </span>
                                    </div>
                                    <EditableText
                                        field="title"
                                        value={data.title || "Shubh Deepavali"}
                                        isHeader
                                        onUpdate={onUpdate}
                                        uneditable={uneditable}
                                        style={{
                                            fontSize: '48px',
                                            fontWeight: '400',
                                            color: diwaliTheme.secondary,
                                            margin: '0 0 24px 0',
                                            lineHeight: '1.1',
                                            fontStyle: 'italic'
                                        }}
                                    />
                                    <div style={{ width: '40px', height: '2px', backgroundColor: diwaliTheme.accent, margin: '0 auto 32px' }}></div>
                                    <EditableText
                                        field="content"
                                        value={data.content || "May the divine light of Diwali spread into your life peace, prosperity, happiness, and good health. Experience the magic of the festival with our curated premium collection."}
                                        onUpdate={onUpdate}
                                        uneditable={uneditable}
                                        style={{ fontSize: '18px', color: SaasThemeText, margin: '0 0 48px 0', lineHeight: '1.8', fontFamily: "'Inter', sans-serif" }}
                                    />

                                    <Button
                                        text={data.ctaText || "Explore Festive Deals"}
                                        href={data.ctaLink || "#"}
                                        style={{
                                            backgroundColor: diwaliTheme.secondary,
                                            color: diwaliTheme.accent,
                                            padding: '20px 48px',
                                            borderRadius: '0px',
                                            fontSize: '15px',
                                            fontWeight: 'bold',
                                            border: `1px solid ${diwaliTheme.accent}`,
                                            width: '100%',
                                            letterSpacing: '2px',
                                            display: 'inline-block'
                                        }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ padding: '24px', backgroundColor: diwaliTheme.primary, textAlign: 'center' }}>
                                    <p style={{ margin: 0, color: '#ffffff', fontSize: '11px', fontWeight: '900', letterSpacing: '3px' }}>
                                        ✨ WISHING YOU A PROSPEROUS NEW YEAR ✨
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




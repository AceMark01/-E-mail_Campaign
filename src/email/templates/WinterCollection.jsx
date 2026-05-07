import React from "react";
import { EditableText, EditableImg, Button } from "../elements/Shared";

export const WinterCollection = ({ data, onUpdate, onImageClick, uneditable }) => {
    const SaasThemeText = "#475569";
    const SaasThemeFontFamily = "'Playfair Display', serif, system-ui";

    const winterTheme = {
        primary: "#1e40af", // Blue 800
        secondary: "#334155", // Slate 700
        accent: "#f1f5f9", // Slate 100
        text: SaasThemeText
    };

    const containerStyle = {
        maxWidth: '560px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        borderRadius: '32px',
        overflow: 'hidden',
        boxShadow: '0 25px 50px -12px rgba(30, 64, 175, 0.1)',
        fontFamily: SaasThemeFontFamily
    };

    return (
        <div style={{ width: '100%', backgroundColor: winterTheme.accent, padding: '80px 0' }}>
            <center>
                <div style={containerStyle}>
                    <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                        <tbody>
                            <tr>
                                <td style={{ padding: '0' }}>
                                    <EditableImg
                                        field="image"
                                        src={data.image || "https://images.unsplash.com/photo-1478144592103-258219045331?w=1200&h=800&fit=crop&q=80"}
                                        label="Winter Atmosphere"
                                        onImageClick={onImageClick}
                                        uneditable={uneditable}
                                        style={{ display: 'block', width: '100%', height: 'auto', border: 'none' }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ padding: '64px 48px', textAlign: 'center' }}>
                                    <div style={{ marginBottom: '24px' }}>
                                        <div style={{
                                            display: 'inline-block',
                                            padding: '8px 24px',
                                            backgroundColor: winterTheme.accent,
                                            borderRadius: '100px',
                                            color: winterTheme.primary,
                                            fontSize: '11px',
                                            fontWeight: '900',
                                            letterSpacing: '3px',
                                            textTransform: 'uppercase'
                                        }}>
                                            Seasonal Release
                                        </div>
                                    </div>
                                    <EditableText
                                        field="title"
                                        value={data.title || "The Winter Edit"}
                                        isHeader
                                        onUpdate={onUpdate}
                                        uneditable={uneditable}
                                        style={{ fontSize: '42px', fontWeight: '400', color: winterTheme.secondary, margin: '0 0 24px 0', lineHeight: '1.2' }}
                                    />
                                    <EditableText
                                        field="content"
                                        value={data.content || "Embrace the chill with our most sophisticated collection yet. A curated selection of textures and tones designed for the refined modern lifestyle."}
                                        onUpdate={onUpdate}
                                        uneditable={uneditable}
                                        style={{ fontSize: '17px', color: SaasThemeText, margin: '0 0 48px 0', lineHeight: '1.8', fontFamily: "'Inter', sans-serif" }}
                                    />

                                    <Button
                                        text={data.ctaText || "Shop the Collection"}
                                        href={data.ctaLink || "#"}
                                        style={{
                                            backgroundColor: winterTheme.secondary,
                                            color: '#ffffff',
                                            padding: '20px 48px',
                                            borderRadius: '0px',
                                            fontSize: '14px',
                                            fontWeight: 'bold',
                                            border: 'none',
                                            textTransform: 'uppercase',
                                            letterSpacing: '2px'
                                        }}
                                    />

                                    <div style={{ marginTop: '64px', paddingTop: '48px', borderTop: '1px solid #f1f5f9' }}>
                                        <p style={{ fontSize: '12px', color: '#94a3b8', fontStyle: 'italic' }}>
                                            Standard Shipping is complimentary on all orders over $150
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



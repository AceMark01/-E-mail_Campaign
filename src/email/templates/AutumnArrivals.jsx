import React from "react";
import { EditableText, EditableImg, Button } from "../elements/Shared";

export const AutumnArrivals = ({ data, onUpdate, onImageClick, uneditable }) => {
    const SaasThemeText = "#451a03";
    const SaasThemeFontFamily = "'Playfair Display', serif, system-ui";

    const autumnTheme = {
        primary: "#9a3412", // Terracotta 700
        secondary: "#d97706", // Amber 600
        accent: "#fef3c7", // Amber 100
        background: "#fffbeb", // Warm White
        text: SaasThemeText
    };

    const containerStyle = {
        maxWidth: '560px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        borderRadius: '32px',
        overflow: 'hidden',
        boxShadow: '0 25px 50px -12px rgba(154, 52, 18, 0.15)',
        fontFamily: SaasThemeFontFamily
    };

    return (
        <div style={{ width: '100%', backgroundColor: autumnTheme.background, padding: '80px 0' }}>
            <center>
                <div style={containerStyle}>
                    <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                        <tbody>
                            <tr>
                                <td style={{ padding: '0' }}>
                                    <EditableImg
                                        field="image"
                                        src={data.image || "https://images.unsplash.com/photo-1507371341162-763b5e419408?w=1200&h=600&fit=crop&q=80"}
                                        label="Autumn Collection Visual"
                                        onImageClick={onImageClick}
                                        uneditable={uneditable}
                                        style={{ display: 'block', width: '100%', height: 'auto', border: 'none' }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ padding: '64px 48px', textAlign: 'center' }}>
                                    <div style={{ marginBottom: '16px' }}>
                                        <div style={{
                                            display: 'inline-block',
                                            padding: '8px 24px',
                                            backgroundColor: autumnTheme.accent,
                                            borderRadius: '100px',
                                            color: autumnTheme.primary,
                                            fontSize: '12px',
                                            fontWeight: '900',
                                            letterSpacing: '3px',
                                            textTransform: 'uppercase'
                                        }}>
                                            The Season of Color
                                        </div>
                                    </div>
                                    <EditableText
                                        field="title"
                                        value={data.title || "Autumn Arrivals"}
                                        isHeader
                                        onUpdate={onUpdate}
                                        uneditable={uneditable}
                                        style={{ fontSize: '48px', fontWeight: '400', color: autumnTheme.primary, margin: '0 0 20px 0', lineHeight: '1.1', fontStyle: 'italic' }}
                                    />
                                    <div style={{ width: '40px', height: '2px', backgroundColor: autumnTheme.secondary, margin: '0 auto 32px' }}></div>
                                    <EditableText
                                        field="content"
                                        value={data.content || "Experience the warmth of the season with our latest collection. Inspired by the changing leaves and the crisp morning air, these pieces are crafted for slow living."}
                                        onUpdate={onUpdate}
                                        uneditable={uneditable}
                                        style={{ fontSize: '18px', color: SaasThemeText, margin: '0 0 48px 0', lineHeight: '1.8', fontFamily: "'Inter', sans-serif" }}
                                    />

                                    <Button
                                        text={data.ctaText || "Shop the Collection"}
                                        href={data.ctaLink || "#"}
                                        style={{
                                            backgroundColor: autumnTheme.primary,
                                            color: '#ffffff',
                                            padding: '20px 48px',
                                            borderRadius: '0px',
                                            fontSize: '15px',
                                            fontWeight: 'bold',
                                            border: 'none',
                                            width: '100%',
                                            letterSpacing: '1px',
                                            display: 'inline-block'
                                        }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ padding: '24px', backgroundColor: autumnTheme.accent, textAlign: 'center' }}>
                                    <p style={{ margin: 0, color: autumnTheme.primary, fontSize: '12px', fontWeight: '900', letterSpacing: '2px' }}>
                                        🍂 FREE SHIPPING ON ALL FALL ORDERS 🍂
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

import React from "react";
import { EditableText, EditableImg, Button } from "../elements/Shared";

export const ThanksgivingDinner = ({ data, onUpdate, onImageClick, uneditable }) => {
    const SaasThemeText = "#431407";
    const SaasThemeFontFamily = "'Playfair Display', serif, system-ui";

    const festiveTheme = {
        primary: "#c2410c", // Orange 700
        secondary: "#166534", // Green 800
        accent: "#fde68a", // Amber 200 (Almond)
        background: "#fffbeb", // Amber 50
        text: SaasThemeText
    };

    const containerStyle = {
        maxWidth: '560px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 25px 50px -12px rgba(194, 65, 12, 0.2)',
        fontFamily: SaasThemeFontFamily,
        border: `1px solid ${festiveTheme.accent}`
    };

    return (
        <div style={{ width: '100%', backgroundColor: festiveTheme.background, padding: '80px 0' }}>
            <center>
                <div style={containerStyle}>
                    <div style={{ backgroundColor: festiveTheme.secondary, padding: '12px', textAlign: 'center' }}>
                        <span style={{ color: '#ffffff', fontSize: '11px', fontWeight: 'bold', letterSpacing: '4px' }}>
                            GRATITUDE • ABUNDANCE • COMMUNITY
                        </span>
                    </div>

                    <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                        <tbody>
                            <tr>
                                <td style={{ padding: '0' }}>
                                    <EditableImg
                                        field="image"
                                        src={data.image || "https://images.unsplash.com/photo-1511699712600-11414c211159?w=1200&h=600&fit=crop&q=80"}
                                        label="Thanksgiving Celebration Visual"
                                        onImageClick={onImageClick}
                                        uneditable={uneditable}
                                        style={{ display: 'block', width: '100%', height: 'auto', border: 'none' }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ padding: '64px 48px', textAlign: 'center' }}>
                                    <div style={{ marginBottom: '16px' }}>
                                        <div style={{ width: '32px', height: '1px', backgroundColor: festiveTheme.primary, margin: '0 auto' }}></div>
                                    </div>
                                    <EditableText
                                        field="title"
                                        value={data.title || "The Harvest Table"}
                                        isHeader
                                        onUpdate={onUpdate}
                                        uneditable={uneditable}
                                        style={{
                                            fontSize: '44px',
                                            fontWeight: '400',
                                            color: festiveTheme.primary,
                                            margin: '0 0 24px 0',
                                            lineHeight: '1.1',
                                            fontStyle: 'italic'
                                        }}
                                    />
                                    <EditableText
                                        field="content"
                                        value={data.content || "Warmest wishes to you and yours this Thanksgiving. As we gather to celebrate a year of growth and shared stories, may your home be filled with the spirit of absolute gratitude."}
                                        onUpdate={onUpdate}
                                        uneditable={uneditable}
                                        style={{ fontSize: '18px', color: SaasThemeText, margin: '0 0 48px 0', lineHeight: '1.8' }}
                                    />

                                    <Button
                                        text={data.ctaText || "Reserve Your Seat"}
                                        href={data.ctaLink || "#"}
                                        style={{
                                            backgroundColor: festiveTheme.primary,
                                            color: '#ffffff',
                                            padding: '20px 64px',
                                            borderRadius: '4px',
                                            fontSize: '16px',
                                            fontWeight: 'bold',
                                            border: 'none',
                                            width: '100%',
                                            boxShadow: '0 10px 15px -3px rgba(194, 65, 12, 0.4)',
                                            display: 'inline-block'
                                        }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ padding: '32px', backgroundColor: festiveTheme.accent, textAlign: 'center' }}>
                                    <p style={{ margin: 0, color: festiveTheme.primary, fontSize: '14px', fontStyle: 'italic', fontWeight: 'bold' }}>
                                        "Gratitude turns what we have into enough."
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

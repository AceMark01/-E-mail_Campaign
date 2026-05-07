import React from "react";
import { EditableText, EditableImg, Button } from "../elements/Shared";

export const ChristmasOffer = ({ data, onUpdate, onImageClick, uneditable }) => {
    const SaasThemeText = "#1e293b";
    const SaasThemeFontFamily = "'Playfair Display', serif, system-ui";

    const holidayTheme = {
        primary: "#dc2626", // Red 600
        secondary: "#064e3b", // Emerald 900
        accent: "#fbbf24", // Amber 400
        background: "#fef2f2", // Red 50
        text: SaasThemeText
    };

    const containerStyle = {
        maxWidth: '560px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        borderRadius: '32px',
        overflow: 'hidden',
        boxShadow: '0 25px 50px -12px rgba(220, 38, 38, 0.15)',
        fontFamily: SaasThemeFontFamily,
        border: '1px solid #fee2e2'
    };

    return (
        <div style={{ width: '100%', backgroundColor: holidayTheme.background, padding: '80px 0' }}>
            <center>
                <div style={containerStyle}>
                    <div style={{ backgroundColor: holidayTheme.secondary, padding: '12px', textAlign: 'center' }}>
                        <span style={{ color: holidayTheme.accent, fontSize: '11px', fontWeight: '900', letterSpacing: '4px' }}>
                            ❄️ THE HOLIDAY COLLECTION ❄️
                        </span>
                    </div>

                    <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                        <tbody>
                            <tr>
                                <td style={{ padding: '0' }}>
                                    <EditableImg
                                        field="image"
                                        src={data.image || "https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=1200&h=600&fit=crop&q=80"}
                                        label="Holiday Celebration Visual"
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
                                            color: holidayTheme.primary,
                                            fontSize: '12px',
                                            fontWeight: '900',
                                            textTransform: 'uppercase',
                                            letterSpacing: '3px'
                                        }}>
                                            Warm Wishes
                                        </span>
                                    </div>
                                    <EditableText
                                        field="title"
                                        value={data.title || "A Very Merry Offer"}
                                        isHeader
                                        onUpdate={onUpdate}
                                        uneditable={uneditable}
                                        style={{
                                            fontSize: '48px',
                                            fontWeight: '400',
                                            color: holidayTheme.secondary,
                                            margin: '0 0 24px 0',
                                            lineHeight: '1.1',
                                            fontStyle: 'italic'
                                        }}
                                    />
                                    <div style={{ width: '40px', height: '2px', backgroundColor: holidayTheme.accent, margin: '0 auto 32px' }}></div>
                                    <EditableText
                                        field="content"
                                        value={data.content || "Experience the magic of the season with our exclusive holiday rewards. May your days be filled with warmth, joy, and extraordinary moments."}
                                        onUpdate={onUpdate}
                                        uneditable={uneditable}
                                        style={{ fontSize: '18px', color: SaasThemeText, margin: '0 0 48px 0', lineHeight: '1.8', fontFamily: "'Inter', sans-serif" }}
                                    />

                                    <Button
                                        text={data.ctaText || "Unwrap My Gift"}
                                        href={data.ctaLink || "#"}
                                        style={{
                                            backgroundColor: holidayTheme.primary,
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
                                <td style={{ padding: '32px', backgroundColor: '#fdf2f2', textAlign: 'center' }}>
                                    <p style={{ margin: 0, color: holidayTheme.secondary, fontSize: '11px', fontWeight: '900', letterSpacing: '2px' }}>
                                        🎁 OFFER EXPIRES DECEMBER 25TH 🎁
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

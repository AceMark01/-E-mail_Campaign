import React from "react";
import { EditableText, EditableImg, Button } from "../elements/Shared";

export const MotherDay = ({ data, onUpdate, onImageClick, uneditable }) => {
    const SaasThemeText = "#431407";
    const SaasThemeFontFamily = "'Playfair Display', serif, system-ui";

    const momTheme = {
        primary: "#db2777", // Pink 600
        secondary: "#86efac", // Green 300 (Sage)
        accent: "#fdf2f8", // Pink 50
        background: "#fef2f2", // Red 50
        text: SaasThemeText
    };

    const containerStyle = {
        maxWidth: '560px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        borderRadius: '32px',
        overflow: 'hidden',
        boxShadow: '0 25px 50px -12px rgba(219, 39, 119, 0.1)',
        fontFamily: SaasThemeFontFamily,
        border: '1px solid #fce7f3'
    };

    return (
        <div style={{ width: '100%', backgroundColor: momTheme.accent, padding: '80px 0' }}>
            <center>
                <div style={containerStyle}>
                    <div style={{ backgroundColor: momTheme.primary, padding: '12px', textAlign: 'center' }}>
                        <span style={{ color: '#ffffff', fontSize: '11px', fontWeight: 'bold', letterSpacing: '3px' }}>
                            ✿ CELEBRATING UNCONDITIONAL LOVE ✿
                        </span>
                    </div>

                    <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                        <tbody>
                            <tr>
                                <td style={{ padding: '0' }}>
                                    <EditableImg
                                        field="image"
                                        src={data.image || "https://images.unsplash.com/photo-1494028698538-2cd52a400b17?w=1200&h=600&fit=crop&q=80"}
                                        label="Mother's Day Appreciation"
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
                                            color: momTheme.primary,
                                            fontSize: '11px',
                                            fontWeight: '900',
                                            textTransform: 'uppercase',
                                            letterSpacing: '3px'
                                        }}>
                                            A Day for Her
                                        </span>
                                    </div>
                                    <EditableText
                                        field="title"
                                        value={data.title || "Pure Appreciation"}
                                        isHeader
                                        onUpdate={onUpdate}
                                        uneditable={uneditable}
                                        style={{
                                            fontSize: '44px',
                                            fontWeight: '400',
                                            color: momTheme.primary,
                                            margin: '0 0 24px 0',
                                            lineHeight: '1.1',
                                            fontStyle: 'italic'
                                        }}
                                    />
                                    <div style={{ width: '40px', height: '1px', backgroundColor: momTheme.secondary, margin: '0 auto 32px' }}></div>
                                    <EditableText
                                        field="content"
                                        value={data.content || "To the one who nurtures, inspires, and loves without limit. Today we honor the wisdom and warmth you bring to every moment of our lives."}
                                        onUpdate={onUpdate}
                                        uneditable={uneditable}
                                        style={{ fontSize: '18px', color: SaasThemeText, margin: '0 0 48px 0', lineHeight: '1.8' }}
                                    />

                                    <Button
                                        text={data.ctaText || "Shop the Floral Collection"}
                                        href={data.ctaLink || "#"}
                                        style={{
                                            backgroundColor: momTheme.primary,
                                            color: '#ffffff',
                                            padding: '20px 56px',
                                            borderRadius: '100px',
                                            fontSize: '15px',
                                            fontWeight: 'bold',
                                            border: 'none',
                                            width: '100%',
                                            boxShadow: '0 10px 15px -3px rgba(219, 39, 119, 0.4)',
                                            display: 'inline-block'
                                        }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ padding: '32px', backgroundColor: '#fff5f7', textAlign: 'center' }}>
                                    <p style={{ margin: 0, color: momTheme.primary, fontSize: '11px', fontWeight: 'bold', letterSpacing: '2px' }}>
                                        ✿ THANK YOU FOR EVERYTHING ✿
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

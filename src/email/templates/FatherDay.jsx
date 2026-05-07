import React from "react";
import { EditableText, EditableImg, Button } from "../elements/Shared";

export const FatherDay = ({ data, onUpdate, onImageClick, uneditable }) => {
    const SaasThemeText = "#1f2937";
    const SaasThemeFontFamily = "'Playfair Display', serif, system-ui";

    const dadTheme = {
        primary: "#064e3b", // Forest 900
        secondary: "#d97706", // Amber 600 (Brass)
        accent: "#f3f4f6", // Gray 100
        background: "#e5e7eb", // Gray 200
        text: SaasThemeText
    };

    const containerStyle = {
        maxWidth: '560px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        borderRadius: '0px',
        overflow: 'hidden',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
        fontFamily: SaasThemeFontFamily,
        border: `1px solid #d1d5db`
    };

    return (
        <div style={{ width: '100%', backgroundColor: dadTheme.background, padding: '80px 0' }}>
            <center>
                <div style={containerStyle}>
                    <div style={{ backgroundColor: dadTheme.primary, padding: '12px', textAlign: 'center' }}>
                        <span style={{ color: dadTheme.secondary, fontSize: '11px', fontWeight: '900', letterSpacing: '4px' }}>
                            HONORING THE ORIGINAL HERO
                        </span>
                    </div>

                    <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                        <tbody>
                            <tr>
                                <td style={{ padding: '0' }}>
                                    <EditableImg
                                        field="image"
                                        src={data.image || "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200&h=600&fit=crop&q=80"}
                                        label="Father's Day Visual"
                                        onImageClick={onImageClick}
                                        uneditable={uneditable}
                                        style={{ display: 'block', width: '100%', height: 'auto', border: 'none' }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ padding: '72px 48px', textAlign: 'center' }}>
                                    <div style={{ marginBottom: '16px' }}>
                                        <span style={{
                                            color: dadTheme.primary,
                                            fontSize: '12px',
                                            fontWeight: '900',
                                            textTransform: 'uppercase',
                                            letterSpacing: '3px'
                                        }}>
                                            A Special Tribute
                                        </span>
                                    </div>
                                    <EditableText
                                        field="title"
                                        value={data.title || "For the Man Who Leads"}
                                        isHeader
                                        onUpdate={onUpdate}
                                        uneditable={uneditable}
                                        style={{
                                            fontSize: '40px',
                                            fontWeight: '400',
                                            color: dadTheme.primary,
                                            margin: '0 0 24px 0',
                                            lineHeight: '1.2',
                                            fontStyle: 'italic'
                                        }}
                                    />
                                    <div style={{ width: '40px', height: '2px', backgroundColor: dadTheme.secondary, margin: '0 auto 32px' }}></div>
                                    <EditableText
                                        field="content"
                                        value={data.content || "Celebrating the timeless lessons, the quiet strength, and the unwavering support. Wishing a remarkable day to the man who makes it all possible."}
                                        onUpdate={onUpdate}
                                        uneditable={uneditable}
                                        style={{ fontSize: '18px', color: SaasThemeText, margin: '0 0 48px 0', lineHeight: '1.8' }}
                                    />

                                    <Button
                                        text={data.ctaText || "Explore the Collection"}
                                        href={data.ctaLink || "#"}
                                        style={{
                                            backgroundColor: dadTheme.primary,
                                            color: '#ffffff',
                                            padding: '24px 64px',
                                            borderRadius: '0px',
                                            fontSize: '15px',
                                            fontWeight: 'bold',
                                            border: 'none',
                                            width: '100%',
                                            letterSpacing: '2px',
                                            display: 'inline-block'
                                        }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ padding: '32px', borderTop: '1px solid #f3f4f6', textAlign: 'center' }}>
                                    <p style={{ margin: 0, color: '#9ca3af', fontSize: '11px', fontWeight: 'bold', letterSpacing: '2px' }}>
                                        ESTABLISHED IN EXCELLENCE
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

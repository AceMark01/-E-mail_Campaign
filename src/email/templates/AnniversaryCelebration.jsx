import React from "react";
import { EditableText, EditableImg, Button } from "../elements/Shared";

export const AnniversaryCelebration = ({ data, onUpdate, onImageClick, uneditable }) => {
    const SaasThemeText = "#475569";
    const SaasThemeFontFamily = "'Playfair Display', serif, system-ui";

    const celebrationTheme = {
        primary: "#d4af37", // Gold
        secondary: "#0f172a", // Midnight Blue (Slate 900)
        accent: "#fafaf9", // Warm Stone 50
        text: SaasThemeText
    };

    const containerStyle = {
        maxWidth: '560px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        borderRadius: '40px',
        overflow: 'hidden',
        boxShadow: '0 25px 50px -12px rgba(212, 175, 55, 0.15)',
        fontFamily: SaasThemeFontFamily
    };

    return (
        <div style={{ width: '100%', backgroundColor: celebrationTheme.accent, padding: '80px 0' }}>
            <center>
                <div style={containerStyle}>
                    <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                        <tbody>
                            <tr>
                                <td style={{ padding: '0' }}>
                                    <EditableImg
                                        field="image"
                                        src={data.image || "https://images.unsplash.com/photo-1530103043960-ef38714abb15?w=1200&h=600&fit=crop&q=80"}
                                        label="Celebration Image"
                                        onImageClick={onImageClick}
                                        uneditable={uneditable}
                                        style={{ display: 'block', width: '100%', height: 'auto', border: 'none' }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ padding: '72px 48px', textAlign: 'center' }}>
                                    <div style={{ marginBottom: '24px' }}>
                                        <div style={{
                                            display: 'inline-block',
                                            padding: '8px 24px',
                                            backgroundColor: celebrationTheme.accent,
                                            borderRadius: '100px',
                                            color: celebrationTheme.primary,
                                            fontSize: '11px',
                                            fontWeight: '900',
                                            letterSpacing: '3px',
                                            textTransform: 'uppercase'
                                        }}>
                                            Special Milestone
                                        </div>
                                    </div>
                                    <EditableText
                                        field="title"
                                        value={data.title || "A Legacy of Excellence"}
                                        isHeader
                                        onUpdate={onUpdate}
                                        uneditable={uneditable}
                                        style={{ fontSize: '48px', fontWeight: '400', color: celebrationTheme.secondary, margin: '0 0 24px 0', lineHeight: '1.1', fontStyle: 'italic' }}
                                    />
                                    <div style={{ width: '40px', height: '2px', backgroundColor: celebrationTheme.primary, margin: '0 auto 32px' }}></div>
                                    <EditableText
                                        field="content"
                                        value={data.content || "Celebrating another year of partnership, innovation, and shared successes. Thank you for being an integral part of our journey as we look towards many more brilliant years ahead."}
                                        onUpdate={onUpdate}
                                        uneditable={uneditable}
                                        style={{ fontSize: '18px', color: SaasThemeText, margin: '0 0 48px 0', lineHeight: '1.8', fontFamily: "'Inter', sans-serif" }}
                                    />

                                    <Button
                                        text={data.ctaText || "Explore Our Journey"}
                                        href={data.ctaLink || "#"}
                                        style={{
                                            backgroundColor: celebrationTheme.secondary,
                                            color: celebrationTheme.primary,
                                            padding: '20px 48px',
                                            borderRadius: '0px',
                                            fontSize: '14px',
                                            fontWeight: '900',
                                            border: `1px solid ${celebrationTheme.primary}`,
                                            textTransform: 'uppercase',
                                            letterSpacing: '2px',
                                            display: 'inline-block'
                                        }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ padding: '32px', backgroundColor: celebrationTheme.secondary, textAlign: 'center' }}>
                                    <span style={{ color: celebrationTheme.primary, fontSize: '11px', letterSpacing: '4px', fontWeight: '900' }}>
                                        TOAST TO THE FUTURE
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div style={{ marginTop: '40px' }}>
                    <p style={{ color: '#94a3b8', fontSize: '12px', letterSpacing: '1px' }}>ESTABLISHED 2026</p>
                </div>
            </center>
        </div>
    );
};

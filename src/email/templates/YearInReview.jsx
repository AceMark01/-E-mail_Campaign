import React from "react";
import { EditableText, EditableImg, Button } from "../elements/Shared";

export const YearInReview = ({ data, onUpdate, onImageClick, uneditable }) => {
    const SaasThemeText = "#475569";
    const SaasThemeFontFamily = "'Inter', system-ui, sans-serif";

    const yearTheme = {
        primary: "#6366f1", // Indigo 500
        secondary: "#1e1b4b", // Indigo 950
        accent: "#f5f3ff", // Violet 50
        text: SaasThemeText
    };


    

    const containerStyle = {
        maxWidth: '560px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        borderRadius: '32px',
        overflow: 'hidden',
        boxShadow: '0 25px 50px -12px rgba(30, 27, 75, 0.15)',
        fontFamily: SaasThemeFontFamily
    };

    return (
        <div style={{ width: '100%', backgroundColor: yearTheme.secondary, padding: '80px 0' }}>
            <center>
                <div style={containerStyle}>
                    <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                        <tbody>
                            <tr>
                                <td style={{ padding: '0' }}>
                                    <EditableImg
                                        field="image"
                                        src={data.image || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop&q=80"}
                                        label="Year Recap Visual"
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
                                            padding: '8px 20px',
                                            backgroundColor: yearTheme.accent,
                                            borderRadius: '100px',
                                            color: yearTheme.primary,
                                            fontSize: '11px',
                                            fontWeight: '900',
                                            letterSpacing: '2px',
                                            textTransform: 'uppercase'
                                        }}>
                                            2026 RECAP
                                        </div>
                                    </div>
                                    <EditableText
                                        field="title"
                                        value={data.title || "Your Year of Impact"}
                                        isHeader
                                        onUpdate={onUpdate}
                                        uneditable={uneditable}
                                        style={{ fontSize: '36px', fontWeight: '900', color: yearTheme.secondary, margin: '0 0 20px 0', lineHeight: '1.2', letterSpacing: '-0.025em' }}
                                    />
                                    <EditableText
                                        field="content"
                                        value={data.content || "Before we step into the future, let's take a moment to celebrate everything you achieved with Ace Mail in 2026. From streamlined workflows to record-breaking output, here is your story."}
                                        onUpdate={onUpdate}
                                        uneditable={uneditable}
                                        style={{ fontSize: '17px', color: SaasThemeText, margin: '0 0 40px 0', lineHeight: '1.6' }}
                                    />

                                    <div style={{ marginBottom: '40px' }}>
                                        <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                                            <tbody>
                                                <tr>
                                                    <td align="center">
                                                        <div style={{ fontSize: '24px', fontWeight: '900', color: yearTheme.primary }}>427</div>
                                                        <div style={{ fontSize: '11px', fontWeight: '700', color: '#94a3b8', textTransform: 'uppercase' }}>Hours Saved</div>
                                                    </td>
                                                    <td align="center">
                                                        <div style={{ fontSize: '24px', fontWeight: '900', color: yearTheme.primary }}>1.2k</div>
                                                        <div style={{ fontSize: '11px', fontWeight: '700', color: '#94a3b8', textTransform: 'uppercase' }}>Flows Ran</div>
                                                    </td>
                                                    <td align="center">
                                                        <div style={{ fontSize: '24px', fontWeight: '900', color: yearTheme.primary }}>Top 1%</div>
                                                        <div style={{ fontSize: '11px', fontWeight: '700', color: '#94a3b8', textTransform: 'uppercase' }}>Efficiency</div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <Button
                                        text={data.ctaText || "View Your Full Report"}
                                        href={data.ctaLink || "#"}
                                        style={{
                                            backgroundColor: yearTheme.secondary,
                                            color: '#ffffff',
                                            padding: '20px 48px',
                                            borderRadius: '16px',
                                            fontSize: '16px',
                                            fontWeight: 'bold',
                                            border: 'none',
                                            width: '100%'
                                        }}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </center>
        </div>
    );
};


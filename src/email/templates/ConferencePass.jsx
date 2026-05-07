import React from "react";
import { EditableText, EditableImg, Button } from "../elements/Shared";

export const ConferencePass = ({ data, onUpdate, onImageClick, uneditable }) => {
    const SaasThemeText = "#64748b";
    const SaasThemeFontFamily = "'Inter', system-ui, sans-serif";

    const confTheme = {
        primary: "#0f172a", // Slate 900
        accent: "#3b82f6", // Electric Blue
        background: "#f1f5f9", // Slate 100
        text: SaasThemeText
    };

    const containerStyle = {
        maxWidth: '500px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        borderRadius: '0px',
        overflow: 'hidden',
        border: `1px solid ${confTheme.primary}`,
        boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.2)',
        fontFamily: SaasThemeFontFamily
    };

    return (
        <div style={{ width: '100%', backgroundColor: confTheme.background, padding: '80px 0' }}>
            <center>
                <div style={containerStyle}>
                    <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                        <tbody>
                            <tr>
                                <td style={{ padding: '0' }}>
                                    <EditableImg
                                        field="image"
                                        src={data.image || "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&h=600&fit=crop&q=80"}
                                        label="Conference Pass Visual"
                                        onImageClick={onImageClick}
                                        uneditable={uneditable}
                                        style={{ display: 'block', width: '100%', height: 'auto', border: 'none' }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ padding: '48px 40px', textAlign: 'center' }}>
                                    <div style={{
                                        border: `1px solid ${confTheme.primary}`,
                                        padding: '40px 32px',
                                        backgroundColor: '#ffffff',
                                        position: 'relative'
                                    }}>
                                        <div style={{ marginBottom: '16px' }}>
                                            <EditableText
                                                field="title"
                                                value={data.title || "ACCESS GRANTED"}
                                                isHeader
                                                onUpdate={onUpdate}
                                                uneditable={uneditable}
                                                style={{
                                                    fontSize: '32px',
                                                    fontWeight: '900',
                                                    color: confTheme.primary,
                                                    margin: 0,
                                                    lineHeight: '1',
                                                    letterSpacing: '-2px'
                                                }}
                                            />
                                        </div>
                                        <div style={{ marginBottom: '24px', color: confTheme.accent, fontWeight: '900', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase' }}>
                                            {data.event || "ACE MAIL AI SUMMIT • 2026"}
                                        </div>

                                        <div style={{ width: '100%', height: '1px', backgroundColor: '#e2e8f0', margin: '32px 0' }}></div>

                                        <div style={{ marginBottom: '40px' }}>
                                            <EditableText
                                                field="content"
                                                value={data.content || "Your credentials have been verified. Join 500+ elite engineers for three days of breakthrough technical insights and networking."}
                                                onUpdate={onUpdate}
                                                uneditable={uneditable}
                                                style={{ fontSize: '16px', color: SaasThemeText, margin: 0, lineHeight: '1.6' }}
                                            />
                                        </div>

                                        <Button
                                            text={data.ctaText || "Download Pass (PDF)"}
                                            href={data.ctaLink || "#"}
                                            style={{
                                                backgroundColor: confTheme.primary,
                                                color: '#ffffff',
                                                padding: '18px 40px',
                                                borderRadius: '0px',
                                                fontSize: '14px',
                                                fontWeight: '900',
                                                border: 'none',
                                                letterSpacing: '1px',
                                                width: '100%'
                                            }}
                                        />
                                    </div>
                                </td>
                            </tr>
                            <tr style={{ backgroundColor: confTheme.primary }}>
                                <td style={{ padding: '24px', textAlign: 'center' }}>
                                    <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                                        <tbody>
                                            <tr>
                                                <td align="center">
                                                    <span style={{ color: '#ffffff', fontSize: '10px', fontWeight: '900', letterSpacing: '4px' }}>
                                                        NON-TRANSFERABLE • VALID UNTIL 2026
                                                    </span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </center>
        </div>
    );
};



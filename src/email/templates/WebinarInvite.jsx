import React from "react";
import { EditableText, EditableImg, Button } from "../elements/Shared";

export const WebinarInvite = ({ data, onUpdate, onImageClick, uneditable }) => {
    const SaasThemeText = "#4b5563";
    const SaasThemeFontFamily = "'Inter', system-ui, sans-serif";

    const webinarTheme = {
        primary: "#7c3aed", // Violet 600
        secondary: "#1e1b4b", // Indigo 950
        accent: "#ede9fe", // Violet 100
        text: SaasThemeText
    };

    const containerStyle = {
        maxWidth: '560px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        borderRadius: '24px',
        overflow: 'hidden',
        boxShadow: '0 20px 25px -5px rgba(124, 58, 237, 0.1)',
        fontFamily: SaasThemeFontFamily
    };

    return (
        <div style={{ width: '100%', backgroundColor: '#f5f3ff', padding: '80px 0' }}>
            <center>
                <div style={containerStyle}>
                    <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                        <tbody>
                            <tr>
                                <td style={{ padding: '0' }}>
                                    <EditableImg
                                        field="image"
                                        src={data.image || "https://images.unsplash.com/photo-1591115765373-520b7a42ec19?w=1200&h=600&fit=crop&q=80"}
                                        label="Webinar Banner"
                                        onImageClick={onImageClick}
                                        uneditable={uneditable}
                                        style={{ display: 'block', width: '100%', height: 'auto', border: 'none' }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ padding: '56px 40px', textAlign: 'center' }}>
                                    <div style={{ marginBottom: '16px' }}>
                                        <span style={{ backgroundColor: webinarTheme.accent, color: webinarTheme.primary, fontSize: '12px', fontWeight: '800', padding: '6px 16px', borderRadius: '100px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                            Live Webinar
                                        </span>
                                    </div>
                                    <EditableText
                                        field="title"
                                        value={data.title || "Mastering the Future of AI with Botivate"}
                                        isHeader
                                        onUpdate={onUpdate}
                                        uneditable={uneditable}
                                        style={{ fontSize: '32px', fontWeight: '900', color: webinarTheme.secondary, margin: '0 0 20px 0', lineHeight: '1.2', letterSpacing: '-0.02em' }}
                                    />
                                    <EditableText
                                        field="content"
                                        value={data.content || "Join our experts for an exclusive deep dive into the latest automation strategies that are helping teams save 20+ hours every week."}
                                        onUpdate={onUpdate}
                                        uneditable={uneditable}
                                        style={{ fontSize: '17px', color: SaasThemeText, margin: '0 0 40px 0', lineHeight: '1.6' }}
                                    />

                                    <div style={{ backgroundColor: '#f8fafc', padding: '24px', borderRadius: '16px', marginBottom: '40px' }}>
                                        <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                                            <tbody>
                                                <tr>
                                                    <td align="center" style={{ borderRight: '1px solid #e2e8f0' }}>
                                                        <div style={{ fontSize: '13px', color: '#94a3b8', fontWeight: 'bold', marginBottom: '4px' }}>DATE</div>
                                                        <div style={{ fontSize: '16px', fontWeight: '800', color: webinarTheme.secondary }}>OCT 24, 2026</div>
                                                    </td>
                                                    <td align="center">
                                                        <div style={{ fontSize: '13px', color: '#94a3b8', fontWeight: 'bold', marginBottom: '4px' }}>TIME</div>
                                                        <div style={{ fontSize: '16px', fontWeight: '800', color: webinarTheme.secondary }}>10:00 AM EST</div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <Button
                                        text={data.ctaText || "Save Your Spot"}
                                        href={data.ctaLink || "#"}
                                        style={{
                                            backgroundColor: webinarTheme.primary,
                                            color: '#ffffff',
                                            padding: '20px 48px',
                                            borderRadius: '12px',
                                            fontSize: '16px',
                                            fontWeight: 'bold',
                                            border: 'none',
                                            width: '100%',
                                            boxShadow: '0 10px 15px -3px rgba(124, 58, 237, 0.3)'
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


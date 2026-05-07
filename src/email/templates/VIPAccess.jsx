import React from "react";
import { EditableText, EditableImg, Button } from "../elements/Shared";

export const VIPAccess = ({ data, onUpdate, onImageClick, uneditable }) => {
    const SaasThemeText = "#475569";
    const SaasThemeFontFamily = "'Inter', system-ui, sans-serif";

    const vipTheme = {
        primary: "#d4af37", // Gold
        secondary: "#111111", // Deep Black
        background: "#1a1a1a", // Charcoal
        text: SaasThemeText
    };

    const containerStyle = {
        maxWidth: '560px',
        margin: '0 auto',
        backgroundColor: vipTheme.secondary,
        borderRadius: '0px', // Sharp, editorial look
        overflow: 'hidden',
        boxShadow: '0 50px 100px -20px rgba(0, 0, 0, 0.5)',
        fontFamily: SaasThemeFontFamily
    };

    return (
        <div style={{ width: '100%', backgroundColor: vipTheme.background, padding: '80px 0' }}>
            <center>
                <div style={containerStyle}>
                    <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                        <tbody>
                            <tr>
                                <td style={{ padding: '0' }}>
                                    <EditableImg
                                        field="image"
                                        src={data.image || "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1200&h=800&fit=crop&q=80"}
                                        label="VIP Experience"
                                        onImageClick={onImageClick}
                                        uneditable={uneditable}
                                        style={{ display: 'block', width: '100%', height: 'auto', border: 'none', filter: 'grayscale(0.2) contrast(1.1)' }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ padding: '64px 48px', textAlign: 'center' }}>
                                    <div style={{ marginBottom: '20px' }}>
                                        <div style={{ color: vipTheme.primary, fontSize: '11px', fontWeight: '900', letterSpacing: '5px', textTransform: 'uppercase', marginBottom: '24px' }}>
                                            MEMBERS ONLY
                                        </div>
                                    </div>
                                    <EditableText
                                        field="title"
                                        value={data.title || "The Obsidian Collective"}
                                        isHeader
                                        onUpdate={onUpdate}
                                        uneditable={uneditable}
                                        style={{ fontSize: '42px', fontWeight: '400', color: '#ffffff', margin: '0 0 24px 0', lineHeight: '1.2' }}
                                    />
                                    <EditableText
                                        field="content"
                                        value={data.content || "Your presence has been requested at our most exclusive event of the year. An evening of unparalleled access and refined discovery awaits."}
                                        onUpdate={onUpdate}
                                        uneditable={uneditable}
                                        style={{ fontSize: '18px', lineHeight: '1.8', color: SaasThemeText, margin: '0 0 48px 0', fontFamily: "'Inter', sans-serif" }}
                                    />

                                    <Button
                                        text={data.ctaText || "Claim Your Invitation"}
                                        href={data.ctaLink || "#"}
                                        style={{
                                            backgroundColor: vipTheme.primary,
                                            color: vipTheme.secondary,
                                            padding: '20px 48px',
                                            borderRadius: '0px',
                                            fontSize: '14px',
                                            fontWeight: '900',
                                            border: 'none',
                                            textTransform: 'uppercase',
                                            letterSpacing: '3px'
                                        }}
                                    />

                                    <div style={{ marginTop: '64px', paddingTop: '48px', borderTop: '1px solid #333333' }}>
                                        <p style={{ fontSize: '11px', color: '#666666', margin: 0, letterSpacing: '2px', textTransform: 'uppercase' }}>
                                            Strictly Confidential • Non-Transferable
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


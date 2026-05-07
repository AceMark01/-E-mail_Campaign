import React from "react";
import { EditableText, EditableImg, Button } from "../elements/Shared";

export const HalloweenParty = ({ data, onUpdate, onImageClick, uneditable }) => {
    const SaasThemeText = "#94a3b8";
    const SaasThemeFontFamily = "'Inter', system-ui, sans-serif";

    const spookyTheme = {
        primary: "#bef264", // Lime 300 (Acid Green)
        secondary: "#a855f7", // Purple 500
        accent: "#f97316", // Orange 500
        background: "#020617", // Slate 950
        text: SaasThemeText
    };

    const containerStyle = {
        maxWidth: '560px',
        margin: '0 auto',
        backgroundColor: '#0f172a',
        borderRadius: '0px',
        overflow: 'hidden',
        boxShadow: `0 0 50px -10px ${spookyTheme.secondary}44`,
        fontFamily: SaasThemeFontFamily,
        border: `1px solid ${spookyTheme.secondary}33`
    };

    return (
        <div style={{ width: '100%', backgroundColor: spookyTheme.background, padding: '80px 0' }}>
            <center>
                <div style={containerStyle}>
                    <div style={{ backgroundColor: spookyTheme.secondary, padding: '12px', textAlign: 'center' }}>
                        <span style={{ color: '#ffffff', fontSize: '11px', fontWeight: '900', letterSpacing: '4px' }}>
                            // SYSTEM_STATUS: HAUNTED
                        </span>
                    </div>

                    <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                        <tbody>
                            <tr>
                                <td style={{ padding: '0' }}>
                                    <EditableImg
                                        field="image"
                                        src={data.image || "https://images.unsplash.com/photo-1508361001413-7a9dca21d08a?w=1200&h=600&fit=crop&q=80"}
                                        label="Halloween Atmosphere Visual"
                                        onImageClick={onImageClick}
                                        uneditable={uneditable}
                                        style={{ display: 'block', width: '100%', height: 'auto', border: 'none', filter: 'grayscale(0.5) contrast(1.2)' }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ padding: '64px 48px', textAlign: 'center' }}>
                                    <div style={{ marginBottom: '16px' }}>
                                        <span style={{
                                            color: spookyTheme.primary,
                                            fontSize: '12px',
                                            fontWeight: '900',
                                            textTransform: 'uppercase',
                                            letterSpacing: '3px'
                                        }}>
                                            The Witching Hour
                                        </span>
                                    </div>
                                    <EditableText
                                        field="title"
                                        value={data.title || "TREATS OR TRICKS?"}
                                        isHeader
                                        onUpdate={onUpdate}
                                        uneditable={uneditable}
                                        style={{
                                            fontSize: '56px',
                                            fontWeight: '900',
                                            color: '#ffffff',
                                            margin: '0 0 24px 0',
                                            lineHeight: '0.9',
                                            letterSpacing: '-0.05em',
                                            textShadow: `0 0 20px ${spookyTheme.primary}44`
                                        }}
                                    />
                                    <EditableText
                                        field="content"
                                        value={data.content || "Night falls and the grid becomes a playground for the supernatural. Our most haunting collection has arrived. Enter the void before dawn breaks."}
                                        onUpdate={onUpdate}
                                        uneditable={uneditable}
                                        style={{ fontSize: '18px', color: SaasThemeText, margin: '0 0 48px 0', lineHeight: '1.6' }}
                                    />

                                    <Button
                                        text={data.ctaText || "Unveil the Spells"}
                                        href={data.ctaLink || "#"}
                                        style={{
                                            backgroundColor: spookyTheme.primary,
                                            color: '#000000',
                                            padding: '24px 64px',
                                            borderRadius: '0px',
                                            fontSize: '15px',
                                            fontWeight: 'bold',
                                            border: 'none',
                                            width: '100%',
                                            letterSpacing: '3px',
                                            display: 'inline-block'
                                        }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ padding: '32px', borderTop: `1px solid ${spookyTheme.secondary}22`, textAlign: 'center' }}>
                                    <p style={{ margin: 0, color: spookyTheme.accent, fontSize: '11px', fontWeight: '900', letterSpacing: '3px' }}>
                                        🎃 NO ESCAPE FROM SAVINGS 🎃
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

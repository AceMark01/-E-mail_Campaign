import React from "react";
import { EditableText, EditableImg, Button } from "../elements/Shared";

export const CyberMonday = ({ data, onUpdate, onImageClick, uneditable }) => {
    const SaasThemeText = "#94a3b8";
    const SaasThemeFontFamily = "'JetBrains Mono', monospace, system-ui";

    const cyberTheme = {
        primary: "#22d3ee", // Cyan 400
        secondary: "#a855f7", // Purple 500
        background: "#020617", // Slate 950
        accent: "#1e1b4b", // Indigo 950
        text: SaasThemeText
    };

    const containerStyle = {
        maxWidth: '560px',
        margin: '0 auto',
        backgroundColor: '#0f172a',
        borderRadius: '0px',
        overflow: 'hidden',
        border: `1px solid ${cyberTheme.primary}`,
        boxShadow: `0 0 40px -10px ${cyberTheme.primary}44`,
        fontFamily: SaasThemeFontFamily
    };

    return (
        <div style={{ width: '100%', backgroundColor: cyberTheme.background, padding: '80px 0' }}>
            <center>
                <div style={containerStyle}>
                    <div style={{
                        background: `linear-gradient(90deg, ${cyberTheme.secondary}, ${cyberTheme.primary})`,
                        padding: '12px',
                        textAlign: 'center'
                    }}>
                        <span style={{ color: '#ffffff', fontSize: '11px', fontWeight: '900', letterSpacing: '4px' }}>
                            [ INITIATING_PRICE_DROP_PROTOCOL ]
                        </span>
                    </div>

                    <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                        <tbody>
                            <tr>
                                <td style={{ padding: '24px', backgroundColor: '#000000' }}>
                                    <div style={{ border: `1px solid ${cyberTheme.primary}44`, padding: '8px' }}>
                                        <EditableImg
                                            field="image"
                                            src={data.image || "https://images.unsplash.com/photo-1531297172868-9f1d1b53e9ff?w=1200&h=600&fit=crop&q=80"}
                                            label="Digital Impact Visual"
                                            onImageClick={onImageClick}
                                            uneditable={uneditable}
                                            style={{ display: 'block', width: '100%', height: 'auto', border: 'none', filter: 'hue-rotate(180deg) brightness(0.8)' }}
                                        />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ padding: '64px 48px', textAlign: 'center' }}>
                                    <div style={{ marginBottom: '16px' }}>
                                        <div style={{
                                            display: 'inline-block',
                                            padding: '4px 16px',
                                            border: `1px solid ${cyberTheme.primary}`,
                                            color: cyberTheme.primary,
                                            fontSize: '10px',
                                            fontWeight: 'bold',
                                            textTransform: 'uppercase',
                                            letterSpacing: '2px'
                                        }}>
                                            Access Granted
                                        </div>
                                    </div>
                                    <EditableText
                                        field="title"
                                        value={data.title || "CYBER MONDAY"}
                                        isHeader
                                        onUpdate={onUpdate}
                                        uneditable={uneditable}
                                        style={{
                                            fontSize: '56px',
                                            fontWeight: '900',
                                            color: '#ffffff',
                                            margin: '0 0 20px 0',
                                            lineHeight: '1',
                                            letterSpacing: '-0.05em',
                                            textShadow: `0 0 15px ${cyberTheme.primary}44`
                                        }}
                                    />
                                    <EditableText
                                        field="content"
                                        value={data.content || "The digital grid is reaching peak capacity. Our most powerful technologies are now available at unprecedented scales. Do not let the signal fade."}
                                        onUpdate={onUpdate}
                                        uneditable={uneditable}
                                        style={{ fontSize: '16px', color: SaasThemeText, margin: '0 0 48px 0', lineHeight: '1.6' }}
                                    />

                                    <Button
                                        text={data.ctaText || "Download Deal Package"}
                                        href={data.ctaLink || "#"}
                                        style={{
                                            backgroundColor: 'transparent',
                                            color: cyberTheme.primary,
                                            padding: '20px 48px',
                                            borderRadius: '0px',
                                            fontSize: '15px',
                                            fontWeight: 'bold',
                                            border: `2px solid ${cyberTheme.primary}`,
                                            width: '100%',
                                            letterSpacing: '2px'
                                        }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ padding: '32px', borderTop: `1px solid ${cyberTheme.primary}22`, textAlign: 'center' }}>
                                    <p style={{ margin: 0, color: cyberTheme.secondary, fontSize: '11px', fontWeight: '900', letterSpacing: '4px' }}>
                                        [ END_OF_LINE ]
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



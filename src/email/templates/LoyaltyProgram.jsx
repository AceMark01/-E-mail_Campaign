import React from "react";
import { EditableText, EditableImg, Button } from "../elements/Shared";

export const LoyaltyProgram = ({ data, onUpdate, onImageClick, uneditable }) => {
    const SaasThemeText = "#94a3b8";
    const SaasThemeFontFamily = "'Inter', system-ui, sans-serif";

    const loyaltyTheme = {
        primary: "#e2e8f0", // Slate 200 (Silver)
        secondary: "#1e1b4b", // Indigo 950
        accent: "#6366f1", // Indigo 500
        background: "#000000",
        text: SaasThemeText
    };

    const containerStyle = {
        maxWidth: '520px',
        margin: '0 auto',
        backgroundColor: '#0f172a',
        borderRadius: '0px',
        overflow: 'hidden',
        boxShadow: '0 25px 50px -12px rgba(99, 102, 241, 0.1)',
        fontFamily: SaasThemeFontFamily,
        border: `1px solid ${loyaltyTheme.primary}22`
    };

    return (
        <div style={{ width: '100%', backgroundColor: loyaltyTheme.background, padding: '80px 0' }}>
            <center>
                <div style={containerStyle}>
                    <div style={{ backgroundColor: '#1e293b', padding: '12px', textAlign: 'center' }}>
                        <span style={{ color: loyaltyTheme.primary, fontSize: '11px', fontWeight: '900', letterSpacing: '4px' }}>
                            EXCLUSIVE MEMBER STATUS
                        </span>
                    </div>

                    <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                        <tbody>
                            <tr>
                                <td style={{ padding: '0' }}>
                                    <EditableImg
                                        field="image"
                                        src={data.image || "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1200&h=600&fit=crop&q=80"}
                                        label="Member Benefit Visual"
                                        onImageClick={onImageClick}
                                        uneditable={uneditable}
                                        style={{ display: 'block', width: '100%', height: 'auto', border: 'none', filter: 'contrast(1.1) brightness(0.9)' }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ padding: '72px 48px', textAlign: 'center' }}>
                                    <div style={{ marginBottom: '16px' }}>
                                        <div style={{
                                            display: 'inline-block',
                                            padding: '4px 20px',
                                            backgroundColor: loyaltyTheme.accent,
                                            color: '#ffffff',
                                            fontSize: '10px',
                                            fontWeight: 'bold',
                                            textTransform: 'uppercase',
                                            letterSpacing: '3px'
                                        }}>
                                            Premium Tier
                                        </div>
                                    </div>
                                    <EditableText
                                        field="title"
                                        value={data.title || "ESTEEMED STATUS"}
                                        isHeader
                                        onUpdate={onUpdate}
                                        uneditable={uneditable}
                                        style={{
                                            fontSize: '40px',
                                            fontWeight: '900',
                                            color: '#ffffff',
                                            margin: '0 0 24px 0',
                                            lineHeight: '1',
                                            letterSpacing: '2px'
                                        }}
                                    />
                                    <div style={{ width: '64px', height: '1px', backgroundColor: loyaltyTheme.primary, margin: '0 auto 32px' }}></div>
                                    <EditableText
                                        field="content"
                                        value={data.content || "Welcome to a world defined by exclusivity. Your loyalty has granted you access to rewards that go beyond the ordinary—from priority assistance to bespoke collections."}
                                        onUpdate={onUpdate}
                                        uneditable={uneditable}
                                        style={{ fontSize: '18px', color: SaasThemeText, margin: '0 0 48px 0', lineHeight: '1.8' }}
                                    />

                                    <Button
                                        text={data.ctaText || "VIEW PRIVATE HUB"}
                                        href={data.ctaLink || "#"}
                                        style={{
                                            backgroundColor: loyaltyTheme.primary,
                                            color: '#0f172a',
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
                                <td style={{ padding: '32px', backgroundColor: '#020617', textAlign: 'center' }}>
                                    <p style={{ margin: 0, color: loyaltyTheme.primary, fontSize: '11px', fontWeight: '900', letterSpacing: '4px' }}>
                                        INVITATION ONLY • NON-TRANSFERABLE
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




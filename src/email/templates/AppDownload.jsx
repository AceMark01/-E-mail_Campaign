import React from "react";
import { EditableText, EditableImg, Button } from "../elements/Shared";

export const AppDownload = ({ data, onUpdate, onImageClick, uneditable }) => {
    const SaasThemeText = "#94a3b8";
    const SaasThemeFontFamily = "'Inter', system-ui, sans-serif";

    const appTheme = {
        primary: "#6366f1", // Indigo 500
        secondary: "#8b5cf6", // Violet 500
        accent: "#f43f5e", // Rose 500
        background: "#020617", // Slate 950
        text: SaasThemeText
    };

    const containerStyle = {
        maxWidth: '480px',
        margin: '0 auto',
        backgroundColor: '#0f172a',
        borderRadius: '40px',
        overflow: 'hidden',
        border: '1px solid rgba(99, 102, 241, 0.2)',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        fontFamily: SaasThemeFontFamily,
        color: '#ffffff'
    };

    return (
        <div style={{ width: '100%', backgroundColor: appTheme.background, padding: '80px 0' }}>
            <center>
                <div style={containerStyle}>
                    <div style={{
                        background: `linear-gradient(135deg, ${appTheme.primary} 0%, ${appTheme.secondary} 100%)`,
                        padding: '72px 48px',
                        textAlign: 'center'
                    }}>
                        <div style={{ marginBottom: '24px' }}>
                            <EditableText
                                field="title"
                                value={data.title || "The Universe in Your Pocket"}
                                isHeader
                                onUpdate={onUpdate}
                                uneditable={uneditable}
                                style={{
                                    fontSize: '40px',
                                    fontWeight: '900',
                                    color: '#ffffff',
                                    margin: 0,
                                    lineHeight: '1.1',
                                    letterSpacing: '-0.05em'
                                }}
                            />
                        </div>

                        <div style={{ marginBottom: '48px' }}>
                            <EditableText
                                field="subtitle"
                                value={data.subtitle || "The future of automation is mobile. Experience Ace Mail's intelligent core anywhere, synchronized in real-time."}
                                onUpdate={onUpdate}
                                uneditable={uneditable}
                                style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', lineHeight: '1.6', fontWeight: '400' }}
                            />
                        </div>

                        <div style={{
                            display: 'inline-block',
                            backgroundColor: 'rgba(255,255,255,0.1)',
                            padding: '32px',
                            borderRadius: '32px',
                            marginBottom: '48px',
                            border: '1px solid rgba(255,255,255,0.2)',
                            backdropFilter: 'blur(12px)'
                        }}>
                            <div style={{ backgroundColor: '#ffffff', padding: '16px', borderRadius: '24px' }}>
                                <EditableImg
                                    field="qrCode"
                                    src={data.qrCode || "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://acemail.ai"}
                                    label="App Download QR"
                                    onImageClick={onImageClick}
                                    uneditable={uneditable}
                                    style={{ display: 'block', width: '180px', height: '180px', borderRadius: '12px' }}
                                />
                            </div>
                            <div style={{ marginTop: '20px', color: '#ffffff', fontSize: '11px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '4px' }}>
                                SCAN TO ACTIVATE
                            </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
                            <a href="#" style={{ textDecoration: 'none' }}>
                                <div style={{ backgroundColor: '#000000', color: '#ffffff', padding: '14px 28px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ fontSize: '24px', marginRight: '12px' }}></span>
                                    <div style={{ textAlign: 'left' }}>
                                        <div style={{ fontSize: '9px', fontWeight: 'bold', opacity: '0.6', textTransform: 'uppercase' }}>Available on</div>
                                        <div style={{ fontSize: '16px', fontWeight: 'bold' }}>App Store</div>
                                    </div>
                                </div>
                            </a>
                            <a href="#" style={{ textDecoration: 'none' }}>
                                <div style={{ backgroundColor: '#000000', color: '#ffffff', padding: '14px 28px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ fontSize: '24px', marginRight: '12px' }}>▶</span>
                                    <div style={{ textAlign: 'left' }}>
                                        <div style={{ fontSize: '9px', fontWeight: 'bold', opacity: '0.6', textTransform: 'uppercase' }}>Get it on</div>
                                        <div style={{ fontSize: '16px', fontWeight: 'bold' }}>Google Play</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div style={{ padding: '32px', textAlign: 'center', backgroundColor: '#020617' }}>
                        <span style={{ color: appTheme.accent, fontSize: '11px', fontWeight: '900', letterSpacing: '4px', textTransform: 'uppercase' }}>
                            v2.4.0 NOW STABLE • MOBILE EXCLUSIVES INSIDE
                        </span>
                    </div>
                </div>
            </center>
        </div>
    );
};




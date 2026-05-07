import React from "react";
import { EditableText, EditableImg, Button } from "../elements/Shared";

const SaasThemeText = "#475569";
const SaasThemeFontFamily = "'Inter', system-ui, sans-serif";
export const TrustPilot = ({ data, onUpdate, onImageClick, uneditable }) => {
    const trustTheme = {
        primary: "#00b67a", // Trustpilot Green
        secondary: "#0f172a", // Slate 900
        background: "#f8fafc",
        text: SaasThemeText
    };

    const containerStyle = {
        maxWidth: '520px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        borderRadius: '32px',
        overflow: 'hidden',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05)',
        fontFamily: SaasThemeFontFamily
    };

    return (
        <div style={{ width: '100%', backgroundColor: trustTheme.background, padding: '80px 0' }}>
            <center>
                <div style={containerStyle}>
                    <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                        <tbody>
                            <tr>
                                <td style={{ padding: '64px 48px', textAlign: 'center' }}>

                                    <div style={{ marginBottom: '32px' }}>
                                        <div style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '4px',
                                            backgroundColor: trustTheme.primary,
                                            padding: '8px 20px',
                                            borderRadius: '8px'
                                        }}>
                                            {[1, 2, 3, 4, 5].map(i => (
                                                <span key={i} style={{ color: '#ffffff', fontSize: '18px' }}>★</span>
                                            ))}
                                        </div>
                                        <div style={{ marginTop: '12px', fontSize: '13px', fontWeight: 'bold', color: trustTheme.primary }}>
                                            TRUSTED BY 10,000+ USERS
                                        </div>
                                    </div>

                                    <div style={{ marginBottom: '40px' }}>
                                        <EditableText
                                            field="reviewText"
                                            value={data.reviewText || "\"Botivate has completely redefined how we manage our internal communication. It's fast, intuitive, and genuinely delightful to use daily.\""}
                                            onUpdate={onUpdate}
                                            uneditable={uneditable}
                                            style={{ fontSize: '24px', fontWeight: '800', fontStyle: 'italic', color: trustTheme.secondary, margin: 0, lineHeight: '1.4', letterSpacing: '-0.02em' }}
                                        />
                                    </div>

                                    <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'left' }}>
                                        <div style={{
                                            width: '56px',
                                            height: '56px',
                                            backgroundColor: '#eff6ff',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginRight: '16px'
                                        }}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke={trustTheme.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div style={{ fontSize: '16px', fontWeight: '900', color: trustTheme.secondary }}>
                                                <EditableText
                                                    field="author"
                                                    value={data.author || "Sarah Jenkins"}
                                                    onUpdate={onUpdate}
                                                    uneditable={uneditable}
                                                />
                                            </div>
                                            <div style={{ fontSize: '13px', color: SaasThemeText, fontWeight: 'medium' }}>
                                                Product Lead at TechFlow
                                            </div>
                                        </div>
                                    </div>

                                    <div style={{ marginTop: '48px' }}>
                                        <Button
                                            text="Read More Customer Stories"
                                            href="#"
                                            style={{
                                                backgroundColor: trustTheme.secondary,
                                                color: '#ffffff',
                                                padding: '16px 32px',
                                                borderRadius: '12px',
                                                fontSize: '14px',
                                                fontWeight: 'bold',
                                                border: 'none'
                                            }}
                                        />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div style={{ marginTop: '32px' }}>
                    <p style={{ fontSize: '11px', color: '#94a3b8', fontWeight: '800', letterSpacing: '2px' }}>EXCELLENT ON TRUSTPILOT ★★★★★</p>
                </div>
            </center>
        </div>
    );
};



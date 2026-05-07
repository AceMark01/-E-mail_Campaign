import React from "react";
import { EditableText, EditableImg, Button } from "../elements/Shared";

export const ResetPassword = ({ data, onUpdate, onImageClick, uneditable }) => {
    const SaasThemeText = "#64748b";
    const SaasThemeFontFamily = "'Inter', system-ui, sans-serif";

    const securityTheme = {
        primary: "#4f46e5", // Indigo 600
        secondary: "#1e293b", // Slate 800
        background: "#f8fafc",
        text: SaasThemeText
    };

    const containerStyle = {
        maxWidth: '520px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        borderRadius: '24px',
        overflow: 'hidden',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05)',
        fontFamily: SaasThemeFontFamily
    };

    return (
        <div style={{ width: '100%', backgroundColor: securityTheme.background, padding: '80px 0' }}>
            <center>
                <div style={containerStyle}>
                    <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                        <tbody>
                            <tr>
                                <td style={{ padding: '60px 48px', textAlign: 'center' }}>
                                    <div style={{
                                        margin: '0 auto 32px auto',
                                        width: '80px',
                                        height: '80px',
                                        backgroundColor: '#f5f3ff',
                                        borderRadius: '24px',
                                        display: 'inline-block', // Better for email centering
                                        verticalAlign: 'middle',
                                        lineHeight: '80px',
                                        textAlign: 'center'
                                    }}>
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ verticalAlign: 'middle' }}>
                                            <path d="M12 15V17M6 21H18C19.1046 21 20 20.1046 20 19V13C20 11.8954 19.1046 11 18 11H6C4.89543 11 4 11.8954 4 13V19C4 20.1046 4.89543 21 6 21ZM16 11V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V11H16Z" stroke={securityTheme.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <EditableText
                                        field="title"
                                        value={data.title || "Reset your password"}
                                        isHeader
                                        onUpdate={onUpdate}
                                        uneditable={uneditable}
                                        style={{ fontSize: '30px', fontWeight: '900', color: securityTheme.secondary, margin: '0 0 16px 0', letterSpacing: '-0.025em' }}
                                    />
                                    <EditableText
                                        field="content"
                                        value={data.content || "We received a request to access your account. Click the button below to safely reset your password. This link will expire in 60 minutes."}
                                        onUpdate={onUpdate}
                                        uneditable={uneditable}
                                        style={{ fontSize: '16px', lineHeight: '1.6', color: SaasThemeText, margin: '0 0 40px 0' }}
                                    />

                                    <Button
                                        text="Secure Reset Password"
                                        href="#"
                                        style={{
                                            backgroundColor: securityTheme.primary,
                                            color: '#ffffff',
                                            padding: '18px 40px',
                                            borderRadius: '12px',
                                            fontSize: '15px',
                                            fontWeight: 'bold',
                                            border: 'none',
                                            width: '100%',
                                            display: 'inline-block'
                                        }}
                                    />

                                    <div style={{ marginTop: '40px', paddingTop: '40px', borderTop: '1px solid #f1f5f9' }}>
                                        <p style={{ fontSize: '13px', color: '#94a3b8', margin: 0 }}>
                                            Didn't request this? Please ignore this message or <a href="#" style={{ color: securityTheme.primary, textDecoration: 'none', fontWeight: 'bold' }}>contact support</a> if you have concerns.
                                        </p>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div style={{ marginTop: '32px' }}>
                    <p style={{ fontSize: '12px', color: '#94a3b8', fontWeight: 'bold' }}>SECURED BY BOTIVATE AUTH</p>
                </div>
            </center>
        </div>
    );
};

import React from "react";
import { EditableText, EditableImg, Button } from "../elements/Shared";

export const DeliverySuccess = ({ data, onUpdate, onImageClick, uneditable }) => {
    const SaasThemeText = "#064e3b";
    const SaasThemeFontFamily = "'Inter', system-ui, sans-serif";

    const successTheme = {
        primary: "#10b981", // Emerald 500
        secondary: "#ecfdf5", // Emerald 50
        accent: "#059669", // Emerald 600
        text: SaasThemeText
    };

    const containerStyle = {
        maxWidth: '600px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        borderRadius: '24px',
        overflow: 'hidden',
        border: `1px solid ${successTheme.primary}40`,
        boxShadow: '0 20px 25px -5px rgba(16, 185, 129, 0.1)',
        fontFamily: SaasThemeFontFamily
    };

    return (
        <div style={{ width: '100%', backgroundColor: successTheme.secondary, padding: '60px 0' }}>
            <center>
                <div style={containerStyle}>
                    <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                        <tbody>
                            <tr>
                                <td style={{ padding: '0' }}>
                                    <EditableImg
                                        field="image"
                                        src={data.image || "https://images.unsplash.com/photo-1586528116311-ad8ed7c80a30?w=600&h=300&fit=crop&q=80"}
                                        label="Delivery Image"
                                        onImageClick={onImageClick}
                                        uneditable={uneditable}
                                        style={{ display: 'block', width: '100%', height: 'auto' }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ padding: '48px 40px', textAlign: 'center' }}>
                                    {/* SUCCESS ICON OVERLAY */}
                                    <div style={{
                                        width: '64px',
                                        height: '64px',
                                        backgroundColor: successTheme.primary,
                                        borderRadius: '50%',
                                        margin: '-80px auto 24px',
                                        position: 'relative',
                                        border: '6px solid #ffffff',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                                    }}>
                                        <span style={{ color: '#fff', fontSize: '32px', fontWeight: 'bold' }}>✓</span>
                                    </div>

                                    <div style={{ marginBottom: '16px' }}>
                                        <EditableText
                                            field="title"
                                            value={data.title || "IT'S AT YOUR DOOR!"}
                                            isHeader
                                            onUpdate={onUpdate}
                                            uneditable={uneditable}
                                            style={{
                                                fontSize: '28px',
                                                fontWeight: '900',
                                                color: successTheme.text,
                                                margin: 0,
                                                lineHeight: '1.2',
                                                letterSpacing: '1px'
                                            }}
                                        />
                                    </div>
                                    <div style={{ marginBottom: '32px' }}>
                                        <EditableText
                                            field="content"
                                            value={data.content || "Great news! Your package has been securely delivered. We hope you enjoy your new purchase."}
                                            onUpdate={onUpdate}
                                            uneditable={uneditable}
                                            style={{ fontSize: '16px', color: '#4b5563', margin: 0, lineHeight: '1.6' }}
                                        />
                                    </div>
                                    <div style={{ marginBottom: '16px' }}>
                                        <Button
                                            text={data.ctaText || "Track My Orders"}
                                            href={data.ctaLink || "#"}
                                            style={{
                                                backgroundColor: successTheme.accent,
                                                color: '#ffffff',
                                                padding: '16px 40px',
                                                borderRadius: '12px',
                                                fontSize: '16px',
                                                fontWeight: 'bold',
                                                border: 'none',
                                                width: '100%',
                                                display: 'inline-block'
                                            }}
                                        />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* SUB-FOOTER */}
                <div style={{ marginTop: '24px' }}>
                    <p style={{ color: successTheme.accent, fontSize: '14px', fontWeight: 'bold' }}>
                        Need help? Contact our 24/7 support.
                    </p>
                </div>
            </center>
        </div>
    );
};



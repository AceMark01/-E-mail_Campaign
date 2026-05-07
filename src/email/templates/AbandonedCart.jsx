import React from "react";
import { EditableText, EditableImg, Button } from "../elements/Shared";

export const AbandonedCart = ({ data, onUpdate, onImageClick, uneditable }) => {
    const SaasThemeText = "#475569";
    const SaasThemeFontFamily = "'Inter', system-ui, sans-serif";

    const cartTheme = {
        primary: "#f43f5e", // Rose 500
        secondary: "#1e293b", // Slate 800
        accent: "#fff1f2", // Rose 50
        text: SaasThemeText
    };

    const containerStyle = {
        maxWidth: '560px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        borderRadius: '32px',
        overflow: 'hidden',
        boxShadow: '0 25px 50px -12px rgba(244, 63, 94, 0.1)',
        fontFamily: SaasThemeFontFamily
    };

    return (
        <div style={{ width: '100%', backgroundColor: '#fff8f8', padding: '80px 0' }}>
            <center>
                <div style={containerStyle}>
                    <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                        <tbody>
                            <tr>
                                <td align="center" style={{ padding: '64px 48px 48px 48px' }}>
                                    <div style={{
                                        width: '64px',
                                        height: '64px',
                                        backgroundColor: cartTheme.accent,
                                        borderRadius: '20px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginBottom: '24px'
                                    }}>
                                        <span style={{ fontSize: '32px' }}>✨</span>
                                    </div>
                                    <EditableText
                                        field="title"
                                        value={data.title || "Your cart misses you"}
                                        isHeader
                                        onUpdate={onUpdate}
                                        uneditable={uneditable}
                                        style={{ fontSize: '36px', fontWeight: '900', color: cartTheme.secondary, margin: '0 0 16px 0', lineHeight: '1.2', letterSpacing: '-0.025em' }}
                                    />
                                    <EditableText
                                        field="content"
                                        value={data.content || "We noticed you left some beautiful items behind. We've saved your bag so you can pick up exactly where you left off."}
                                        onUpdate={onUpdate}
                                        uneditable={uneditable}
                                        style={{ fontSize: '17px', color: SaasThemeText, margin: 0, lineHeight: '1.6' }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ padding: '0 48px' }}>
                                    <div style={{ borderRadius: '24px', overflow: 'hidden', border: '1px solid #f1f5f9' }}>
                                        <EditableImg
                                            field="image"
                                            src={data.image || "https://images.unsplash.com/photo-1549463591-24672e1b45ec?w=1000&h=600&fit=crop&q=80"}
                                            label="Abandoned Item"
                                            onImageClick={onImageClick}
                                            uneditable={uneditable}
                                            style={{ display: 'block', width: '100%', height: 'auto', border: 'none' }}
                                        />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td align="center" style={{ padding: '48px' }}>
                                    <Button
                                        text={data.ctaText || "Take Me to My Bag"}
                                        href={data.ctaLink || "#"}
                                        style={{
                                            backgroundColor: cartTheme.primary,
                                            color: '#ffffff',
                                            padding: '20px 48px',
                                            borderRadius: '16px',
                                            fontSize: '16px',
                                            fontWeight: 'bold',
                                            border: 'none',
                                            width: '100%',
                                            boxShadow: '0 10px 15px -3px rgba(244, 63, 94, 0.3)',
                                            display: 'inline-block'
                                        }}
                                    />
                                    <div style={{ marginTop: '32px' }}>
                                        <p style={{ margin: 0, color: '#94a3b8', fontSize: '13px', fontWeight: 'bold' }}>
                                            FREE SHIPPING APPLIED TO YOUR ORDER
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

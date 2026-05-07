import React from "react";
import { EditableText, EditableImg, Button } from "../elements/Shared";

export const OrderShipped = ({ data, onUpdate, onImageClick, uneditable }) => {
    const SaasThemeText = "#475569";
    const SaasThemeFontFamily = "'Inter', system-ui, sans-serif";

    const shippedTheme = {
        primary: "#f97316", // Orange 500
        secondary: "#0f172a", // Slate 900
        background: "#f1f5f9",
        text: SaasThemeText
    };

    const containerStyle = {
        maxWidth: '560px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        borderRadius: '32px',
        overflow: 'hidden',
        boxShadow: '0 25px 50px -12px rgba(249, 115, 22, 0.1)',
        fontFamily: SaasThemeFontFamily
    };

    return (
        <div style={{ width: '100%', backgroundColor: shippedTheme.background, padding: '80px 0' }}>
            <center>
                <div style={containerStyle}>
                    <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                        <tbody>
                            <tr>
                                <td style={{ padding: '48px 40px', textAlign: 'center' }}>
                                    <div style={{ marginBottom: '24px' }}>
                                        <span style={{ color: shippedTheme.primary, fontSize: '13px', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase' }}>
                                            Great News
                                        </span>
                                    </div>
                                    <EditableText
                                        field="title"
                                        value={data.title || "Your Order is on its Way"}
                                        isHeader
                                        onUpdate={onUpdate}
                                        uneditable={uneditable}
                                        style={{ fontSize: '36px', fontWeight: '900', color: shippedTheme.secondary, margin: '0 0 16px 0', lineHeight: '1.2', letterSpacing: '-0.025em' }}
                                    />
                                    <EditableText
                                        field="content"
                                        value={data.content || "Get ready! Your package has been handed over to our carrier and is currently in transit to your doorstep."}
                                        onUpdate={onUpdate}
                                        uneditable={uneditable}
                                        style={{ fontSize: '18px', color: SaasThemeText, margin: '0 0 40px 0', lineHeight: '1.6' }}
                                    />
                                    <div style={{ padding: '32px', backgroundColor: '#fff7ed', borderRadius: '24px', border: `1px dashed ${shippedTheme.primary}`, marginBottom: '40px' }}>
                                        <span style={{ fontSize: '12px', fontWeight: '800', color: shippedTheme.primary, textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '8px' }}>Tracking Number</span>
                                        <div style={{ fontSize: '24px', fontWeight: '900', color: shippedTheme.secondary, letterSpacing: '2px' }}>TRK-992011482</div>
                                    </div>
                                    <Button
                                        text={data.ctaText || "Track My Package"}
                                        href={data.ctaLink || "#"}
                                        style={{
                                            backgroundColor: shippedTheme.primary,
                                            color: '#ffffff',
                                            padding: '18px 48px',
                                            borderRadius: '16px',
                                            fontSize: '16px',
                                            fontWeight: 'bold',
                                            border: 'none',
                                            boxShadow: '0 10px 15px -3px rgba(249, 115, 22, 0.4)',
                                            display: 'inline-block'
                                        }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ padding: '0 40px 48px 40px' }}>
                                    <EditableImg
                                        field="image"
                                        src={data.image || "https://images.unsplash.com/photo-1586528116311-ad8665792da5?w=1000&h=500&fit=crop&q=80"}
                                        label="Shipping Image"
                                        onImageClick={onImageClick}
                                        uneditable={uneditable}
                                        style={{ display: 'block', width: '100%', height: 'auto', borderRadius: '20px' }}
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



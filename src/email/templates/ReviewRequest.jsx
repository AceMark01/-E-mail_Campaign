import React from "react";
import { EditableText, EditableImg, Button } from "../elements/Shared";

export const ReviewRequest = ({ data, onUpdate, onImageClick, uneditable }) => {
    const SaasThemeText = "#475569";
    const SaasThemeFontFamily = "'Inter', system-ui, sans-serif";

    const reviewTheme = {
        primary: "#f59e0b", // Amber 500
        secondary: "#0f172a", // Slate 900
        background: "#fffbeb", // Amber 50
        text: SaasThemeText
    };

    const containerStyle = {
        maxWidth: '560px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        borderRadius: '32px',
        overflow: 'hidden',
        boxShadow: '0 20px 25px -5px rgba(245, 158, 11, 0.1)',
        fontFamily: SaasThemeFontFamily
    };

    return (
        <div style={{ width: '100%', backgroundColor: reviewTheme.background, padding: '80px 0' }}>
            <center>
                <div style={containerStyle}>
                    <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                        <tbody>
                            <tr>
                                <td style={{ padding: '64px 48px', textAlign: 'center' }}>
                                    <div style={{ marginBottom: '24px' }}>
                                        <div style={{
                                            display: 'inline-flex',
                                            gap: '4px',
                                            padding: '8px 16px',
                                            backgroundColor: '#fef3c7',
                                            borderRadius: '100px',
                                            marginBottom: '24px'
                                        }}>
                                            {[1, 2, 3, 4, 5].map(i => (
                                                <span key={i} style={{ color: reviewTheme.primary, fontSize: '18px' }}>★</span>
                                            ))}
                                        </div>
                                    </div>

                                    <EditableText
                                        field="title"
                                        value={data.title || "How did we do?"}
                                        isHeader
                                        onUpdate={onUpdate}
                                        uneditable={uneditable}
                                        style={{ fontSize: '36px', fontWeight: '900', color: reviewTheme.secondary, margin: '0 0 16px 0', letterSpacing: '-0.025em' }}
                                    />
                                    <EditableText
                                        field="content"
                                        value={data.content || "Your feedback helps us grow. We'd love to hear about your recent experience and how we can make it even better next time."}
                                        onUpdate={onUpdate}
                                        uneditable={uneditable}
                                        style={{ fontSize: '18px', lineHeight: '1.6', color: SaasThemeText, margin: '0 0 40px 0' }}
                                    />

                                    <div style={{ marginBottom: '40px' }}>
                                        <Button
                                            text={data.ctaText || "Share Your Feedback"}
                                            href={data.ctaLink || "#"}
                                            style={{
                                                backgroundColor: reviewTheme.secondary,
                                                color: '#ffffff',
                                                padding: '20px 48px',
                                                borderRadius: '16px',
                                                fontSize: '16px',
                                                fontWeight: 'bold',
                                                border: 'none',
                                                width: '100%',
                                                display: 'inline-block'
                                            }}
                                        />
                                    </div>

                                    <div style={{ padding: '32px', backgroundColor: '#f8fafc', borderRadius: '24px', textAlign: 'left' }}>
                                        <div style={{ fontSize: '14px', fontWeight: 'bold', color: reviewTheme.secondary, marginBottom: '8px' }}>P.S. We appreciate you!</div>
                                        <div style={{ fontSize: '14px', color: SaasThemeText, lineHeight: '1.5' }}>
                                            As a thank you for your time, we'll send you a 15% discount code once your review is submitted.
                                        </div>
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

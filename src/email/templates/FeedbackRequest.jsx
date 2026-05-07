import React from "react";
import { EditableText, EditableImg, Button, StandardHeader } from "../elements/Shared";

export const FeedbackRequest = ({ data, onUpdate, onImageClick, uneditable }) => {
    const SaasThemeText = "#475569";
    const SaasThemeFontFamily = "'Inter', system-ui, sans-serif";
    const feedbackTheme = {
        primary: "#3b82f6", // Blue 500
        secondary: "#eff6ff", // Blue 50
        text: "#1e293b",
        muted: "#64748b"
    };

    return (
        <div style={{ width: '100%', backgroundColor: feedbackTheme.secondary, padding: '60px 0', fontFamily: "'Inter', sans-serif" }}>
            <center>
                <table border="0" cellPadding="0" cellSpacing="0" width="100%" style={{ maxWidth: '500px', backgroundColor: '#ffffff', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05)' }}>
                    <tbody>
                        <tr>
                            <td>
                                <StandardHeader uneditable={uneditable} />

                                <div style={{ padding: '56px 40px', textAlign: 'center' }}>
                                    <div style={{ marginBottom: '24px' }}>
                                        <div style={{ display: 'inline-block', backgroundColor: '#dbeafe', padding: '12px', borderRadius: '16px', marginBottom: '24px' }}>
                                            <span style={{ fontSize: '32px' }}>💬</span>
                                        </div>
                                        <EditableText
                                            field="title"
                                            value={data.title || "Your voice matters."}
                                            isHeader
                                            onUpdate={onUpdate}
                                            uneditable={uneditable}
                                            style={{ fontSize: '32px', fontWeight: '800', color: feedbackTheme.text, margin: '0 0 16px 0', letterSpacing: '-0.025em' }}
                                        />
                                        <EditableText
                                            field="subtitle"
                                            value={data.subtitle || "We're constantly looking for ways to improve. Could you spare a minute to tell us how we're doing?"}
                                            onUpdate={onUpdate}
                                            uneditable={uneditable}
                                            style={{ fontSize: '17px', lineHeight: '1.6', color: feedbackTheme.muted, margin: '0' }}
                                        />
                                    </div>

                                    {/* NPS Stars Mockup */}
                                    <div style={{ backgroundColor: '#f8fafc', padding: '32px', borderRadius: '16px', marginBottom: '40px' }}>
                                        <p style={{ margin: '0 0 20px 0', fontSize: '13px', fontWeight: 'bold', color: feedbackTheme.primary, textTransform: 'uppercase', letterSpacing: '1px' }}>
                                            Rate your experience
                                        </p>
                                        <table border="0" cellPadding="0" cellSpacing="0" align="center">
                                            <tbody>
                                                <tr>
                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                        <td key={star} style={{ padding: '0 8px' }}>
                                                            <a href="#" style={{ textDecoration: 'none', fontSize: '36px', color: '#fbbf24' }}>★</a>
                                                        </td>
                                                    ))}
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px', padding: '0 10px' }}>
                                            <span style={{ fontSize: '11px', color: feedbackTheme.muted, fontWeight: '600' }}>Not Satisfied</span>
                                            <span style={{ fontSize: '11px', color: feedbackTheme.muted, fontWeight: '600' }}>Very Satisfied</span>
                                        </div>
                                    </div>

                                    <Button
                                        text="Leave Detailed Feedback"
                                        href="#"
                                        style={{
                                            backgroundColor: feedbackTheme.text,
                                            color: '#ffffff',
                                            padding: '16px 32px',
                                            borderRadius: '12px',
                                            fontWeight: 'bold',
                                            fontSize: '15px'
                                        }}
                                    />
                                </div>

                                <div style={{ padding: '32px', textAlign: 'center', borderTop: '1px solid #f1f5f9' }}>
                                    <p style={{ margin: 0, color: feedbackTheme.muted, fontSize: '14px' }}>
                                        Thanks for helping us grow! 🚀
                                    </p>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </center>
        </div>
    );
};


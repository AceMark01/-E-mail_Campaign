import React from "react";
import { EditableText, EditableImg, Button } from "../elements/Shared";

export const OrderConfirmation = ({ data, onUpdate, onImageClick, uneditable }) => {
    const SaasThemeSecondary = "#0f172a";
    const SaasThemeFontFamily = "'Inter', system-ui, sans-serif";

    const orderTheme = {
        primary: "#10b981", // Emerald 500
        secondary: SaasThemeSecondary, // Slate 900
        background: "#f8fafc",
        text: "#475569"
    };

    const containerStyle = {
        maxWidth: '560px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        borderRadius: '24px',
        overflow: 'hidden',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05)',
        fontFamily: SaasThemeFontFamily
    };

    return (
        <div style={{ width: '100%', backgroundColor: orderTheme.background, padding: '80px 0' }}>
            <center>
                <div style={containerStyle}>
                    <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                        <tbody>
                            <tr>
                                <td style={{ padding: '48px 40px', textAlign: 'center', backgroundColor: '#fdfdfd' }}>
                                    <div style={{ padding: '24px', backgroundColor: '#ecfdf5', borderRadius: '100px', display: 'inline-block', marginBottom: '24px' }}>
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={orderTheme.primary} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </div>
                                    <EditableText
                                        field="title"
                                        value={data.title || "Order Confirmed"}
                                        isHeader
                                        onUpdate={onUpdate}
                                        uneditable={uneditable}
                                        style={{ fontSize: '32px', fontWeight: '900', color: SaasThemeSecondary, margin: '0 0 12px 0', letterSpacing: '-0.025em' }}
                                    />
                                    <p style={{ margin: 0, fontSize: '16px', color: orderTheme.text }}>
                                        We're getting your order ready for you.
                                    </p>
                                </td>
                            </tr>

                            <tr>
                                <td style={{ padding: '0 40px' }}>
                                    <div style={{ border: '1px solid #f1f5f9', borderRadius: '16px', padding: '32px' }}>
                                        <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                                            <tbody>
                                                <tr>
                                                    <td style={{ paddingBottom: '24px' }}>
                                                        <span style={{ fontSize: '12px', fontWeight: '800', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px' }}>Order Number</span>
                                                        <div style={{ fontSize: '16px', fontWeight: '700', color: SaasThemeSecondary }}>#<EditableText field="orderId" value={data.orderId || "7721-09AS"} onUpdate={onUpdate} uneditable={uneditable} style={{ display: 'inline' }} /></div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style={{ padding: '24px 0', borderTop: '1px solid #f1f5f9' }}>
                                                        <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                                                            <tbody>
                                                                <tr>
                                                                    <td style={{ fontSize: '15px', color: SaasThemeSecondary, fontWeight: '500' }}>Cloud Hosting Elite (Annual)</td>
                                                                    <td align="right" style={{ fontSize: '15px', color: SaasThemeSecondary, fontWeight: '700' }}>$299.00</td>
                                                                </tr>
                                                                <tr><td height="12"></td></tr>
                                                                <tr>
                                                                    <td style={{ fontSize: '14px', color: orderTheme.text }}>Priority Support Add-on</td>
                                                                    <td align="right" style={{ fontSize: '14px', color: orderTheme.text }}>$49.00</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style={{ padding: '24px 0 0 0', borderTop: '2px solid #f1f5f9' }}>
                                                        <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                                                            <tbody>
                                                                <tr>
                                                                    <td style={{ fontSize: '18px', color: SaasThemeSecondary, fontWeight: '800' }}>Total Paid</td>
                                                                    <td align="right" style={{ fontSize: '24px', color: orderTheme.primary, fontWeight: '900' }}>$348.00</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td style={{ padding: '48px 40px', textAlign: 'center' }}>
                                    <Button
                                        text="Review Order Details"
                                        href="#"
                                        style={{
                                            backgroundColor: SaasThemeSecondary,
                                            color: '#ffffff',
                                            padding: '16px 36px',
                                            borderRadius: '12px',
                                            fontSize: '15px',
                                            fontWeight: 'bold',
                                            border: 'none',
                                            width: '100%',
                                            display: 'inline-block'
                                        }}
                                    />
                                    <p style={{ margin: '24px 0 0 0', fontSize: '13px', color: '#94a3b8' }}>
                                        A copy of this receipt has been sent to your email.
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

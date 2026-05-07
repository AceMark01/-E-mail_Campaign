import React from "react";
import { EditableText, EditableImg, Button } from "../elements/Shared";

export const ReferAFriend = ({ data, onUpdate, onImageClick, uneditable }) => {

    const SaasThemeText = "#4b5563";
    const SaasThemeFontFamily = "'Inter', system-ui, sans-serif";
    const referTheme = {
        primary: "#84cc16", // Lime 500
        secondary: "#14532d", // Forest Green 900
        background: "#f7fee7",
        text: SaasThemeText
    };
    const containerStyle = {
        maxWidth: '560px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        borderRadius: '32px',
        overflow: 'hidden',
        boxShadow: '0 25px 50px -12px rgba(132, 204, 22, 0.15)',
        fontFamily: SaasThemeFontFamily
    };
    return (
        <div style={{ width: '100%', backgroundColor: referTheme.background, padding: '80px 0' }}>
            <center>
                <div style={containerStyle}>
                    <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                        <tbody>
                            <tr>
                                <td style={{ padding: '0' }}>
                                    <EditableImg
                                        field="image"
                                        src={data.image || "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&h=600&fit=crop&q=80"}
                                        label="Friends Illustration"
                                        onImageClick={onImageClick}
                                        uneditable={uneditable}
                                        style={{ display: 'block', width: '100%', height: 'auto', border: 'none' }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ padding: '56px 40px', textAlign: 'center' }}>
                                    <div style={{ marginBottom: '16px' }}>
                                        <span style={{ backgroundColor: '#ecfdf5', color: '#059669', fontSize: '12px', fontWeight: '900', padding: '6px 16px', borderRadius: '100px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                            Sharing is Caring
                                        </span>
                                    </div>
                                    <EditableText
                                        field="title"
                                        value={data.title || "Give $20, Get $20"}
                                        isHeader
                                        onUpdate={onUpdate}
                                        uneditable={uneditable}
                                        style={{ fontSize: '40px', fontWeight: '900', color: referTheme.secondary, margin: '0 0 20px 0', lineHeight: '1.1', letterSpacing: '-0.02em' }}
                                    />
                                    <EditableText
                                        field="content"
                                        value={data.content || "Invite your friends to try Ace Mail. They'll get a $20 credit, and you'll get $20 added to your account when they sign up."}
                                        onUpdate={onUpdate}
                                        uneditable={uneditable}
                                        style={{ fontSize: '18px', color: SaasThemeText, margin: '0 0- 40px 0', lineHeight: '1.6' }}
                                    />

                                    <div style={{ backgroundColor: '#f8fafc', padding: '32px', borderRadius: '24px', border: '2px dashed #e2e8f0', marginBottom: '40px' }}>
                                        <div style={{ color: '#94a3b8', fontSize: '13px', fontWeight: '800', textTransform: 'uppercase', marginBottom: '12px', letterSpacing: '2px' }}>Your Referral Code</div>
                                        <div style={{ fontSize: '32px', fontWeight: '900', color: referTheme.secondary, letterSpacing: '8px' }}>FRIEND20</div>
                                    </div>

                                    <Button
                                        text={data.ctaText || "Invite Friends Now"}
                                        href={data.ctaLink || "#"}
                                        style={{
                                            backgroundColor: referTheme.primary,
                                            color: referTheme.secondary,
                                            padding: '20px 48px',
                                            borderRadius: '100px',
                                            fontSize: '16px',
                                            fontWeight: '900',
                                            border: 'none',
                                            boxShadow: '0 10px 20px rgba(132, 204, 22, 0.4)'
                                        }}
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


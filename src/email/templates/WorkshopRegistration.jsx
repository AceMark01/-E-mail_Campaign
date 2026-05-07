import React from "react";
import { EditableText, EditableImg, Button } from "../elements/Shared";

export const WorkshopRegistration = ({ data, onUpdate, onImageClick, uneditable }) => {
    const SaasThemeText = "#4b5563";
    const SaasThemeFontFamily = "'Inter', system-ui, sans-serif";

    const workshopTheme = {
        primary: "#059669", // Emerald 600
        secondary: "#111827", // Gray 900
        accent: "#ecfdf5", // Emerald 50
        text: SaasThemeText
    };

    const containerStyle = {
        maxWidth: '560px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        borderRadius: '24px',
        overflow: 'hidden',
        boxShadow: '0 20px 25px -5px rgba(5, 150, 105, 0.1)',
        fontFamily: SaasThemeFontFamily
    };

    return (
        <div style={{ width: '100%', backgroundColor: workshopTheme.accent, padding: '80px 0' }}>
            <center>
                <div style={containerStyle}>
                    <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                        <tbody>
                            <tr>
                                <td style={{ padding: '0' }}>
                                    <EditableImg
                                        field="image"
                                        src={data.image || "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&h=600&fit=crop&q=80"}
                                        label="Workshop Scene"
                                        onImageClick={onImageClick}
                                        uneditable={uneditable}
                                        style={{ display: 'block', width: '100%', height: 'auto', border: 'none' }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ padding: '56px 40px', textAlign: 'center' }}>
                                    <div style={{ marginBottom: '16px' }}>
                                        <span style={{ color: workshopTheme.primary, fontSize: '12px', fontWeight: '900', letterSpacing: '2px', textTransform: 'uppercase' }}>
                                            Skills Workshop 2026
                                        </span>
                                    </div>
                                    <EditableText
                                        field="title"
                                        value={data.title || "Mastering Modern Workflows"}
                                        isHeader
                                        onUpdate={onUpdate}
                                        uneditable={uneditable}
                                        style={{ fontSize: '32px', fontWeight: '900', color: workshopTheme.secondary, margin: '0 0 20px 0', lineHeight: '1.2', letterSpacing: '-0.025em' }}
                                    />
                                    <EditableText
                                        field="content"
                                        value={data.content || "Join our community of builders for an intensive, hands-on session where we break down complex scaling strategies into actionable steps."}
                                        onUpdate={onUpdate}
                                        uneditable={uneditable}
                                        style={{ fontSize: '17px', color: SaasThemeText, margin: '0 0 40px 0', lineHeight: '1.6' }}
                                    />

                                    <div style={{ padding: '32px', border: '2px dashed #d1fae5', borderRadius: '16px', marginBottom: '40px', backgroundColor: '#f9fafb' }}>
                                        <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                                            <tbody>
                                                <tr>
                                                    <td style={{ textAlign: 'left' }}>
                                                        <div style={{ fontSize: '14px', fontWeight: '800', color: workshopTheme.secondary }}>FACILITATOR</div>
                                                        <div style={{ fontSize: '16px', color: SaasThemeText }}>Alex Rivera, Lead Designer</div>
                                                    </td>
                                                    <td style={{ textAlign: 'right' }}>
                                                        <div style={{ fontSize: '14px', fontWeight: '800', color: workshopTheme.secondary }}>CAPACITY</div>
                                                        <div style={{ fontSize: '16px', color: SaasThemeText }}>Only 15 Seats Remaining</div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <Button
                                        text={data.ctaText || "Secure Your Registration"}
                                        href={data.ctaLink || "#"}
                                        style={{
                                            backgroundColor: workshopTheme.secondary,
                                            color: '#ffffff',
                                            padding: '20px 48px',
                                            borderRadius: '12px',
                                            fontSize: '16px',
                                            fontWeight: 'bold',
                                            border: 'none',
                                            width: '100%',
                                            boxShadow: '0 10px 15px -3px rgba(17, 24, 39, 0.3)',
                                            display: 'inline-block'
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



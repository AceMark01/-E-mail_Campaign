import React from "react";
import { EditableText, EditableImg, Button } from "../elements/Shared";

export const ProductUpdate = ({ data, onUpdate, onImageClick, uneditable }) => {
    const SaasThemeText = "#475569";
    const SaasThemeFontFamily = "'Inter', system-ui, sans-serif";

    const updateTheme = {
        primary: "#14b8a6", // Teal 500
        secondary: "#1e293b", // Slate 800
        background: "#f1f5f9",
        text: SaasThemeText
    };

    const containerStyle = {
        maxWidth: '560px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        borderRadius: '24px',
        overflow: 'hidden',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05)',
        fontFamily: SaasThemeFontFamily
    };

    return (
        <div style={{ width: '100%', backgroundColor: updateTheme.background, padding: '80px 0' }}>
            <center>
                <div style={containerStyle}>
                    <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                        <tbody>
                            <tr>
                                <td style={{ padding: '48px 40px', textAlign: 'center' }}>
                                    <div style={{ marginBottom: '16px' }}>
                                        <div style={{ padding: '8px 20px', backgroundColor: '#f0fdfa', borderRadius: '100px', display: 'inline-block', border: '1px solid #ccfbf1' }}>
                                            <span style={{ fontSize: '12px', fontWeight: 'bold', color: updateTheme.primary, textTransform: 'uppercase', letterSpacing: '1px' }}>New Intelligence</span>
                                        </div>
                                    </div>
                                    <EditableText
                                        field="title"
                                        value={data.title || "Product Update v2.4"}
                                        isHeader
                                        onUpdate={onUpdate}
                                        uneditable={uneditable}
                                        style={{ fontSize: '32px', fontWeight: '900', color: updateTheme.secondary, margin: '0 0 16px 0', lineHeight: '1.2' }}
                                    />
                                    <EditableText
                                        field="content"
                                        value={data.content || "We've rolled out several key improvements to enhance your workflow speed and reliability. Here's what's new in this release."}
                                        onUpdate={onUpdate}
                                        uneditable={uneditable}
                                        style={{ fontSize: '18px', color: SaasThemeText, margin: '0 0 40px 0', lineHeight: '1.6' }}
                                    />

                                    <div style={{ textAlign: 'left', backgroundColor: '#f8fafc', padding: '32px', borderRadius: '16px', marginBottom: '40px' }}>
                                        <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'flex-start' }}>
                                            <div style={{ color: updateTheme.primary, fontWeight: 'bold', fontSize: '18px', marginRight: '12px' }}>✦</div>
                                            <div style={{ fontSize: '15px', color: updateTheme.secondary, fontWeight: '600' }}>Enhanced Dashboard Performance</div>
                                        </div>
                                        <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'flex-start' }}>
                                            <div style={{ color: updateTheme.primary, fontWeight: 'bold', fontSize: '18px', marginRight: '12px' }}>✦</div>
                                            <div style={{ fontSize: '15px', color: updateTheme.secondary, fontWeight: '600' }}>New Collaborative Workspace Tools</div>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                                            <div style={{ color: updateTheme.primary, fontWeight: 'bold', fontSize: '18px', marginRight: '12px' }}>✦</div>
                                            <div style={{ fontSize: '15px', color: updateTheme.secondary, fontWeight: '600' }}>Standard Security Patch Integration</div>
                                        </div>
                                    </div>

                                    <Button
                                        text={data.ctaText || "See Detailed Changelog"}
                                        href={data.ctaLink || "#"}
                                        style={{
                                            backgroundColor: updateTheme.secondary,
                                            color: '#ffffff',
                                            padding: '16px 32px',
                                            borderRadius: '12px',
                                            fontSize: '15px',
                                            fontWeight: 'bold',
                                            border: 'none',
                                            width: '100%',
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



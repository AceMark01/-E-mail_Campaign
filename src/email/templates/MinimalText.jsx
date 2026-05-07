import React from "react";
import { EditableText, EditableImg, Button } from "../elements/Shared";

export const MinimalText = ({ data, onUpdate, onImageClick, uneditable }) => {
    const SaasThemeText = "#1c1917";
    const SaasThemeFontFamily = "'Inter', system-ui, sans-serif";

    const minimalTheme = {
        primary: "#1c1917", // Stone 900
        secondary: "#fafaf9", // Stone 50 (Bone)
        accent: "#a8a29e", // Stone 400
        text: SaasThemeText
    };

    const containerStyle = {
        maxWidth: '520px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        borderRadius: '0px',
        overflow: 'hidden',
        boxShadow: '0 40px 100px -20px rgba(0,0,0,0.05)',
        fontFamily: SaasThemeFontFamily,
        border: '1px solid #f5f5f4'
    };

    return (
        <div style={{ width: '100%', backgroundColor: minimalTheme.secondary, padding: '100px 0' }}>
            <center>
                <div style={containerStyle}>
                    <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                        <tbody>
                            <tr>
                                <td style={{ padding: '80px 60px', textAlign: 'left' }}>
                                    <div style={{ marginBottom: '40px' }}>
                                        <div style={{
                                            height: '2px',
                                            width: '32px',
                                            backgroundColor: minimalTheme.primary,
                                            marginBottom: '32px'
                                        }}></div>
                                        <EditableText
                                            field="title"
                                            value={data.title || "The art of being seen without being loud."}
                                            isHeader
                                            onUpdate={onUpdate}
                                            uneditable={uneditable}
                                            style={{
                                                fontSize: '32px',
                                                fontWeight: '300',
                                                color: minimalTheme.primary,
                                                margin: '0 0 40px 0',
                                                lineHeight: '1.2',
                                                letterSpacing: '-1px'
                                            }}
                                        />
                                    </div>

                                    <div style={{ marginBottom: '48px' }}>
                                        <EditableText
                                            field="content"
                                            value={data.content || "True sophistication lies in the details that most overlook. Our latest collection is an exercise in restraint—high-quality materials meet precise tailoring to create pieces that feel as good as they look."}
                                            onUpdate={onUpdate}
                                            uneditable={uneditable}
                                            style={{
                                                fontSize: '17px',
                                                color: '#57534e',
                                                lineHeight: '1.8',
                                                fontWeight: '400'
                                            }}
                                        />
                                    </div>

                                    <div style={{ padding: '40px 0', borderTop: '1px solid #f5f5f4' }}>
                                        <Button
                                            text={data.ctaText || "Explore the Edit"}
                                            href={data.ctaLink || "#"}
                                            style={{
                                                backgroundColor: minimalTheme.primary,
                                                color: '#ffffff',
                                                padding: '16px 0',
                                                fontSize: '13px',
                                                fontWeight: '600',
                                                border: 'none',
                                                width: '100%',
                                                textAlign: 'center',
                                                textTransform: 'uppercase',
                                                letterSpacing: '2px',
                                                display: 'inline-block'
                                            }}
                                        />
                                    </div>

                                    <div style={{ marginTop: '24px' }}>
                                        <EditableText
                                            field="footer_text"
                                            value={data.footer_text || "EST. 2026"}
                                            onUpdate={onUpdate}
                                            uneditable={uneditable}
                                            style={{
                                                fontSize: '11px',
                                                color: minimalTheme.accent,
                                                letterSpacing: '3px',
                                                fontWeight: 'bold'
                                            }}
                                        />
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

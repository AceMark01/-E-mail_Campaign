import React from "react";
import { EditableText, EditableImg, Button } from "../elements/Shared";

export const TrioFeature = ({ data, onUpdate, onImageClick, uneditable }) => {
    const SaasThemeText = "#475569";
    const SaasThemeFontFamily = "'Inter', system-ui, sans-serif";

    const trioTheme = {
        primary: "#312e81", // Indigo 900
        secondary: "#1e293b", // Slate 800
        accent: "#6366f1", // Indigo 500
        background: "#f8fafc",
        text: SaasThemeText
    };

    const containerStyle = {
        maxWidth: '560px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        borderRadius: '32px',
        overflow: 'hidden',
        boxShadow: '0 20px 25px -5px rgba(49, 46, 129, 0.05)',
        fontFamily: SaasThemeFontFamily
    };

    return (
        <div style={{ width: '100%', backgroundColor: trioTheme.background, padding: '80px 0' }}>
            <center>
                <div style={containerStyle}>
                    <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                        <tbody>
                            <tr>
                                <td style={{ padding: '64px 48px 48px 48px', textAlign: 'center' }}>
                                    <div style={{ marginBottom: '12px' }}>
                                        <span style={{ color: trioTheme.accent, fontSize: '11px', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase' }}>
                                            The Core Framework
                                        </span>
                                    </div>
                                    <EditableText
                                        field="title"
                                        value={data.title || "Built for Precision"}
                                        isHeader
                                        onUpdate={onUpdate}
                                        uneditable={uneditable}
                                        style={{ fontSize: '36px', fontWeight: '900', color: trioTheme.primary, margin: '0 0 16px 0', letterSpacing: '-0.025em' }}
                                    />
                                    <EditableText
                                        field="subtitle"
                                        value={data.subtitle || "A three-pillar approach to scaling your intelligence."}
                                        onUpdate={onUpdate}
                                        uneditable={uneditable}
                                        style={{ fontSize: '18px', color: SaasThemeText, margin: '0 0 48px 0', lineHeight: '1.5' }}
                                    />

                                    {[1, 2, 3].map((i) => (
                                        <div key={i} style={{
                                            textAlign: 'left',
                                            padding: '24px',
                                            backgroundColor: '#f8fafc',
                                            borderRadius: '20px',
                                            marginBottom: '16px',
                                            border: '1px solid #f1f5f9'
                                        }}>
                                            <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                                                <tbody>
                                                    <tr>
                                                        <td width="48" valign="top">
                                                            <div style={{
                                                                width: '32px',
                                                                height: '32px',
                                                                backgroundColor: trioTheme.primary,
                                                                borderRadius: '8px',
                                                                color: '#ffffff',
                                                                textAlign: 'center',
                                                                lineHeight: '32px',
                                                                fontWeight: '900',
                                                                fontSize: '13px'
                                                            }}>
                                                                0{i}
                                                            </div>
                                                        </td>
                                                        <td valign="top" style={{ paddingLeft: '16px' }}>
                                                            <div style={{ fontSize: '18px', fontWeight: '800', color: trioTheme.secondary, marginBottom: '6px' }}>
                                                                <EditableText field={`f${i}_title`} value={data[`f${i}_title`] || (i === 1 ? "Seamless Scale" : i === 2 ? "Neural Sync" : "Edge Protocol")} onUpdate={onUpdate} uneditable={uneditable} />
                                                            </div>
                                                            <div style={{ fontSize: '14px', color: SaasThemeText, lineHeight: '1.6' }}>
                                                                <EditableText field={`f${i}_desc`} value={data[`f${i}_desc`] || `Our proprietary ${i === 1 ? 'architecture' : i === 2 ? 'engine' : 'security'} ensures that every part of your workflow is optimized for the highest possible speed.`} onUpdate={onUpdate} uneditable={uneditable} />
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    ))}

                                    <div style={{ marginTop: '32px' }}>
                                        <Button
                                            text={data.ctaText || "Explore the Protocol"}
                                            href={data.ctaLink || "#"}
                                            style={{
                                                backgroundColor: trioTheme.primary,
                                                color: '#ffffff',
                                                padding: '18px 48px',
                                                borderRadius: '16px',
                                                fontSize: '15px',
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
            </center>
        </div>
    );
};

import React from "react";
import { EditableText, EditableImg, Button } from "../elements/Shared";

export const PricingTable = ({ data, onUpdate, onImageClick, uneditable }) => {
    const SaasThemeText = "#475569";
    const SaasThemeFontFamily = "'Inter', system-ui, sans-serif";

    const pricingTheme = {
        primary: "#4f46e5", // Indigo 600
        secondary: "#0f172a", // Slate 900
        background: "#f8fafc", // Slate 50
        text: SaasThemeText
    };

    const containerStyle = {
        maxWidth: '560px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        borderRadius: '0px',
        overflow: 'hidden',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05)',
        fontFamily: SaasThemeFontFamily,
        border: '1px solid #e2e8f0'
    };

    return (
        <div style={{ width: '100%', backgroundColor: pricingTheme.background, padding: '80px 0' }}>
            <center>
                <div style={containerStyle}>
                    <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                        <tbody>
                            <tr>
                                <td style={{ padding: '64px 48px', textAlign: 'center' }}>
                                    <div style={{ marginBottom: '16px' }}>
                                        <span style={{ color: pricingTheme.primary, fontSize: '12px', fontWeight: '900', letterSpacing: '2px', textTransform: 'uppercase' }}>
                                            Scale Your Impact
                                        </span>
                                    </div>
                                    <EditableText
                                        field="title"
                                        value={data.title || "Flexible solutions for every stage."}
                                        isHeader
                                        onUpdate={onUpdate}
                                        uneditable={uneditable}
                                        style={{ fontSize: '36px', fontWeight: '900', color: pricingTheme.secondary, margin: '0 0 48px 0', letterSpacing: '-0.025em', lineHeight: '1.1' }}
                                    />

                                    {[1, 2, 3].map(i => {
                                        const isPopular = i === 2;
                                        return (
                                            <div key={i} style={{
                                                backgroundColor: isPopular ? '#f0f9ff' : '#ffffff',
                                                padding: '32px',
                                                border: isPopular ? `2px solid ${pricingTheme.primary}` : '1px solid #e2e8f0',
                                                marginBottom: '24px',
                                                textAlign: 'left',
                                                position: 'relative'
                                            }}>
                                                {isPopular && (
                                                    <div style={{
                                                        position: 'absolute',
                                                        top: '0',
                                                        right: '32px',
                                                        backgroundColor: pricingTheme.primary,
                                                        color: '#ffffff',
                                                        fontSize: '10px',
                                                        fontWeight: '900',
                                                        padding: '4px 12px',
                                                        letterSpacing: '1px',
                                                        transform: 'translateY(-50%)'
                                                    }}>RECOMMENDED</div>
                                                )}
                                                <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                                                    <tbody>
                                                        <tr>
                                                            <td style={{ verticalAlign: 'top' }}>
                                                                <div style={{ fontSize: '18px', fontWeight: '900', color: pricingTheme.secondary, marginBottom: '8px' }}>
                                                                    <EditableText field={`p${i}_name`} value={data[`p${i}_name`] || (i === 1 ? "Essential" : i === 2 ? "Professional" : "Corporate")} onUpdate={onUpdate} uneditable={uneditable} />
                                                                </div>
                                                                <div style={{ fontSize: '14px', color: SaasThemeText, lineHeight: '1.5' }}>
                                                                    {i === 1 ? "All the foundations you need to start." : i === 2 ? "Advanced features for growing teams." : "Bespoke infrastructure for large-scale ops."}
                                                                </div>
                                                            </td>
                                                            <td align="right" valign="top" style={{ width: '100px' }}>
                                                                <div style={{ fontSize: '32px', fontWeight: '900', color: pricingTheme.secondary, lineHeight: '1' }}>
                                                                    <EditableText field={`p${i}_price`} value={data[`p${i}_price`] || (i === 1 ? "$24" : i === 2 ? "$69" : "$199")} onUpdate={onUpdate} uneditable={uneditable} />
                                                                </div>
                                                                <div style={{ fontSize: '10px', color: '#94a3b8', fontWeight: '900', letterSpacing: '1px', marginTop: '4px' }}>PER MONTH</div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        );
                                    })}

                                    <div style={{ marginTop: '24px' }}>
                                        <Button
                                            text={data.ctaText || "Select Your Plan"}
                                            href={data.ctaLink || "#"}
                                            style={{
                                                backgroundColor: pricingTheme.secondary,
                                                color: '#ffffff',
                                                padding: '20px 48px',
                                                borderRadius: '0px',
                                                fontSize: '15px',
                                                fontWeight: '900',
                                                border: 'none',
                                                width: '100%',
                                                letterSpacing: '1px'
                                            }}
                                        />
                                    </div>
                                    <div style={{ marginTop: '24px' }}>
                                        <p style={{ margin: 0, fontSize: '12px', color: '#94a3b8' }}>
                                            No long-term contracts. Cancel any time.
                                        </p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ padding: '32px', backgroundColor: '#f8fafc', textAlign: 'center' }}>
                                    <p style={{ margin: 0, color: '#94a3b8', fontSize: '10px', fontWeight: '900', letterSpacing: '2px' }}>
                                        SECURE INFRASTRUCTURE • ENCRYPTED DATA
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




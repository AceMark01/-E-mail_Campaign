import React from "react";
import { EditableText, EditableImg, Button } from "../elements/Shared";

export const ZPattern = ({ data, onUpdate, onImageClick, uneditable }) => {
    const SaasThemeText = "#475569";
    const SaasThemeFontFamily = "'Inter', system-ui, sans-serif";

    const patternTheme = {
        primary: "#6366f1", // Indigo 500
        secondary: "#0f172a", // Slate 900
        background: "#f8fafc",
        text: SaasThemeText
    };

    const containerStyle = {
        maxWidth: '560px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        borderRadius: '32px',
        overflow: 'hidden',
        boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.08)',
        fontFamily: SaasThemeFontFamily
    };

    return (
        <div style={{ width: '100%', backgroundColor: patternTheme.background, padding: '80px 0' }}>
            <center>
                <div style={containerStyle}>
                    <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                        <tbody>
                            <tr>
                                <td align="center" style={{ padding: '64px 48px 32px 48px' }}>
                                    <div style={{ fontSize: '12px', fontWeight: '900', color: patternTheme.primary, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '12px' }}>
                                        Our Methodology
                                    </div>
                                    <EditableText
                                        field="mainTitle"
                                        value={data.mainTitle || "Designed for High-Velocity Teams"}
                                        isHeader
                                        onUpdate={onUpdate}
                                        uneditable={uneditable}
                                        style={{ fontSize: '32px', fontWeight: '900', color: patternTheme.secondary, margin: 0, lineHeight: '1.2', letterSpacing: '-0.025em' }}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    {[0, 1].map((i) => {
                        const isEven = i % 2 === 0;

                        const ImageBlock = (
                            <td width="50%" valign="middle" style={{ padding: '24px' }}>
                                <div style={{ borderRadius: '20px', overflow: 'hidden', backgroundColor: '#f1f5f9' }}>
                                    <EditableImg
                                        field={`image${i}`}
                                        src={data[`image${i}`] || (i === 0 ? "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=600&fit=crop&q=80" : "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=600&fit=crop&q=80")}
                                        label={`Feature ${i + 1}`}
                                        onImageClick={onImageClick}
                                        uneditable={uneditable}
                                        style={{ display: 'block', width: '100%', height: 'auto', border: 'none' }}
                                    />
                                </div>
                            </td>
                        );

                        const TextBlock = (
                            <td width="50%" valign="middle" style={{ padding: '24px', textAlign: 'left' }}>
                                <div style={{ fontSize: '18px', fontWeight: '800', color: patternTheme.secondary, marginBottom: '12px' }}>
                                    <EditableText field={`title${i}`} value={data[`title${i}`] || (i === 0 ? "Strategic Intent" : "Fluid Execution")} isHeader onUpdate={onUpdate} uneditable={uneditable} />
                                </div>
                                <div style={{ fontSize: '14px', color: SaasThemeText, lineHeight: '1.6', marginBottom: '16px' }}>
                                    <EditableText field={`content${i}`} value={data[`content${i}`] || (i === 0 ? "Every pixel we place and every line of code we write is guided by a singular focus on your growth." : "Automation is not just about speed; it's about creating space for the work that truly matters.")} onUpdate={onUpdate} uneditable={uneditable} />
                                </div>
                                <div style={{ fontSize: '13px', fontWeight: '800', color: patternTheme.primary }}>
                                    LEARN MORE →
                                </div>
                            </td>
                        );

                        return (
                            <table key={i} border="0" cellPadding="0" cellSpacing="0" width="100%">
                                <tbody>
                                    <tr>
                                        {isEven ? (
                                            <>
                                                {ImageBlock}
                                                {TextBlock}
                                            </>
                                        ) : (
                                            <>
                                                {TextBlock}
                                                {ImageBlock}
                                            </>
                                        )}
                                    </tr>
                                </tbody>
                            </table>
                        );
                    })}

                    <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                        <tbody>
                            <tr>
                                <td align="center" style={{ padding: '32px 48px 64px 48px' }}>
                                    <Button
                                        text="Explore the Full Framework"
                                        href="#"
                                        style={{
                                            backgroundColor: patternTheme.secondary,
                                            color: '#ffffff',
                                            padding: '18px 48px',
                                            borderRadius: '16px',
                                            fontSize: '15px',
                                            fontWeight: 'bold',
                                            border: 'none',
                                            width: '100%'
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



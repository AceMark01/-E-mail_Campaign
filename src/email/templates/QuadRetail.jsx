import React from "react";
import { EditableText, EditableImg, Button } from "../elements/Shared";

export const QuadRetail = ({ data, onUpdate, onImageClick, uneditable }) => {
    const SaasThemeText = "#44403c";
    const SaasThemeFontFamily = "'Playfair Display', serif";
    const bodyFont = "'Inter', sans-serif";

    const retailTheme = {
        primary: "#1a1a1a", // Charcoal
        accent: "#d4af37", // Gold
        background: "#ffffff",
        cardBg: "#fdfdfd",
        text: SaasThemeText
    };

    const containerStyle = {
        maxWidth: '600px',
        margin: '0 auto',
        backgroundColor: retailTheme.background,
        borderRadius: '0px',
        overflow: 'hidden',
        boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
        fontFamily: bodyFont
    };

    return (
        <div style={{ width: '100%', backgroundColor: '#f4f4f4', padding: '80px 0' }}>
            <center>
                <div style={containerStyle}>
                    <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                        <tbody>
                            <tr>
                                <td style={{ padding: '60px 40px', textAlign: 'center' }}>
                                    <div style={{ marginBottom: '16px' }}>
                                        <span style={{ color: retailTheme.accent, fontSize: '12px', fontWeight: 'bold', letterSpacing: '4px', textTransform: 'uppercase' }}>
                                            Summer Collection
                                        </span>
                                    </div>
                                    <EditableText
                                        field="title"
                                        value={data.title || "The Editorial Edit"}
                                        isHeader
                                        onUpdate={onUpdate}
                                        uneditable={uneditable}
                                        style={{ fontSize: '42px', fontWeight: '400', color: retailTheme.primary, margin: '0 0 12px 0', fontFamily: SaasThemeFontFamily }}
                                    />
                                    <div style={{ width: '60px', height: '1px', backgroundColor: retailTheme.accent, margin: '0 auto 24px' }}></div>
                                    <EditableText
                                        field="subtitle"
                                        value={data.subtitle || "A curated selection of the season's most essential pieces."}
                                        onUpdate={onUpdate}
                                        uneditable={uneditable}
                                        style={{ fontSize: '16px', color: '#666', lineHeight: '1.6' }}
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td style={{ padding: '0 20px 60px 20px' }}>
                                    <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                                        <tbody>
                                            <tr>
                                                <td style={{ fontSize: '0' }}>
                                                    {[0, 1, 2, 3].map((i) => (
                                                        <div key={i} style={{ display: 'inline-block', width: '50%', verticalAlign: 'top' }}>
                                                            <div style={{ padding: '10px' }}>
                                                                <div style={{ position: 'relative', marginBottom: '16px' }}>
                                                                    <EditableImg
                                                                        field={`gridImg${i}`}
                                                                        src={data[`gridImg${i}`] || `https://images.unsplash.com/photo-${i === 0 ? '1515886657613-9f3515b0c78f' : i === 1 ? '1483985988355-763728e1935b' : i === 2 ? '1490481651871-ab68de25d43d' : '1539109132384-51af5fea0296'}?w=400&h=500&fit=crop&q=80`}
                                                                        label={`Item ${i + 1}`}
                                                                        onImageClick={onImageClick}
                                                                        uneditable={uneditable}
                                                                        style={{ display: 'block', width: '100%', height: 'auto', borderRadius: '0px' }}
                                                                    />
                                                                    {i === 0 && (
                                                                        <div style={{ position: 'absolute', top: '12px', right: '12px', backgroundColor: retailTheme.primary, color: '#ffffff', fontSize: '9px', fontWeight: 'bold', padding: '4px 10px', letterSpacing: '1px' }}>
                                                                            NEW
                                                                        </div>
                                                                    )}
                                                                </div>
                                                                <div style={{ textAlign: 'center' }}>
                                                                    <div style={{ fontSize: '13px', color: '#999', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>
                                                                        <EditableText field={`category${i}`} value={data[`category${i}`] || 'Boutique'} onUpdate={onUpdate} uneditable={uneditable} />
                                                                    </div>
                                                                    <div style={{ fontSize: '16px', fontWeight: '600', color: retailTheme.primary, marginBottom: '6px' }}>
                                                                        <EditableText field={`product${i}`} value={data[`product${i}`] || `Piece 00${i + 1}`} onUpdate={onUpdate} uneditable={uneditable} />
                                                                    </div>
                                                                    <div style={{ fontSize: '15px', color: retailTheme.accent, fontWeight: 'bold' }}>
                                                                        <EditableText field={`price${i}`} value={data[`price${i}`] || `$${(i * 45) + 120}.00`} onUpdate={onUpdate} uneditable={uneditable} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>

                            <tr>
                                <td style={{ padding: '0 40px 80px 40px', textAlign: 'center' }}>
                                    <Button
                                        text={data.ctaText || "Discover Full Collection"}
                                        href={data.ctaLink || "#"}
                                        style={{
                                            backgroundColor: retailTheme.primary,
                                            color: '#ffffff',
                                            padding: '18px 40px',
                                            borderRadius: '0px',
                                            fontSize: '13px',
                                            fontWeight: 'bold',
                                            letterSpacing: '2px',
                                            border: 'none',
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




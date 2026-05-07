import React from "react";
import { EditableText, EditableImg, Button } from "../elements/Shared";

export const ProductLaunch = ({ data, onUpdate, onImageClick, uneditable }) => {
    const launchTheme = {
        primary: "#818cf8", // Indigo 400
        secondary: "#c084fc", // Purple 400
        background: "#020617", // Real Deep Navy
        card: "#0f172a", // Slate 900
    };

    const SaasThemeFontFamily = "'Inter', system-ui, sans-serif";

    const containerStyle = {
        maxWidth: '600px',
        margin: '0 auto',
        backgroundColor: launchTheme.background,
        borderRadius: '40px',
        overflow: 'hidden',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        fontFamily: SaasThemeFontFamily
    };

    return (
        <div style={{ width: '100%', backgroundColor: '#000000', padding: '80px 0' }}>
            <center>
                <div style={containerStyle}>
                    <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                        <tbody>
                            {/* Hero Spotlight */}
                            <tr>
                                <td style={{ padding: '0' }}>
                                    <div style={{ position: 'relative' }}>
                                        <EditableImg
                                            field="productImage"
                                            src={data.productImage || "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&h=800&fit=crop&q=80"}
                                            label="Product Spotlight"
                                            onImageClick={onImageClick}
                                            uneditable={uneditable}
                                            style={{ display: 'block', width: '100%', height: 'auto' }}
                                        />
                                        <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', height: '150px', background: 'linear-gradient(to bottom, transparent, #020617)' }}></div>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td style={{ padding: '0 40px 60px 40px', textAlign: 'center' }}>
                                    <div style={{ marginBottom: '24px' }}>
                                        <div style={{
                                            display: 'inline-block',
                                            padding: '6px 16px',
                                            background: 'rgba(129, 140, 248, 0.1)',
                                            borderRadius: '100px',
                                            border: '1px solid rgba(129, 140, 248, 0.2)'
                                        }}>
                                            <span style={{ fontSize: '11px', fontWeight: '800', color: launchTheme.primary, textTransform: 'uppercase', letterSpacing: '2px' }}>
                                                <EditableText field="badge" value={data.badge || "NOW REVEALED"} onUpdate={onUpdate} uneditable={uneditable} />
                                            </span>
                                        </div>
                                    </div>

                                    <EditableText
                                        field="title"
                                        value={data.title || "The Evolution of Performance"}
                                        isHeader
                                        onUpdate={onUpdate}
                                        uneditable={uneditable}
                                        style={{ fontSize: '44px', fontWeight: '900', color: '#ffffff', margin: '0 0 20px 0', lineHeight: '1.1', letterSpacing: '-0.025em' }}
                                    />
                                    <EditableText
                                        field="description"
                                        value={data.description || "Crafted with precision, engineered for speed. Experience the next generation of our flagship series."}
                                        onUpdate={onUpdate}
                                        uneditable={uneditable}
                                        style={{ fontSize: '18px', lineHeight: '1.6', color: '#94a3b8', margin: '0 0 40px 0' }}
                                    />

                                    <Button
                                        text="Step into the Future"
                                        href="#"
                                        style={{
                                            backgroundColor: '#ffffff',
                                            color: '#000000',
                                            padding: '20px 40px',
                                            borderRadius: '16px',
                                            fontSize: '15px',
                                            fontWeight: 'bold',
                                            border: 'none',
                                            boxShadow: '0 0 30px rgba(129, 140, 248, 0.3)'
                                        }}
                                    />
                                </td>
                            </tr>

                            {/* Feature Grid */}
                            <tr>
                                <td style={{ padding: '60px 40px', backgroundColor: launchTheme.card, borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
                                    <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                                        <tbody>
                                            <tr>
                                                <td width="33.33%" align="center">
                                                    <div style={{ marginBottom: '12px', fontSize: '24px' }}>⚡</div>
                                                    <div style={{ color: '#ffffff', fontWeight: '800', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>Ultra Speed</div>
                                                </td>
                                                <td width="33.33%" align="center">
                                                    <div style={{ marginBottom: '12px', fontSize: '24px' }}>💎</div>
                                                    <div style={{ color: '#ffffff', fontWeight: '800', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>Pure Grade</div>
                                                </td>
                                                <td width="33.33%" align="center">
                                                    <div style={{ marginBottom: '12px', fontSize: '24px' }}>⚙️</div>
                                                    <div style={{ color: '#ffffff', fontWeight: '800', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>Pro Control</div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div style={{ padding: '40px 0' }}>
                    <p style={{ color: '#64748b', fontSize: '11px', letterSpacing: '4px', fontWeight: 'bold' }}>PROJECT 2.0 • BY ACE MAIL</p>
                </div>
            </center>
        </div>
    );
};


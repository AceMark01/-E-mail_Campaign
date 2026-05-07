import React from "react";
import { EditableText, EditableImg, Button } from "../elements/Shared";

export const HeroSaaS = ({ data, onUpdate, onImageClick, uneditable }) => {
    const SaasThemeSecondary = "#0f172a";
    const SaasThemeText = "#f8fafc";
    const SaasThemeFontFamily = "'Inter', system-ui, sans-serif";

    const saasTheme = {
        primary: "#6366f1", // Indigo 500
        secondary: SaasThemeSecondary, // Slate 900
        accent: "#38bdf8", // Sky 400
        background: "#020617", // Slate 950
        text: SaasThemeText
    };

    const containerStyle = {
        maxWidth: '560px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        borderRadius: '32px',
        overflow: 'hidden',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
        fontFamily: SaasThemeFontFamily
    };

    return (
        <div style={{ width: '100%', backgroundColor: saasTheme.background, padding: '80px 0' }}>
            <center>
                <div style={containerStyle}>
                    <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                        <tbody>
                            <tr>
                                <td style={{ backgroundColor: saasTheme.secondary, padding: '64px 40px', textAlign: 'center' }}>
                                    {/* Badge */}
                                    <div style={{ marginBottom: '24px' }}>
                                        <div style={{
                                            display: 'inline-block',
                                            background: 'rgba(99, 102, 241, 0.1)',
                                            border: '1px solid rgba(99, 102, 241, 0.2)',
                                            borderRadius: '99px',
                                            padding: '8px 20px'
                                        }}>
                                            <EditableText
                                                field="badge"
                                                value={data.badge || "VERSION 2.0 IS HERE"}
                                                onUpdate={onUpdate}
                                                uneditable={uneditable}
                                                style={{ color: saasTheme.accent, fontSize: '12px', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase', margin: 0 }}
                                            />
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <div style={{ marginBottom: '24px' }}>
                                        <EditableText
                                            field="title"
                                            value={data.title || "The OS for Modern Teams"}
                                            isHeader
                                            onUpdate={onUpdate}
                                            uneditable={uneditable}
                                            style={{ color: saasTheme.text, fontSize: '42px', fontWeight: '800', lineHeight: '1.1', margin: 0, letterSpacing: '-0.05em' }}
                                        />
                                    </div>

                                    {/* Content */}
                                    <div style={{ marginBottom: '40px' }}>
                                        <EditableText
                                            field="content"
                                            value={data.content || "Experience the power of a fully integrated workspace. Built for speed, designed for scale, and optimized for your teams' success."}
                                            onUpdate={onUpdate}
                                            uneditable={uneditable}
                                            style={{ color: '#94a3b8', fontSize: '18px', lineHeight: '1.6', margin: 0 }}
                                        />
                                    </div>

                                    {/* CTA Button */}
                                    <div style={{ marginBottom: '10px' }}>
                                        <Button
                                            text={data.ctaText || "START YOUR FREE TRIAL"}
                                            href={data.ctaLink || "#"}
                                            style={{
                                                backgroundColor: saasTheme.primary,
                                                color: '#ffffff',
                                                padding: '20px 48px',
                                                borderRadius: '12px',
                                                fontWeight: 'bold',
                                                fontSize: '16px',
                                                letterSpacing: '1px',
                                                display: 'inline-block'
                                            }}
                                        />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ padding: '0 40px 64px 40px', backgroundColor: saasTheme.secondary, textAlign: 'center' }}>
                                    <div style={{
                                        borderRadius: '16px',
                                        overflow: 'hidden',
                                        border: '4px solid rgba(255,255,255,0.05)',
                                        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5)'
                                    }}>
                                        <EditableImg
                                            field="banner"
                                            src={data.banner || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&h=600&fit=crop&q=80"}
                                            label="SaaS Dashboard"
                                            onImageClick={onImageClick}
                                            uneditable={uneditable}
                                            style={{ display: 'block', width: '100%', height: 'auto' }}
                                        />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* LOGO BAR */}
                <div style={{ padding: '40px 0', textAlign: 'center' }}>
                    <p style={{ color: '#475569', fontSize: '12px', fontWeight: 'bold', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '20px' }}>
                        Trusted by industry leaders
                    </p>
                    <div style={{ opacity: '0.4', color: '#64748b', fontSize: '10px', letterSpacing: '4px' }}>
                        ✦ MICROSOFT   ✧ GOOGLE   ✦ APPLE   ✧ NVIDIA
                    </div>
                </div>
            </center>
        </div>
    );
};

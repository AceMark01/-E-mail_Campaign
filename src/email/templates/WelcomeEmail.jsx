import React from "react";
import { EditableText, EditableImg, Button } from "../elements/Shared";

export const WelcomeEmail = ({ data, onUpdate, onImageClick, uneditable }) => {
    const SaasThemeText = "#475569";
    const SaasThemeFontFamily = "'Inter', system-ui, sans-serif";

    const welcomeTheme = {
        primary: "#6366f1", // Indigo 500
        secondary: "#0f172a", // Slate 900
        background: "#f8fafc",
        text: SaasThemeText
    };

    const containerStyle = {
        maxWidth: '600px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        borderRadius: '32px',
        overflow: 'hidden',
        boxShadow: '0 25px 50px -12px rgba(99, 102, 241, 0.1)',
        fontFamily: SaasThemeFontFamily
    };

    return (
        <div style={{ width: '100%', backgroundColor: welcomeTheme.background, padding: '80px 0' }}>
            <center>
                <div style={containerStyle}>
                    <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                        <tbody>
                            <tr>
                                <td style={{ padding: '0' }}>
                                    <EditableImg
                                        field="heroImage"
                                        src={data.heroImage || "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=600&fit=crop&q=80"}
                                        label="Onboarding Hero"
                                        onImageClick={onImageClick}
                                        uneditable={uneditable}
                                        style={{ display: 'block', width: '100%', height: 'auto', border: 'none' }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ padding: '64px 48px', textAlign: 'center' }}>
                                    <div style={{ marginBottom: '16px' }}>
                                        <span style={{ backgroundColor: '#eef2ff', color: welcomeTheme.primary, fontSize: '11px', fontWeight: '900', padding: '6px 16px', borderRadius: '100px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                            The Adventure Begins
                                        </span>
                                    </div>
                                    <EditableText
                                        field="title"
                                        value={data.title || "Welcome to Botivate"}
                                        isHeader
                                        onUpdate={onUpdate}
                                        uneditable={uneditable}
                                        style={{ fontSize: '40px', fontWeight: '900', color: welcomeTheme.secondary, margin: '0 0 20px 0', lineHeight: '1.1', letterSpacing: '-0.025em' }}
                                    />
                                    <EditableText
                                        field="subtitle"
                                        value={data.subtitle || "We're thrilled to have you here. You've just taken the first step towards a more intelligent, automated workspace."}
                                        onUpdate={onUpdate}
                                        uneditable={uneditable}
                                        style={{ fontSize: '18px', color: SaasThemeText, margin: '0 0 40px 0', lineHeight: '1.6' }}
                                    />
                                    <Button
                                        text={data.ctaText || "Launch Your Dashboard"}
                                        href={data.ctaLink || "#"}
                                        style={{
                                            backgroundColor: welcomeTheme.primary,
                                            color: '#ffffff',
                                            padding: '20px 48px',
                                            borderRadius: '16px',
                                            fontSize: '16px',
                                            fontWeight: 'bold',
                                            border: 'none',
                                            boxShadow: '0 15px 30px rgba(99, 102, 241, 0.3)'
                                        }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ padding: '48px', backgroundColor: '#f8fafc' }}>
                                    <h3 style={{ margin: '0 0 32px 0', fontSize: '20px', fontWeight: '900', color: welcomeTheme.secondary, textAlign: 'center' }}>
                                        Three steps to success
                                    </h3>
                                    {[
                                        { i: "01", t: "Configure Your Core", d: "Sync your existing tools and define your initial automation parameters." },
                                        { i: "02", t: "Invite Your Team", d: "Collaboration is at the heart of Botivate. Bring your colleagues on board." },
                                        { i: "03", t: "Execute First Flow", d: "Deploy your first intelligent workflow and witness the efficiency." }
                                    ].map((step, idx) => (
                                        <table key={idx} border="0" cellPadding="0" cellSpacing="0" width="100%" style={{ marginBottom: idx === 2 ? '0' : '24px' }}>
                                            <tbody>
                                                <tr>
                                                    <td width="48" valign="top">
                                                        <div style={{ color: welcomeTheme.primary, fontSize: '14px', fontWeight: '900', letterSpacing: '1px' }}>{step.i}</div>
                                                    </td>
                                                    <td valign="top" style={{ paddingLeft: '16px' }}>
                                                        <div style={{ fontSize: '16px', fontWeight: '800', color: welcomeTheme.secondary, marginBottom: '4px' }}>{step.t}</div>
                                                        <div style={{ fontSize: '14px', color: SaasThemeText, lineHeight: '1.5' }}>{step.d}</div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    ))}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div style={{ marginTop: '40px' }}>
                    <p style={{ color: '#94a3b8', fontSize: '12px', fontWeight: 'bold' }}>HELPING TEAMS THRIVE SINCE 2026</p>
                </div>
            </center>
        </div>
    );
};



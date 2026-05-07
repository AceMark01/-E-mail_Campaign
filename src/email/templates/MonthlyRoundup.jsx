import React from "react";
import { EditableText, EditableImg, Button } from "../elements/Shared";

export const MonthlyRoundup = ({ data, onUpdate, onImageClick, uneditable }) => {
    const SaasThemeText = "#334155";
    const SaasThemeFontFamily = "'Inter', system-ui, sans-serif";

    const roundupTheme = {
        primary: "#14b8a6", // Teal 500
        secondary: "#0f172a", // Slate 900
        accent: "#64748b", // Slate 500
        background: "#f8fafc", // Slate 50
        text: SaasThemeText
    };

    const containerStyle = {
        maxWidth: '560px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        borderRadius: '0px',
        overflow: 'hidden',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        fontFamily: SaasThemeFontFamily,
        border: '1px solid #e2e8f0'
    };

    return (
        <div style={{ width: '100%', backgroundColor: roundupTheme.background, padding: '80px 0' }}>
            <center>
                <div style={containerStyle}>
                    <div style={{ borderBottom: '1px solid #f1f5f9' }}>
                        <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                            <tbody>
                                <tr>
                                    <td style={{ padding: '24px 48px' }}>
                                        <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                                            <tbody>
                                                <tr>
                                                    <td align="left">
                                                        <span style={{ fontSize: '12px', fontWeight: '900', color: roundupTheme.secondary, letterSpacing: '2px' }}>THE BULLETIN</span>
                                                    </td>
                                                    <td align="right">
                                                        <span style={{ fontSize: '12px', color: roundupTheme.accent, letterSpacing: '1px' }}>VOL. 26 / ISSUE 02</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                        <tbody>
                            <tr>
                                <td style={{ padding: '64px 48px 48px 48px' }}>
                                    <div style={{ marginBottom: '16px' }}>
                                        <div style={{ width: '24px', height: '4px', backgroundColor: roundupTheme.primary }}></div>
                                    </div>
                                    <EditableText
                                        field="title"
                                        value={data.title || "The Monthly Roundup"}
                                        isHeader
                                        onUpdate={onUpdate}
                                        uneditable={uneditable}
                                        style={{
                                            fontSize: '48px',
                                            fontWeight: '900',
                                            color: roundupTheme.secondary,
                                            margin: '0 0 24px 0',
                                            lineHeight: '1',
                                            letterSpacing: '-0.04em'
                                        }}
                                    />
                                    <EditableText
                                        field="content"
                                        value={data.content || "Your curated digest of the most significant stories, product breakthroughs, and community milestones from the past thirty days."}
                                        onUpdate={onUpdate}
                                        uneditable={uneditable}
                                        style={{ fontSize: '18px', color: SaasThemeText, margin: '0 0 40px 0', lineHeight: '1.7' }}
                                    />

                                    <div style={{
                                        padding: '32px',
                                        backgroundColor: '#f1f5f9',
                                        borderLeft: `4px solid ${roundupTheme.secondary}`,
                                        marginBottom: '48px'
                                    }}>
                                        <span style={{ fontSize: '11px', fontWeight: '900', color: roundupTheme.secondary, textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '12px' }}>
                                            Monthly Highlight
                                        </span>
                                        <p style={{ margin: 0, fontSize: '16px', color: roundupTheme.secondary, lineHeight: '1.5', fontWeight: '500' }}>
                                            "Our ecosystem expanded by 45% this quarter, driven by unprecedented community engagement and open-source contributions."
                                        </p>
                                    </div>

                                    <Button
                                        text={data.ctaText || "Read Full Digest"}
                                        href={data.ctaLink || "#"}
                                        style={{
                                            backgroundColor: roundupTheme.secondary,
                                            color: '#ffffff',
                                            padding: '20px 48px',
                                            borderRadius: '0px',
                                            fontSize: '14px',
                                            fontWeight: 'bold',
                                            border: 'none',
                                            letterSpacing: '1px',
                                            display: 'inline-block'
                                        }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ padding: '0 48px 64px 48px' }}>
                                    <EditableImg
                                        field="image"
                                        src={data.image || "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&h=600&fit=crop&q=80"}
                                        label="Roundup Overview Visual"
                                        onImageClick={onImageClick}
                                        uneditable={uneditable}
                                        style={{ display: 'block', width: '100%', height: 'auto', borderRadius: '0px' }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ padding: '32px', borderTop: '1px solid #f1f5f9', textAlign: 'center' }}>
                                    <p style={{ margin: 0, color: roundupTheme.accent, fontSize: '11px', fontWeight: 'bold', letterSpacing: '2px' }}>
                                        © 2026 THE BULLETIN ARCHIVE
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

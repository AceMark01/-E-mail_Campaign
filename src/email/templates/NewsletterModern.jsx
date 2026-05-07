import React from "react";
import { EditableText, EditableImg, Button } from "../elements/Shared";

export const NewsletterModern = ({ data, onUpdate, onImageClick, uneditable }) => {
    const SaasThemeText = "#475569";
    const SaasThemeFontFamily = "'Inter', system-ui, sans-serif";
    const SaasThemeWidth = "100%";

    const newsTheme = {
        primary: "#8b5cf6", // Violet 500
        secondary: "#1e293b", // Slate 800
        background: "#f8fafc",
        text: SaasThemeText
    };

    const containerStyle = {
        maxWidth: '600px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        borderRadius: '32px',
        overflow: 'hidden',
        boxShadow: '0 25px 50px -12px rgba(139, 92, 246, 0.1)',
        fontFamily: SaasThemeFontFamily
    };

    return (
        <div style={{ width: SaasThemeWidth, backgroundColor: newsTheme.background, padding: '80px 0' }}>
            <center>
                <div style={containerStyle}>
                    <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                        <tbody>
                            {/* Featured Story */}
                            <tr>
                                <td style={{ padding: '0' }}>
                                    <div style={{ padding: '40px 40px 0 40px' }}>
                                        <div style={{ borderRadius: '24px', overflow: 'hidden', marginBottom: '32px' }}>
                                            <EditableImg
                                                field="featureImage"
                                                src={data.featureImage || "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1200&h=600&fit=crop&q=80"}
                                                label="Feature Image"
                                                onImageClick={onImageClick}
                                                uneditable={uneditable}
                                                style={{ display: 'block', width: SaasThemeWidth, height: 'auto' }}
                                            />
                                        </div>
                                        <div style={{ marginBottom: '12px' }}>
                                            <span style={{ fontSize: '12px', fontWeight: '800', color: newsTheme.primary, textTransform: 'uppercase', letterSpacing: '2px' }}>
                                                <EditableText field="tag" value={data.tag || "THE LEAD STORY"} onUpdate={onUpdate} uneditable={uneditable} />
                                            </span>
                                        </div>
                                        <EditableText
                                            field="title"
                                            value={data.title || "The Architecture of Tomorrow"}
                                            isHeader
                                            onUpdate={onUpdate}
                                            uneditable={uneditable}
                                            style={{ fontSize: '32px', fontWeight: '900', color: newsTheme.secondary, margin: '0 0 16px 0', lineHeight: '1.2', letterSpacing: '-0.025em' }}
                                        />
                                        <EditableText
                                            field="excerpt"
                                            value={data.excerpt || "We explore how modern design systems are evolving to meet the demands of an AI-first world. From generative components to adaptive layouts."}
                                            onUpdate={onUpdate}
                                            uneditable={uneditable}
                                            style={{ fontSize: '16px', lineHeight: '1.7', color: SaasThemeText, margin: '0 0 32px 0' }}
                                        />
                                        <Button
                                            text={data.ctaText || "Full Insight"}
                                            href={data.ctaLink || "#"}
                                            style={{
                                                backgroundColor: newsTheme.primary,
                                                color: '#ffffff',
                                                padding: '14px 28px',
                                                borderRadius: '12px',
                                                fontSize: '14px',
                                                fontWeight: 'bold',
                                                border: 'none',
                                                display: 'inline-block'
                                            }}
                                        />
                                    </div>
                                </td>
                            </tr>

                            {/* Divider Line */}
                            <tr>
                                <td style={{ padding: '48px 40px 0 40px' }}>
                                    <div style={{ height: '1px', backgroundColor: '#f1f5f9' }}></div>
                                </td>
                            </tr>

                            {/* Secondary Stories */}
                            <tr>
                                <td style={{ padding: '48px 40px' }}>
                                    <h3 style={{ margin: '0 0 32px 0', fontSize: '14px', fontWeight: '800', color: newsTheme.secondary, textTransform: 'uppercase', letterSpacing: '1px' }}>Deep Dives</h3>

                                    {/* Story 1 */}
                                    <table border="0" cellPadding="0" cellSpacing="0" width="100%" style={{ marginBottom: '32px' }}>
                                        <tbody>
                                            <tr>
                                                <td width="120" valign="top">
                                                    <div style={{ borderRadius: '16px', overflow: 'hidden' }}>
                                                        <EditableImg
                                                            field="story1Img"
                                                            src={data.story1Img || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=240&h=240&fit=crop&q=80"}
                                                            onImageClick={onImageClick}
                                                            uneditable={uneditable}
                                                            style={{ display: 'block', width: '120px', height: '120px', objectFit: 'cover' }}
                                                        />
                                                    </div>
                                                </td>
                                                <td style={{ paddingLeft: '24px' }} valign="middle">
                                                    <h4 style={{ margin: '0 0 8px 0', fontSize: '18px', fontWeight: '800', color: newsTheme.secondary, lineHeight: '1.3' }}>
                                                        <EditableText field="story1Title" value={data.story1Title || "The API Economy"} onUpdate={onUpdate} uneditable={uneditable} />
                                                    </h4>
                                                    <p style={{ margin: 0, fontSize: '14px', color: SaasThemeText, lineHeight: '1.5' }}>
                                                        <EditableText field="story1Desc" value={data.story1Desc || "How connected services are driving the next wave of innovation."} onUpdate={onUpdate} uneditable={uneditable} />
                                                    </p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    {/* Story 2 */}
                                    <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                                        <tbody>
                                            <tr>
                                                <td width="120" valign="top">
                                                    <div style={{ borderRadius: '16px', overflow: 'hidden' }}>
                                                        <EditableImg
                                                            field="story2Img"
                                                            src={data.story2Img || "https://images.unsplash.com/photo-1552664730-d307ca884978?w=240&h=240&fit=crop&q=80"}
                                                            onImageClick={onImageClick}
                                                            uneditable={uneditable}
                                                            style={{ display: 'block', width: '120px', height: '120px', objectFit: 'cover' }}
                                                        />
                                                    </div>
                                                </td>
                                                <td style={{ paddingLeft: '24px' }} valign="middle">
                                                    <h4 style={{ margin: '0 0 8px 0', fontSize: '18px', fontWeight: '800', color: newsTheme.secondary, lineHeight: '1.3' }}>
                                                        <EditableText field="story2Title" value={data.story2Title || "Scalable Systems"} onUpdate={onUpdate} uneditable={uneditable} />
                                                    </h4>
                                                    <p style={{ margin: 0, fontSize: '14px', color: SaasThemeText, lineHeight: '1.5' }}>
                                                        <EditableText field="story2Desc" value={data.story2Desc || "Architecture patterns for high-growth engineering teams."} onUpdate={onUpdate} uneditable={uneditable} />
                                                    </p>
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
                    <p style={{ color: '#94a3b8', fontSize: '12px', fontWeight: 'bold' }}>CURATED BY THE DESIGN TEAM</p>
                </div>
            </center>
        </div>
    );
};



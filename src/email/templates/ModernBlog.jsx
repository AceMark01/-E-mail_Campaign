import React from "react";
import { EditableText, EditableImg, Button } from "../elements/Shared";

export const ModernBlog = ({ data, onUpdate, onImageClick, uneditable }) => {
    const SaasThemeBackground = "#f8fafc";
    const SaasThemeFontFamily = "'Inter', system-ui, sans-serif";
    const SaasThemePadding = "80px 0";
    const SaasThemePaddingBottom = "0";

    const blogTheme = {
        primary: "#0f172a", // Navy 900
        secondary: "#64748b", // Slate 500
        accent: "#6366f1", // Indigo 500
        background: SaasThemeBackground, // Slate 50
        text: "#1e293b"
    };

    const containerStyle = {
        maxWidth: '600px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        borderRadius: '24px',
        overflow: 'hidden',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 20px 25px -5px rgba(0, 0, 0, 0.05)',
        fontFamily: SaasThemeFontFamily
    };

    return (
        <div style={{ width: '100%', backgroundColor: SaasThemeBackground, padding: SaasThemePadding }}>
            <center>
                <div style={containerStyle}>
                    {/* Header */}
                    <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                        <tbody>
                            <tr>
                                <td style={{ padding: '48px 40px', borderBottom: '1px solid #f1f5f9' }}>
                                    <span style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '4px', color: blogTheme.accent, textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>
                                        JOURNAL • VOL. 24
                                    </span>
                                    <EditableText
                                        field="title"
                                        value={data.title || "The Weekend Edition"}
                                        isHeader
                                        onUpdate={onUpdate}
                                        uneditable={uneditable}
                                        style={{ fontSize: '36px', lineHeight: '1.2', color: blogTheme.primary, fontWeight: '800', margin: 0, letterSpacing: '-0.025em' }}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    {/* Main Featured Article */}
                    <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                        <tbody>
                            <tr>
                                <td style={{ padding: '40px' }}>
                                    <div style={{ borderRadius: '16px', overflow: 'hidden', marginBottom: '32px' }}>
                                        <EditableImg
                                            field="featured_image"
                                            src={data.featured_image || "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1000&h=600&fit=crop&q=80"}
                                            label="Featured Image"
                                            onImageClick={onImageClick}
                                            uneditable={uneditable}
                                            style={{ display: 'block', width: '100%', height: 'auto' }}
                                        />
                                    </div>
                                    <EditableText
                                        field="featured_title"
                                        value={data.featured_title || "Design Systems: The Architecture of Innovation"}
                                        isHeader
                                        onUpdate={onUpdate}
                                        uneditable={uneditable}
                                        style={{ fontSize: '24px', fontWeight: '800', color: blogTheme.primary, margin: '0 0 16px 0', lineHeight: '1.4' }}
                                    />
                                    <EditableText
                                        field="featured_excerpt"
                                        value={data.featured_excerpt || "Explore how the world's leading tech companies are revolutionizing the way they build products through cohesive design languages."}
                                        onUpdate={onUpdate}
                                        uneditable={uneditable}
                                        style={{ fontSize: '16px', color: blogTheme.secondary, lineHeight: '1.6', margin: '0 0 24px 0' }}
                                    />
                                    <a href="#" style={{ color: blogTheme.accent, fontWeight: 'bold', textDecoration: 'none', fontSize: '14px' }}>READ THE STORY →</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    {/* Article Grid */}
                    <div style={{ backgroundColor: '#f8fafc', padding: '48px 40px' }}>
                        <h3 style={{ margin: '0 0 32px 0', fontSize: '13px', fontWeight: '800', color: blogTheme.primary, textTransform: 'uppercase', letterSpacing: '2px' }}>More from the Archive</h3>
                        <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                            <tbody>
                                {[1, 2].map(i => (
                                    <tr key={i}>
                                        <td style={{ paddingBottom: i === 2 ? SaasThemePaddingBottom : '40px' }}>
                                            <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                                                <tbody>
                                                    <tr>
                                                        <td width="120" style={{ verticalAlign: 'top' }}>
                                                            <div style={{ width: '100px', height: '100px', borderRadius: '12px', overflow: 'hidden' }}>
                                                                <EditableImg
                                                                    field={`thumb${i}`}
                                                                    src={data[`thumb${i}`] || `https://images.unsplash.com/photo-${i === 1 ? '1501504905252-473c4740a7f8' : '1516321318423-f06f85e504b3'}?w=200&h=200&fit=crop&q=80`}
                                                                    onImageClick={onImageClick}
                                                                    uneditable={uneditable}
                                                                    style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
                                                                />
                                                            </div>
                                                        </td>
                                                        <td style={{ paddingLeft: '24px', verticalAlign: 'top' }}>
                                                            <EditableText
                                                                field={`blog${i}_title`}
                                                                value={data[`blog${i}_title`] || (i === 1 ? "Remote Culture at Scale" : "Scaling Your Infrastructure")}
                                                                onUpdate={onUpdate}
                                                                uneditable={uneditable}
                                                                style={{ fontSize: '18px', fontWeight: '700', color: blogTheme.primary, margin: '0 0 8px 0', lineHeight: '1.3' }}
                                                            />
                                                            <EditableText
                                                                field={`blog${i}_excerpt`}
                                                                value={data[`blog${i}_excerpt`] || "Insights on maintaining team velocity and connection."}
                                                                onUpdate={onUpdate}
                                                                uneditable={uneditable}
                                                                style={{ fontSize: '14px', color: blogTheme.secondary, lineHeight: '1.5', margin: 0 }}
                                                            />
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </center>
        </div>
    );
};



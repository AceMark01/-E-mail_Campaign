import React from "react";
import { EditableText, EditableImg, Button } from "../elements/Shared";

export const ValentineSpecial = ({ data, onUpdate, onImageClick, uneditable }) => {
    const romanticTheme = {
        primary: "#be123c", // Rose 700
        secondary: "#fb7185", // Rose 400
        accent: "#fff1f2", // Rose 50
        text: "#4c0519" // Rose 900
    };

    const SaasThemeFontFamily = "'Playfair Display', serif, system-ui";

    const containerStyle = {
        maxWidth: '600px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        borderRadius: '32px',
        overflow: 'hidden',
        boxShadow: '0 30px 60px -12px rgba(190, 18, 60, 0.15)',
        fontFamily: SaasThemeFontFamily
    };

    return (
        <div style={{ width: '100%', backgroundColor: romanticTheme.accent, padding: '80px 0' }}>
            <center>
                <div style={containerStyle}>
                    <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                        <tbody>
                            <tr>
                                <td style={{ padding: '0' }}>
                                    <EditableImg
                                        field="image"
                                        src={data.image || "https://images.unsplash.com/photo-1516589174184-c685266e480c?w=1200&h=800&fit=crop&q=80"}
                                        label="Romantic Moment"
                                        onImageClick={onImageClick}
                                        uneditable={uneditable}
                                        style={{ display: 'block', width: '100%', height: 'auto', border: 'none' }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ padding: '64px 48px', textAlign: 'center' }}>
                                    <div style={{ marginBottom: '24px' }}>
                                        <div style={{
                                            display: 'inline-block',
                                            width: '40px',
                                            height: '40px',
                                            backgroundColor: romanticTheme.accent,
                                            borderRadius: '50%',
                                            textAlign: 'center',
                                            lineHeight: '40px',
                                            color: romanticTheme.primary,
                                            fontSize: '20px'
                                        }}>
                                            ♥
                                        </div>
                                    </div>
                                    <div style={{ marginBottom: '20px' }}>
                                        <EditableText
                                            field="title"
                                            value={data.title || "The Language of Love"}
                                            isHeader
                                            onUpdate={onUpdate}
                                            uneditable={uneditable}
                                            style={{ fontSize: '42px', fontWeight: '400', color: romanticTheme.text, margin: 0, lineHeight: '1.2' }}
                                        />
                                    </div>
                                    <div style={{ marginBottom: '40px' }}>
                                        <EditableText
                                            field="content"
                                            value={data.content || "Celebrate the moments that matter with those who mean the most. Discover our curated collection of shared experiences and thoughtful gestures."}
                                            onUpdate={onUpdate}
                                            uneditable={uneditable}
                                            style={{ fontSize: '18px', color: '#881337', margin: 0, lineHeight: '1.8', fontFamily: "'Inter', sans-serif" }}
                                        />
                                    </div>
                                    <div style={{ marginBottom: '48px' }}>
                                        <Button
                                            text={data.ctaText || "Shop the Collection"}
                                            href={data.ctaLink || "#"}
                                            style={{
                                                backgroundColor: romanticTheme.primary,
                                                color: '#ffffff',
                                                padding: '20px 48px',
                                                borderRadius: '100px',
                                                fontSize: '16px',
                                                fontWeight: 'bold',
                                                border: 'none',
                                                boxShadow: '0 10px 20px rgba(190, 18, 60, 0.2)'
                                            }}
                                        />
                                    </div>
                                    <div style={{ paddingTop: '48px', borderTop: '1px solid #fecdd3' }}>
                                        <p style={{ margin: 0, color: romanticTheme.secondary, fontSize: '12px', fontWeight: '900', letterSpacing: '2px', textTransform: 'uppercase' }}>
                                            Made with love by Botivate
                                        </p>
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



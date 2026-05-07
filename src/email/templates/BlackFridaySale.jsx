import React from "react";
import { EditableText, EditableImg, Button } from "../elements/Shared";

export const BlackFridaySale = ({ data, onUpdate, onImageClick, uneditable }) => {
    const SaasThemeText = "#ffffff";
    const SaasThemeFontFamily = "'Inter', system-ui, sans-serif";

    const saleTheme = {
        primary: "#facc15", // Yellow 400
        background: "#000000",
        secondary: "#1e293b", // Slate 800
        text: SaasThemeText
    };

    const containerStyle = {
        maxWidth: '560px',
        margin: '0 auto',
        backgroundColor: saleTheme.background,
        borderRadius: '0px',
        overflow: 'hidden',
        border: `8px solid ${saleTheme.primary}`,
        fontFamily: SaasThemeFontFamily
    };

    return (
        <div style={{ width: '100%', backgroundColor: '#0f172a', padding: '80px 0' }}>
            <center>
                <div style={containerStyle}>
                    <div style={{ backgroundColor: saleTheme.primary, padding: '12px', textAlign: 'center' }}>
                        <span style={{ color: '#000', fontSize: '12px', fontWeight: '900', letterSpacing: '4px' }}>
                            STRICTLY LIMITED CAPACITY • EXPLICIT CONTENT
                        </span>
                    </div>

                    <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                        <tbody>
                            <tr>
                                <td style={{ padding: '0' }}>
                                    <EditableImg
                                        field="image"
                                        src={data.image || "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&h=600&fit=crop&q=80"}
                                        label="Sale Impact Visual"
                                        onImageClick={onImageClick}
                                        uneditable={uneditable}
                                        style={{ display: 'block', width: '100%', height: 'auto', border: 'none' }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ padding: '72px 48px', textAlign: 'center' }}>
                                    <div style={{ marginBottom: '24px' }}>
                                        <EditableText
                                            field="title"
                                            value={data.title || "BLACK FRIDAY"}
                                            isHeader
                                            onUpdate={onUpdate}
                                            uneditable={uneditable}
                                            style={{
                                                fontSize: '72px',
                                                fontWeight: '900',
                                                color: '#ffffff',
                                                margin: 0,
                                                lineHeight: '0.8',
                                                letterSpacing: '-4px',
                                                fontStyle: 'italic'
                                            }}
                                        />
                                    </div>
                                    <div style={{
                                        display: 'inline-block',
                                        backgroundColor: saleTheme.primary,
                                        color: '#000',
                                        padding: '12px 24px',
                                        fontSize: '24px',
                                        fontWeight: '900',
                                        marginBottom: '40px',
                                        transform: 'skewX(-10deg)',
                                        letterSpacing: '2px'
                                    }}>
                                        UP TO 80% OFF
                                    </div>
                                    <EditableText
                                        field="content"
                                        value={data.content || "The wait is over. The biggest event of the year is live. We've dropped the prices to levels never seen before. Don't blink."}
                                        onUpdate={onUpdate}
                                        uneditable={uneditable}
                                        style={{ fontSize: '18px', color: '#94a3b8', margin: '0 0 48px 0', lineHeight: '1.6' }}
                                    />

                                    <Button
                                        text={data.ctaText || "ENTER THE VOID"}
                                        href={data.ctaLink || "#"}
                                        style={{
                                            backgroundColor: saleTheme.primary,
                                            color: '#000',
                                            padding: '24px 64px',
                                            borderRadius: '0px',
                                            fontSize: '20px',
                                            fontWeight: '900',
                                            border: 'none',
                                            width: '100%',
                                            letterSpacing: '3px',
                                            display: 'inline-block'
                                        }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ padding: '32px', borderTop: '1px solid #1e293b', textAlign: 'center' }}>
                                    <p style={{ margin: 0, color: saleTheme.primary, fontSize: '11px', fontWeight: '900', letterSpacing: '3px' }}>
                                        NO CODE REQUIRED • GLOBAL ACCESS
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

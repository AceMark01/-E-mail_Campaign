import React from "react";
import { EditableText, EditableImg, Button } from "../elements/Shared";

export const FlashDiscount = ({ data, onUpdate, onImageClick, uneditable }) => {
    const SaasThemeText = "#333333";
    const SaasThemeFontFamily = "'Impact', 'Arial Narrow Bold', sans-serif";

    const discountTheme = {
        primary: "#ff0000", // Alert Red
        secondary: "#000000", // Pure Black
        accent: "#ffffff",
        text: SaasThemeText
    };

    const containerStyle = {
        maxWidth: '600px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        borderRadius: '0px',
        overflow: 'hidden',
        border: `15px solid ${discountTheme.secondary}`,
        fontFamily: SaasThemeFontFamily
    };

    return (
        <div style={{ width: '100%', backgroundColor: '#eeeeee', padding: '60px 0' }}>
            <center>
                <div style={containerStyle}>
                    <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                        <tbody>
                            <tr>
                                <td style={{ padding: '0' }}>
                                    <EditableImg
                                        field="image"
                                        src={data.image || "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=600&h=300&fit=crop&q=80"}
                                        label="Flash Header"
                                        onImageClick={onImageClick}
                                        uneditable={uneditable}
                                        style={{ display: 'block', width: '100%', height: 'auto' }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ padding: '60px 40px', textAlign: 'center' }}>
                                    <div style={{ marginBottom: '10px' }}>
                                        <span style={{ backgroundColor: discountTheme.primary, color: '#fff', padding: '5px 15px', fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase' }}>
                                            Limited Time Only
                                        </span>
                                    </div>
                                    <div style={{ marginBottom: '24px' }}>
                                        <EditableText
                                            field="title"
                                            value={data.title || "FLASH DISCOUNT: 40% OFF"}
                                            isHeader
                                            onUpdate={onUpdate}
                                            uneditable={uneditable}
                                            style={{
                                                fontSize: '52px',
                                                fontWeight: '900',
                                                color: discountTheme.secondary,
                                                margin: 0,
                                                lineHeight: '1',
                                                letterSpacing: '-2px',
                                                textTransform: 'uppercase'
                                            }}
                                        />
                                    </div>
                                    <div style={{ marginBottom: '40px' }}>
                                        <EditableText
                                            field="content"
                                            value={data.content || "CRITICAL UPDATE: Our biggest discount code is now active. Use it before the timer hits zero."}
                                            onUpdate={onUpdate}
                                            uneditable={uneditable}
                                            style={{ fontSize: '20px', color: '#666', margin: 0, lineHeight: '1.4', fontWeight: 'bold' }}
                                        />
                                    </div>
                                    <div style={{ marginBottom: '16px' }}>
                                        <Button
                                            text={data.ctaText || "GET THE CODE"}
                                            href={data.ctaLink || "#"}
                                            style={{
                                                backgroundColor: discountTheme.primary,
                                                color: '#ffffff',
                                                padding: '20px 60px',
                                                borderRadius: '0px',
                                                fontSize: '22px',
                                                fontWeight: '900',
                                                border: 'none',
                                                boxShadow: '10px 10px 0px #000',
                                                display: 'inline-block'
                                            }}
                                        />
                                    </div>
                                </td>
                            </tr>
                            <tr style={{ backgroundColor: discountTheme.secondary }}>
                                <td style={{ padding: '30px', textAlign: 'center' }}>
                                    <span style={{ color: discountTheme.primary, fontSize: '18px', fontWeight: 'black', letterSpacing: '5px' }}>
                                        ACT FAST • SHOP NOW
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </center>
        </div>
    );
};

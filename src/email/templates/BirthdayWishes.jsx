import React from "react";
import { EditableText, EditableImg, Button } from "../elements/Shared";

export const BirthdayWishes = ({ data, onUpdate, onImageClick, uneditable }) => {
    const SaasThemeText = "#334155";
    const SaasThemeFontFamily = "'Inter', system-ui, sans-serif";

    const birthdayTheme = {
        primary: "#ec4899", // Pink 500
        secondary: "#06b6d4", // Cyan 500
        accent: "#facc15", // Amber 400
        background: "#fff1f2", // Rose 50
        text: SaasThemeText
    };

    const containerStyle = {
        maxWidth: '560px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        borderRadius: '40px',
        overflow: 'hidden',
        boxShadow: '0 25px 50px -12px rgba(236, 72, 153, 0.2)',
        fontFamily: SaasThemeFontFamily,
        border: '1px solid #fce7f3'
    };

    return (
        <div style={{ width: '100%', backgroundColor: birthdayTheme.background, padding: '80px 0' }}>
            <center>
                <div style={containerStyle}>
                    <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                        <tbody>
                            <tr>
                                <td style={{ padding: '0' }}>
                                    <EditableImg
                                        field="image"
                                        src={data.image || "https://images.unsplash.com/photo-1530103862676-de8892b07439?w=1200&h=600&fit=crop&q=80"}
                                        label="Celebration Visual"
                                        onImageClick={onImageClick}
                                        uneditable={uneditable}
                                        style={{ display: 'block', width: '100%', height: 'auto', border: 'none' }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ padding: '64px 48px', textAlign: 'center' }}>
                                    <div style={{ marginBottom: '16px' }}>
                                        <span style={{
                                            backgroundColor: '#fce7f3',
                                            color: birthdayTheme.primary,
                                            fontSize: '11px',
                                            fontWeight: '900',
                                            padding: '8px 20px',
                                            borderRadius: '100px',
                                            textTransform: 'uppercase',
                                            letterSpacing: '2px'
                                        }}>
                                            Make a Wish
                                        </span>
                                    </div>
                                    <EditableText
                                        field="title"
                                        value={data.title || "Happy Birthday!"}
                                        isHeader
                                        onUpdate={onUpdate}
                                        uneditable={uneditable}
                                        style={{
                                            fontSize: '48px',
                                            fontWeight: '900',
                                            color: birthdayTheme.primary,
                                            margin: '0 0 20px 0',
                                            lineHeight: '1',
                                            letterSpacing: '-0.05em'
                                        }}
                                    />
                                    <EditableText
                                        field="content"
                                        value={data.content || "Wishing you a day filled with extraordinary joy, laughter, and all the things that make you smile. Today is your day to shine."}
                                        onUpdate={onUpdate}
                                        uneditable={uneditable}
                                        style={{ fontSize: '18px', color: SaasThemeText, margin: '0 0 40px 0', lineHeight: '1.6' }}
                                    />

                                    <div style={{ marginBottom: '16px' }}>
                                        <Button
                                            text={data.ctaText || "Claim Your Birthday Gift"}
                                            href={data.ctaLink || "#"}
                                            style={{
                                                backgroundColor: birthdayTheme.secondary,
                                                color: '#ffffff',
                                                padding: '20px 48px',
                                                borderRadius: '24px',
                                                fontSize: '16px',
                                                fontWeight: 'bold',
                                                border: 'none',
                                                width: '100%',
                                                boxShadow: '0 10px 15px -3px rgba(6, 182, 212, 0.3)',
                                                display: 'inline-block'
                                            }}
                                        />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td align="center" style={{ padding: '0 48px 48px 48px' }}>
                                    <div style={{
                                        padding: '24px',
                                        backgroundColor: birthdayTheme.accent,
                                        borderRadius: '24px',
                                        display: 'inline-block',
                                        width: '100%',
                                        boxSizing: 'border-box'
                                    }}>
                                        <p style={{ margin: 0, color: '#854d0e', fontSize: '13px', fontWeight: '900', letterSpacing: '1px' }}>
                                            USE CODE: BIRTHDAY20 FOR 20% OFF
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

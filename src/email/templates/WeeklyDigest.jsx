import React from "react";
import { EditableText, EditableImg, Button } from "../elements/Shared";

export const WeeklyDigest = ({ data, onUpdate, onImageClick, uneditable }) => {
    const containerStyle = {
        maxWidth: '600px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid #e5e7eb',
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif"
    };

    return (
        <div style={{ width: '100%', backgroundColor: '#f9fafb', padding: '40px 0' }}>
            <center>
                <table border="0" cellPadding="0" cellSpacing="0" width="100%" style={{ maxWidth: '600px', backgroundColor: '#ffffff' }}>
                    <tbody>
                        <tr>
                            <td align="center" style={containerStyle}>
                                <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                                    <tbody>
                                        <tr>
                                            <td style={{ padding: '0' }}>
                                                <EditableImg
                                                    field="image"
                                                    src={data.image || "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=300&fit=crop&q=80"}
                                                    label="Header Image"
                                                    onImageClick={onImageClick}
                                                    uneditable={uneditable}
                                                    style={{ display: 'block', width: '100%', height: 'auto', border: 'none' }}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ padding: '40px 32px', textAlign: 'center' }}>
                                                <div style={{ marginBottom: '16px' }}>
                                                    <EditableText
                                                        field="title"
                                                        value={data.title || "Weekly Digest"}
                                                        isHeader
                                                        onUpdate={onUpdate}
                                                        uneditable={uneditable}
                                                        style={{ fontSize: '28px', fontWeight: 'bold', color: '#111827', margin: 0, lineHeight: '1.2' }}
                                                    />
                                                </div>
                                                <div style={{ marginBottom: '32px' }}>
                                                    <EditableText
                                                        field="content"
                                                        value={data.content || "Don't miss out on our special event! Grab your offers now before they are gone."}
                                                        onUpdate={onUpdate}
                                                        uneditable={uneditable}
                                                        style={{ fontSize: '16px', color: '#4b5563', margin: 0, lineHeight: '1.6' }}
                                                    />
                                                </div>
                                                <div style={{ marginBottom: '16px' }}>
                                                    <Button text={data.ctaText || "Explore Now"} href={data.ctaLink || "#"} />
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </center>
        </div>
    );
};

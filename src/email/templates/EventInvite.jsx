import React from "react";
import { EditableText, EditableImg, Button, StandardHeader } from "../elements/Shared";

export const EventInvite = ({ data, onUpdate, onImageClick, uneditable }) => {
    const SaasThemeText = "#475569";
    const SaasThemeFontFamily = "'Inter', system-ui, sans-serif";

    const eventTheme = {
        primary: "#4f46e5", // Indigo 600
        secondary: "#1e1b4b", // Extra Dark Indigo
        accent: "#818cf8", // Indigo 400
        background: "#f8fafc", // Slate 50
        text: "#1e293b"
    };

    return (
        <div style={{ width: '100%', backgroundColor: eventTheme.background, padding: '40px 0', fontFamily: "'Inter', sans-serif" }}>
            <center>
                <table border="0" cellPadding="0" cellSpacing="0" width="100%" style={{ maxWidth: '600px', backgroundColor: '#ffffff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}>
                    <tbody>
                        <tr>
                            <td>
                                <StandardHeader uneditable={uneditable} />

                                {/* Event Banner */}
                                <div style={{ position: 'relative' }}>
                                    <EditableImg
                                        field="banner"
                                        src={data.banner || "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=600&fit=crop&q=80"}
                                        label="Event Banner"
                                        onImageClick={onImageClick}
                                        uneditable={uneditable}
                                        style={{ display: 'block', width: '100%', height: 'auto' }}
                                    />
                                    <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)', padding: '40px 30px' }}>
                                        <div style={{ color: '#ffffff', fontSize: '14px', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>
                                            <EditableText field="date" value={data.date || "OCTOBER 25, 2024 • 10:00 AM PST"} onUpdate={onUpdate} uneditable={uneditable} />
                                        </div>
                                    </div>
                                </div>

                                {/* Event Details */}
                                <div style={{ padding: '48px 40px', textAlign: 'center' }}>
                                    <EditableText
                                        field="title"
                                        value={data.title || "The Future of AI Automation"}
                                        isHeader
                                        onUpdate={onUpdate}
                                        uneditable={uneditable}
                                        style={{ fontSize: '36px', fontWeight: '800', color: eventTheme.secondary, margin: '0 0 24px 0', lineHeight: '1.2', letterSpacing: '-0.025em' }}
                                    />
                                    <EditableText
                                        field="description"
                                        value={data.description || "Step into the next chapter of technological evolution. Join industry leaders for an exclusive summit on the power of autonomous workflows."}
                                        onUpdate={onUpdate}
                                        uneditable={uneditable}
                                        style={{ fontSize: '18px', lineHeight: '1.6', color: '#64748b', margin: '0 0 40px 0' }}
                                    />

                                    <Button
                                        text="SECURE YOUR SPOT"
                                        href="#"
                                        style={{
                                            backgroundColor: eventTheme.primary,
                                            color: '#ffffff',
                                            padding: '18px 48px',
                                            borderRadius: '8px',
                                            fontWeight: 'bold',
                                            fontSize: '16px',
                                            letterSpacing: '1px',
                                            boxShadow: '0 10px 15px -3px rgba(79, 70, 229, 0.4)'
                                        }}
                                    />
                                </div>

                                {/* Agenda / Speakers Preview */}
                                <div style={{ backgroundColor: '#f1f5f9', padding: '60px 40px' }}>
                                    <h3 style={{ margin: '0 0 40px 0', fontSize: '20px', fontWeight: '800', color: eventTheme.secondary, textAlign: 'center', textTransform: 'uppercase', letterSpacing: '2px' }}>
                                        Keynote Speakers
                                    </h3>

                                    <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                                        <tbody>
                                            <tr>
                                                <td width="50%" align="center" style={{ padding: '0 10px' }}>
                                                    <div style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
                                                        <div style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: '#e2e8f0', marginBottom: '16px', overflow: 'hidden', border: `3px solid ${eventTheme.accent}` }}>
                                                            <EditableImg
                                                                field="speaker1"
                                                                src={data.speaker1 || "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&q=80"}
                                                                onImageClick={onImageClick}
                                                                uneditable={uneditable}
                                                                style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
                                                            />
                                                        </div>
                                                        <div style={{ fontWeight: '800', fontSize: '16px', color: eventTheme.secondary }}>Sarah Chen</div>
                                                        <div style={{ fontSize: '13px', color: eventTheme.accent, fontWeight: 'bold', marginTop: '4px' }}>Director @ FutureLabs</div>
                                                    </div>
                                                </td>
                                                <td width="50%" align="center" style={{ padding: '0 10px' }}>
                                                    <div style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
                                                        <div style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: '#e2e8f0', marginBottom: '16px', overflow: 'hidden', border: `3px solid ${eventTheme.accent}` }}>
                                                            <EditableImg
                                                                field="speaker2"
                                                                src={data.speaker2 || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&q=80"}
                                                                onImageClick={onImageClick}
                                                                uneditable={uneditable}
                                                                style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
                                                            />
                                                        </div>
                                                        <div style={{ fontWeight: '800', fontSize: '16px', color: eventTheme.secondary }}>Marcus Thorne</div>
                                                        <div style={{ fontSize: '13px', color: eventTheme.accent, fontWeight: 'bold', marginTop: '4px' }}>Lead Architect @ NeuralNet</div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </center>
        </div>
    );
};


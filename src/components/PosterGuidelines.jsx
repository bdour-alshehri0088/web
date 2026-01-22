import React from 'react';
import { CheckCircle, Calendar, Mail, FileText } from 'lucide-react';

const PosterGuidelines = () => {
    return (
        <section className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
            <div className="container">
                {/* Abstract Submission Guidelines */}
                <div style={{
                    backgroundColor: 'white',
                    padding: '3rem',
                    borderRadius: 'var(--border-radius)',
                    boxShadow: 'var(--shadow-md)',
                    borderLeft: '6px solid var(--color-primary)',
                    marginBottom: '2rem'
                }}>
                    <h2 style={{ fontSize: '2rem', color: 'var(--color-text)', marginBottom: '1.5rem' }}>Abstract Submission Guidelines</h2>
                    <p style={{ color: 'var(--color-text-light)', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                        Please prepare your abstract according to the following guidelines:
                    </p>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                        {[
                            { label: 'Language:', value: 'English' },
                            { label: 'Length:', value: 'Up to 300–350 words (excluding title, authors, and affiliations)' },
                            { label: 'Title:', value: 'Concise and informative, using sentence case (only the first word and proper nouns capitalized)' },
                            { label: 'Authors and affiliations:', value: 'List all authors with institutional affiliations and country; clearly indicate the presenting author' },
                            { label: 'Keywords:', value: '3–5 keywords' },
                            { label: 'Thematic stream:', value: 'Select the primary thematic stream (1–7) that best fits your abstract; you may optionally indicate a secondary stream' },
                            { label: 'Type of presentation:', value: 'Indicate preference for oral or poster' }
                        ].map((item, i) => (
                            <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: 'var(--color-text-light)' }}>
                                <CheckCircle size={18} color="var(--color-primary)" style={{ marginTop: '3px', flexShrink: 0 }} />
                                <span><strong style={{ color: 'var(--color-text)' }}>{item.label}</strong> {item.value}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Important Dates - Simple Timeline */}
                <div style={{
                    backgroundColor: 'white',
                    padding: '2.5rem 2rem',
                    borderRadius: '16px',
                    boxShadow: 'var(--shadow-md)',
                    marginBottom: '2rem'
                }}>
                    <h2 style={{ fontSize: '1.75rem', color: 'var(--color-text)', marginBottom: '3rem', textAlign: 'center' }}>Important Dates</h2>

                    <div style={{
                        position: 'relative',
                        maxWidth: '1000px',
                        margin: '0 auto',
                        padding: '0 1rem'
                    }}>
                        {/* Horizontal Line */}
                        <div style={{
                            position: 'absolute',
                            left: '0',
                            right: '0',
                            top: '10px',
                            height: '4px',
                            background: 'linear-gradient(90deg, var(--color-primary) 0%, var(--color-accent) 100%)',
                            zIndex: 0,
                            borderRadius: '2px'
                        }} />

                        {/* Timeline Items */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(4, 1fr)',
                            gap: '2rem',
                            position: 'relative',
                            zIndex: 1,
                            paddingTop: '2rem'
                        }}>
                            {[
                                {
                                    day: '15',
                                    month: 'Feb',
                                    label: 'Abstract Submission Opens'
                                },
                                {
                                    day: '15',
                                    month: 'June',
                                    label: 'Abstract Submission Deadline'
                                },
                                {
                                    day: '30',
                                    month: 'July',
                                    label: 'Notification of Acceptance'
                                },
                                {
                                    day: '31',
                                    month: 'Sep',
                                    label: 'Early-Bird Registration'
                                }
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        position: 'relative'
                                    }}
                                >
                                    {/* Circle on Timeline */}
                                    <div style={{
                                        width: '14px',
                                        height: '14px',
                                        borderRadius: '50%',
                                        backgroundColor: 'white',
                                        border: '3px solid var(--color-primary)',
                                        position: 'absolute',
                                        top: '-20px',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        zIndex: 2,
                                        boxShadow: '0 0 0 3px rgba(150, 114, 89, 0.1)'
                                    }} />

                                    {/* Month and Day */}
                                    <div style={{
                                        textAlign: 'center',
                                        marginBottom: '0.75rem'
                                    }}>
                                        <div style={{
                                            fontSize: '1.5rem',
                                            fontWeight: '700',
                                            color: 'var(--color-primary)',
                                            lineHeight: '1'
                                        }}>
                                            {item.day}
                                        </div>
                                        <div style={{
                                            fontSize: '0.9rem',
                                            fontWeight: '600',
                                            color: 'var(--color-text-light)',
                                            marginTop: '0.25rem'
                                        }}>
                                            {item.month}
                                        </div>
                                    </div>

                                    {/* Label */}
                                    <p style={{
                                        fontSize: '0.85rem',
                                        color: 'var(--color-text)',
                                        fontWeight: '600',
                                        margin: 0,
                                        lineHeight: '1.3',
                                        textAlign: 'center',
                                        maxWidth: '200px'
                                    }}>
                                        {item.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <p style={{
                        marginTop: '2rem',
                        color: 'var(--color-text-light)',
                        lineHeight: '1.5',
                        textAlign: 'center',
                        padding: '0.75rem',
                        backgroundColor: 'rgba(150, 114, 89, 0.05)',
                        borderRadius: '8px',
                        border: '1px solid rgba(150, 114, 89, 0.1)',
                        fontSize: '0.85rem'
                    }}>
                        All presenting authors must complete their <strong style={{ color: 'var(--color-text)' }}>conference registration</strong> by the specified deadline for their contribution to be included in the final programme.
                    </p>
                </div>


            </div>
        </section>
    );
};

export default PosterGuidelines;

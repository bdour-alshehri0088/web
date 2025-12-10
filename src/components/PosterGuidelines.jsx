import React from 'react';
import { CheckCircle, Calendar, Mail } from 'lucide-react';

const PosterGuidelines = () => {
    return (
        <section className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
            <div className="container">
                <div style={{
                    backgroundColor: 'white',
                    padding: '3rem',
                    borderRadius: 'var(--border-radius)',
                    boxShadow: 'var(--shadow-md)',
                    borderLeft: '6px solid var(--color-primary)'
                }}>
                    <h2 style={{ fontSize: '2rem', color: 'var(--color-text)', marginBottom: '2rem' }}>Poster Guidelines</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                        <div>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Specifications</h3>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                {['Size: A0 (841 x 1189 mm)', 'Orientation: Portrait (Vertical)', 'Language: English', 'Font: Sans-serif (Arial, Helvetica)'].map((spec, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-light)' }}>
                                        <CheckCircle size={18} color="var(--color-primary)" /> {spec}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Content Requirements</h3>
                            <p style={{ color: 'var(--color-text-light)', marginBottom: '1rem' }}>
                                Posters should be self-explanatory and include the following sections:
                            </p>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--color-text-light)' }}>
                                <li>• Title, Authors, and Affiliations</li>
                                <li>• Abstract and Introduction</li>
                                <li>• Methodology and Results</li>
                                <li>• Conclusion and References</li>
                            </ul>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Important Dates</h3>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--color-text-light)' }}>
                                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                                    <Calendar size={20} color="var(--color-primary)" style={{ marginTop: '2px', flexShrink: 0 }} />
                                    <div>
                                        <strong style={{ display: 'block', color: 'var(--color-text)', marginBottom: '0.25rem' }}>Registration closes:</strong>
                                        30 Oct 2026
                                    </div>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                                    <Mail size={20} color="var(--color-primary)" style={{ marginTop: '2px', flexShrink: 0 }} />
                                    <div>
                                        <strong style={{ display: 'block', color: 'var(--color-text)', marginBottom: '0.25rem' }}>Final poster submission:</strong>
                                        30 Sep 2026 via email:<br />
                                        <a href="mailto:SDSC@ncm.gov.sa" style={{ color: 'var(--color-primary)', fontWeight: '500' }}>SDSC@ncm.gov.sa</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PosterGuidelines;

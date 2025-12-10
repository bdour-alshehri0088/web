import React from 'react';

const themes = [
    'Sources and Composition of Dust Aerosols',
    'Monitoring and Predictive Modeling',
    'Dust and Climate Interaction',
    'Health Impacts and Mitigation Strategies',
    'Economic and Infrastructural Impacts',
    'Uplifting, Transport, and Deposition of Dust Aerosols'
];

const ThemeGrid = () => {
    return (
        <section className="section" style={{ backgroundColor: 'var(--color-background)' }}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2.5rem', color: 'var(--color-text)' }}>Conference Themes</h2>
                    <div style={{
                        width: '60px',
                        height: '4px',
                        backgroundColor: 'var(--color-primary)',
                        margin: '1rem auto 0',
                        borderRadius: '2px'
                    }} />
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '1.5rem'
                }}>
                    {themes.map((theme, index) => (
                        <div
                            key={index}
                            style={{
                                backgroundColor: 'var(--color-white)',
                                padding: '2rem',
                                borderRadius: 'var(--border-radius)',
                                boxShadow: 'var(--shadow-sm)',
                                transition: 'all 0.3s ease',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                                border: '1px solid rgba(0,0,0,0.03)',
                                minHeight: '120px'
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                                e.currentTarget.style.borderColor = 'var(--color-primary)';
                                e.currentTarget.style.color = 'var(--color-primary)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                                e.currentTarget.style.borderColor = 'rgba(0,0,0,0.03)';
                                e.currentTarget.style.color = 'var(--color-text)';
                            }}
                        >
                            <h3 style={{
                                fontSize: '1.25rem',
                                margin: 0,
                                fontWeight: '600',
                                transition: 'color 0.3s'
                            }}>
                                {theme}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ThemeGrid;

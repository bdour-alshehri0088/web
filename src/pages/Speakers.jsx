import React from 'react';

const speakers = [
    {
        name: 'Dr. Sarah Smith',
        position: 'Senior Climatologist',
        affiliation: 'University of Oxford',
        title: 'Sources and Composition of Dust Aerosols'
    },
    {
        name: 'Prof. John Doe',
        position: 'Head of Atmospheric Science',
        affiliation: 'MIT',
        title: 'Predictive Modeling of Sand Storms'
    },
    {
        name: 'Dr. Emily Chen',
        position: 'Research Director',
        affiliation: 'Tsinghua University',
        title: 'Dust and Climate Interaction'
    },
    {
        name: 'Dr. Michael Brown',
        position: 'Public Health Advisor',
        affiliation: 'World Health Organization',
        title: 'Health Impacts and Mitigation Strategies'
    },
    {
        name: 'Dr. David Wilson',
        position: 'Environmental Economist',
        affiliation: 'World Bank',
        title: 'Economic Impacts of Dust Storms'
    },
    {
        name: 'Dr. Fatima Al-Sayed',
        position: 'Regional Coordinator',
        affiliation: 'King Saud University',
        title: 'Regional Strategies for Sand Control'
    },
];

const Speakers = () => {
    return (
        <div className="section" style={{ backgroundColor: 'var(--color-surface)', minHeight: '80vh' }}>
            <div className="container">
                <h1 className="text-center" style={{ marginBottom: '4rem', fontSize: '2.5rem' }}>Keynote Speakers</h1>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                    gap: '2rem'
                }}>
                    {speakers.map((speaker, index) => (
                        <div
                            key={index}
                            style={{
                                backgroundColor: 'white',
                                padding: '2.5rem',
                                borderRadius: 'var(--border-radius)',
                                boxShadow: 'var(--shadow-sm)',
                                transition: 'all 0.3s ease',
                                borderLeft: '4px solid var(--color-primary)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1rem'
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                            }}
                        >
                            <div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem', color: 'var(--color-text)' }}>{speaker.name}</h3>
                                <p style={{ color: 'var(--color-primary)', fontWeight: '600', fontSize: '0.95rem' }}>{speaker.position}</p>
                                <p style={{ color: 'var(--color-text-light)', fontSize: '0.9rem', fontStyle: 'italic' }}>{speaker.affiliation}</p>
                            </div>

                            <div style={{ width: '100%', height: '1px', backgroundColor: '#f0f0f0' }} />

                            <div>
                                <span style={{
                                    fontSize: '0.75rem',
                                    fontWeight: '700',
                                    color: 'var(--color-text-light)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em',
                                    display: 'block',
                                    marginBottom: '0.5rem'
                                }}>
                                    Presentation Title
                                </span>
                                <p style={{ fontSize: '1.05rem', fontWeight: '500', lineHeight: 1.4 }}>{speaker.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Speakers;

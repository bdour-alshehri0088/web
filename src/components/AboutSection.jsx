import React from 'react';
import { Target, Users, FileText, CheckCircle } from 'lucide-react';

const AboutSection = () => {
    return (
        <section className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
            <div className="container">

                {/* About The Conference */}
                <div style={{ marginBottom: '6rem' }}>
                    <div className="text-center" style={{ marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '2.5rem', color: 'var(--color-text)' }}>About the Conference</h2>
                    </div>
                    <div style={{
                        maxWidth: '1000px',
                        margin: '0 auto',
                        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Glassmorphism
                        backdropFilter: 'blur(12px)',
                        padding: '3.5rem',
                        borderRadius: '24px',
                        boxShadow: 'var(--shadow-md)',
                        border: '1px solid rgba(255, 255, 255, 0.5)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '4px',
                            background: 'linear-gradient(90deg, var(--color-primary) 0%, var(--color-secondary) 100%)'
                        }} />

                        <p style={{
                            fontSize: '1.25rem',
                            color: 'var(--color-text-light)',
                            lineHeight: '1.8',
                            textAlign: 'center',
                            fontWeight: '400'
                        }}>
                            The Second International Conference on Sand and Dust Storms (SDS) brings together global experts, researchers, and policymakers to address the growing challenges of dust storms. This event serves as a premier platform for exchanging knowledge, discussing innovative mitigation strategies, and fostering international cooperation to combat the environmental, health, and economic impacts of SDS.
                        </p>
                    </div>
                </div>

                {/* Why Attend? */}
                <div style={{ marginBottom: '6rem' }}>
                    <h2 className="text-center" style={{ fontSize: '2.5rem', color: 'var(--color-text)', marginBottom: '3rem' }}>Why Attend?</h2>
                    <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem', justifyContent: 'center' }}>
                        {[
                            {
                                icon: <Users size={28} color="white" />,
                                title: 'Network with Experts',
                                desc: 'Connect with leading scientists, meteorologists, and policymakers from around the globe.'
                            },
                            {
                                icon: <Target size={28} color="white" />,
                                title: 'Gain Insights',
                                desc: 'Access the latest research, predictive models, and technological advancements in SDS monitoring.'
                            },
                            {
                                icon: <FileText size={28} color="white" />,
                                title: 'Publish Your Work',
                                desc: 'Present your research to an international audience and contribute to the global body of knowledge.'
                            }
                        ].map((item, index) => (
                            <div key={index} style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.8)', // Glassmorphism
                                backdropFilter: 'blur(12px)',
                                padding: '1.75rem 1.5rem', // Reduced padding
                                borderRadius: '20px', // Consistent radius
                                boxShadow: 'var(--shadow-sm)',
                                border: '1px solid rgba(255, 255, 255, 0.5)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                gap: '1rem',
                                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                                cursor: 'default'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                                }}
                            >
                                <div style={{
                                    backgroundColor: 'var(--color-primary)',
                                    padding: '0.875rem', // Slightly smaller icon container
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '0.5rem'
                                }}>
                                    {item.icon}
                                </div>
                                <h3 style={{ fontSize: '1.15rem' }}>{item.title}</h3>
                                <p style={{ color: 'var(--color-text-light)', fontSize: '0.95rem', lineHeight: '1.5' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>



            </div>
        </section>
    );
};

export default AboutSection;

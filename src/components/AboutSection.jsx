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
                        <div style={{
                            width: '60px',
                            height: '4px',
                            backgroundColor: 'var(--color-primary)',
                            margin: '1rem auto 0',
                            borderRadius: '2px'
                        }} />
                    </div>
                    <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', fontSize: '1.1rem', color: 'var(--color-text-light)' }}>
                        <p>
                            The Second International Conference on Sand and Dust Storms (SDS) brings together global experts, researchers, and policymakers to address the growing challenges of dust storms. This event serves as a premier platform for exchanging knowledge, discussing innovative mitigation strategies, and fostering international cooperation to combat the environmental, health, and economic impacts of SDS.
                        </p>
                    </div>
                </div>

                {/* Why Attend? */}
                <div style={{ marginBottom: '6rem' }}>
                    <h2 className="text-center" style={{ fontSize: '2.5rem', color: 'var(--color-text)', marginBottom: '3rem' }}>Why Attend?</h2>
                    <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            {
                                icon: <Users size={32} color="white" />,
                                title: 'Network with Experts',
                                desc: 'Connect with leading scientists, meteorologists, and policymakers from around the globe.'
                            },
                            {
                                icon: <Target size={32} color="white" />,
                                title: 'Gain Insights',
                                desc: 'Access the latest research, predictive models, and technological advancements in SDS monitoring.'
                            },
                            {
                                icon: <FileText size={32} color="white" />,
                                title: 'Publish Your Work',
                                desc: 'Present your research to an international audience and contribute to the global body of knowledge.'
                            }
                        ].map((item, index) => (
                            <div key={index} style={{
                                backgroundColor: 'white',
                                padding: '2rem',
                                borderRadius: 'var(--border-radius)',
                                boxShadow: 'var(--shadow-sm)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                gap: '1rem'
                            }}>
                                <div style={{
                                    backgroundColor: 'var(--color-primary)',
                                    padding: '1rem',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    {item.icon}
                                </div>
                                <h3 style={{ fontSize: '1.25rem' }}>{item.title}</h3>
                                <p style={{ color: 'var(--color-text-light)' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>



            </div>
        </section>
    );
};

export default AboutSection;

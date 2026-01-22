import React from 'react';
import { Target, Users, FileText, CheckCircle, BookOpen, Monitor, MessageSquare, Presentation } from 'lucide-react';

const AboutSection = () => {
    return (
        <section className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
            <div className="container">

                {/* Conference Overview */}
                <div style={{ marginBottom: '4rem' }}>
                    <div className="text-center" style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '2rem', color: 'var(--color-text)' }}>Conference Overview</h2>
                    </div>
                    <div style={{
                        maxWidth: '100%',
                        margin: '0 auto',
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        backdropFilter: 'blur(12px)',
                        padding: '2.5rem',
                        borderRadius: '20px',
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

                        <div style={{
                            fontSize: '1rem',
                            color: 'var(--color-text-light)',
                            lineHeight: '1.7',
                            textAlign: 'left',
                            fontWeight: '400',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.25rem'
                        }}>
                            <p>
                                The Second International Conference on Sand and Dust Storms (SDS-2026) will convene the global community of researchers, operational experts, policymakers, and industry leaders to address the multifaceted challenges of sand and dust storms (SDS). Under the theme <strong>“Bridging Science and Solutions – Building Resilience to Sand and Dust Storms”</strong>, this pivotal forum is dedicated to translating cutting-edge research into actionable strategies, fostering innovation, and strengthening global partnerships.
                            </p>
                            <p>
                                Hosted by the <strong>WMO Sand and Dust Storm Regional Center/ National Center for Meteorology of Saudi Arabia</strong>, the conference is a key event aligned with the <strong>United Nations Decade on Combating Sand and Dust Storms (2025–2034)</strong>. It will be held in Riyadh from <strong>3–5 November 2026</strong>.
                            </p>

                            <p>
                                This conference offers a unique opportunity to network with global experts, discover innovative technologies, and contribute to building a more resilient future to the impacts of SDS on health, environment, climate, and sustainable development.
                            </p>
                            <p style={{ fontWeight: '600', color: 'var(--color-primary)' }}>
                                We invite abstracts for oral and poster presentations as outlined below.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Why Attend? */}
                <div style={{ marginBottom: '2rem' }}>
                    <h2 className="text-center" style={{ fontSize: '2rem', color: 'var(--color-text)', marginBottom: '2.5rem' }}>Why Attend?</h2>
                    <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem', justifyContent: 'center' }}>
                        {[
                            {
                                icon: <BookOpen size={28} color="white" />,
                                title: 'Scientific Sessions',
                                desc: 'Keynote lectures and oral presentations across seven core thematic streams.'
                            },
                            {
                                icon: <Presentation size={28} color="white" />,
                                title: 'Interactive Poster Sessions',
                                desc: 'Dedicated sessions showcasing latest research with awards for students and early-career scientists.'
                            },
                            {
                                icon: <Monitor size={28} color="white" />,
                                title: 'Exhibition & Technology',
                                desc: 'State-of-the-art scientific products, monitoring instruments, and technological solutions.'
                            },
                            {
                                icon: <MessageSquare size={28} color="white" />,
                                title: 'High-Level Panels',
                                desc: 'Discussions focused on policy, governance, and international cooperation.'
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

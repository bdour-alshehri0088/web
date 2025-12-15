
import React from 'react';
import logoCombined from '../assets/logo_combined.png';

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: 'white',
            padding: 'var(--spacing-2xl) 0 var(--spacing-lg)',
            marginTop: 'auto',
            borderTop: '1px solid rgba(150, 114, 89, 0.2)',
            boxShadow: '0 -4px 20px rgba(0,0,0,0.02)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <svg
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '180px',
                    pointerEvents: 'none',
                    opacity: 1
                }}
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
            >
                <path
                    fill="rgba(150, 114, 89, 0.15)"
                    d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,202.7C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
                <path
                    fill="rgba(197, 160, 101, 0.2)"
                    d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
            </svg>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 'var(--spacing-sm)', // Reduced from lg
                    marginBottom: 'var(--spacing-sm)', // Reduced from md
                    textAlign: 'center'
                }}>
                    {/* Brand */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
                        <img src={logoCombined} alt="Organizing Entities" style={{ maxHeight: '130px', maxWidth: '100%', objectFit: 'contain' }} />
                    </div>

                    {/* Links Row - Glass Container */}
                    <div style={{
                        width: '100%',
                        maxWidth: '800px',
                        marginTop: 'var(--spacing-sm)', // Reduced margin top
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(0, 0, 0, 0.05)',
                        boxShadow: 'var(--shadow-sm)',
                        borderRadius: '20px',
                        padding: 'var(--spacing-md) var(--spacing-md)' // Reduced vertical padding from lg to md
                    }}>
                        <div className="footer-links-grid" style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gap: '0',
                            width: '100%',
                        }}>

                            {/* Column 1: Social Media (Left) */}
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 'var(--spacing-xs)',
                                alignItems: 'center',
                                padding: '0 var(--spacing-sm)' // Reduced horizontal padding
                            }}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minWidth: '130px' }}>
                                    <h3 style={{ color: 'var(--color-secondary)', fontSize: '0.95rem', marginBottom: '6px', fontWeight: '600' }}>Social Media</h3>
                                    <a href="https://x.com/SDSCKSA" target="_blank" rel="noopener noreferrer" style={{
                                        textDecoration: 'none',
                                        color: 'var(--color-text)',
                                        fontWeight: '500',
                                        fontSize: '0.85rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '6px',
                                        transition: 'opacity 0.2s',
                                    }}>
                                        <span style={{ fontSize: '1rem', color: 'var(--color-primary)' }}>𝕏</span> Follow us on X
                                    </a>
                                </div>
                            </div>

                            {/* Column 2: Contact Us (Center) */}
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 'var(--spacing-xs)',
                                alignItems: 'center',
                                padding: '0 var(--spacing-sm)'
                            }}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minWidth: '160px' }}>
                                    <h3 style={{ color: 'var(--color-secondary)', fontSize: '0.95rem', marginBottom: '6px', fontWeight: '600' }}>Contact Us</h3>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-primary)' }}><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                        <a href="mailto:SDSC@ncm.gov.sa" style={{ color: 'var(--color-text)', textDecoration: 'none', fontWeight: '500', fontSize: '0.85rem' }}>SDSC@ncm.gov.sa</a>
                                    </div>
                                </div>
                            </div>

                            {/* Column 3: Related Sites (Right) */}
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 'var(--spacing-xs)',
                                alignItems: 'center',
                                padding: '0 var(--spacing-sm)'
                            }}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                    <h3 style={{ color: 'var(--color-secondary)', fontSize: '0.95rem', marginBottom: '6px', fontWeight: '600' }}>Related Websites</h3>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'flex-start' }}>
                                        <a href="https://dust.ncm.gov.sa" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text)', textDecoration: 'none', fontSize: '0.85rem', transition: 'color 0.2s' }}>
                                            Sand and Dust Storm Center
                                        </a>
                                        <a href="https://www.ncm.gov.sa" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text)', textDecoration: 'none', fontSize: '0.85rem', transition: 'color 0.2s' }}>
                                            National Center for Meteorology
                                        </a>
                                        <a href="https://wmo.int" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text)', textDecoration: 'none', fontSize: '0.85rem', transition: 'color 0.2s' }}>
                                            World Meteorological Organization
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Styling for Container */}
                    <style>{`
                        @media (max-width: 768px) {
                            .footer-links-grid {
                                grid-template-columns: 1fr !important;
                                gap: var(--spacing-lg) !important;
                            }
                            /* Add visual separation for mobile stacking inside the card */
                            .footer-links-grid > div {
                                border-bottom: 1px solid rgba(0,0,0,0.05);
                                padding-bottom: var(--spacing-md) !important;
                                width: 100%;
                            }
                            .footer-links-grid > div:last-child {
                                border-bottom: none;
                                padding-bottom: 0 !important;
                            }
                        }
                    `}</style>
                </div>

                <div style={{
                    textAlign: 'center',
                    color: 'var(--color-text-light)',
                    fontSize: '0.85rem',
                    paddingTop: 'var(--spacing-lg)',
                    borderTop: '1px solid rgba(0,0,0,0.05)'
                }}>
                    <p>© 2026 The Second International Conference on Sand and Dust Storms. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

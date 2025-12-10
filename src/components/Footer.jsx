
import React from 'react';
import logoCombined from '../assets/logo_combined.png';

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: 'white',
            padding: 'var(--spacing-xl) 0 var(--spacing-lg)',
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
                    height: '120px',
                    pointerEvents: 'none',
                    opacity: 1 // Increased from 0.4 for better visibility
                }}
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
            >
                <path
                    fill="rgba(150, 114, 89, 0.15)" // Increased opacity
                    d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,202.7C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
                <path
                    fill="rgba(197, 160, 101, 0.2)" // Increased opacity
                    d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
            </svg>
            <div className="container" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 'var(--spacing-lg)'
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: 'var(--spacing-lg)',
                    // Removed grayscale filter for better color accuracy
                }}>
                    <img src={logoCombined} alt="Organizing Entities" style={{ maxHeight: '180px', maxWidth: '100%' }} />
                </div>

                <div style={{
                    textAlign: 'center',
                    color: 'var(--color-text-light)',
                    fontSize: '0.95rem',
                    maxWidth: '600px',
                    lineHeight: 1.8
                }}>
                    <p style={{ fontWeight: '500', marginBottom: '0.5rem' }}>The Second International Conference on Sand and Dust Storms</p>
                    <p>© 2026 All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

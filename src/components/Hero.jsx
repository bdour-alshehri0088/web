import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo_conference.png';
import Countdown from './Countdown';
import { MapPin } from 'lucide-react';

const Hero = () => {
    return (
        <section style={{
            position: 'relative',
            minHeight: '90vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #F5F5F0 0%, #E0D8D0 100%)', // Soft earth gradient
            overflow: 'hidden',
            textAlign: 'center',
            padding: '2rem'
        }}>
            {/* Abstract atmospheric background elements */}
            <div style={{
                position: 'absolute',
                top: '-20%',
                left: '-10%',
                width: '60%',
                height: '60%',
                background: 'radial-gradient(circle, rgba(150, 114, 89, 0.1) 0%, transparent 70%)',
                filter: 'blur(60px)',
                pointerEvents: 'none'
            }} />
            <div style={{
                position: 'absolute',
                bottom: '-20%',
                right: '-10%',
                width: '60%',
                height: '60%',
                background: 'radial-gradient(circle, rgba(197, 160, 101, 0.15) 0%, transparent 70%)',
                filter: 'blur(60px)',
                pointerEvents: 'none'
            }} />

            <svg
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '40%',
                    pointerEvents: 'none',
                    opacity: 1 // Increased from 0.6
                }}
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
            >
                <path
                    fill="rgba(150, 114, 89, 0.15)" // Increased opacity
                    d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
                <path
                    fill="rgba(197, 160, 101, 0.2)" // Increased opacity
                    d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
            </svg>

            {/* Subtle grain texture overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.05\'/%3E%3C/svg%3E")',
                pointerEvents: 'none',
                opacity: 0.4
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '900px' }}>
                <h1 style={{
                    fontSize: 'clamp(3rem, 6vw, 4.5rem)',
                    color: 'var(--color-text)',
                    marginBottom: '1.5rem',
                    lineHeight: 1.1,
                    letterSpacing: '-0.03em',
                    background: 'linear-gradient(135deg, var(--color-text) 0%, var(--color-primary) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                }}>
                    The Second International Conference on Sand and Dust Storms
                </h1>

                {/* Unified Glass Container */}
                <div style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.6)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: '24px',
                    padding: '2.5rem',
                    marginBottom: '3rem',
                    border: '1px solid rgba(255, 255, 255, 0.8)',
                    boxShadow: '0 20px 40px rgba(150, 114, 89, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.5)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '2rem',
                    maxWidth: '800px',
                    margin: '0 auto 3rem auto'
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.5rem',
                        alignItems: 'center'
                    }}>
                        <p style={{
                            fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                            color: 'var(--color-primary)',
                            fontWeight: '700',
                            margin: 0,
                            letterSpacing: '-0.02em'
                        }}>
                            2 – 4 November 2026
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', opacity: 0.8 }}>
                            <MapPin size={18} color="var(--color-text)" />
                            <span style={{
                                fontSize: '1.1rem',
                                color: 'var(--color-text)',
                                fontWeight: '500'
                            }}>
                                Saudi Arabia
                            </span>
                        </div>
                    </div>

                    <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(150, 114, 89, 0.15)' }} />

                    <Countdown />
                </div>



                <div>
                    <Link
                        to="/registration"
                        className="btn-primary"
                    >
                        Register Now
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;

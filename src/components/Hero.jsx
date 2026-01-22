import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo_conference.png';
import Countdown from './Countdown';
import { MapPin } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-bg-blob-1" />
            <div className="hero-bg-blob-2" />

            <svg
                className="hero-wave-svg"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
            >
                <path
                    fill="rgba(150, 114, 89, 0.15)"
                    d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
                <path
                    fill="rgba(197, 160, 101, 0.2)"
                    d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
            </svg>

            <div className="hero-noise-overlay" />

            <div className="container hero-content">
                <h1 className="hero-title">
                    The Second International Conference on Sand and Dust Storms (SDS-2026)
                </h1>
                <p className="hero-theme">
                    Bridging Science and Solutions – Building Resilience to Sand and Dust Storms
                </p>

                <div className="hero-glass-card">
                    <div className="hero-date-location">
                        <p className="hero-date">
                            3–5 November 2026
                        </p>
                        <div className="hero-location">
                            <MapPin size={18} color="var(--color-text)" />
                            <span className="hero-location-text">
                                Riyadh, Saudi Arabia
                            </span>
                        </div>
                    </div>

                    <div className="hero-divider" />

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

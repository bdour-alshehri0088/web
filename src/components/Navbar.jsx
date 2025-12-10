import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo_conference.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Registration', path: '/registration' },
        { name: 'Agenda', path: '/agenda' },
        { name: 'Speakers', path: '/speakers' },
    ];

    const isActive = (path) => {
        if (path === '/' && location.pathname !== '/') return false;
        return location.pathname.startsWith(path);
    };

    return (
        <nav style={{
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            boxShadow: 'var(--shadow-sm)',
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            borderBottom: '1px solid rgba(0,0,0,0.05)'
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '90px'
            }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <img src={logo} alt="Conference Logo" style={{ height: '75px' }} />
                </Link>

                {/* Desktop Menu */}
                <div className="desktop-menu" style={{ display: 'none', gap: '2.5rem' }}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            style={{
                                fontWeight: '500',
                                fontSize: '1rem',
                                color: isActive(link.path) ? 'var(--color-primary)' : 'var(--color-text)',
                                position: 'relative',
                                padding: '0.5rem 0'
                            }}
                        >
                            {link.name}
                            {isActive(link.path) && (
                                <span style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    height: '2px',
                                    backgroundColor: 'var(--color-primary)',
                                    borderRadius: '2px'
                                }} />
                            )}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsOpen(!isOpen)}
                    style={{ display: 'block', color: 'var(--color-text)' }}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div style={{
                    position: 'absolute',
                    top: '90px',
                    left: 0,
                    right: 0,
                    backgroundColor: 'var(--color-white)',
                    padding: '1.5rem',
                    boxShadow: 'var(--shadow-lg)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    borderTop: '1px solid rgba(0,0,0,0.05)'
                }}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            style={{
                                fontWeight: '600',
                                fontSize: '1.1rem',
                                color: isActive(link.path) ? 'var(--color-primary)' : 'var(--color-text)',
                                padding: '0.75rem 0',
                                borderBottom: '1px solid rgba(0,0,0,0.05)'
                            }}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}

            <style>{`
        @media (min-width: 768px) {
          .desktop-menu { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
          .desktop-only { display: block !important; }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;

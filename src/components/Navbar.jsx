import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo_combined.png';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Thematic Streams', path: '/#scope' },
        { name: 'Registration', path: '/registration' },
        { name: 'Conference Program', path: '/program' },
        { name: 'Committees', path: '/committees' },
        { name: 'Contact', path: '/contact' },
    ];

    const handleScroll = (e, path) => {
        if (path === '/#scope') {
            e.preventDefault();
            if (location.pathname === '/') {
                const element = document.getElementById('scope');
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                window.location.href = '/web/#scope';
            }
            setIsOpen(false);
        }
    };

    const isActive = (path) => {
        if (path === '/' && location.pathname !== '/') return false;
        if (path === '/#scope') return false;
        return location.pathname.startsWith(path);
    };

    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <Link to="/" className="navbar-logo-link">
                    <img src={logo} alt="Conference Logo" className="navbar-logo" />
                </Link>

                {/* Desktop Menu */}
                <div className="navbar-desktop-menu">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={(e) => handleScroll(e, link.path)}
                            className={`navbar-link ${isActive(link.path) ? 'active' : ''}`}
                        >
                            {link.name}
                            {isActive(link.path) && (
                                <span className="navbar-link-indicator" />
                            )}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="navbar-mobile-btn"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="navbar-mobile-menu">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={(e) => {
                                handleScroll(e, link.path);
                                setIsOpen(false);
                            }}
                            className={`navbar-mobile-link ${isActive(link.path) ? 'active' : ''}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>

    );
};

export default Navbar;

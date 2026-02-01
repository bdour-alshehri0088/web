import React from 'react';
import { Mail, User, Building, FileText } from 'lucide-react';

const Contact = () => {
    const contacts = [
        {
            category: 'Scientific Programme / Abstracts',
            description: 'For questions related to the Call for Abstracts or the scientific programme, please contact:',
            name: 'Dr. Alaa Mhawish',
            email: 'a.mhawish@ncm.gov.sa',
            icon: <FileText size={22} />,
            gradient: 'linear-gradient(135deg, #967259 0%, #B8997A 100%)'
        },
        {
            category: 'Conference Secretariat',
            description: 'For general enquiries about registration, logistics, and visas, please contact:',
            name: 'Mr. Turki Al-Harbi',
            email: 'T.alharbi@ncm.gov.sa',
            icon: <Building size={22} />,
            gradient: 'linear-gradient(135deg, #C5A065 0%, #D4B87A 100%)'
        }
    ];

    return (
        <section className="section" style={{
            backgroundColor: 'var(--color-surface)',
            minHeight: '60vh',
            paddingTop: '4rem',
            paddingBottom: '4rem'
        }}>
            <div className="container">
                {/* Compact Header */}
                <div className="text-center" style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{
                        fontSize: '1.75rem',
                        color: 'var(--color-text)',
                        marginBottom: '0.5rem',
                        fontWeight: '600'
                    }}>Contact</h2>
                    <div style={{
                        width: '40px',
                        height: '3px',
                        backgroundColor: 'var(--color-primary)',
                        margin: '0 auto',
                        borderRadius: '2px'
                    }} />
                </div>

                {/* Cards Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '1.5rem',
                    maxWidth: '800px',
                    margin: '0 auto'
                }}>
                    {contacts.map((contact, index) => (
                        <div
                            key={index}
                            style={{
                                backgroundColor: 'white',
                                borderRadius: '16px',
                                padding: '1.75rem',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                                border: '1px solid rgba(0,0,0,0.04)',
                                transition: 'all 0.3s ease',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-4px)';
                                e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.1)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)';
                            }}
                        >
                            {/* Top accent bar */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                height: '4px',
                                background: contact.gradient
                            }} />

                            {/* Icon & Category */}
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                marginBottom: '0.75rem'
                            }}>
                                <div style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '10px',
                                    background: contact.gradient,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    boxShadow: '0 4px 12px rgba(150, 114, 89, 0.25)'
                                }}>
                                    {contact.icon}
                                </div>
                                <h3 style={{
                                    fontSize: '1rem',
                                    fontWeight: '600',
                                    color: 'var(--color-text)',
                                    margin: 0
                                }}>
                                    {contact.category}
                                </h3>
                            </div>

                            {/* Description */}
                            <p style={{
                                color: 'var(--color-text-light)',
                                fontSize: '0.85rem',
                                lineHeight: '1.5',
                                marginBottom: '1rem'
                            }}>
                                {contact.description}
                            </p>

                            {/* Contact Info Card */}
                            <div style={{
                                backgroundColor: 'rgba(150, 114, 89, 0.04)',
                                borderRadius: '10px',
                                padding: '1rem'
                            }}>
                                {/* Name */}
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.6rem',
                                    marginBottom: '0.5rem'
                                }}>
                                    <User size={16} color="var(--color-primary)" />
                                    <span style={{
                                        fontWeight: '600',
                                        color: 'var(--color-text)',
                                        fontSize: '0.9rem'
                                    }}>
                                        {contact.name}
                                    </span>
                                </div>

                                {/* Email */}
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.6rem'
                                }}>
                                    <Mail size={16} color="var(--color-primary)" />
                                    <a
                                        href={`mailto:${contact.email}`}
                                        style={{
                                            color: 'var(--color-primary)',
                                            fontWeight: '500',
                                            fontSize: '0.85rem',
                                            textDecoration: 'none',
                                            transition: 'opacity 0.2s'
                                        }}
                                        onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                                        onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
                                    >
                                        {contact.email}
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;

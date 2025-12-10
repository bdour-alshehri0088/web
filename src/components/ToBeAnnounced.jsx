import React from 'react';
import { Clock } from 'lucide-react';

const ToBeAnnounced = ({ title }) => {
    return (
        <div className="section" style={{
            minHeight: '70vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--color-surface)'
        }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <div style={{
                    display: 'inline-flex',
                    padding: '2rem',
                    backgroundColor: 'white',
                    borderRadius: '50%',
                    marginBottom: '2rem',
                    boxShadow: 'var(--shadow-md)'
                }}>
                    <Clock size={64} color="var(--color-primary)" />
                </div>
                <h1 style={{
                    fontSize: '3rem',
                    marginBottom: '1rem',
                    color: 'var(--color-text)'
                }}>
                    {title}
                </h1>
                <p style={{
                    fontSize: '1.5rem',
                    color: 'var(--color-text-light)',
                    fontWeight: '500'
                }}>
                    To be announced later
                </p>
                <div style={{
                    width: '60px',
                    height: '4px',
                    backgroundColor: 'var(--color-primary)',
                    margin: '2rem auto 0',
                    borderRadius: '2px'
                }} />
            </div>
        </div>
    );
};

export default ToBeAnnounced;

import React from 'react';

const Registration = () => {
    return (
        <div className="section" style={{ backgroundColor: 'var(--color-surface)', minHeight: '80vh' }}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '3rem' }}>
                    <h1 style={{ fontSize: '2.5rem', color: 'var(--color-text)' }}>Registration</h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)' }}>
                        Join us for The Second International Conference on Sand and Dust Storms 2026
                    </p>
                </div>

                <div dir="ltr" style={{
                    backgroundColor: 'white',
                    borderRadius: 'var(--border-radius)',
                    boxShadow: 'var(--shadow-lg)',
                    padding: '2rem',
                    maxWidth: '100%', // Widened container
                    margin: '0 auto',
                    minHeight: '600px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <iframe
                        width="100%" // Full width
                        height="800px" // Increased height for better visibility
                        src="https://forms.cloud.microsoft/r/0MHkCp0774?embed=true&lang=en-US"
                        frameBorder="0"
                        marginWidth="0"
                        marginHeight="0"
                        style={{ border: 'none', maxWidth: '100%', maxHeight: '100vh', width: '100%', height: '800px' }}
                        allowFullScreen
                        webkitallowfullscreen="true"
                        mozallowfullscreen="true"
                        msallowfullscreen="true"
                    />
                </div>
            </div>
        </div>
    );
};

export default Registration;

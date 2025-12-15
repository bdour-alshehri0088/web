
import React, { useState, useEffect, useRef } from 'react';

const StatItem = ({ end, label, duration = 800 }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTime = null;
        let animationFrame;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            // Easing function for smooth animation (easeOutQuart)
            const easeOut = 1 - Math.pow(1 - percentage, 4);

            setCount(Math.floor(easeOut * end));

            if (progress < duration) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(end); // Ensure it lands exactly on the end number
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [isVisible, end, duration]);

    return (
        <div ref={countRef} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            padding: 'var(--spacing-lg) var(--spacing-md)', // Compact vertical padding
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(12px)',
            borderRadius: '20px',
            boxShadow: 'var(--shadow-md)',
            border: '1px solid rgba(255, 255, 255, 0.5)',
            width: '100%',
        }}>
            <div style={{
                fontSize: '3.5rem', // Slightly adjusted for compact card
                fontWeight: '800',
                color: 'var(--color-primary)',
                marginBottom: '4px', // Reduced margin
                lineHeight: 1,
                display: 'flex',
                alignItems: 'baseline',
                textShadow: '0 4px 20px rgba(197, 160, 101, 0.3)'
            }}>
                {count}<span style={{
                    fontSize: '2.5rem',
                    marginLeft: '4px',
                    color: 'var(--color-secondary)'
                }}>+</span>
            </div>
            <div style={{
                color: 'var(--color-text)',
                fontSize: '0.95rem',
                fontWeight: '600',
                maxWidth: '180px',
                lineHeight: 1.4
            }}>
                {label}
            </div>
        </div>
    );
};

const StatsSection = () => {
    return (
        <section style={{
            padding: 'var(--spacing-lg) 0', // Reduced section padding
            position: 'relative',
            zIndex: 10
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: 'var(--spacing-lg)',
                    alignItems: 'stretch',
                    justifyContent: 'center'
                }}>
                    <StatItem end={150} label="Conference Participants" duration={800} />
                    <StatItem end={20} label="International Experts" duration={800} />
                    <StatItem end={15} label="Participating Countries" duration={800} />
                </div>
            </div>
        </section>
    );
};

export default StatsSection;

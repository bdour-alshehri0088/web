import React, { useState, useEffect } from 'react';

const Countdown = () => {
    const calculateTimeLeft = () => {
        const difference = +new Date('2026-11-02') - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        timerComponents.push(
            <div key={interval} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                margin: '0 1rem'
            }}>
                <span style={{
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    color: 'var(--color-primary)',
                    lineHeight: 1
                }}>
                    {timeLeft[interval]}
                </span>
                <span style={{
                    fontSize: '0.9rem',
                    textTransform: 'uppercase',
                    color: 'var(--color-text-light)',
                    letterSpacing: '0.1em',
                    marginTop: '0.5rem'
                }}>
                    {interval}
                </span>
            </div>
        );
    });

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
        }}>
            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div>
    );
};

export default Countdown;

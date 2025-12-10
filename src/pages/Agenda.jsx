import React, { useState } from 'react';

const schedule = [
    {
        day: 'Day 1 - November 2',
        sessions: [
            { time: '09:00 - 10:00', title: 'Opening Ceremony', speaker: 'Keynote Speakers', room: 'Main Hall' },
            { time: '10:00 - 11:30', title: 'Sources and Composition of Dust Aerosols', speaker: 'Dr. Sarah Smith', room: 'Hall A' },
            { time: '11:30 - 13:00', title: 'Monitoring and Predictive Modeling', speaker: 'Prof. John Doe', room: 'Hall B' },
        ]
    },
    {
        day: 'Day 2 - November 3',
        sessions: [
            { time: '09:00 - 10:30', title: 'Dust and Climate Interaction', speaker: 'Dr. Emily Chen', room: 'Hall A' },
            { time: '10:30 - 12:00', title: 'Health Impacts and Mitigation', speaker: 'Dr. Michael Brown', room: 'Hall B' },
        ]
    },
    {
        day: 'Day 3 - November 4',
        sessions: [
            { time: '09:00 - 10:30', title: 'Economic Impacts', speaker: 'Dr. David Wilson', room: 'Hall A' },
            { time: '10:30 - 12:00', title: 'Closing Ceremony', speaker: 'Organizing Committee', room: 'Main Hall' },
        ]
    }
];

const Agenda = () => {
    const [activeDay, setActiveDay] = useState(0);

    return (
        <div className="section" style={{ minHeight: '80vh' }}>
            <div className="container">
                <h1 className="text-center" style={{ marginBottom: '3rem', fontSize: '2.5rem' }}>Conference Agenda</h1>

                {/* Day Tabs */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '1rem',
                    marginBottom: '2rem',
                    flexWrap: 'wrap'
                }}>
                    {schedule.map((day, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveDay(index)}
                            style={{
                                padding: '1rem 2rem',
                                borderRadius: '50px',
                                backgroundColor: activeDay === index ? 'var(--color-primary)' : 'var(--color-surface)',
                                color: activeDay === index ? 'white' : 'var(--color-text)',
                                fontWeight: '600',
                                transition: 'all 0.3s',
                                boxShadow: activeDay === index ? 'var(--shadow-md)' : 'none'
                            }}
                        >
                            {day.day}
                        </button>
                    ))}
                </div>

                {/* Schedule Table */}
                <div style={{
                    backgroundColor: 'white',
                    borderRadius: 'var(--border-radius)',
                    boxShadow: 'var(--shadow-sm)',
                    overflow: 'hidden'
                }}>
                    <div className="grid" style={{ gap: 0 }}>
                        {/* Header */}
                        <div style={{
                            gridTemplateColumns: '150px 1fr 1fr',
                            padding: '1.5rem',
                            backgroundColor: 'var(--color-surface)',
                            fontWeight: '700',
                            borderBottom: '1px solid #e5e5e5',
                            display: 'none', // Hidden on mobile via inline style, shown on desktop via class
                        }} className="desktop-header">
                            <div>Time</div>
                            <div>Session</div>
                            <div>Speaker</div>
                        </div>

                        {/* Rows */}
                        {schedule[activeDay].sessions.map((session, index) => (
                            <div
                                key={index}
                                style={{
                                    padding: '1.5rem',
                                    borderBottom: index !== schedule[activeDay].sessions.length - 1 ? '1px solid #f0f0f0' : 'none',
                                    transition: 'background-color 0.2s'
                                }}
                                className="session-row"
                            >
                                <div className="desktop-layout" style={{
                                    display: 'grid',
                                    gridTemplateColumns: '150px 1fr 1fr',
                                    alignItems: 'center',
                                    gap: '1rem'
                                }}>
                                    <div style={{ fontWeight: '600', color: 'var(--color-primary)' }}>{session.time}</div>
                                    <div style={{ fontWeight: '700' }}>{session.title}</div>
                                    <div style={{ color: 'var(--color-text-light)' }}>{session.speaker}</div>
                                </div>

                                {/* Mobile Layout */}
                                <div className="mobile-layout" style={{ display: 'none', flexDirection: 'column', gap: '0.5rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span style={{ fontWeight: '600', color: 'var(--color-primary)' }}>{session.time}</span>
                                    </div>
                                    <div style={{ fontWeight: '700', fontSize: '1.1rem' }}>{session.title}</div>
                                    <div style={{ color: 'var(--color-text-light)' }}>{session.speaker}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <style>{`
          @media (max-width: 768px) {
            .desktop-header { display: none !important; }
            .desktop-layout { display: none !important; }
            .mobile-layout { display: flex !important; }
          }
          @media (min-width: 769px) {
            .desktop-header { display: grid !important; }
            .desktop-layout { display: grid !important; }
            .mobile-layout { display: none !important; }
          }
        `}</style>
            </div>
        </div>
    );
};

export default Agenda;

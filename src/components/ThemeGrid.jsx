import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import stream images
import stream1Img from '../assets/streams/stream_1.png';
import stream2Img from '../assets/streams/stream_2.png';
import stream3Img from '../assets/streams/stream_3.png';
import stream4Img from '../assets/streams/stream_4.png';
import stream5Img from '../assets/streams/stream_5.png';
import stream6Img from '../assets/streams/stream_6.png';
import stream7Img from '../assets/streams/stream_7.png';

const streams = [
    {
        number: 1,
        title: 'Health, Societal and Economic Impacts',
        image: stream1Img,
        color: '#967259', // بني - للصحة والمجتمع
        topics: [
            { name: 'Public Health', desc: 'Epidemiological studies on SDS-related respiratory, cardiovascular, and other health outcomes; vulnerability of specific populations; health burden and risk assessment.' },
            { name: 'Air Quality & Exposure Science', desc: 'Monitoring and modelling particulate matter (PM₁₀, PM₂.₅) during dust events; source apportionment in dusty environments; personal exposure assessment.' },
            { name: 'Socio-Economic Dimensions', desc: 'Impacts on agriculture, infrastructure, labour productivity and livelihoods; cost-benefit and loss-damage analyses of mitigation measures; social vulnerability, equity and community resilience.' }
        ]
    },
    {
        number: 2,
        title: 'Observation, Monitoring, and Remote Sensing',
        image: stream2Img,
        color: '#5B9BD5', // سماوي - للمراقبة والاستشعار
        topics: [
            { name: 'Ground-Based & In Situ', desc: 'Advances in networks (AERONET, lidar), physical/chemical properties.' },
            { name: 'Satellite Remote Sensing', desc: 'New sensors, retrieval algorithms, dust detection, tracking, and quantification.' },
            { name: 'Emerging Technologies', desc: 'Drones/UAVs, IoT sensor networks, citizen science for dust monitoring.' }
        ]
    },
    {
        number: 3,
        title: 'Modelling, Forecasting and Early Warning',
        image: stream3Img,
        color: '#D4A03E', // أصفر غامق/ذهبي - للتنبؤ
        topics: [
            { name: 'Numerical Modelling & Prediction', desc: 'Dust emission/transport modelling, ensemble forecasting, AI/ML models.' },
            { name: 'Early Warning Systems (EWS)', desc: 'Design and evaluation of operational SDS EWS, communication to stakeholders.' },
            { name: 'Climate–Dust Interactions', desc: 'Role of dust in climate system, future projections, precipitation interactions.' }
        ]
    },
    {
        number: 4,
        title: 'Sources, Processes and Mitigation',
        image: stream4Img,
        color: '#4A7C59', // أخضر - للزراعة وإعادة التأهيل
        topics: [
            { name: 'Dust Source Characterization', desc: 'Identification and dynamics of dust emission hotspots; land–atmosphere interactions; roles of soil moisture, vegetation, surface roughness, and anthropogenic drivers.' },
            { name: 'Mitigation and Adaptation Strategies', desc: 'Evaluation of land restoration, green belts, soil stabilization, and other land-management interventions; urban planning and green infrastructure for dust reduction and resilience.' },
            { name: 'Sectoral Impacts and Solutions', desc: 'Effects of SDS on renewable energy (especially solar PV), power systems, and infrastructure; implications for water resources and related management strategies.' }
        ]
    },
    {
        number: 5,
        title: 'Policy, Governance and International Cooperation',
        image: stream5Img,
        color: '#2C4A6E', // كحلي - للسياسات والحوكمة
        topics: [
            { name: 'Science–Policy Interface', desc: 'Frameworks and processes for translating research and operational experience into evidence-based policies; national and regional action plans to combat SDS; integration into disaster risk reduction and climate strategies.' },
            { name: 'International Governance and SDGs', desc: 'Roles of the UN SDS Coalition, UNCCD, WMO, WHO, and other multilateral bodies; aligning SDS action with the Sustainable Development Goals (SDGs) and the Sendai Framework for Disaster Risk Reduction.' },
            { name: 'Capacity Building & Knowledge Transfer', desc: 'Initiatives for education, training, and technology transfer; strengthening institutional capacities; fostering regional collaboration, data sharing, and open knowledge platforms in SDS-affected regions.' }
        ]
    },
    {
        number: 6,
        title: 'Aviation, Transportation, and Operational Safety',
        image: stream6Img,
        color: '#6B7B8C', // رمادي - للطيران والنقل
        topics: [
            { name: 'Aviation Impacts and Safety', desc: 'Effects of SDS on flight operations, visibility, aircraft performance, instrument reliability, and maintenance; analysis of delays, diversions, incidents, and safety risk assessments related to dust events.' },
            { name: 'Airport and Air Traffic Management', desc: 'Operational procedures under low-visibility and dust conditions; integration of SDS forecasts and observations into airport and air traffic management decision-making; protocols for dust devils and severe localized events.' },
            { name: 'Surface and Marine Transportation', desc: 'Impacts of SDS on road traffic, rail operations, and marine/coastal navigation; accident statistics and case studies; mitigation measures and operational guidelines for transport authorities and operators.' },
            { name: 'Sectoral Decision Support', desc: 'Co-development and evaluation of decision-support tools, impact-based warnings, and response protocols for aviation and transportation stakeholders.' }
        ]
    },
    {
        number: 7,
        title: 'Cross-Cutting and Emerging Topics',
        image: stream7Img,
        color: '#8B6B61', // بني فاتح - للموضوعات الناشئة
        topics: [
            { name: 'AI and Data Science', desc: 'Big data analytics, machine learning, digital twins, and advanced data assimilation.' },
            { name: 'Dust and Biogeochemistry', desc: 'Impacts on marine/terrestrial ecosystems, nutrient transport, and atmospheric chemistry.' },
            { name: 'Social Sciences & Communication', desc: 'Risk perception, communication strategies, and community engagement related to SDS.' }
        ]
    }
];

const ThemeGrid = () => {
    const [activeStream, setActiveStream] = useState(0);

    const scrollToStream = (index) => {
        setActiveStream(index);
    };

    const nextStream = () => {
        setActiveStream((prev) => (prev + 1) % streams.length);
    };

    const prevStream = () => {
        setActiveStream((prev) => (prev - 1 + streams.length) % streams.length);
    };

    const currentStream = streams[activeStream];

    return (
        <section className="section" id="scope" style={{ backgroundColor: 'var(--color-surface)' }}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2.5rem', color: 'var(--color-text)' }}>Thematic Streams</h2>
                    <p style={{ color: 'var(--color-text-light)', marginTop: '1rem', maxWidth: '750px', margin: '1rem auto', fontSize: '1rem', lineHeight: '1.6' }}>
                        Abstracts should address one of the following <strong>seven thematic streams</strong>:
                    </p>
                </div>

                {/* Stream Navigation Pills */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    flexWrap: 'wrap',
                    marginBottom: '2rem'
                }}>
                    {streams.map((stream, idx) => (
                        <button
                            key={idx}
                            onClick={() => scrollToStream(idx)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '0.6rem 1rem',
                                borderRadius: '50px',
                                border: 'none',
                                backgroundColor: activeStream === idx ? stream.color : 'white',
                                color: activeStream === idx ? 'white' : 'var(--color-text)',
                                fontSize: '0.85rem',
                                fontWeight: '600',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                boxShadow: activeStream === idx
                                    ? `0 4px 15px ${stream.color}40`
                                    : '0 2px 8px rgba(0,0,0,0.06)',
                                transform: activeStream === idx ? 'scale(1.05)' : 'scale(1)'
                            }}
                        >
                            <span style={{
                                width: '24px',
                                height: '24px',
                                borderRadius: '50%',
                                backgroundColor: activeStream === idx ? 'rgba(255,255,255,0.2)' : `${stream.color}15`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '0.75rem',
                                fontWeight: '700',
                                color: activeStream === idx ? 'white' : stream.color
                            }}>
                                {stream.number}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Main Stream Card */}
                <div style={{
                    position: 'relative',
                    maxWidth: '100%',
                    margin: '0 auto'
                }}>
                    {/* Navigation Arrows */}
                    <button
                        onClick={prevStream}
                        style={{
                            position: 'absolute',
                            left: '-20px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            width: '44px',
                            height: '44px',
                            borderRadius: '50%',
                            border: 'none',
                            backgroundColor: 'white',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 10,
                            transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(-50%) scale(1)'}
                    >
                        <ChevronLeft size={24} color="var(--color-text)" />
                    </button>

                    <button
                        onClick={nextStream}
                        style={{
                            position: 'absolute',
                            right: '-20px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            width: '44px',
                            height: '44px',
                            borderRadius: '50%',
                            border: 'none',
                            backgroundColor: 'white',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 10,
                            transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(-50%) scale(1)'}
                    >
                        <ChevronRight size={24} color="var(--color-text)" />
                    </button>

                    {/* Stream Content Card */}
                    <div
                        style={{
                            backgroundColor: 'white',
                            borderRadius: '20px',
                            overflow: 'hidden',
                            boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                            border: '1px solid rgba(0,0,0,0.04)',
                            margin: '0 30px'
                        }}
                    >
                        {/* Header with gradient and image */}
                        <div style={{
                            background: `linear-gradient(135deg, ${currentStream.color} 0%, ${currentStream.color}CC 100%)`,
                            padding: '2rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '2rem',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            {/* Decorative background image */}
                            <div style={{
                                position: 'absolute',
                                right: '-20px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                width: '200px',
                                height: '200px',
                                opacity: 0.15,
                                backgroundImage: `url(${currentStream.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                filter: 'grayscale(100%) brightness(200%)',
                                pointerEvents: 'none'
                            }} />

                            <div style={{
                                width: '120px',
                                height: '120px',
                                borderRadius: '18px',
                                backgroundColor: 'white',
                                padding: '4px',
                                boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                                flexShrink: 0,
                                zIndex: 1
                            }}>
                                <img
                                    src={currentStream.image}
                                    alt={currentStream.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        borderRadius: '14px'
                                    }}
                                />
                            </div>

                            <div style={{ zIndex: 1 }}>
                                <span style={{
                                    fontSize: '0.85rem',
                                    color: 'rgba(255,255,255,0.9)',
                                    fontWeight: '600',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em'
                                }}>
                                    Stream {currentStream.number} of 7
                                </span>
                                <h3 style={{
                                    fontSize: '1.75rem',
                                    color: 'white',
                                    fontWeight: '700',
                                    margin: 0,
                                    lineHeight: '1.2'
                                }}>
                                    {currentStream.title}
                                </h3>
                            </div>
                        </div>

                        {/* Topics Grid */}
                        <div style={{
                            padding: '2rem',
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gap: '1.5rem'
                        }}>
                            {currentStream.topics.map((topic, tIdx) => (
                                <div
                                    key={tIdx}
                                    style={{
                                        backgroundColor: `${currentStream.color}05`,
                                        border: `1px solid ${currentStream.color}10`,
                                        borderRadius: '16px',
                                        padding: '1.5rem',
                                        transition: 'all 0.3s ease',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '0.75rem'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = `${currentStream.color}08`;
                                        e.currentTarget.style.transform = 'translateY(-4px)';
                                        e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.04)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = `${currentStream.color}05`;
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}
                                >
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.6rem'
                                    }}>
                                        <div style={{
                                            width: '10px',
                                            height: '10px',
                                            borderRadius: '50%',
                                            backgroundColor: currentStream.color
                                        }} />
                                        <h4 style={{
                                            fontSize: '1rem',
                                            color: currentStream.color,
                                            fontWeight: '700',
                                            margin: 0
                                        }}>
                                            {topic.name}
                                        </h4>
                                    </div>
                                    <p style={{
                                        fontSize: '0.9rem',
                                        color: 'var(--color-text-light)',
                                        lineHeight: '1.6',
                                        margin: 0
                                    }}>
                                        {topic.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Progress Dots */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    marginTop: '2rem'
                }}>
                    {streams.map((stream, idx) => (
                        <button
                            key={idx}
                            onClick={() => scrollToStream(idx)}
                            style={{
                                width: activeStream === idx ? '32px' : '10px',
                                height: '10px',
                                borderRadius: '5px',
                                border: 'none',
                                backgroundColor: activeStream === idx ? stream.color : 'rgba(0,0,0,0.1)',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                padding: 0
                            }}
                        />
                    ))}
                </div>

                {/* Keyboard hint */}
                <p style={{
                    textAlign: 'center',
                    color: 'var(--color-text-light)',
                    fontSize: '0.85rem',
                    marginTop: '1.5rem',
                    opacity: 0.6,
                    fontWeight: '500'
                }}>
                    Click the arrows or stream numbers to explore
                </p>

                {/* Mobile Responsive Styles */}
                <style>{`
                    @media (max-width: 992px) {
                        .stream-topics-grid {
                            grid-template-columns: repeat(2, 1fr) !important;
                        }
                    }
                    @media (max-width: 768px) {
                        .stream-topics-grid {
                            grid-template-columns: 1fr !important;
                        }
                        .stream-header {
                            flex-direction: column !important;
                            text-align: center !important;
                            padding: 1.5rem !important;
                        }
                        .stream-image-container {
                            width: 100px !important;
                            height: 100px !important;
                        }
                    }
                `}</style>
            </div>
        </section>
    );
};

export default ThemeGrid;

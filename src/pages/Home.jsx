import React from 'react';
import Hero from '../components/Hero';
import StatsSection from '../components/StatsSection';
import ThemeGrid from '../components/ThemeGrid';
import AboutSection from '../components/AboutSection';
import PosterGuidelines from '../components/PosterGuidelines';

const Home = () => {
    return (
        <>
            <Hero />
            <StatsSection />
            <AboutSection />
            <ThemeGrid />
            <PosterGuidelines />
        </>
    );
};

export default Home;

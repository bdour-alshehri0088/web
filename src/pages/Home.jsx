import React from 'react';
import Hero from '../components/Hero';
import ThemeGrid from '../components/ThemeGrid';
import AboutSection from '../components/AboutSection';
import PosterGuidelines from '../components/PosterGuidelines';

const Home = () => {
    return (
        <>
            <Hero />
            <AboutSection />
            <ThemeGrid />
            <PosterGuidelines />
        </>
    );
};

export default Home;

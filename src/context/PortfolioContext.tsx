'use client';

import React, { createContext, useContext, useState } from 'react';
import portfolioData from '@/constants';

// Define strict types for our state
interface HeroState {
    name: string;
    role: string;
    image: string;
}

interface AboutState {
    title: string;
    description: string;
    image: string;
}

interface PortfolioContextType {
    hero: HeroState;
    about: AboutState;
    updateHero: (newData: Partial<HeroState>) => void;
    updateAbout: (newData: Partial<AboutState>) => void;
}

// INITIAL_DATA with distinct dummy URLs as requested
const INITIAL_DATA = {
    hero: {
        ...portfolioData.profile,
        // Explicitly using the constant data, but ensuring it matches requirements
        // If portfolioData.profile.image is missing, we provide a dummy one here
        image: portfolioData.profile.image || "https://i.imgur.com/uMwYkju.jpeg"
    },
    about: {
        ...portfolioData.about,
        // Ensure about has its own image. Using the one we just added to constants, 
        // or a fallback dummy if something went wrong, but avoiding profile.image
        image: portfolioData.about.image || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
    }
};

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // Strict check: hero and about must be independent objects
    const [hero, setHero] = useState<HeroState>(INITIAL_DATA.hero);
    const [about, setAbout] = useState<AboutState>(INITIAL_DATA.about);

    // STRICT: updateHero only changes hero state, cannot access about
    const updateHero = (newData: Partial<HeroState>) => {
        setHero((prev) => ({
            ...prev,
            ...newData
        }));
    };

    // STRICT: updateAbout only changes about state, cannot access hero
    const updateAbout = (newData: Partial<AboutState>) => {
        setAbout((prev) => ({
            ...prev,
            ...newData
        }));
    };

    return (
        <PortfolioContext.Provider value={{ hero, about, updateHero, updateAbout }}>
            {children}
        </PortfolioContext.Provider>
    );
};

export const usePortfolio = () => {
    const context = useContext(PortfolioContext);
    if (context === undefined) {
        throw new Error('usePortfolio must be used within a PortfolioProvider');
    }
    return context;
};

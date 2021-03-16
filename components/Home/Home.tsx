import React from 'react'
import { HeaderMenu } from '../Header/Header';
import { HeroSection } from '../Hero/Hero';

export function Home(): JSX.Element {
    return (
        <div className="bg-white">
            <HeaderMenu />
            <main>
                <HeroSection />
            </main>
        </div>
    )
}

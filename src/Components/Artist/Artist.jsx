import React, { useRef, useEffect } from 'react';
import GeetabenRavai from '../../assets/Artist/Artist1.png'
import PurvaMantri from '../../assets/Artist/Artist2.png'
import krinjaldave from '../../assets/Artist/Artist3.png'
import Artistcard from '../Artistcard/Artistcard'

function Artist() {
    const scrollRef = useRef(null);

    useEffect(() => {
        const container = scrollRef.current;
        let scrollTimeout;

        const handleScroll = () => {
            clearTimeout(scrollTimeout);

            scrollTimeout = setTimeout(() => {
                const cardWidth = 288; // 72 * 4 (w-72)
                const currentScrollPosition = container.scrollLeft;
                const nearestCardIndex = Math.round(currentScrollPosition / cardWidth);
                const targetScrollPosition = nearestCardIndex * cardWidth;

                const scrollIntoCard = (currentScrollPosition % cardWidth) / cardWidth;
                const threshold = 0.3;

                if (Math.abs(scrollIntoCard - 0.5) > threshold) {
                    container.scrollTo({
                        left: targetScrollPosition,
                        behavior: 'smooth'
                    });
                }
            }, 150);
        };

        container.addEventListener('scroll', handleScroll);

        return () => {
            container.removeEventListener('scroll', handleScroll);
            clearTimeout(scrollTimeout);
        };
    }, []);

    return (
        <>
            <div className="relative w-full bg-transparent">
                <div className="w-full flex justify-center text-white">
                    <h1 className="text-white font-bold text-3xl md:text-4xl text-center md:text-left w-full md:w-auto pt-8">Our Artists</h1>
                </div>

                <div className="w-full h-[480px] px-10 lg:px-48 md:px-10 sm:px-1 flex box-border lg:justify-center items-center">
                    <div 
                        ref={scrollRef}
                        className="h-[400px] flex gap-3 px-3 overflow-x-auto scroll-smooth snap-x snap-mandatory"
                        style={{ scrollSnapType: 'x mandatory' }}
                    >
                        <Artistcard img={krinjaldave} name={"krinjaldave"} description={"Kinjal Dave"} delay={0} />
                        <Artistcard img={GeetabenRavai} name={"GeetabenRavai"} description={"Geeta Ravai"} delay={200} />
                        <Artistcard img={PurvaMantri} name={"PurvaMantri"} description={"Purva Mantri"} delay={400} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Artist

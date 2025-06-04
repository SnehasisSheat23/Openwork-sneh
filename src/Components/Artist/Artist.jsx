import React, { useRef, useEffect } from 'react';
import Artistcard from '../Artistcard/Artistcard';
import { artists } from '../../../Database/database';
import {MdKeyboardArrowLeft, MdOutlineKeyboardArrowRight} from "react-icons/md";

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

    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -288, behavior: 'smooth' });
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: 288, behavior: 'smooth' });

    };


    return (
        <>
            <div className="relative  w-full bg-transparent">
                <div className="w-full flex justify-center">
                    <div className="w-full max-w-[1440px] flex justify-between items-center px-4 py-4 lg:px-32 lg:py-8">
                        {/* Centered heading */}
                        <h1 className="flex-1 text-center font-bold text-3xl md:text-4xl text-white">
                            Our Artists
                        </h1>

                        {/* Buttons on the right */}
                        <div className="hidden md:flex gap-5">
                            <div
                                className="h-9 w-9 bg-transparent border-2 border-white rounded-full flex justify-center items-center cursor-pointer"
                                onClick={scrollLeft}
                            >
                                <MdKeyboardArrowLeft className="text-white text-2xl" />
                            </div>
                            <div
                                className="h-9 w-9 bg-transparent border-2 border-white rounded-full flex justify-center items-center cursor-pointer"
                                onClick={scrollRight}
                            >
                                <MdOutlineKeyboardArrowRight className="text-white text-2xl" />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="w-full h-[480px] px-10 lg:px-48 md:px-10 sm:px-1 flex box-border lg:justify-center items-center">
                    <div 
                        ref={scrollRef}
                        className="h-[400px] flex gap-3 px-3 overflow-x-auto scroll-smooth snap-x snap-mandatory"
                        style={{ scrollSnapType: 'x mandatory' }}
                    >
                        {artists.map((artist, index) => (
                            <Artistcard 
                                key={artist.id}
                                img={artist.image}
                                id={artist.id} // Use id for URL creation
                                name={artist.name} // Use name for display
                                delay={index * 200}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Artist

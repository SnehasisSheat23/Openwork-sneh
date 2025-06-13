import React, { useRef, useEffect, useState } from 'react';
import Artistcard from '../Artistcard/Artistcard';
import { artists } from '../../database.js';
import { MdKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';

function Artist() {
    const scrollRef = useRef(null);
    const [isScrolling, setIsScrolling] = useState(false);
    const [isScrollable, setIsScrollable] = useState(false);

    useEffect(() => {
        const container = scrollRef.current;
        let scrollTimeout;

        const checkScrollability = () => {
            if (container.scrollWidth > container.clientWidth) {
                setIsScrollable(true);
            } else {
                setIsScrollable(false);
            }
        };

        const handleScroll = () => {
            clearTimeout(scrollTimeout);
            setIsScrolling(true);

            scrollTimeout = setTimeout(() => {
                const cardWidth = 288;
                const currentScroll = container.scrollLeft;
                const index = Math.round(currentScroll / cardWidth);
                const targetScroll = index * cardWidth;
                const remainder = (currentScroll % cardWidth) / cardWidth;
                const threshold = 0.3;

                if (Math.abs(remainder - 0.5) > threshold) {
                    container.scrollTo({ left: targetScroll, behavior: 'smooth' });
                }

                setIsScrolling(false);
            }, 150);
        };

        checkScrollability();
        window.addEventListener('resize', checkScrollability);
        container.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('resize', checkScrollability);
            container.removeEventListener('scroll', handleScroll);
            clearTimeout(scrollTimeout);
        };
    }, []);

    const scrollByAmount = (amount) => {
        scrollRef.current?.scrollBy({ left: amount, behavior: 'smooth' });
    };

    return (
        <div className="relative w-full bg-transparent pt-8 ">
            <div className="w-full flex justify-center">
                <div className="w-full max-w-[1440px] flex justify-between items-center px-4 py-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 lg:py-8">
                    <h1 className="flex-1 text-center font-bold text-3xl md:text-4xl text-white">
                        Our Artists
                    </h1>

                    <div className="hidden md:flex gap-5">
                        <button
                            className="h-9 w-9 bg-transparent border-2 border-white rounded-full flex justify-center items-center hover:bg-white/10 transition"
                            onClick={() => scrollByAmount(-288)}
                        >
                            <MdKeyboardArrowLeft className="text-white text-2xl" />
                        </button>
                        <button
                            className="h-9 w-9 bg-transparent border-2 border-white rounded-full flex justify-center items-center hover:bg-white/10 transition"
                            onClick={() => scrollByAmount(288)}
                        >
                            <MdOutlineKeyboardArrowRight className="text-white text-2xl" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="relative w-full flex justify-center">
                <div className="relative rounded-lg w-full max-w-[1440px] h-[480px] flex items-center px-6 sm:px-6 md:px-10 lg:px-20 xl:px-32">
                    <div
                        ref={scrollRef}
                        className="flex h-[400px] gap-3 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide w-full max-w-full box-border"
                    >
                        <div className="shrink-0 w-2 sm:w-4 md:w-6 lg:w-10 " />
                        {artists.map((artist, index) => (
                            <div
                                key={artist.id}
                                className="snap-start shrink-0 w-72 transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                            >
                                <Artistcard
                                    img={artist.image}
                                    id={artist.id}
                                    name={artist.name}
                                    delay={index * 200}
                                />
                            </div>
                        ))}
                        <div className="shrink-0 w-2 sm:w-4 md:w-6 lg:w-10" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Artist;
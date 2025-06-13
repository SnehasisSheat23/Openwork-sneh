import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import Card from "../Card/Card";
import { getUpcomingEvents, getEventLink } from '../../database.js';

function Festivalsection() {
    const scrollRef = useRef(null);
    const [isScrolling, setIsScrolling] = useState(false);
    const [isScrollable, setIsScrollable] = useState(false);
    const navigate = useNavigate();

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

    const upcomingEvents = getUpcomingEvents(11);

    return (
        <div className="relative w-full bg-gradient-to-b from-black via-black/50 to-transparent flex justify-center pt-8">
            <div className="w-full max-w-[1440px] flex flex-col px-4 py-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 lg:py-8 ">
                <div className="w-full h-10 flex justify-between items-center ">
                    <h1 className="text-white font-bold text-3xl md:text-4xl text-center md:text-left w-full md:w-auto">
                        Upcoming Tours
                    </h1>

                    <div className="hidden md:flex h-full items-center gap-5">
                        <button
                            className="h-9 w-9 bg-transparent border-[2px] border-white rounded-full flex justify-center items-center hover:bg-white/10 transition"
                            onClick={() => scrollByAmount(-288)}
                        >
                            <MdKeyboardArrowLeft className="text-white text-2xl" />
                        </button>
                        <button
                            className="h-9 w-9 bg-transparent border-[2px] border-white rounded-full flex justify-center items-center hover:bg-white/10 transition"
                            onClick={() => scrollByAmount(288)}
                        >
                            <MdOutlineKeyboardArrowRight className="text-white text-2xl" />
                        </button>

                        <button
                            className="h-10 cursor-pointer font-light text-white border-[2px] hover:bg-white hover:text-black border-white flex justify-center items-center w-28 lg:w-32 rounded-3xl transform hover:scale-105 duration-300"
                            onClick={() => navigate('/calendar')}
                        >
                            <p>Calendar</p>
                        </button>
                    </div>
                </div>

                <div className="w-full h-[480px]  flex items-center justify-center">
                    <div
                        ref={scrollRef}
                        className="flex h-[400px] gap-3 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide w-full max-w-full box-border"
                    >
                        <div className="shrink-0 w-2 sm:w-4 md:w-6 lg:w-10" />
                        {upcomingEvents.map((event, index) => (
                            <div
                                key={event.id}
                                className="snap-start shrink-0 w-72 transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                            >
                                <Card
                                    id={event.id}
                                    img={event.image}
                                    // Add any other event props if needed
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

export default Festivalsection;

import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import Card from "../Card/Card";
import { getUpcomingEvents, getEventLink } from '../../../Database/database';

function Festivalsection() {
    const scrollRef = useRef(null);
    const navigate = useNavigate();

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

    const upcomingEvents = getUpcomingEvents(11); //  11 upcoming events

    const navigateToCalendar = () => {
        navigate('/calendar');
    };

    return (
        <div className="relative w-full bg-gradient-to-b from-black via-black/50 to-transparent flex justify-center">
            <div className="w-full max-w-[1440px] flex flex-col">
                <div className="heading w-full h-10 flex justify-between items-center px-6 md:px-18">
                    <h1 className="text-white font-bold text-3xl md:text-4xl text-center md:text-left w-full md:w-auto">Upcoming Tours</h1>
                    <div className="hidden md:flex h-full items-center gap-5">
                        <div className="h-9 w-9 bg-transparent border-[2px] border-white rounded-full flex justify-center items-center cursor-pointer" onClick={scrollLeft}>
                            <MdKeyboardArrowLeft className="text-white text-2xl " />
                        </div>
                        <div className="h-9 w-9 bg-transparent border-[2px] border-white rounded-full flex justify-center items-center cursor-pointer" onClick={scrollRight}>
                            <MdOutlineKeyboardArrowRight className="text-white text-2xl " />
                        </div>
                        <button 
                            className="h-10 cursor-pointer font-light text-white border-[2px] hover:bg-white hover:text-black border-white flex justify-center items-center w-28 lg:w-32 rounded-3xl transform hover:scale-105 duration-300"
                            onClick={navigateToCalendar}
                        >
                            <p>Calendar</p>
                        </button>
                    </div>
                </div>

                <div className="w-full h-[480px] px-10 md:px-10 sm:px-1 flex gap-[2vw] box-border justify-between items-center lg:mt-[3vh]">
                    <div 
                        ref={scrollRef} 
                        className="w-full h-[400px] flex gap-[2vw] lg:gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory"
                        style={{ scrollSnapType: 'x mandatory' }}
                    >
                        {upcomingEvents.map((event) => (
                            <Card 
                                key={event.id}
                                id={event.id}
                                img={event.image} 
                                //name={event.artist}
                                //place={event.place}
                                //date={new Date(event.date).toLocaleDateString('en-US', { day: 'numeric', month: 'short', weekday: 'long' })}
                                //text={event.name}
                                //link={getEventLink(event.id)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Festivalsection;

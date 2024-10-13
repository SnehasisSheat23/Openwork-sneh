import React, { useRef, useEffect } from 'react';
import { MdKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import Card from "../Card/Card";
import event1 from '../../assets/Upcommingevents/Card1.png';
import event2 from '../../assets/Upcommingevents/Card2.png';
import event4 from '../../assets/Upcommingevents/Card4.png';
import event6 from '../../assets/Upcommingevents/Card6.png';
import event7 from '../../assets/Upcommingevents/Card7.png';
import event9 from '../../assets/Upcommingevents/Card9.png';

function Festivalsection() {
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
        <div className="relative w-full bg-gradient-to-b from-black via-black/50 to-transparent flex justify-center">
            <div className="w-full max-w-[1440px] flex flex-col">
                <div className="heading w-full h-10 flex justify-between items-center px-6 md:px-18">
                    <h1 className="text-white font-bold text-3xl md:text-4xl text-center md:text-left w-full md:w-auto">Upcoming events</h1>
                    <div className="hidden md:flex h-full items-center gap-5">
                        <div className="h-9 w-9 bg-transparent border-[2px] border-white rounded-full flex justify-center items-center cursor-pointer" onClick={scrollLeft}>
                            <MdKeyboardArrowLeft className="text-white text-2xl " />
                        </div>
                        <div className="h-9 w-9 bg-transparent border-[2px] border-white rounded-full flex justify-center items-center cursor-pointer" onClick={scrollRight}>
                            <MdOutlineKeyboardArrowRight className="text-white text-2xl " />
                        </div>
                        <button className="h-10 cursor-pointer font-light text-white border-[2px] hover:bg-white hover:text-black border-white flex justify-center items-center w-28 lg:w-32 rounded-3xl transform hover:scale-105 duration-300">
    <p>Calender</p>
</button>
                    </div>
                </div>

                <div className="w-full h-[480px] px-10 md:px-10 sm:px-1 flex gap-[2vw] box-border justify-between items-center lg:mt-[3vh]">
                    <div 
                        ref={scrollRef} 
                        className="w-full h-[400px] flex gap-[2vw] lg:gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory"
                        style={{ scrollSnapType: 'x mandatory' }}
                    >
                        <Card img={event7} name={"GeetabenRavai"} place={"Kansas City, MO, USA"} date={"29 Sep, Friday"} text={"Kutch Ni koyal Geeta Ravai - Live"} link={''} />
                        <Card img={event6} name={"PurvaMantri"} place={"Seattle, WA, USA"} date={"29 Sep, Friday"} text={"Garba Dhamaal with Purva Mantri - Live"} link={''} />
                        <Card img={event4} name={"krinjaldave"} place={"Boston, MA, USA"} date={"18 Oct, Friday"} text={"Garba Queen Kinjal Dave - Live"} link={''} />
                        <Card img={event2} name={"GeetabenRavai"} place={"Scranton, PA, USA"} date={"19 Oct, Friday"} text={"Kutch Ni koyal Geeta Ravai - Live"} link={''} />
                        <Card img={event1} name={"krinjaldave"} place={"London, ON, Canada"} date={"19 Oct, Friday"} text={"Kutch Ni koyal Geeta Ravai - Live"} link={''} />
                        <Card img={event7} name={"GeetabenRavai"} place={"Chicago, IL, USA"} date={"27 Oct, Sunday"} text={"Kutch Ni koyal Geeta Ravai - Live"} link={''} />
                        <Card img={event9} name={"krinjaldave"} place={"Elkhart, IN, USA"} date={"27 Oct, Sunday"} text={"Kutch Ni koyal Geeta Ravai - Live"} link={''} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Festivalsection;

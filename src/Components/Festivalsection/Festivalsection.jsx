import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Card from "../Card/Card";
import event1 from '../../assets/Upcommingevents/Card1.png';
import event2 from '../../assets/Upcommingevents/Card2.png';
import event3 from '../../assets/Upcommingevents/Card3.png';
import event4 from '../../assets/Upcommingevents/Card4.png';
import event5 from '../../assets/Upcommingevents/Card5.png';
import event6 from '../../assets/Upcommingevents/Card6.png';
import event7 from '../../assets/Upcommingevents/Card7.png';
import event8 from '../../assets/Upcommingevents/Card8.png';
import event9 from '../../assets/Upcommingevents/Card9.png';
import { useRef } from "react";

function Festivalsection() {
    const scrollRef = useRef(null);

    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    };

    return (
        <div className="relative w-full bg-gradient-to-b from-black via-[#1a0e0e] to-[#3d2c2c] flex justify-center">
            <div className="w-full max-w-[1440px] flex flex-col">
                <div className="heading w-full h-10 flex justify-between items-center px-6 md:px-18">
                    <h1 className="text-white font-bold text-3xl md:text-4xl text-center md:text-left w-full md:w-auto">Upcoming events</h1>
                    <div className="hidden md:flex h-full items-center gap-5">
                        <div className="h-9 w-9 bg-white rounded-full flex justify-center items-center cursor-pointer" onClick={scrollLeft}>
                            <MdKeyboardArrowLeft />
                        </div>
                        <div className="h-9 w-9 bg-white rounded-full flex justify-center items-center cursor-pointer" onClick={scrollRight}>
                            <MdOutlineKeyboardArrowRight />
                        </div>
                        <button className="h-10 cursor-pointer font-light text-white border-[2px] hover:bg-white hover:text-black border-white flex justify-center items-center w-28 lg:w-32 rounded-3xl transform hover:scale-105 duration-300">
    <p>Calender</p>
</button>
                    </div>
                </div>

                <div className="w-full h-[480px] px-10 md:px-10 sm:px-1 flex gap-[2vw] box-border justify-between items-center lg:mt-[3vh]">
                    <div ref={scrollRef} className="w-full h-[400px] flex gap-[2vw] overflow-x-auto scroll-smooth">
                        
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

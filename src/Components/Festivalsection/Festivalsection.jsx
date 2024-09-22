import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Card from "../Card/Card";
import Marquee from "react-fast-marquee";
import krinjaldave from '../../assets/Artist3.png'
import purvamantri from '../../assets/Artist2.png'
import  getambeetantava from '../../assets/Artist1.png'

function Festivalsection() {
    return (
        <div className="relative  w-full bg-gradient-to-b from-black via-[#1a0e0e] to-[#3d2c2c]">
            <div className="w-full flex flex-col">
                <div className="heading w-full  h-14 flex justify-between items-center px-6 md:px-24">
                    <h1 className="text-white font-bold text-xl md:text-3xl text-center md:text-left w-full md:w-auto">Festival & Events</h1>
                    <div className="hidden md:flex h-full items-center gap-4">
                        <div className="h-7 w-7 bg-white rounded-full flex justify-center items-center">
                            <MdKeyboardArrowLeft />
                        </div>
                        <div className="h-7 w-7 bg-white rounded-full flex justify-center items-center">
                            <MdOutlineKeyboardArrowRight />
                        </div>
                        <button className="text-sm font-semibold h-10 hover:scale-105 duration-300 w-28 rounded-3xl bg-white"><p>CALANDER</p></button>
                    </div>
                </div>


                <div className="w-full h-[480px]  px-10 md:px-10 sm:px-1 flex gap-[2vw] box-border justify-between items-center mt-[6vh] ">
                    <div className="w-full h-[400px] flex gap-[2vw] overflow-x-auto ">
                        <Card img={krinjaldave} name={"krinjaldave"} place={"Pittsburgh, PA, USA"} date={"27 Sep, Friday"}  text={"Garba Queen Kinjal Dave"} />
                        <Card img={getambeetantava} name={"GeetabenRavai"} place={"Houston, TX, USA"} date={"27 Sep, Friday"}  text={"Kutch Ni Koyal Geetaben Ravai - Live"} />
                        <Card img={purvamantri} name={"PurvaMantri"} place={"Edison, NJ, USA"} date={"27 Sep, Friday"} text={"Garba Dhamaal with Purva Mantri"} />
                        <Card img={krinjaldave} name={"krinjaldave"} place={"Edison, NJ, USA"} date={"28 Sep, Saturday"}  text={"Garba Queen Kinjal Dave - Live"} />
                        <Card img={getambeetantava} name={"GeetabenRavai"} place={"Dallas, TX, USA"} date={"28 Sep, Saturday"} text={"Kutch Ni koyal Geetaben Ravai - Live"} />
                        <Card img={purvamantri} name={"PurvaMantri"} place={"Boston, MA, USA"} date={"28 Sep, Saturday"} text={"Garba Dhamaal with Purva Mantri - Live in Boston"} />
                        <Card img={getambeetantava} name={"GeetabenRavai"} place={"Kansas City, MO, USA"} date={"29 Sep, Friday"} text={"Kutch Ni koyal Geetaben Ravai - Live"} />
                        <Card img={purvamantri} name={"PurvaMantri"} place={"Seattle, WA, USA"} date={"29 Sep, Friday"} text={"Garba Dhamaal with Purva Mantri - Live"} />
                        <Card img={krinjaldave} name={"krinjaldave"} place={"Boston, MA, USA"} date={"18 Sep, Friday"} text={"Garba Queen Kinjal Dave - Live"} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Festivalsection;

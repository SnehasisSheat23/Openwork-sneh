import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Card from "../Card/Card";
import Marquee from "react-fast-marquee";

function Festivalsection() {
    return (
        <div className="relative h-[85vh] w-full bg-gradient-to-b from-black via-[#1a0e0e] to-[#3d2c2c]">
            <div className="w-full min-h-[50vh] flex flex-col">
                <div className="heading w-full h-14 flex justify-between items-center px-6 md:px-24">
                    <h1 className="text-white font-bold text-xl md:text-2xl text-center md:text-left w-full md:w-auto">Festival & Events</h1>
                    <div className="hidden md:flex h-full items-center gap-4">
                        <div className="h-7 w-7 bg-white rounded-full flex justify-center items-center">
                            <MdKeyboardArrowLeft />
                        </div>
                        <div className="h-7 w-7 bg-white rounded-full flex justify-center items-center">
                            <MdOutlineKeyboardArrowRight />
                        </div>
                        <button className="text-sm font-semibold h-10 w-28 rounded-3xl bg-white">CALANDER</button>
                    </div>
                </div>


                <div className="w-full px-20 flex gap-[2vw] box-border justify-between  mt-[10vh]">
                    <div className="w-full h-full flex gap-[2vw] overflow-x-auto">
                        <Card img={"https://prismic-assets-cdn.tomorrowland.com/Zi98lN3JpQ5PTPLa_Zeb4NeXgT-BdbvEx_Brasil.jpg?crop=6991%2C5243%2C435%2C0&width=352&height=264"} text={"Gaeba Dhammal Canada"} />
                        <Card img={"https://prismic-assets-cdn.tomorrowland.com/ZrIItkaF0TcGItrp_AFTERLIFE_AMS___06_1920x1080.jpg?crop=1440%2C1080%2C240%2C0&width=352&height=264"} text={"India fest live in schamburg"} />
                        <Card img={"https://prismic-assets-cdn.tomorrowland.com/Zg5XLzskWekewC1C_OS24_001_OURSTORY_XXYEARS_KEYVISUAL_EYE_WEBSITE_HEADER.jpg?crop=2133%2C1600%2C133%2C0&width=352&height=264"} text={"Chicago Garba Fest Renaissance"} />
                        <Card img={"https://prismic-assets-cdn.tomorrowland.com/ZfLCV0mNsf2sHkp6_mailing_header_fulllineupfade_e9j.webp?crop=1067%2C800%2C87%2C0&width=352&height=264"} text={"Garba booking 2024"} />
                        <Card />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Festivalsection;

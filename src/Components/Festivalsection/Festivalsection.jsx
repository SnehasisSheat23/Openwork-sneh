import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Card from "../Card/Card";

function Festivalsection() {
    return (
        <div className="relative h-[85vh] w-full bg-gradient-to-b from-black via-[#1a0e0e] to-[#3d2c2c]">
            
            <div className="w-full h-[50vh] flex flex-col">
                <div className="heading w-full h-14 flex justify-between items-center px-24">
                    <h1 className="text-white font-bold text-2xl">Festival & Events</h1>
                    <div className="flex h-full items-center gap-4">
                        <div className="h-7 w-7 bg-white rounded-full flex justify-center items-center"><MdKeyboardArrowLeft /></div>
                        <div className="h-7 w-7 bg-white rounded-full flex justify-center items-center"><MdOutlineKeyboardArrowRight /></div>
                        <button className="text-sm font-semibold h-10 w-28 rounded-3xl bg-white">CALANDER</button>
                    </div>
                </div>


                <div className="w-full px-20 flex gap-[3vw] box-border justify-between mt-[10vh]">
                    <Card img={"https://prismic-assets-cdn.tomorrowland.com/Zi98lN3JpQ5PTPLa_Zeb4NeXgT-BdbvEx_Brasil.jpg?crop=6991%2C5243%2C435%2C0&width=352&height=264"} text={"Gaeba Dhammal Canada"} />
                    <Card img={"https://prismic-assets-cdn.tomorrowland.com/ZrIItkaF0TcGItrp_AFTERLIFE_AMS___06_1920x1080.jpg?crop=1440%2C1080%2C240%2C0&width=352&height=264"} text={"India fest live in schamburg"} />
                    <Card img={"https://prismic-assets-cdn.tomorrowland.com/Zg5XLzskWekewC1C_OS24_001_OURSTORY_XXYEARS_KEYVISUAL_EYE_WEBSITE_HEADER.jpg?crop=2133%2C1600%2C133%2C0&width=352&height=264"} text={"Chicago Garba Fest Renaissance"} />
                    <Card img={"https://prismic-assets-cdn.tomorrowland.com/Zk3r-iol0Zci9WmC_664de1a5b12add56f6bbb791_007-AMBERBROOS-WAAGNATIE24-Social-min-p-1080.jpeg?crop=785%2C589%2C49%2C0&width=352&height=264"} text={"Garba booking 2024"} />
                </div>
            </div>
        </div>
    );
}

export default Festivalsection;

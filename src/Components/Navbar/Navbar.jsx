import { RiArrowDropDownLine } from "react-icons/ri";

function Navbar() {
    return (
        <>
            <div className="w-full px-20 h-[12vh] flex items-center fixed backdrop-blur-md z-10 bg-black/30">
                <div className="text-2xl text-white font-bold">Manpasand</div>

                {
                    ["FESTIVALS & EVENTS", "EXPERIENCE", "TOUR", "MORE"].map((v, i) => (
                        <div className={`m-3 cursor-pointer font-semibold flex text-white ${i == 0 ? "ml-[17vw]" : ""}`} key={i}>{v} <RiArrowDropDownLine size={30} /></div>
                    ))
                }
            </div>
        </>
    )
}

export default Navbar;

import { RiArrowDropDownLine } from "react-icons/ri";

function Navbar() {
    return (
        <>
            <div className="w-full px-5 md:px-10 lg:px-20 h-[10vh] flex items-center justify-between fixed backdrop-blur-md z-10 bg-black/30 box-border">
                <div className="text-xl md:text-2xl text-white font-bold">
                    Manpasand
                </div>

                <div className="hidden md:flex space-x-5 lg:space-x-10 text-sm lg:text-lg">
                    {["FESTIVALS & EVENTS", "EXPERIENCE", "TOUR", "MORE"].map((v, i) => (
                        <div
                            className={`cursor-pointer font-semibold flex items-center text-white ${i === 0 ? "ml-[5vw]" : ""
                                }`}
                            key={i}
                        >
                            {v} <RiArrowDropDownLine size={24} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Navbar;

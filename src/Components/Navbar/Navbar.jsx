import { RiArrowDropDownLine, RiMenu3Fill, RiCloseLine } from "react-icons/ri";
import { useState } from "react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

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

                <div className="md:hidden flex items-center mr-6">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                        {isOpen ? <RiCloseLine size={30} /> : <RiMenu3Fill size={30} />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden fixed top-[10vh] right-4 w-[90%] bg-black/90 z-20">
                    <div className="flex flex-col items-center space-y-5 py-5">
                        {["FESTIVALS & EVENTS", "EXPERIENCE", "TOUR", "MORE"].map((v, i) => (
                            <div
                                className="cursor-pointer font-semibold text-white text-lg flex items-center"
                                key={i}
                            >
                                {v} <RiArrowDropDownLine size={24} />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}

export default Navbar;

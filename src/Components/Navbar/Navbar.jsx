import { RiArrowDropDownLine, RiMenu3Fill, RiCloseLine } from "react-icons/ri";
import { useState } from "react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        if (isOpen) {
            // Start closing animation
            setIsAnimating(true);
            setTimeout(() => {
                setIsOpen(false);
                setIsAnimating(false); // Reset animation state
            }, 500); // Set duration to match transition time (500ms)
        } else {
            setIsOpen(true); // Open the menu immediately
        }
    };

    return (
        <>
            <div className="w-full px-5 md:px-10 lg:px-20 h-[7vh] flex items-center justify-between fixed backdrop-blur-md z-20 bg-black/30 box-border">
                <div className="text-xl md:text-2xl text-white font-bold">
                    Manpasand
                </div>

                <div className="hidden md:flex space-x-5 lg:space-x-10 text-sm lg:text-lg">
                    {["FESTIVALS & EVENTS", "EXPERIENCE", "TOUR", "MORE"].map((v, i) => (
                        <div
                            className={`cursor-pointer font-light flex items-center text-white ${i === 0 ? "ml-[5vw]" : ""}`}
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

            {/* Smoothly animated mobile menu with blur */}
            <div
                className={`md:hidden fixed inset-0 bg-black/60 backdrop-blur-lg z-10 transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
            >
                <div
                    className={`fixed top-[10vh] right-4 w-[90%] bg-black/80 backdrop-blur-md rounded-2xl transform transition-transform duration-500 ease-in-out ${
                        isOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
                    }`}
                >
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
            </div>
        </>
    );
}

export default Navbar;

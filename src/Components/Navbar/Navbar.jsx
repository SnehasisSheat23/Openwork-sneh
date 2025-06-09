import { RiArrowDropDownLine, RiCloseLine } from "react-icons/ri";
import { useState, useRef, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);
    const [activeMobileMenu, setActiveMobileMenu] = useState(null);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        setActiveMobileMenu(null);
    };

    const menuItems = {
        "FESTIVALS & EVENTS": [
            { name: "Ketki Dave Naatak ", link: "/Calendar" },
            { name: "Mannubhai Mindblowing Naatak ", link: "/Calendar" },
            { name: "Superstar Singer Tour ", link: "/Calendar" },
            { name: "Kinjal Dave Navratri Tour ", link: "/Calendar" },
            { name: "Geeta Rabari Navratri Tour ", link: "/Calendar" },
            { name: "Gurdeep Mehndi Tour ", link: "/Calendar" },

        ],
        "ARTISTS": [
            { name: "Kinjal Dave", link: "/info/KrinjalDave" },
            { name: "Rex Dsouza", link: "/info/rex" },
            { name: "Gurdeep Mehndi", link: "/info/GurdeepMehndi" },
            { name: "Parth Doshi", link: "/info/ParthDoshi" },
            { name: "Geeta Rabari", link: "/info/GeetabenRabari" },
            { name: "Sharman Joshi", link: "/info/SharmanJoshi" },
            { name: "Sunny Jadhav", link: "/info/SunnyJadhav" },
            { name: "Atharv", link: "/info/Atharv" },
            { name: "Khushi", link: "/info/Khushi" },
            { name: "Avirbhav", link: "/info/Avirbhav" }
        ],
        "TOUR": [
            { name: "Superstar Singer Tour", link: "/Calendar" },
            { name: "Kinjal Dave Navratri Tour", link: "/Calendar" },
            { name: "Geeta Rabari Navratri Tour", link: "/Calendar" },
            { name: "Gurdeep Mehndi Tour", link: "/Calendar" }
        ],
        "MORE": [
            { name: "About Us", link: "/About" },
            { name: "Contact", link: "/ContactUs" },
            { name: "FAQ", link: "/FAQ" }
        ]
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setActiveMenu(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className="w-full px-5 md:px-10 lg:px-20 h-[7vh] flex items-center justify-between fixed z-50 box-border">
                {/* Blur background */}
                <div className="absolute inset-0 bg-black/30 backdrop-blur-md z-[-1]"></div>
                
                <Link to="/">
                    <div className="text-xl md:text-2xl text-white font-bold">
                        Manpasand
                    </div>
                </Link>

                <div className="hidden md:flex space-x-5 lg:space-x-10 text-sm lg:text-lg" ref={menuRef}>
                    {Object.keys(menuItems).map((item, index) => (
                        <div
                            className={`cursor-pointer font-light flex items-center text-white ${index === 0 ? "ml-[5vw]" : ""}`}
                            key={index}
                            onMouseEnter={() => setActiveMenu(item)}
                            onMouseLeave={() => setActiveMenu(null)}
                        >
                            {item} <RiArrowDropDownLine size={24} />
                            <AnimatePresence>
                                {activeMenu === item && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute top-full left-0 w-full bg-black/25 backdrop-blur-md overflow-hidden"
                                    >
                                        <div className="container mx-auto px-4 py-4 ">
                                            {menuItems[item].map((subItem, subIndex) => (
                                                <motion.div
                                                    key={subIndex}
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: subIndex * 0.1 }}
                                                    className="text-white py-2 hover:bg-white/10 transition-colors duration-300"
                                                >
                                                    <Link 
                                                        to={subItem.link}
                                                        className="block w-full h-full"
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                <div className="md:hidden flex items-center mr-6">
                    <button onClick={toggleMenu} className="text-white">
                        {isOpen ? <RiCloseLine size={30} /> : <RxHamburgerMenu size={30} />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden fixed inset-0 backdrop-blur-lg z-40 flex items-center justify-center"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            className="w-[90%] max-h-[80vh] bg-black/30 backdrop-blur-md overflow-y-auto rounded-lg"
                        >
                            <div className="flex flex-col items-start space-y-5 py-5 px-6">
                                {Object.keys(menuItems).map((item, index) => (
                                    <div key={index} className="w-full">
                                        <div
                                            className="cursor-pointer font-semibold text-white text-lg flex items-center justify-between w-full"
                                            onClick={() => setActiveMobileMenu(activeMobileMenu === item ? null : item)}
                                        >
                                            {item}
                                            <RiArrowDropDownLine
                                                size={24}
                                                className={`transform transition-transform duration-300 ${
                                                    activeMobileMenu === item ? 'rotate-180' : ''
                                                }`}
                                            />
                                        </div>
                                        <AnimatePresence>
                                            {activeMobileMenu === item && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="mt-2 ml-4 space-y-2"
                                                >
                                                    {menuItems[item].map((subItem, subIndex) => (
                                                        <motion.div
                                                            key={subIndex}
                                                            initial={{ opacity: 0, x: -10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: subIndex * 0.1 }}
                                                            className="text-white py-1"
                                                        >
                                                            <Link
                                                                to={subItem.link}
                                                                onClick={toggleMenu}
                                                                className="block w-full h-full"
                                                            >
                                                                {subItem.name}
                                                            </Link>
                                                        </motion.div>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default Navbar;

import React, { useState } from 'react';
import './About.css';
import Navbar from "../../Navbar/Navbar";
import Footer_only_links from "../../Footer/Footer_only_links";

function About() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <>
            <Navbar />
            <div
                className="relative flex justify-center items-end h-[70vh] w-full bg-no-repeat bg-cover bg-center"
                style={{ backgroundImage: `url("https://images.hindustantimes.com/img/2022/09/26/1600x900/20220924-KPT-SK-MN-54-0_1664180820199_1664180820199_1664180981399_1664180981399.JPG")` }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent "></div>

                <div className="relative flex flex-col items-center text-center gap-4 px-4 py-10">
                    <h1 className="text-white mt-28 text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
                        About Us
                    </h1>
                    <div className="text-white font-light tracking-tight text-xs sm:text-sm md:text-lg lg:text-xl">
                        <p>Manpasand Inc. Your Gateway to Indian Entertainment..</p>
                        
                    </div>
                    <div className="mt-8">
                        <div className="h-10 cursor-pointer font-light text-white border-[2px] hover:bg-white hover:text-black border-white flex justify-center items-center w-28 sm:w-32 rounded-3xl mb-20 transform hover:scale-105 duration-300"
                        onClick={toggleModal}
                        >
                            <div>Socials</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative w-full h-[50vh] bg-gradient-to-b from-black via-[#1a0e0e] to-[#3d2c2c] flex justify-center">
                <div className="relative align-centre text-white p-6 rounded-lg shadow-lg w-full max-w-2xl ">
                    <h1 className="text-3xl font-bold mb-4">Our Mission</h1>
                    <p className="text-base sm:text-lg md:text-xl">
                        At Manpasand Inc., we strive to bring the best of Indian entertainment to the world. Our mission is to provide a platform where people can enjoy a wide range of Indian movies, music, and cultural content.
                    </p>
                </div>
            </div>

            {isModalOpen && (
                <div className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300 ${isModalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className={`bg-black/20 backdrop-blur-md p-6 rounded-2xl shadow-lg text-white transform transition-transform duration-300 ${isModalOpen ? 'scale-100' : 'scale-95'}`}>
                        <h2 className="text-2xl font-bold mb-2">Follow Us</h2>
                        <p className = " font-light ">Here are our social media links:</p>
                        <div className="flex justify-center space-x-7 mb-10 mt-6">
                        <a href="#" className="text-white">
                            <i  className="fab fa-facebook text-2xl"></i>
                        </a>
                        <a href="#"className="text-white">
                            <i className="fab fa-instagram text-2xl"></i>
                        </a>
                        <a href="#" className="text-white">
                            <i class="fa-brands fa-linkedin text-2xl"></i>
                        </a>
                    </div>
                    <div className="flex justify-center">
                        <div className="h-10 cursor-pointer font-light text-white border-[2px]  border-white flex justify-center items-center w-28 sm:w-32 rounded-3xl  transform hover:scale-105 duration-300"
                            onClick={toggleModal}
                        >
                            Close
                        </div>
                    </div>
                    </div>
                </div>
            )}
            <Footer_only_links/>
        </>
    );
}

export default About;
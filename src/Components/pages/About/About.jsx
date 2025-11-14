import React, { useEffect } from 'react';
import './About.css';
import Navbar from "../../Navbar/Navbar";
import Footer_only_links from "../../Footer/Footer_only_links";
import { FaGlobe, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="relative bg-[#1a0e0e] text-white">
            <Navbar />
            <header
                className="relative flex flex-col justify-center items-center h-[35vh] md:h-[50vh] w-full bg-cover bg-center"
                style={{
                    backgroundImage: `url("https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=2070&q=80")`
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                <div className="relative z-10 text-center px-4 animate-fade-in">
                    <div className="flex justify-center mb-4">
                        <img src="/image.svg" alt="Manpasand Logo" className="h-16 md:h-24 w-auto" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-2">About Us</h1>
                    <p className="text-xs md:text-lg font-light tracking-tight mb-4">
                        Manpasand Inc. - Your Gateway to Indian Entertainment
                    </p>
                    <div className="flex justify-center gap-6 text-3xl">
                        <a href="#" className="hover:text-[#1877F2] transition-colors"><FaFacebookF /></a>
                        <a href="#" className="hover:text-[#E1306C] transition-colors"><FaInstagram /></a>
                        <a href="#" className="hover:text-[#FF0000] transition-colors"><FaYoutube /></a>
                    </div>
                </div>
            </header>

            <section className="relative py-16 px-4 bg-gradient-to-b from-black via-[#1a0e0e] to-[#3d2c2c]">
                <div className="max-w-4xl mx-auto fade-in-slide-up">
                    <div className="flex justify-center mb-6">
                        <button className="flex items-center gap-2 bg-white text-black rounded-full px-4 py-2 font-medium transition-transform transform hover:scale-105">
                            <FaGlobe /> Our Story
                        </button>
                    </div>
                    <div className="bg-neutral-600/20 p-6 rounded-xl backdrop-blur-sm shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">Our Story</h2>
                        <p className="text-sm md:text-base leading-relaxed font-light">
                            Founded in 1999, Manpasand Inc. is a USA-based event management organization dedicated to promoting Indian culture through stage performances and music. We provide a platform for talented artists to showcase their art and cultural heritage to the Indian community in America. Our mission is to bridge the gap between generations and keep the younger audience connected to our roots. Each year, we bring together teams of professional artists from India to deliver captivating entertainment experiences that celebrate our vibrant traditions. Join us on this journey as we continue to elevate and share the beauty of Indian entertainment.
                        </p>
                    </div>
                </div>
            </section>
            <div className="bg-[#3d2c2c] text-white p-4">
                {/* Footer content */}
                <Footer_only_links />
            </div>


        </div>
    );
}

export default About;

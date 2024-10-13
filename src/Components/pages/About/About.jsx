import React, { useState, useEffect } from 'react';
import './About.css';
import Navbar from "../../Navbar/Navbar";
import Footer_only_links from "../../Footer/Footer_only_links";
import { FaUsers, FaGlobe, FaMusic } from 'react-icons/fa';

function About() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [activeTab, setActiveTab] = useState('mission');

    const openModal = () => {
        setIsModalOpen(true);
        setIsClosing(false);
    };

    const closeModal = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsModalOpen(false);
            setIsClosing(false);
        }, 300); // Match this with your transition duration
    };

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isModalOpen]);

    const renderTabContent = () => {
        switch(activeTab) {
            case 'mission':
                return (
                    <div className="fade-in-slide-up">
                        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                        <p className="mb-4">At Manpasand Inc., we strive to bridge cultures through the universal language of music and entertainment. Our mission is to bring the vibrant energy of Indian artists to global audiences, creating unforgettable experiences that celebrate diversity and artistic excellence.</p>
                        <p>We are committed to:</p>
                        <ul className="list-disc list-inside ml-4 mt-2">
                            <li className="fade-in-slide-right" style={{animationDelay: '0.2s'}}>Showcasing the best of Indian talent across India, USA, and Canada</li>
                            <li className="fade-in-slide-right" style={{animationDelay: '0.4s'}}>Creating immersive cultural experiences for our audiences</li>
                            <li className="fade-in-slide-right" style={{animationDelay: '0.6s'}}>Supporting emerging artists and helping them reach international platforms</li>
                            <li className="fade-in-slide-right" style={{animationDelay: '0.8s'}}>Fostering cross-cultural understanding through the power of live events</li>
                        </ul>
                    </div>
                );
            case 'story':
                return (
                    <div className="fade-in-slide-up">
                        <h2 className="text-2xl font-bold mb-4">Our Story</h2>
                        <p className="mb-4">Founded in 2010, Manpasand Inc. began as a small team of passionate music lovers with a dream to bring Indian artists to global stages. Over the years, we've grown into a leading event management company, organizing over 500 successful events across three countries.</p>
                        <p>Our journey has been marked by:</p>
                        <ul className="list-disc list-inside ml-4 mt-2">
                            <li className="fade-in-slide-right" style={{animationDelay: '0.2s'}}>Partnerships with renowned artists like A.R. Rahman, Arijit Singh, and Shreya Ghoshal</li>
                            <li className="fade-in-slide-right" style={{animationDelay: '0.4s'}}>Sold-out shows at iconic venues including Madison Square Garden and Rogers Centre</li>
                            <li className="fade-in-slide-right" style={{animationDelay: '0.6s'}}>Innovative event concepts that blend traditional and contemporary Indian culture</li>
                            <li className="fade-in-slide-right" style={{animationDelay: '0.8s'}}>A growing community of over 1 million loyal fans and supporters</li>
                        </ul>
                    </div>
                );
            case 'team':
                return (
                    <div className="fade-in-slide-up">
                        <h2 className="text-2xl font-bold mb-4">Our Team</h2>
                        <p className="mb-4">Behind every successful Manpasand event is a dedicated team of professionals who are passionate about Indian culture and entertainment. Our diverse team brings together expertise in event management, artist relations, marketing, and production.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div className="bg-white/10 p-4 rounded-lg fade-in-scale" style={{animationDelay: '0.2s'}}>
                                <h3 className="font-bold">Priya Sharma</h3>
                                <p className="text-sm">Founder & CEO</p>
                            </div>
                            <div className="bg-white/10 p-4 rounded-lg fade-in-scale" style={{animationDelay: '0.4s'}}>
                                <h3 className="font-bold">Raj Patel</h3>
                                <p className="text-sm">Head of Artist Relations</p>
                            </div>
                            <div className="bg-white/10 p-4 rounded-lg fade-in-scale" style={{animationDelay: '0.6s'}}>
                                <h3 className="font-bold">Anita Desai</h3>
                                <p className="text-sm">Event Director</p>
                            </div>
                            <div className="bg-white/10 p-4 rounded-lg fade-in-scale" style={{animationDelay: '0.8s'}}>
                                <h3 className="font-bold">Vikram Singh</h3>
                                <p className="text-sm">Marketing Manager</p>
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="relative">
            <Navbar />
            <div
                className="relative flex justify-center items-end h-[30vh] sm:h-[25vh] md:h-[40vh] lg:h-[50vh] w-full bg-no-repeat bg-cover bg-center"
                style={{ backgroundImage: `url("https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")` }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

                <div className="relative flex flex-col items-center text-center gap-4 px-4 py-10">
                    <h1 className="text-white text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold animate-fade-in-down">
                        About Us
                    </h1>
                    <div className="text-white font-light tracking-tight text-xs sm:text-sm md:text-lg lg:text-xl animate-fade-in-up">
                        <p>Manpasand Inc. Your Gateway to Indian Entertainment</p>
                    </div>
                    <div className="mt-8 animate-fade-in" style={{animationDelay: '0.5s'}}>
                        <button 
                            className="h-10 cursor-pointer font-light text-white border-[2px] hover:bg-white hover:text-black border-white flex justify-center items-center w-28 sm:w-32 rounded-3xl transform hover:scale-105 duration-300"
                            onClick={openModal}
                        >
                            Socials
                        </button>
                    </div>
                </div>
            </div>

            <div className="relative w-full bg-gradient-to-b from-black via-[#1a0e0e] to-[#3d2c2c] py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="flex justify-center mb-8">
                        <button 
                            className={`px-4 py-2 mx-2 rounded-full transition-all duration-300 ${activeTab === 'mission' ? 'bg-white text-black scale-110' : 'bg-white/20 text-white'}`}
                            onClick={() => setActiveTab('mission')}
                        >
                            <FaUsers className="inline mr-2" /> Our Mission
                        </button>
                        <button 
                            className={`px-4 py-2 mx-2 rounded-full transition-all duration-300 ${activeTab === 'story' ? 'bg-white text-black scale-110' : 'bg-white/20 text-white'}`}
                            onClick={() => setActiveTab('story')}
                        >
                            <FaGlobe className="inline mr-2" /> Our Story
                        </button>
                        <button 
                            className={`px-4 py-2 mx-2 rounded-full transition-all duration-300 ${activeTab === 'team' ? 'bg-white text-black scale-110' : 'bg-white/20 text-white'}`}
                            onClick={() => setActiveTab('team')}
                        >
                            <FaMusic className="inline mr-2" /> Our Team
                        </button>
                    </div>
                    <div className="text-white p-6 rounded-lg bg-white/10">
                        {renderTabContent()}
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div className={`fixed inset-0 z-50 flex justify-center items-center transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'}`}>
                    <div className="absolute inset-0 bg-black/50" onClick={closeModal}></div>
                    <div className={`relative bg-black/20 backdrop-blur-md p-6 rounded-2xl shadow-lg text-white transform transition-all duration-300 ${isClosing ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}`}>
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
                            onClick={closeModal}
                        >
                            Close
                        </div>
                    </div>
                    </div>
                </div>
            )}
            <div className="bg-[#3d2c2c]">
                <Footer_only_links/>
            </div>
        </div>
    );
}

export default About;
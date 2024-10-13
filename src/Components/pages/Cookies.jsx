import React, { useState } from 'react';
import Navbar from "../Navbar/Navbar";
import Footer_only_links from "../Footer/Footer_only_links";
import { FaCookie, FaInfoCircle, FaCog } from 'react-icons/fa';

function Cookies() {
    const [activeTab, setActiveTab] = useState('what');

    const renderTabContent = () => {
        switch(activeTab) {
            case 'what':
                return (
                    <div className="fade-in-slide-up">
                        <h2 className="text-2xl font-bold mb-4">What Are Cookies?</h2>
                        <p className="mb-4">Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience and allow certain features to function properly.</p>
                        <ul className="list-disc list-inside ml-4 mt-2">
                            <li className="fade-in-slide-right" style={{animationDelay: '0.2s'}}>Session cookies: These are temporary and expire when you close your browser</li>
                            <li className="fade-in-slide-right" style={{animationDelay: '0.4s'}}>Persistent cookies: These remain on your device for a set period</li>
                            <li className="fade-in-slide-right" style={{animationDelay: '0.6s'}}>First-party cookies: Set by our website</li>
                            <li className="fade-in-slide-right" style={{animationDelay: '0.8s'}}>Third-party cookies: Set by our partners and service providers</li>
                        </ul>
                    </div>
                );
            case 'how':
                return (
                    <div className="fade-in-slide-up">
                        <h2 className="text-2xl font-bold mb-4">How We Use Cookies</h2>
                        <p className="mb-4">We use cookies for various purposes to enhance your experience on our website:</p>
                        <ul className="list-disc list-inside ml-4 mt-2">
                            <li className="fade-in-slide-right" style={{animationDelay: '0.2s'}}>To remember your preferences and settings</li>
                            <li className="fade-in-slide-right" style={{animationDelay: '0.4s'}}>To understand how you use our website</li>
                            <li className="fade-in-slide-right" style={{animationDelay: '0.6s'}}>To personalize content and advertisements</li>
                            <li className="fade-in-slide-right" style={{animationDelay: '0.8s'}}>To improve our website and services</li>
                        </ul>
                    </div>
                );
            case 'manage':
                return (
                    <div className="fade-in-slide-up">
                        <h2 className="text-2xl font-bold mb-4">Managing Cookies</h2>
                        <p className="mb-4">You have the right to choose whether or not to accept cookies. Here's how you can manage your cookie preferences:</p>
                        <ul className="list-disc list-inside ml-4 mt-2">
                            <li className="fade-in-slide-right" style={{animationDelay: '0.2s'}}>Browser settings: You can modify your browser settings to accept or reject cookies</li>
                            <li className="fade-in-slide-right" style={{animationDelay: '0.4s'}}>Our cookie banner: Use the options provided when you first visit our site</li>
                            <li className="fade-in-slide-right" style={{animationDelay: '0.6s'}}>Third-party tools: Use online tools to manage your cookie preferences across multiple websites</li>
                            <li className="fade-in-slide-right" style={{animationDelay: '0.8s'}}>Contact us: Reach out if you have any questions about our cookie practices</li>
                        </ul>
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
                style={{ backgroundImage: `url("https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2065&q=80")` }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

                <div className="relative flex flex-col items-center text-center gap-4 px-4 py-10">
                    <h1 className="text-white text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold animate-fade-in-down">
                        Cookie Policy
                    </h1>
                    <div className="text-white font-light tracking-tight text-xs sm:text-sm md:text-lg lg:text-xl animate-fade-in-up">
                        <p>Understanding how we use cookies to improve your experience</p>
                    </div>
                </div>
            </div>

            <div className="relative w-full bg-gradient-to-b from-black via-[#1a0e0e] to-[#3d2c2c] py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="flex justify-center mb-8">
                        <button 
                            className={`px-4 py-2 mx-2 rounded-full transition-all duration-300 ${activeTab === 'what' ? 'bg-white text-black scale-110' : 'bg-white/20 text-white'}`}
                            onClick={() => setActiveTab('what')}
                        >
                            <FaCookie className="inline mr-2" /> What Are Cookies
                        </button>
                        <button 
                            className={`px-4 py-2 mx-2 rounded-full transition-all duration-300 ${activeTab === 'how' ? 'bg-white text-black scale-110' : 'bg-white/20 text-white'}`}
                            onClick={() => setActiveTab('how')}
                        >
                            <FaInfoCircle className="inline mr-2" /> How We Use Them
                        </button>
                        <button 
                            className={`px-4 py-2 mx-2 rounded-full transition-all duration-300 ${activeTab === 'manage' ? 'bg-white text-black scale-110' : 'bg-white/20 text-white'}`}
                            onClick={() => setActiveTab('manage')}
                        >
                            <FaCog className="inline mr-2" /> Managing Cookies
                        </button>
                    </div>
                    <div className="text-white p-6 rounded-lg bg-white/10">
                        {renderTabContent()}
                    </div>
                </div>
            </div>

            <div className="bg-[#3d2c2c]">
                <Footer_only_links/>
            </div>
        </div>
    );
}

export default Cookies;


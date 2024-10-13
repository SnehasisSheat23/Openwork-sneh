import React, { useState } from 'react';
import Navbar from "../Navbar/Navbar";
import Footer_only_links from "../Footer/Footer_only_links";
import { FaFileContract, FaUserShield, FaExclamationTriangle } from 'react-icons/fa';

function TermsOfService() {
    const [activeTab, setActiveTab] = useState('agreement');

    const renderTabContent = () => {
        switch(activeTab) {
            case 'agreement':
                return (
                    <div className="fade-in-slide-up">
                        <h2 className="text-2xl font-bold mb-4">User Agreement</h2>
                        <p className="mb-4">By using Manpasand Inc.'s services, you agree to comply with and be bound by the following terms and conditions of use.</p>
                        <ul className="list-disc list-inside ml-4 mt-2">
                            <li className="fade-in-slide-right" style={{animationDelay: '0.2s'}}>You must be at least 18 years old to use our services</li>
                            <li className="fade-in-slide-right" style={{animationDelay: '0.4s'}}>You agree to provide accurate and complete information when creating an account</li>
                            <li className="fade-in-slide-right" style={{animationDelay: '0.6s'}}>You are responsible for maintaining the confidentiality of your account information</li>
                            <li className="fade-in-slide-right" style={{animationDelay: '0.8s'}}>You agree not to use our services for any illegal or unauthorized purpose</li>
                        </ul>
                    </div>
                );
            case 'privacy':
                return (
                    <div className="fade-in-slide-up">
                        <h2 className="text-2xl font-bold mb-4">Privacy and Data Protection</h2>
                        <p className="mb-4">We are committed to protecting your privacy and handling your data with care. Our privacy practices are outlined in our Privacy Policy.</p>
                        <ul className="list-disc list-inside ml-4 mt-2">
                            <li className="fade-in-slide-right" style={{animationDelay: '0.2s'}}>We collect and use your information as described in our Privacy Policy</li>
                            <li className="fade-in-slide-right" style={{animationDelay: '0.4s'}}>We implement security measures to protect your personal information</li>
                            <li className="fade-in-slide-right" style={{animationDelay: '0.6s'}}>You have the right to access, correct, or delete your personal information</li>
                            <li className="fade-in-slide-right" style={{animationDelay: '0.8s'}}>We may use cookies and similar technologies as described in our Cookie Policy</li>
                        </ul>
                    </div>
                );
            case 'liability':
                return (
                    <div className="fade-in-slide-up">
                        <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
                        <p className="mb-4">Manpasand Inc. strives to provide the best service possible, but we cannot guarantee that our services will always be error-free or uninterrupted.</p>
                        <ul className="list-disc list-inside ml-4 mt-2">
                            <li className="fade-in-slide-right" style={{animationDelay: '0.2s'}}>We are not liable for any indirect, incidental, or consequential damages</li>
                            <li className="fade-in-slide-right" style={{animationDelay: '0.4s'}}>Our liability is limited to the amount you paid for our services</li>
                            <li className="fade-in-slide-right" style={{animationDelay: '0.6s'}}>We are not responsible for third-party content or websites linked from our services</li>
                            <li className="fade-in-slide-right" style={{animationDelay: '0.8s'}}>You use our services at your own risk</li>
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
                style={{ backgroundImage: `url("https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80")` }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

                <div className="relative flex flex-col items-center text-center gap-4 px-4 py-10">
                    <h1 className="text-white text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold animate-fade-in-down">
                        Terms of Service
                    </h1>
                    <div className="text-white font-light tracking-tight text-xs sm:text-sm md:text-lg lg:text-xl animate-fade-in-up">
                        <p>Understanding our agreement with you</p>
                    </div>
                </div>
            </div>

            <div className="relative w-full bg-gradient-to-b from-black via-[#1a0e0e] to-[#3d2c2c] py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="flex justify-center mb-8">
                        <button 
                            className={`px-4 py-2 mx-2 rounded-full transition-all duration-300 ${activeTab === 'agreement' ? 'bg-white text-black scale-110' : 'bg-white/20 text-white'}`}
                            onClick={() => setActiveTab('agreement')}
                        >
                            <FaFileContract className="inline mr-2" /> Agreement
                        </button>
                        <button 
                            className={`px-4 py-2 mx-2 rounded-full transition-all duration-300 ${activeTab === 'privacy' ? 'bg-white text-black scale-110' : 'bg-white/20 text-white'}`}
                            onClick={() => setActiveTab('privacy')}
                        >
                            <FaUserShield className="inline mr-2" /> Privacy
                        </button>
                        <button 
                            className={`px-4 py-2 mx-2 rounded-full transition-all duration-300 ${activeTab === 'liability' ? 'bg-white text-black scale-110' : 'bg-white/20 text-white'}`}
                            onClick={() => setActiveTab('liability')}
                        >
                            <FaExclamationTriangle className="inline mr-2" /> Liability
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

export default TermsOfService;


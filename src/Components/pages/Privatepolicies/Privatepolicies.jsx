import React, { useState, useEffect } from 'react';
import Navbar from "../../Navbar/Navbar";
import Footer_only_links from "../../Footer/Footer_only_links";
import { FaUserSecret, FaShieldAlt, FaLock, FaCookieBite, FaUserFriends, FaGlobe, FaChild } from 'react-icons/fa';
import './privatepolicies.css';

function PrivatePolicies() {
    const [visibleSections, setVisibleSections] = useState([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleSections(prev => [...new Set([...prev, entry.target.id])]);
                    }
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll('section').forEach((section) => {
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    const policyContent = [
        {
            id: 'information-collection',
            title: 'Information Collection',
            icon: <FaUserSecret className="text-3xl mb-2" />,
            content: 'We collect personal information that you voluntarily provide to us when you use our services, such as your name, email address, and phone number. We may also collect non-personal information about your device and how you interact with our website.'
        },
        {
            id: 'information-use',
            title: 'Use of Information',
            icon: <FaShieldAlt className="text-3xl mb-2" />,
            content: 'We use the information we collect to provide and improve our services, communicate with you, and comply with legal obligations. We do not sell your personal information to third parties.'
        },
        {
            id: 'data-security',
            title: 'Data Security',
            icon: <FaLock className="text-3xl mb-2" />,
            content: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage.'
        },
        {
            id: 'cookies',
            title: 'Cookies and Tracking Technologies',
            icon: <FaCookieBite className="text-3xl mb-2" />,
            content: 'We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences.'
        },
        {
            id: 'third-party-sharing',
            title: 'Third-Party Sharing',
            icon: <FaUserFriends className="text-3xl mb-2" />,
            content: 'We may share your information with trusted third-party service providers who assist us in operating our website and conducting our business. These parties are obligated to keep your information confidential.'
        },
        {
            id: 'international-transfers',
            title: 'International Data Transfers',
            icon: <FaGlobe className="text-3xl mb-2" />,
            content: 'Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in such cases.'
        },
        {
            id: 'childrens-privacy',
            title: "Children's Privacy",
            icon: <FaChild className="text-3xl mb-2" />,
            content: 'Our services are not intended for children under 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.'
        }
    ];

    return (
        <div className="relative">
            <Navbar />
            <div
                className="relative flex justify-center items-end h-[30vh] sm:h-[25vh] md:h-[40vh] lg:h-[50vh] w-full bg-no-repeat bg-cover bg-center"
                style={{ backgroundImage: `url("https://images.unsplash.com/photo-1508345228704-935cc84bf5e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80")` }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

                <div className="relative flex flex-col items-center text-center gap-2 sm:gap-4 px-4 py-6 sm:py-10">
                    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold animate-fade-in-down">
                        Privacy Policy
                    </h1>
                    <div className="text-white font-light tracking-tight text-sm sm:text-base md:text-lg lg:text-xl animate-fade-in-up">
                        <p>Your privacy is important to us at Manpasand Inc.</p>
                    </div>
                </div>
            </div>

            <div className="relative w-full bg-gradient-to-b from-black via-[#1a0e0e] to-[#3d2c2c] py-8 sm:py-16 px-4 sm:px-8">
                <div className="max-w-4xl mx-auto text-white">
                    <p className="mb-6 sm:mb-8 text-base sm:text-lg animate-fade-in text-center px-4 sm:px-0">
                        This Privacy Policy outlines how Manpasand Inc. collects, uses, and protects your personal information. By using our services, you agree to the terms of this policy. Last updated: [Insert Date]
                    </p>
                    {policyContent.map((section, index) => (
                        <section 
                            key={section.id} 
                            id={section.id}
                            className={`mb-8 sm:mb-12 transition-all duration-1000 ease-out ${
                                visibleSections.includes(section.id) 
                                    ? 'opacity-100 translate-x-0' 
                                    : 'opacity-0 translate-x-[-50px]'
                            }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="flex flex-col items-center mb-3 sm:mb-4">
                                {section.icon}
                                <h2 className="text-xl sm:text-2xl font-bold text-center">{section.title}</h2>
                            </div>
                            <p className="text-base sm:text-lg text-center px-4 sm:px-0">{section.content}</p>
                        </section>
                    ))}
                    <section 
                        className={`mb-8 sm:mb-12 transition-all duration-1000 ease-out ${
                            visibleSections.includes('your-rights') 
                                ? 'opacity-100 translate-y-0' 
                                : 'opacity-0 translate-y-[20px]'
                        }`}
                        id="your-rights"
                    >
                        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-center">Your Rights</h2>
                        <p className="text-base sm:text-lg text-center px-4 sm:px-0">
                            You have the right to access, correct, or delete your personal information. To exercise these rights or for any privacy-related inquiries, please contact us at privacy@manpasandinc.com.
                        </p>
                    </section>
                    <section 
                        className={`mb-8 sm:mb-12 transition-all duration-1000 ease-out ${
                            visibleSections.includes('changes-to-policy') 
                                ? 'opacity-100 translate-y-0' 
                                : 'opacity-0 translate-y-[20px]'
                        }`}
                        id="changes-to-policy"
                    >
                        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-center">Changes to This Policy</h2>
                        <p className="text-base sm:text-lg text-center px-4 sm:px-0">
                            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                        </p>
                    </section>
                </div>
            </div>

            <div className="bg-[#3d2c2c]">
                <Footer_only_links/>
            </div>
        </div>
    );
}

export default PrivatePolicies;

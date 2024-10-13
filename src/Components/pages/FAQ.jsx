import React, { useState, useEffect } from 'react';
import Navbar from "../Navbar/Navbar";
import Footer_only_links from "../Footer/Footer_only_links";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        setFadeIn(true);
    }, []);

    const faqData = [
        {
            question: "What types of events does Manpasand Inc. organize?",
            answer: "Manpasand Inc. specializes in organizing events featuring Indian artists, including concerts, cultural shows, and festivals. We host events in India, USA, and Canada."
        },
        {
            question: "How can I purchase tickets for your events?",
            answer: "Tickets for our events can be purchased through our official website or authorized ticketing partners. We'll announce ticket sales on our social media channels and website."
        },
        {
            question: "Do you offer refunds if an event is cancelled?",
            answer: "Yes, if an event is cancelled, we provide full refunds to ticket holders. The refund process and timeline will be communicated via email and our website."
        },
        {
            question: "Can I book Manpasand Inc. for a private event?",
            answer: "Absolutely! We offer event planning services for private functions. Please contact us through our website or email for more information on custom event packages."
        },
        {
            question: "How can artists collaborate with Manpasand Inc.?",
            answer: "We're always looking to work with talented Indian artists. If you're an artist or represent one, please send your portfolio and performance details to our artist relations team at artists@manpasandinc.com."
        }
    ];

    const toggleQuestion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="relative">
            <Navbar />
            <div
                className="relative flex justify-center items-end h-[30vh] sm:h-[25vh] md:h-[40vh] lg:h-[50vh] w-full bg-no-repeat bg-cover bg-center"
                style={{ backgroundImage: `url("https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80")` }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

                <div className="relative flex flex-col items-center text-center gap-4 px-4 py-10">
                    <h1 className="text-white text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
                        Frequently Asked Questions
                    </h1>
                    <div className="text-white font-light tracking-tight text-xs sm:text-sm md:text-lg lg:text-xl">
                        <p>Find answers to common questions about Manpasand Inc. events</p>
                    </div>
                </div>
            </div>

            <div className="relative w-full bg-gradient-to-b from-black via-[#1a0e0e] to-[#3d2c2c] flex flex-col justify-center py-16 px-4">
                <div className="max-w-3xl mx-auto w-full">
                    {faqData.map((faq, index) => (
                        <div 
                            key={index} 
                            className={`mb-6 transition-all duration-500 ease-in-out ${fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <button
                                className="flex justify-between items-center w-full text-left text-white p-6 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                onClick={() => toggleQuestion(index)}
                            >
                                <span className="font-semibold text-lg">{faq.question}</span>
                                <span className="text-2xl transition-transform duration-300 ease-in-out transform">
                                    {openIndex === index ? <FaChevronUp className="rotate-180" /> : <FaChevronDown />}
                                </span>
                            </button>
                            <div 
                                className={`mt-2 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="p-6 text-white bg-white/5 rounded-lg shadow-inner">
                                    <p className="answer-content text-gray-200">{faq.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-[#3d2c2c]">
                <Footer_only_links/>
            </div>
        </div>
    );
}

export default FAQ;

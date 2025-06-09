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
            question: "Where is MANPASAND, INC. located?",
            answer: "MANPASAND, INC. is based in the USA and primarily serves the Indian population in America."
        },
        {
            question: "What is MANPASAND, INC.'s industry?",
            answer: "MANPASAND, INC. is in the event management industry, promoting Indian culture through stage shows and music events."
        },
        {
            question: "What is MANPASAND, INC.'s phone number?",
            answer: "The phone number for MANPASAND, INC. is not provided here. Please visit their website for up-to-date contact details."
        },
        {
            question: "What is MANPASAND, INC.'s website?",
            answer: "The official website of MANPASAND, INC. is www.manpasand.us."
        },
        {
            question: "What year was MANPASAND, INC. started?",
            answer: "MANPASAND, INC. was started in the year 1999."
        },
        {
            question: "What year was MANPASAND, INC. incorporated?",
            answer: "MANPASAND, INC. was formed in 1999 and has been scaling to new heights year after year."
        }
    ];


    const toggleQuestion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="relative">
            <Navbar />
            <div
                className="relative flex flex-col justify-center items-center h-[35vh] md:h-[50vh] w-full bg-cover bg-center"
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

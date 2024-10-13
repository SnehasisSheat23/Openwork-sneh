import React, { useState } from 'react';
import Navbar from "../Navbar/Navbar";
import Footer_only_links from "../Footer/Footer_only_links";
import { FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        // Reset form after submission
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="relative">
            <Navbar />
            <div
                className="relative flex justify-center items-end h-[30vh] sm:h-[25vh] md:h-[40vh] lg:h-[50vh] w-full bg-no-repeat bg-cover bg-center"
                style={{ backgroundImage: `url("https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg")` }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

                <div className="relative flex flex-col items-center text-center gap-4 px-4 py-10">
                    <h1 className="text-white text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
                        Contact Us
                    </h1>
                    <div className="text-white font-light tracking-tight text-xs sm:text-sm md:text-lg lg:text-xl">
                        <p>Get in touch with Manpasand Inc. We'd love to hear from you!</p>
                    </div>
                </div>
            </div>

            <div className="relative w-full bg-gradient-to-b from-black via-[#1a0e0e] to-[#3d2c2c] flex flex-col md:flex-row justify-center py-16 px-4">
                <div className="relative align-centre text-white p-6 rounded-lg w-full max-w-xl fade-up-animation mb-8 md:mb-0 md:mr-8">
                    <h2 className="text-3xl font-bold mb-6">Send us a message</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full p-2 rounded bg-white/10 border border-white/30 focus:outline-none focus:border-white"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full p-2 rounded bg-white/10 border border-white/30 focus:outline-none focus:border-white"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="4"
                                className="w-full p-2 rounded bg-white/10 border border-white/30 focus:outline-none focus:border-white"
                            ></textarea>
                        </div>
                        <button type="submit" className="h-10 cursor-pointer font-light text-white border-[2px] hover:bg-white hover:text-black border-white flex justify-center items-center w-full sm:w-32 rounded-3xl transform hover:scale-105 duration-300">
                            Send
                        </button>
                    </form>
                </div>

                <div className="relative text-white p-6 rounded-lg w-full max-w-md fade-up-animation">
                    <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <FaPhone className="mr-4 text-2xl" />
                            <span>+1 (123) 456-7890</span>
                        </div>
                        <div className="flex items-center">
                            <FaEnvelope className="mr-4 text-2xl" />
                            <span>contact@manpasandinc.com</span>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
                            <div className="flex space-x-4">
                                <a href="#" className="text-white hover:text-gray-300">
                                    <FaFacebook className="text-2xl" />
                                </a>
                                <a href="#" className="text-white hover:text-gray-300">
                                    <FaInstagram className="text-2xl" />
                                </a>
                                <a href="#" className="text-white hover:text-gray-300">
                                    <FaLinkedin className="text-2xl" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#3d2c2c]">
                <Footer_only_links/>
            </div>
        </div>
    );
}

export default ContactUs;

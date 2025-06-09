import React, { useState } from 'react';
import Navbar from "../Navbar/Navbar";
import Footer_only_links from "../Footer/Footer_only_links";
import { FaPhone, FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa';

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
        console.log('Form submitted:', formData);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="relative  bg-black text-white">
            <Navbar />

            {/* Banner Section */}
            <section
                className="relative flex flex-col justify-center items-center h-[35vh] md:h-[50vh] w-full bg-cover bg-center"
                style={{ backgroundImage: `url("https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg")` }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
                <div className="relative text-center px-4">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">Contact Us</h1>
                    <p className="text-sm sm:text-base md:text-lg max-w-xl mx-auto font-light">
                        Get in touch with Manpasand Inc. We'd love to hear from you!
                    </p>
                </div>
            </section>

            {/* Contact and Form Section */}
            <section className="relative w-full flex flex-col md:flex-row justify-center py-16 px-4 bg-gradient-to-b from-black via-[#1a0e0e] to-[#3d2c2c]">
                {/* Contact Form */}
                <article className="relative p-6 rounded-lg w-full max-w-xl mb-8 md:mb-0 md:mr-8 bg-neutral-600/20">
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
                                className="w-full p-2 rounded bg-white/10 border border-white/30 focus:outline-none focus:border-white placeholder-white/50"
                                placeholder="Your Name"
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
                                className="w-full p-2 rounded bg-white/10 border border-white/30 focus:outline-none focus:border-white placeholder-white/50"
                                placeholder="Your Email"
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
                                className="w-full p-2 rounded bg-white/10 border border-white/30 focus:outline-none focus:border-white placeholder-white/50"
                                placeholder="Your Message"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="h-10 cursor-pointer font-light text-white border-2 hover:bg-white hover:text-black border-white flex justify-center items-center w-full sm:w-32 rounded-3xl transform hover:scale-105 duration-300"
                        >
                            Send
                        </button>
                    </form>
                </article>

                {/* Contact Information */}
                <article className="relative p-6 rounded-lg w-full max-w-md bg-neutral-600/20">
                    <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <FaPhone className="mr-4 text-2xl" />
                            <a href="tel:6309133893" className="hover:underline">Bhavna Modi: 630-913-3893</a>
                        </div>
                        <div className="flex items-center">
                            <FaEnvelope className="mr-4 text-2xl" />
                            <a href="mailto:bhavna@manpasand.us" className="hover:underline">bhavna@manpasand.us</a>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
                            <div className="flex space-x-4">
                                <a href="#" className="hover:text-gray-300">
                                    <FaFacebook className="text-2xl" />
                                </a>
                                <a href="#" className="hover:text-gray-300">
                                    <FaInstagram className="text-2xl" />
                                </a>
                            </div>
                        </div>
                    </div>
                </article>
            </section>

            {/* Footer */}
            <footer className="bg-[#3d2c2c]">
                <Footer_only_links />
            </footer>
        </div>
    );
}

export default ContactUs;

import React, { useEffect, useMemo } from 'react';
import './About.css';
import Navbar from "../../Navbar/Navbar";
import Footer_only_links from "../../Footer/Footer_only_links";
import ArtistGallery from "../../Artist/ArtistGallery";
import { FaGlobe, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { artists } from '../../../database.js';

// Function for random image selection (same as Gallery.jsx)
const getRandomItems = (array, count) => {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Get gallery images from artists' Instagram images (same as Gallery.jsx)
    const aboutGalleryImages = useMemo(() => {
        // Instagram images from all artists
        const allInstagramImages = artists.flatMap(artist => 
            artist.instagramImages ? artist.instagramImages.map(url => url) : []
        );
        
        // Select 3 random images
        return getRandomItems(allInstagramImages, 3);
    }, []);

    return (
        <div className="relative">
            <Navbar />
            {/* Header section similar to Cookies.jsx */}
            <div
                className="relative flex flex-col justify-center items-center h-[35vh] md:h-[50vh] w-full bg-cover bg-center"
                style={{
                    backgroundImage: `url("https://media.istockphoto.com/id/1433795511/photo/group-of-garba-dancer-in-gujarat.jpg?s=612x612&w=0&k=20&c=PQM0BOKhvbzCPzdObkgVRXYa-WhSxr8w-5nX5R4Iu0w=")`
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

                <div className="relative flex flex-col items-center text-center gap-4 px-4 py-10">
                    {/* Logo */}
                    <div className="flex justify-center mb-4 animate-fade-in-down">
                        <img src="/image.svg" alt="Manpasand Logo" className="h-16 md:h-24 w-auto" />
                    </div>
                    
                    {/* Title */}
                    <h1 className="text-white text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold animate-fade-in-down">
                        About Us
                    </h1>
                    
                    {/* Subtitle */}
                    <div className="text-white font-light tracking-tight text-xs sm:text-sm md:text-lg lg:text-xl animate-fade-in-up">
                        <p>Manpasand Inc. - Your Gateway to Indian Entertainment</p>
                    </div>
                    
                    {/* Social Media Links */}
                    <div className="flex justify-center items-center gap-6 text-3xl sm:text-4xl mt-6 animate-fade-in-up">
                        <a 
                            href="#" 
                            className="text-white hover:text-[#1877F2] transition-colors duration-200" 
                            aria-label="Facebook"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaFacebookF />
                        </a>
                        <a 
                            href="#" 
                            className="text-white hover:text-[#E1306C] transition-colors duration-200" 
                            aria-label="Instagram"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaInstagram />
                        </a>
                        <a 
                            href="#" 
                            className="text-white hover:text-[#FF0000] transition-colors duration-200" 
                            aria-label="YouTube"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaYoutube />
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Content Section - Gallery and Our Story */}
            <div className="relative w-full bg-gradient-to-b from-black via-[#1a0e0e] to-[#3d2c2c] pb-12 sm:pb-16 lg:pb-24 xl:pb-32 2xl:pb-40">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 lg:pt-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 lg:h-[500px]">
                        {/* Left Side - Gallery */}
                        <div className="flex flex-col lg:h-full">
                            {aboutGalleryImages && aboutGalleryImages.length > 0 ? (
                                <div className="lg:flex-1 lg:min-h-0 lg:overflow-hidden">
                                    <ArtistGallery 
                                        images={aboutGalleryImages} 
                                        artistName="Manpasand Inc."
                                        compact={true}
                                    />
                                </div>
                            ) : (
                                <div className="flex-1 flex items-center justify-center text-gray-500">
                                    <p>No gallery images available.</p>
                                </div>
                            )}
                        </div>

                        {/* Right Side - Scrollable Our Story */}
                        <div className="flex flex-col lg:h-full ml-0 lg:ml-20">
                            <div className="flex items-center gap-2 mb-4 sm:mb-6">
                               
                                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Our Story</h2>
                            </div>
                            <div className="lg:flex-1 lg:overflow-y-auto lg:pr-4 custom-scrollbar">
                                <div className="text-gray-300 leading-relaxed space-y-4">
                                    <p className="whitespace-pre-line">
                                        Founded in 1999, Manpasand Inc. is a USA-based event management organization dedicated to promoting Indian culture through stage performances and music. We provide a platform for talented artists to showcase their art and cultural heritage to the Indian community in America.
                                    </p>
                                    <p>
                                        Our mission is to bridge the gap between generations and keep the younger audience connected to our roots. Each year, we bring together teams of professional artists from India to deliver captivating entertainment experiences that celebrate our vibrant traditions.
                                    </p>
                                    <p>
                                        Join us on this journey as we continue to elevate and share the beauty of Indian entertainment.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#3d2c2c] pt-8 lg:pt-12 xl:pt-16 2xl:pt-20">
                <Footer_only_links />
            </div>
        </div>
    );
}

export default About;

import React from 'react';
import { useParams } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

import Footer_only_links from "../../Footer/Footer_only_links";
import Navbar from "../../Navbar/Navbar";
import ArtistGallery from "../../Artist/ArtistGallery";
import { getArtistById } from '../../../database.js';
import './Infopage.css';

// Main Timeline component
const Timeline = () => {
    let { artist } = useParams();
    const artistData = getArtistById(artist);

    return (
        <>
            <Navbar />
            <div className='min-h-screen bg-black'>
                {/* Artist header section */}
                <div className="w-full h-auto min-h-[300px] sm:min-h-[350px] bg-no-repeat bg-cover bg-center relative overflow-hidden">
                    {/* Dark live gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-purple-900 to-violet-950 animate-gradient-x"></div>
                    
                    {/* Gradient overlay for smooth transition to black */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
                    
                    {/* Content container with max-width */}
                    <div className="relative z-10 container mx-auto p-4 sm:p-6 lg:p-8 min-h-[300px] sm:min-h-[350px] flex items-center justify-start">
                        {/* Artist name and social media */}
                        <div className="text-left w-full">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white uppercase tracking-wider mb-8 sm:mb-10 lg:mb-12">{artistData.name}</h1>
                            {/* Social Media Icons */}
                            {artistData?.socialMedia && (
                                <div className="flex gap-4 sm:gap-6">
                                    {artistData.socialMedia.facebook && (
                                        <a 
                                            href={artistData.socialMedia.facebook} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-white hover:text-blue-500 transition-colors duration-200"
                                            aria-label="Facebook"
                                        >
                                            <FaFacebook size={24} className="sm:w-7 sm:h-7" />
                                        </a>
                                    )}
                                    {artistData.socialMedia.instagram && (
                                        <a 
                                            href={artistData.socialMedia.instagram} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-white hover:text-pink-500 transition-colors duration-200"
                                            aria-label="Instagram"
                                        >
                                            <FaInstagram size={24} className="sm:w-7 sm:h-7" />
                                        </a>
                                    )}
                                    {artistData.socialMedia.youtube && (
                                        <a 
                                            href={artistData.socialMedia.youtube} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-white hover:text-red-500 transition-colors duration-200"
                                            aria-label="YouTube"
                                        >
                                            <FaYoutube size={24} className="sm:w-7 sm:h-7" />
                                        </a>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Main Content Section - About and Gallery */}
                <div className="w-full bg-black pb-12 sm:pb-16 lg:pb-24 xl:pb-32 2xl:pb-40">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 lg:pt-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 lg:h-[500px]">
                            {/* Left Side - Fixed Gallery */}
                            <div className="flex flex-col lg:h-full">
                                
                                {artistData?.instagramImages && artistData.instagramImages.length > 0 ? (
                                    <div className="lg:flex-1 lg:min-h-0 lg:overflow-hidden">
                                        <ArtistGallery 
                                            images={artistData.instagramImages} 
                                            artistName={artistData.name}
                                            compact={true}
                                        />
                                    </div>
                                ) : (
                                    <div className="flex-1 flex items-center justify-center text-gray-500">
                                        <p>No gallery images available.</p>
                                    </div>
                                )}
                            </div>

                            {/* Right Side - Scrollable About */}
                            <div className="flex flex-col lg:h-full ml-0 lg:ml-20">
                                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">About</h2>
                                <div className="lg:flex-1 lg:overflow-y-auto lg:pr-4 custom-scrollbar">
                                    <div className="text-gray-300 leading-relaxed space-y-4">
                                        {artistData?.bio ? (
                                            <p className="whitespace-pre-line">{artistData.bio}</p>
                                        ) : (
                                            <p>Bio information will be added soon.</p>
                                        )}
                                    </div>
                                </div>
                                
                                {/* Check out Section */}
                                {artistData?.socialMedia && (artistData.socialMedia.facebook || artistData.socialMedia.instagram || artistData.socialMedia.youtube) && (
                                    <div className="mt-6 lg:mt-8">
                                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Check out</h3>
                                        <div className="flex flex-wrap gap-3">
                                            {artistData.socialMedia.youtube && (
                                                <a 
                                                    href={artistData.socialMedia.youtube} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-200"
                                                    aria-label="YouTube"
                                                >
                                                    <FaYoutube size={20} />
                                                    <span className="text-sm sm:text-base font-medium">YouTube</span>
                                                </a>
                                            )}
                                            {artistData.socialMedia.instagram && (
                                                <a 
                                                    href={artistData.socialMedia.instagram} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-200"
                                                    aria-label="Instagram"
                                                >
                                                    <FaInstagram size={20} />
                                                    <span className="text-sm sm:text-base font-medium">Instagram</span>
                                                </a>
                                            )}
                                            {artistData.socialMedia.facebook && (
                                                <a 
                                                    href={artistData.socialMedia.facebook} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-200"
                                                    aria-label="Facebook"
                                                >
                                                    <FaFacebook size={20} />
                                                    <span className="text-sm sm:text-base font-medium">Facebook</span>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="bg-black pt-8 lg:pt-12 xl:pt-16 2xl:pt-20">
                <Footer_only_links/>
            </div>
        </>
    );
};

export default Timeline;

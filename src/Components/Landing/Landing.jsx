import { useState, useEffect } from 'react';



import landing3Desktop from '../../optimisedAssets/landing3.webp';
import landing3Mobile from '../../optimisedAssets/landing3mobile.webp';
import landing2Desktop from '../../optimisedAssets/landing2.webp';
import landing2Mobile from '../../optimisedAssets/landing2mobile.webp';
import landing4Desktop from '../../optimisedAssets/landing4.webp';
import landing4Mobile from '../../optimisedAssets/landing4mobile.webp';
import landing5Desktop from '../../optimisedAssets/landing5.webp';
import landing5Mobile from '../../optimisedAssets/landing5mobile.webp';
import landing6 from '../../optimisedAssets/landing6.webp';
import landing6Mobile from '../../optimisedAssets/landing6Mobile.webp';


function Landing() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    // Responsive screen width tracking
    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Slideshow data with responsive images
    const slides = [
        
        {
            imageMobile: landing2Mobile,
            imageTablet: landing2Desktop,
            imageDesktop: landing2Desktop,
            title: "Raas Garba Night",
            description: "Experience authentic Gujarati folk dance with live music and professional choreography. Day 1 - October 11, 2024."
        },
        {
            imageMobile: landing3Mobile,
            imageTablet: landing3Desktop,
            imageDesktop: landing3Desktop,
            title: "Cultural Celebration",
            description: "Immerse yourself in Indian culture with traditional dances, food, and festivities. Day 2 - October 12, 2024."
        },
        
        {
            imageMobile: landing5Mobile,
            imageTablet: landing5Desktop,
            imageDesktop: landing5Desktop,
            title: "Grand Finale",
            description: "Join us for the spectacular closing ceremony featuring special guest performances. Day 3 - October 13, 2024."
        },
        
    ];

    // Determine which image to use
    const getResponsiveImage = (slide) => {
        if (screenWidth < 640) return slide.imageMobile;
        else if (screenWidth < 1024) return slide.imageTablet;
        else return slide.imageDesktop;
    };

    // Auto-rotate slides every 4 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 7000);
        return () => clearInterval(interval);
    }, [slides.length]);

    const goToSlide = (index) => setCurrentSlide(index);
    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <div className="relative h-[90vh] w-full overflow-hidden">
            {/* Background slides */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className="absolute inset-0 transition-opacity duration-700 ease-in-out"
                    style={{
                        backgroundImage: `url("${getResponsiveImage(slide)}")`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        opacity: currentSlide === index ? 1 : 0,
                    }}
                />
            ))}

            {/* Gradient Overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black via-black/50 to-transparent z-[5]"></div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 p-2 rounded-full z-20"
                aria-label="Previous slide"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 p-2 rounded-full z-20"
                aria-label="Next slide"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Content Overlay */}
            <div className="relative z-10 flex flex-col justify-end h-full">
                <div className="flex flex-col items-center text-center gap-4 px-4 pb-6 pt-10 w-full text-white">
                    {/*<h2 className="text-2xl md:text-4xl font-bold drop-shadow-md">
                        {slides[currentSlide].title}
                    </h2>
                    <p className="text-sm md:text-lg max-w-xl drop-shadow-md">
                        {slides[currentSlide].description}
                    </p>

                    {/* Dot Navigation */}
                    <div className="flex space-x-2 mt-4">
                        {slides.map((_, index) => (
                            <button
                                key={`dot-${index}`}
                                onClick={() => goToSlide(index)}
                                className={`w-2 h-2 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-white/50'}`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;

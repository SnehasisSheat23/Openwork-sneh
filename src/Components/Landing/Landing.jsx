import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';


import landing1Mobile from '../../assets/landing1mobile.png';
import landing1Tablet from '../../assets/landing1tablet.png';
import landing1Desktop from '../../assets/landing1.png';
import landing3Desktop from '../../assets/landing3.png';
import landing3Mobile from '../../assets/landing3mobile.png';
import landing2Desktop from '../../assets/landing2.png';
import landing2Mobile from '../../assets/landing2mobile.png';
import landing4Desktop from '../../assets/landing4.png';
import landing4Mobile from '../../assets/landing4mobile.png';
import landing5Desktop from '../../assets/landing5.png';
import landing5Mobile from '../../assets/landing5mobile.png';
import landing6 from '../../assets/landing6.png';
import landing6Mobile from '../../assets/landing6mobile.png';

function Landing() {
    const navigate = useNavigate();
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
            imageMobile: landing1Mobile,
            imageTablet: landing1Tablet,
            imageDesktop: landing1Desktop,
            title: "Navratri Tour 2024",
            description: "Prepare for a new Garba experience. Secure your tickets now. Garba event Chicago - October 11 - 13, 2024."
        },
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
            imageMobile: landing4Mobile,
            imageTablet: landing4Desktop,
            imageDesktop: landing4Desktop,
            title: "Grand Finale",
            description: "Join us for the spectacular closing ceremony featuring special guest performances. Day 3 - October 13, 2024."
        },
        {
            imageMobile: landing5Mobile,
            imageTablet: landing5Desktop,
            imageDesktop: landing5Desktop,
            title: "Grand Finale",
            description: "Join us for the spectacular closing ceremony featuring special guest performances. Day 3 - October 13, 2024."
        },
        {
            imageMobile: landing6Mobile,
            imageTablet: landing6,
            imageDesktop: landing6,
            title: "Grand Finale",
            description: "Join us for the spectacular closing ceremony featuring special guest performances. Day 3 - October 13, 2024."
        }
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

    const handleNavigateToCalendar = () => {
        navigate('/calendar');
    };

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

                    {/* Timetable Button */}
                    <div className="mt-4 md:mt-8 animate-fade-up animation-delay-400">
                        <button
                            onClick={handleNavigateToCalendar}
                            className="h-10 cursor-pointer font-light text-white border-[2px] hover:bg-white hover:text-black border-white flex justify-center items-center w-28 sm:w-32 rounded-3xl transform hover:scale-105 duration-300"
                        >
                            Timetable
                        </button>
                    </div>

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

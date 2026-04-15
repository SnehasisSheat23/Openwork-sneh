import { useState, useEffect } from 'react';



import geetaMobile from '../../optimisedAssets/Upcommingevents/geeta_mobile.webp';
import geetaTablet from '../../optimisedAssets/geeta_tablet.webp';
import geetaDesktop from '../../optimisedAssets/geeta_desktop.webp';
import gujjubhaiMobile from '../../optimisedAssets/Upcommingevents/gujjubhai_mobile.webp';
import gujjubhaiTablet from '../../optimisedAssets/gujjubhai_tablet.webp';
import gujjubhaiDesktop from '../../optimisedAssets/gujjubhai_desktop.webp';
import kinjalMobile from '../../optimisedAssets/Upcommingevents/kinjal_mobile.webp';
import kinjalTablet from '../../optimisedAssets/kinjal_tablet.webp';
import kinjalDesktop from '../../optimisedAssets/kinjal_desktop.webp';
import ojasMobile from '../../optimisedAssets/Upcommingevents/ojas_mobile.webp';
import ojasTablet from '../../optimisedAssets/ojas_tablet.webp';
import ojasDesktop from '../../optimisedAssets/ojas_desktop.webp';
import rashmidesaiMobile from '../../optimisedAssets/Upcommingevents/rashmidesai_mobile.webp';
import rashmidesaiTablet from '../../optimisedAssets/rashmidesai_tablet.webp';
import rashmidesaiDesktop from '../../optimisedAssets/rashmidesai_desktop.webp';
import superstarMobile from '../../optimisedAssets/superstar_mobile.webp';
import superstarTablet from '../../optimisedAssets/superstar_tablet.webp';
import superstarDesktop from '../../optimisedAssets/superstar_desktop.webp';


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
            imageMobile: geetaMobile,
            imageTablet: geetaTablet,
            imageDesktop: geetaDesktop,
            title: "Geeta Event",
            description: "Join us for an evening of spectacular performances."
        },
        {
            imageMobile: gujjubhaiMobile,
            imageTablet: gujjubhaiTablet,
            imageDesktop: gujjubhaiDesktop,
            title: "Gujjubhai Event",
            description: "Experience the best of traditional comedy and drama."
        },
        {
            imageMobile: kinjalMobile,
            imageTablet: kinjalTablet,
            imageDesktop: kinjalDesktop,
            title: "Kinjal Event",
            description: "A night filled with music and energy."
        },
        {
            imageMobile: ojasMobile,
            imageTablet: ojasTablet,
            imageDesktop: ojasDesktop,
            title: "Ojas Event",
            description: "Captivating performances that will leave you spellbound."
        },
        {
            imageMobile: rashmidesaiMobile,
            imageTablet: rashmidesaiTablet,
            imageDesktop: rashmidesaiDesktop,
            title: "Rashmi Desai Event",
            description: "An exclusive performance by the renowned artist."
        },
        {
            imageMobile: superstarMobile,
            imageTablet: superstarTablet,
            imageDesktop: superstarDesktop,
            title: "Superstar Event",
            description: "The grand finale featuring top-tier entertainment."
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

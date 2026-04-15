import { useEffect, useRef } from "react";
import Artist from "../Artist/Artist";
import Festivalsection from "../Festivalsection/Festivalsection";
import Footer from "../Footer/Footer";
import Highlights from "../Highlights/Highlights";
import Landing from "../Landing/Landing";
import Navbar from "../Navbar/Navbar";
import FloatingCallButton from "../FloatingCallButton/FloatingCallButton";
import SEO from "../SEO/SEO";

function Home() {
    const containerRef = useRef(null);

    useEffect(() => {
        const updateGradient = () => {
            if (!containerRef.current) return;
            
            const scrollPosition = window.scrollY;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercentage = Math.max(0, Math.min(1, scrollPosition / (maxScroll || 1)));

            // Slow down the hue change
            const hueShift = Math.floor(scrollPercentage * 15); // 0 to 15 degrees

            // Set CSS variables instead of React state
            containerRef.current.style.setProperty('--hue-shift', `${hueShift}deg`);
            containerRef.current.style.setProperty('--hue-val', hueShift);
        };

        window.addEventListener('scroll', updateGradient, { passive: true });
        updateGradient(); // Initial call to set the gradient

        return () => {
            window.removeEventListener('scroll', updateGradient);
        };
    }, []);

    return (
        <div 
            ref={containerRef}
            className="home-container"
            style={{ 
                backgroundImage: `
                    linear-gradient(
                        calc(var(--hue-shift, 0deg) * 3),
                        hsl(calc(10 + var(--hue-val, 0)), 70%, 10%) 0%,
                        hsl(calc(15 + var(--hue-val, 0)), 65%, 12%) 20%,
                        hsl(calc(20 + var(--hue-val, 0)), 60%, 15%) 40%,
                        hsl(calc(25 + var(--hue-val, 0)), 55%, 13%) 60%,
                        hsl(calc(20 + var(--hue-val, 0)), 50%, 10%) 80%,
                        hsl(calc(15 + var(--hue-val, 0)), 45%, 8%) 90%,
                        hsl(0, 0%, 5%) 100%
                    )
                `,
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                minHeight: '100vh',
            }}
        >
            <SEO 
                title="Home"
                description="Welcome to Manpasand Inc. - Experience the best of Indian entertainment, cultural events, and artist performances. Your gateway to Indian culture in America since 1999."
                keywords="Indian entertainment, cultural events, Indian artists, stage performances, music events, Gujarati entertainment, Indian community events USA"
                url="/"
            />
            <Navbar />
            <Landing />
            <Festivalsection />
            <Highlights />
            <Artist />
            <Footer />
            <FloatingCallButton />
        </div>
    );
}

export default Home;

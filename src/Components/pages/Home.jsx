import { useEffect, useState } from "react";
import Artist from "../Artist/Artist";
import Festivalsection from "../Festivalsection/Festivalsection";
import Footer from "../Footer/Footer";
import Highlights from "../Highlights/Highlights";
import Landing from "../Landing/Landing";
import Navbar from "../Navbar/Navbar";
import FloatingCallButton from "../FloatingCallButton/FloatingCallButton";
import SEO from "../SEO/SEO";

function Home() {
    const [gradient, setGradient] = useState('');

    useEffect(() => {
        const updateGradient = () => {
            const scrollPosition = window.scrollY;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercentage = scrollPosition / maxScroll;

            // Slow down the hue change
            const hueShift = Math.floor(scrollPercentage * 15); // 0 to 15 degrees

            const newGradient = `
                linear-gradient(
                    ${hueShift * 3}deg,
                    hsl(${10 + hueShift}, 70%, 10%) 0%,
                    hsl(${15 + hueShift}, 65%, 12%) 20%,
                    hsl(${20 + hueShift}, 60%, 15%) 40%,
                    hsl(${25 + hueShift}, 55%, 13%) 60%,
                    hsl(${20 + hueShift}, 50%, 10%) 80%,
                    hsl(${15 + hueShift}, 45%, 8%) 90%,
                    hsl(0, 0%, 5%) 100%
                )
            `;

            setGradient(newGradient);
        };

        window.addEventListener('scroll', updateGradient);
        updateGradient(); // Initial call to set the gradient

        return () => {
            window.removeEventListener('scroll', updateGradient);
            document.body.style.background = '';
        };
    }, []);

    return (
        <div style={{ 
            backgroundImage: gradient,
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            minHeight: '100vh',
        }}>
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

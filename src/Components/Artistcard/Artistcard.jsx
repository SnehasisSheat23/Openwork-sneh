import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { getArtistById } from '../../database.js';

function Artistcard({ img, id, name }) {
    const navigate = useNavigate();
    const cardRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [artist, setArtist] = useState(null);
    function Handler() {
        navigate(`/info/${id}`); // Use id for URL
    }

    useEffect(() => {
        const handleIntersection = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        });

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);

    return (
        <div 
            ref={cardRef}
            className={`h-[360px] w-72 min-w-72 rounded-lg relative mt-3 cursor-pointer bg-black border-none
             transition-all duration-200 ease-in-out
             shadow-md
             md:hover:shadow-xl
             md:overflow-hidden
             snap-start ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
            <div
                className="absolute inset-0 bg-cover bg-center rounded-lg md:hover:scale-110 md:transition-transform md:duration-300"
                style={{ backgroundImage: `url(${img})`, backgroundPosition: 'top' }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-[#1a0e0e]/20 to-[#3d2c2c]/90 rounded-lg"></div>
            </div>

            <div className="relative z-10 top-[67%] w-full px-7">
                <h1 className="text-white font-semibold leading-none text-3xl">{name}</h1>
            </div>

            <div className="absolute z-10 bottom-3 w-full flex justify-left px-7 py-5">
                <button
                    onClick={Handler}
                    className="bg-transparent border border-white text-white text-sm px-4 py-1 rounded-full hover:bg-white hover:text-black transition duration-300"
                >
                    Info
                </button>
            </div>
        </div>
    );
}

export default Artistcard;

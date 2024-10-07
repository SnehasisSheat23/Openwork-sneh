import { FaLocationDot } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useRef } from 'react';

function Card({ name, img, text, place, date, link }) {
    const navigate = useNavigate();
    const cardRef = useRef(null);
    

    function Handler() {
        navigate(`/info/${name}`);
    }

    function Handler2() {
        window.open(link);
    }

    useEffect(() => {
        const handleIntersection = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                    const nextCard = cardRef.current.nextElementSibling;
                    const prevCard = cardRef.current.previousElementSibling;
                    if (nextCard) {
                        nextCard.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
                    } else if (prevCard) {
                        prevCard.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
                    }
                }
            });
        };
        const observer = new IntersectionObserver(handleIntersection, {
            root: null, 
            rootMargin: '0px',
            threshold: 0.5 
        });

        const mediaQuery = window.matchMedia('(max-width: 768px)');
        if (mediaQuery.matches && cardRef.current) {
            observer.observe(cardRef.current);
        }

        if (cardRef.current) {
            observer.unobserve(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, [name]);


    return (
        <>
            <div 
                ref={cardRef} 
                onClick={Handler2} 
                className="h-[360px] w-72 min-w-72 duration-300 rounded-lg relative mt-3 cursor-pointer bg-black border-none shadow-lg 
                 md:hover:scale-105 lg:hover:scale-105"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center rounded-lg"
                    style={{ backgroundImage: `url(${img})`, backgroundPosition: 'top' }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-[#1a0e0e]/20 to-[#3d2c2c]/90 rounded-lg"></div>
                </div>

                <div className="relative z-10 top-[51%] w-full px-6">
                    <h1 className="text-white font-semibold leading-none text-xl">{text}</h1>
                    <p className="text-white text-opacity-75 font-bold mt-3 tracking-tighter text-lg">
                        {date}
                    </p>
                    <div className="flex items-center text-white gap-2">
                        <FaLocationDot size={15} />
                        <p className="text-white text-opacity-75 tracking-tighter text-lg">
                            {place}
                        </p>
                    </div>
                </div>

                <div className="absolute z-10 bottom-3 w-full flex gap-3 px-5">
                    <button onClick={Handler} className="bg-transparent border border-white text-white text-sm px-4 py-1 rounded-full hover:bg-white hover:text-black transition duration-300">
                        Info
                    </button>
                    
                    
                    <button  onClick={Handler2} className="bg-transparent border border-white text-white text-sm px-4 py-1 rounded-full hover:bg-white hover:text-black transition duration-300">
                        Tickets
                    </button>
                </div>
            </div>
        </>
    );
}

export default Card;

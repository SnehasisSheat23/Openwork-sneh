import React, { useEffect, useRef, useState } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function Card({ name, img, text, place, date, link }) {
    const navigate = useNavigate();
    const cardRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    function Handler7() {
        navigate(`/info/${name}`);
    }

    function Handler2() {
        window.open(link);
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
                {/*<div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black rounded-lg"></div> */}
            </div>

            {/*<div className="relative z-10 top-[51%] w-full px-6">
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
                <button onClick={Handler7} 
                className="bg-transparent border border-white text-white text-sm px-4 py-1 rounded-full hover:bg-white hover:text-black transition duration-300">
                    Info
                </button>

                {/*
                <button  onClick={Handler2} className="bg-transparent border border-white text-white text-sm px-4 py-1 rounded-full hover:bg-white hover:text-black transition duration-300">
                    Tickets
                </button>
            </div>*/}
        </div>
    );
}

export default Card;

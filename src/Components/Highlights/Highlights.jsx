import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Highlights.css';

function Highlights({ hueShift = 10 }) {
    const highlightRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('slide-up');
                    }
                });
            },
            { threshold: 0.1 }
        );

        highlightRefs.current.forEach((ref) => {
            if (ref) {
                ref.style.opacity = '0';
                ref.style.transform = 'translateY(50px)';
                ref.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
                observer.observe(ref);
            }
        });

        // Set dynamic CSS variables for gradient
        const root = document.documentElement;
        root.style.setProperty('--hue-angle', `${hueShift * 3}deg`);
        root.style.setProperty('--hue1', `${10 + hueShift}`);
        root.style.setProperty('--hue2', `${15 + hueShift}`);
        root.style.setProperty('--hue3', `${20 + hueShift}`);
        root.style.setProperty('--hue4', `${25 + hueShift}`);
        root.style.setProperty('--hue5', `${20 + hueShift}`);
        root.style.setProperty('--hue6', `${15 + hueShift}`);
        root.style.setProperty('--hue7', `0`);

        return () => {
            highlightRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, [hueShift]);

    return (
        <div className="w-full h-auto flex flex-col bg-transparent py-8">
            <div className="w-full max-w-[1440px] h-[80px] box-border flex justify-between px-6 xl:px-32 lg:px-20 items-center mx-auto">
                <div className="text-white font-bold text-3xl lg:text-4xl">Highlights</div>
                <div className="flex-grow"></div>
                <Link to="/gallery">
                    <div className="h-10 cursor-pointer font-light text-white border-[2px] hover:bg-white hover:text-black border-white flex justify-center items-center w-28 lg:w-32 rounded-3xl transform hover:scale-105 duration-300">
                        <p>Gallery</p>
                    </div>
                </Link>
            </div>

            {/* First Row */}
            <div className="w-full flex flex-col lg:flex-row gap-7 px-6 lg:px-20 items-center lg:justify-center mt-6 cursor-pointer">
                <div className="highlight-bg h-[360px] lg:h-[370px] w-full lg:w-[570px] flex flex-col lg:flex-row rounded-xl hover:scale-105 duration-300 overflow-hidden"
                     ref={(el) => (highlightRefs.current[0] = el)}>
                    <div className="h-1/2 lg:h-full w-full lg:w-2/3 md:overflow-hidden">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFmUAW9KE39wQ9Lz7jlL3anoJoVxSlEoTycw&s"
                             alt=""
                             className="w-full h-full object-cover md:hover:scale-110 md:transition-transform md:duration-300" />
                    </div>
                    <div className="h-1/2 lg:h-full w-full lg:w-1/2 flex flex-col justify-center px-4 lg:px-6">
                        <div className="text-white text-lg lg:text-xl font-bold leading-1">The most hyped Navratri celebrations</div>
                        <div className="text-white tracking-tight leading-5 mt-3">Check out our socials for the details.</div>
                    </div>
                </div>

                <div className="highlight-bg h-[360px] lg:h-[365px] w-full lg:w-72 rounded-2xl shadow-lg hover:scale-105 duration-300 overflow-hidden"
                     ref={(el) => (highlightRefs.current[1] = el)}>
                    <div className="w-full h-full md:hover:scale-110 md:transition-transform md:duration-300 bg-[url('https://cdn.britannica.com/40/147140-050-63A7ED5B/dancing-Garba-festival-Navratri-Ahmadabad-India-Gujarat.jpg')] bg-cover bg-center"></div>
                </div>

                <div className="highlight-bg h-[360px] lg:h-[370px] w-full lg:w-72 rounded-2xl shadow-lg hover:scale-105 duration-300 overflow-hidden"
                     ref={(el) => (highlightRefs.current[2] = el)}>
                    <div className="h-1/2 md:overflow-hidden">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNrc8Uh7LtFYmNZkneeMELQM9U9VryQ-_bIw&s"
                             alt="Release"
                             className="h-full w-full object-cover md:hover:scale-110 md:transition-transform md:duration-300" />
                    </div>
                    <div className="h-1 p-4 text-white">
                        <h3 className="text-lg font-bold">Listen the new release from sunny jadhav</h3>
                        <p className="mt-2 text-sm">Find out the latest song on major music platforms like Spotify, Apple Music, YouTube and many more...</p>
                    </div>
                </div>
            </div>

            {/* Second Row */}
            <div className="w-full flex flex-col lg:flex-row gap-6 px-6 lg:px-20 items-center lg:justify-center mt-9 cursor-pointer">
                <div className="highlight-bg h-[360px] lg:h-[370px] w-full lg:w-72 rounded-2xl shadow-lg hover:scale-105 duration-300 overflow-hidden"
                     ref={(el) => (highlightRefs.current[3] = el)}>
                    <div className="w-full h-full md:hover:scale-110 md:transition-transform md:duration-300 bg-[url('https://i.pinimg.com/736x/a0/c6/94/a0c694ad09050f6df1e946972ebe3115.jpg')] bg-cover bg-center"></div>
                </div>

                <div className="highlight-bg h-[360px] lg:h-[370px] w-full lg:w-[570px] flex flex-col lg:flex-row rounded-2xl shadow-lg hover:scale-105 duration-300 overflow-hidden"
                     ref={(el) => (highlightRefs.current[4] = el)}>
                    <div className="h-1/2 lg:h-full w-full lg:w-2/3 md:overflow-hidden">
                        <img src="https://www.greavesindia.com/wp-content/uploads/2016/07/navratri-festival-e1485258620622.jpeg"
                             alt=""
                             className="w-full h-full object-cover md:hover:scale-110 md:transition-transform md:duration-300" />
                    </div>
                    <div className="h-1/2 lg:h-full w-full lg:w-1/2 flex flex-col justify-center px-4 lg:px-6">
                        <div className="text-white text-lg lg:text-xl font-bold leading-1">Relive this navratri with us</div>
                        <div className="text-white tracking-tight leading-5 mt-3">The most awaited event of the year is here and we are ready to make it memorable for you.</div>
                    </div>
                </div>

                <div className="highlight-bg h-[360px] lg:h-[370px] w-full lg:w-72 rounded-2xl shadow-lg hover:scale-105 duration-300 overflow-hidden"
                     ref={(el) => (highlightRefs.current[5] = el)}>
                    <div className="h-1/2 md:overflow-hidden">
                        <img src="https://english.cdn.zeenews.com/sites/default/files/2024/09/13/1509413-1.png"
                             alt="Tickets"
                             className="h-full w-full object-cover md:hover:scale-110 md:transition-transform md:duration-300" />
                    </div>
                    <div className="h-1 p-4 text-white">
                        <h3 className="text-lg font-bold">Tickets are selling like hot cakes</h3>
                        <p className="mt-2 text-sm">Book tickets from platforms like BookMyShow, Sulekha, Eventbrite for this season’s Navratri...</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Highlights;

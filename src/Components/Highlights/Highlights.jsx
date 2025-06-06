import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Highlights.css';

function Highlights() {
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

        return () => {
            highlightRefs.current.forEach((ref) => {
                if (ref) {
                    observer.unobserve(ref);
                }
            });
        };
    }, []);

    return (
        <>
            {/* Header Section */}
            <div className="w-full h-auto flex flex-col bg-transparent py-8 ">
                <div className="w-full max-w-[1440px] h-[80px] box-border flex justify-between px-6 xl:px-32 lg:px-20 items-center mx-auto">
                    <div className="text-white font-bold text-3xl lg:text-4xl  ">Highlights</div>
                    <div className="flex-grow"></div>
                    <Link to="/gallery">
                        <div className="h-10 cursor-pointer font-light text-white border-[2px] hover:bg-white hover:text-black border-white flex justify-center items-center w-28 lg:w-32 rounded-3xl transform hover:scale-105 duration-300">
                            <p>Gallery</p>
                        </div>
                    </Link>
                </div>

                {/* First Row of Highlights */}
                <div className="w-full flex flex-col lg:flex-row gap-7 px-6 lg:px-20 items-center lg:justify-center mt-6 cursor-pointer">
                    {/* Main Highlight */}
                    <div className="h-[360px] lg:h-[370px] w-full lg:w-[570px] bg-black flex flex-col lg:flex-row rounded-xl hover:scale-105 duration-300 overflow-hidden"
                    ref={(el) => (highlightRefs.current[0] = el)}
                    >
                        <div className="h-1/2 lg:h-full w-full lg:w-2/3 md:overflow-hidden">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFmUAW9KE39wQ9Lz7jlL3anoJoVxSlEoTycw&s"
                                alt=""
                                className="w-full h-full  object-cover md:hover:scale-110 md:transition-transform md:duration-300"
                            />
                        </div>

                        <div className="h-1/2 lg:h-full w-full lg:w-1/2 flex flex-col justify-center ">
                            <div className="text-white px-4 lg:px-6 text-lg lg:text-xl font-bold leading-1">
                                The most hyped Navratri celebrations
                            </div>
                            <div className="text-white px-4 lg:px-6 tracking-tight leading-5 mt-3">
                                Check out our socials for the details.
                            </div>
                        </div>
                    </div>

                    {/* Secondary Highlight - Image Only */}
                    <div className="h-[360px] lg:h-[365px] w-full lg:w-72 bg-black rounded-2xl shadow-lg hover:scale-105 duration-300 overflow-hidden"
                    ref={(el) => (highlightRefs.current[1] = el)}
                    >
                        <div className="w-full h-full md:hover:scale-110 md:transition-transform md:duration-300 bg-[url('https://cdn.britannica.com/40/147140-050-63A7ED5B/dancing-Garba-festival-Navratri-Ahmadabad-India-Gujarat.jpg')] bg-cover bg-center"></div>
                    </div>

                    {/* Secondary Highlight - Image and Text */}
                    <div className="h-[360px] lg:h-[370px] w-full lg:w-72 bg-black rounded-2xl overflow-hidden shadow-lg hover:scale-105 duration-300"
                    ref={(el) => (highlightRefs.current[2] = el)}
                    >
                        <div className="h-1/2 md:overflow-hidden">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNrc8Uh7LtFYmNZkneeMELQM9U9VryQ-_bIw&s"
                                alt="DAB+ Radio"
                                className="h-full w-full object-cover md:hover:scale-110 md:transition-transform md:duration-300"
                            />
                        </div>
                        <div className="h-1 p-4  text-white flex flex-col :justify-center sm:items-center ">
                            <h3 className="text-lg font-bold ">Listen the new release from sunny jadhav</h3>
                            <p className="mt-2 text-sm">
                                Find out the latest song on major music platfrom like spotify, apple music, youtube and many more...
                            </p>
                        </div>
                    </div>
                </div>

                {/* Second Row of Highlights */}
                <div className="w-full flex flex-col lg:flex-row gap-6 px-6 lg:px-20 items-center lg:justify-center mt-9 cursor-pointer">
                    {/* Secondary Highlight - Image Only */}
                    <div className="h-[360px] lg:h-[370px] w-full lg:w-72 bg-black rounded-2xl shadow-lg hover:scale-105 duration-300 overflow-hidden"
                    ref={(el) => (highlightRefs.current[3] = el)}
                    >
                        <div className="w-full h-full md:hover:scale-110 md:transition-transform md:duration-300 bg-[url('https://i.pinimg.com/736x/a0/c6/94/a0c694ad09050f6df1e946972ebe3115.jpg')] bg-cover bg-center"></div>
                    </div>

                    {/* Main Highlight */}
                    <div className="h-[360px] lg:h-[370px] w-full lg:w-[570px] bg-black flex flex-col lg:flex-row rounded-2xl shadow-lg hover:scale-105 duration-300 overflow-hidden"
                    ref={(el) => (highlightRefs.current[4] = el)}
                    >
                        <div className="h-1/2 lg:h-full w-full lg:w-2/3 md:overflow-hidden">
                            <img
                                src="https://www.greavesindia.com/wp-content/uploads/2016/07/navratri-festival-e1485258620622.jpeg"
                                alt=""
                                className="w-full h-full  object-cover md:hover:scale-110 md:transition-transform md:duration-300"
                            />
                        </div>
                        <div className="  h-1/2 lg:h-full w-full lg:w-1/2 flex flex-col justify-center">
                            <div className="text-white px-4 lg:px-6 text-lg lg:text-xl font-bold leading-1">
                                Relive this navratri with us
                            </div>
                            <div className="text-white px-4 lg:px-6 tracking-tight leading-5 mt-3">
                                The most awaited event of the year is here and we are ready to make it memorable for you.
                            </div>
                        </div>
                    </div>

                    {/* Secondary Highlight - Image and Text */}
                    <div className="h-[360px] lg:h-[370px] w-full lg:w-72 bg-black rounded-2xl overflow-hidden shadow-lg hover:scale-105 duration-300"
                    ref={(el) => (highlightRefs.current[5] = el)}
                    >
                        <div className="h-1/2 md:overflow-hidden">
                            <img
                                src="https://english.cdn.zeenews.com/sites/default/files/2024/09/13/1509413-1.png"
                                alt="DAB+ Radio"
                                className="h-full w-full object-cover md:hover:scale-110 md:transition-transform md:duration-300"
                            />
                        </div>
                        <div className="h-1 p-4 text-white ">
                            <h3 className="text-lg font-bold">Tickets are selling like hot cakes</h3>
                            <p className="mt-2 text-sm">
                                Book tickets from major ticketing platforms like bookmyshow, sulekha, eventbrite for this season navratri...
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Highlights;

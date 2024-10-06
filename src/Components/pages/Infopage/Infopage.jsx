import React, { useEffect } from 'react';
import GeetabenRavai from '../../../assets/Artist/Artist1.png'
import PurvaMantri from '../../../assets/InfoPurvaMantri.jpg'
import krinjaldave from '../../../assets/Artist/Artist3.png'
import { useParams } from 'react-router-dom';


const timelineData = [
    {
        title: 'Title of section 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...',
        date: 'Jan 14',
        icon: 'https://www.svgrepo.com/show/530621/cocktail.svg',
    },
    {
        title: 'Title of section 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...',
        date: 'Jan 18',
        icon: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-movie.svg',
    },
    {
        title: 'Title of section 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...',
        date: 'Jan 24',
        icon: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-picture.svg',
    },
    {
        title: 'Title of section 4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...',
        date: 'Feb 14',
        icon: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg',
    },
    {
        title: 'Final Section',
        description: 'This is the content of the last section.',
        date: 'Feb 26',
        icon: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-movie.svg',
    },
];

const Timeline = () => {
    let { artist } = useParams()
    const artistImages = {
        krinjaldave: krinjaldave,
        geetabenravai: GeetabenRavai,
        purvamantri: PurvaMantri,
    }

    const artistImage = artistImages[artist.toLowerCase()] || ''


    useEffect(() => {
        const handleScroll = () => {
            const blocks = document.querySelectorAll('.timeline-block');
            blocks.forEach((block) => {
                const blockTop = block.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (blockTop <= windowHeight * 0.75) {
                    block.classList.add('show');
                }
            });
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);

        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (

        
        <>
            <div className='bg-black'>
                <div className="relative flex justify-centre w-full items-end bg-no-repeat bg-cover bg-center">
                    {/* Fullscreen image with object-contain to prevent cutting */}
                    <img
                        src={artistImage}
                        alt={artist}
                        className="h-[500px] object-cover w-full" // Increased width to 4/5
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                </div>




                <div className="container mx-auto p-8 relative ">


                    <section className="relative">
                        {/* Central vertical timeline line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-1 bg-[#eeaa6b] bg-gradient-to-b from-black via-black/10 to-transparent"></div>

                        {timelineData.map((item, index) => (
                            <div
                                key={index}
                                className={`timeline-block flex items-center mb-8 transition-all duration-700 ease-in-out ${index % 2 === 0 ? 'justify-start' : 'justify-end'
                                    }`}
                            >
                                {/* Icon centered on the vertical line */}
                                <div className="timeline-icon absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                                    <img src={item.icon} alt="Icon" className="w-10 h-10" />
                                </div>

                                {/* Card content */}
                                <div className="w-5/12 p-6 bg-[#ffffff] rounded-3xl lg shadow-md">
                                    <h2 className="text-2xl font-semibold mb-2 text-[#3d2c2c]">{item.title}</h2>
                                    <p className="text-[#534848] mb-4">{item.description}</p>
                                    <div 
                                    className="h-9 cursor-pointer font-light text-[#6d582f] border-[2px] hover:bg-[#6d582f] hover:text-white border-[#6d582f] flex justify-center items-center w-20 sm:w-25 rounded-3xl transform hover:scale-105 duration-300">
                                    <div>Tickets</div>
                                </div>
                                    <span className="block text-sm text-[#241f1f] mt-2">{item.date}</span>
                                </div>

                            </div>
                        ))}
                    </section>
                </div>
            </div>
        </>
    );
};

export default Timeline;

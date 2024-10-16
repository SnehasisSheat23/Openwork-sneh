import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt, FaPlay, FaSpotify, FaMusic, FaDrum, FaGuitar, FaMicrophone } from 'react-icons/fa';



import Footer_only_links from "../../Footer/Footer_only_links";
import Navbar from "../../Navbar/Navbar";
import './Infopage.css';
import { getArtistById, getEventsByArtist } from '../../../../Database/database';

// Component definitions
const SpotifyPlayer = ({ song, name, description }) => (
  <div 
    className="flex flex-col h-full bg-gradient-to-br from-blue-400 to-blue-600 p-4 rounded-xl " 
    onClick={() => window.open(song.spotifyUrl, '_blank')}
  >
    <div className="flex items-center mb-4">
      <img src={song.coverUrl} alt={`${song.album} cover`} className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg shadow-lg mr-4" />
      <div>
        <h3 className="text-lg sm:text-xl font-bold text-white">{song.title}</h3>
        <p className="text-xs sm:text-sm text-white/80">{song.album}</p>
      </div>
    </div>
    <div className="flex-grow">
      <h4 className="text-base sm:text-lg font-semibold text-white mb-2">{name}</h4>
      <p className="text-xs sm:text-sm text-white/90">{description}</p>
    </div>
    <div className="flex items-center justify-between mt-4">
      <div className="flex items-center">
        <FaSpotify className="w-4 h-4 sm:w-5 sm:h-5 text-white mr-2" />
        <p className="text-xs text-white/80">{song.album}</p>
      </div>
      <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full shadow-lg">
        <FaPlay className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500" />
      </div>
    </div>
  </div>
);

const NotificationCard = ({ name, events, className }) => (
  <div className={`bg-gradient-to-br from-purple-500 to-pink-500 p-4 rounded-xl shadow-lg ${className} flex flex-col`}>
    <h3 className="text-lg sm:text-xl font-bold text-white mb-4">{name}</h3>
    <div className="flex-grow overflow-y-auto">
      {events.map((event, index) => (
        <div key={index} className="flex items-center mb-4 bg-white/10 p-3 rounded-lg">
          <event.icon className={`w-6 h-6 mr-3 ${event.color}`} />
          <p className="text-sm text-white">{event.text}</p>
        </div>
      ))}
    </div>
  </div>
);

const CalendarCard = ({ name, description, events, className }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const highlightWithRanges = [
    {
      "react-datepicker__day--highlighted-custom-1": events.map(event => event.date),
    },
  ];

  return (
    <div className={`bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-xl shadow-lg ${className} flex flex-col`}>
      <div className="flex items-center mb-2">
        <FaCalendarAlt className="text-white w-5 h-5 mr-2" />
        <h3 className="text-base sm:text-lg font-bold text-white">{name}</h3>
      </div>
      <p className="text-xs text-white/90 mb-2">{description}</p>
      <div className="flex-grow flex justify-center items-center overflow-hidden">
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          inline
          highlightDates={highlightWithRanges}
          className="custom-datepicker"
          calendarClassName="responsive-calendar"
          dayClassName={date => 
            events.some(event => 
              date.getTime() === event.date.getTime()
            ) ? "highlighted-date" : undefined
          }
          renderCustomHeader={({
            date,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          }) => (
            <div className="custom-header">
              <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                {"<"}
              </button>
              <div className="month-year">
                {date.toLocaleString('default', { month: 'long', year: 'numeric' })}
              </div>
              <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                {">"}
              </button>
            </div>
          )}
        />
      </div>
    </div>
  );
};

const GalleryCard = ({ name, photos, className }) => (
  <div className={`bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-lg ${className} flex flex-col`}>
    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{name}</h3>
    <div className="flex-grow overflow-hidden">
      <div className="h-full grid grid-cols-3 gap-2">
        {photos.slice(0, 9).map((photo) => (
          <div key={photo.id} className="relative overflow-hidden rounded-lg">
            <img 
              src={photo.url} 
              alt={`Gallery image ${photo.id}`}
              className="absolute w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);

const BentoCard = (props) => {
  if (props.type === "spotifyPlayer") {
    return <SpotifyPlayer {...props} />;
  }
  if (props.type === "notification") {
    return <NotificationCard {...props} />;
  }
  if (props.type === "calendar") {
    return <CalendarCard {...props} />;
  }
  if (props.type === "integrations") {
    return <GalleryCard {...props} />;
  }

  const { Icon, name, description, className } = props;
  return (
    <div className={`bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-lg ${className} flex flex-col justify-between relative overflow-hidden`}>
      <div className="relative z-10">
        <Icon className="w-6 h-6 sm:w-8 sm:h-8 mb-4 text-white" />
        <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{name}</h3>
        <p className="text-sm sm:text-base text-gray-300">{description}</p>
      </div>
      <div className="mt-4 relative z-10">
        <button className="text-sm sm:text-base text-white hover:underline">Learn more</button>
      </div>
    </div>
  );
};

const BentoGrid = ({ children }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-0">
    {children}
  </div>
);

// Main Timeline component
const Timeline = () => {
    let { artist } = useParams();
    const [currentDate, setCurrentDate] = useState('');
    const [visibleItems, setVisibleItems] = useState([]);
    
    const timelineRef = useRef(null);
    const scrollbarRef = useRef(null);
    const thumbRef = useRef(null);
    const timelineContainerRef = useRef(null);
    const highlightRefs = useRef([]);

    // Fetch and process artist data
    const artistData = getArtistById(artist);
    const artistEvents = getEventsByArtist(artist);
    const sortedEvents = artistEvents.sort((a, b) => new Date(a.date) - new Date(b.date));
    const groupedEvents = sortedEvents.reduce((acc, event) => {
        const date = event.date;
        if (!acc[date]) {
            acc[date] = [];
        }
        acc[date].push(event);
        return acc;
    }, {});
    const timelineData = Object.entries(groupedEvents).map(([date, events]) => ({
        date,
        events: events.map(event => ({
            title: event.name,
            description: event.place,
            time: `${event.time.start}`,
            isToday: new Date(date).toDateString() === new Date().toDateString(),
            isPast: new Date(date) < new Date(),
            isFuture: new Date(date) > new Date()
        }))
    }));

    const [features, setFeatures] = useState([]);

    useEffect(() => {
        if (artistData) {
            setFeatures([
                {
                    type: "spotifyPlayer",
                    name: "Popular Song",
                    description: "Listen to one of the artist's popular songs on Spotify.",
                    className: "col-span-1 h-[300px]",
                    song: artistData.spotify.popularSongs[0],
                },
                {
                    type: "notification",
                    name: "Latest Events",
                    events: [
                        { icon: FaMusic, text: "New album released!", color: "text-purple-400" },
                        { icon: FaDrum, text: "Drum workshop tomorrow", color: "text-yellow-400" },
                        { icon: FaGuitar, text: "Guitar strings sale!", color: "text-green-400" },
                        { icon: FaMicrophone, text: "Open mic night tonight", color: "text-red-400" },
                    ],
                    className: "col-span-1 sm:col-span-2 h-[300px]",
                },
                {
                    type: "integrations",
                    name: "Gallery",
                    className: "col-span-1 sm:col-span-2 h-[300px]",
                    photos: artistData.instagramImages ? 
                        artistData.instagramImages.slice(0, 6).map((url, index) => ({
                            id: index + 1,
                            url: url
                        })) : 
                        // Fallback to placeholder images if instagramImages is not available
                        [
                            { id: 1, url: 'https://picsum.photos/200/300' },
                            { id: 2, url: 'https://picsum.photos/200/301' },
                            { id: 3, url: 'https://picsum.photos/200/302' },
                            { id: 4, url: 'https://picsum.photos/200/303' },
                            { id: 5, url: 'https://picsum.photos/200/304' },
                            { id: 6, url: 'https://picsum.photos/200/305' },
                        ],
                },
                {
                    type: "calendar",
                    name: "Event Calendar",
                    description: "",
                    className: "col-span-1 h-[300px]",
                    events: [
                        { date: new Date(2023, 1, 15), title: "Music Festival" },
                        { date: new Date(2023, 5, 22), title: "Album Launch" },
                        { date: new Date(2023, 6, 3), title: "Open Mic Night" },
                        { date: new Date(2023, 6, 17), title: "Concert in the Park" },
                    ],
                },
            ]);
        }
    }, [artistData]);

    useEffect(() => {
        const handleScroll = (e) => {
            const { scrollTop, scrollHeight, clientHeight } = timelineRef.current;
            const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;
            const isAtTop = scrollTop === 0;

            // Check if the mouse is over the timeline container
            const rect = timelineContainerRef.current.getBoundingClientRect();
            const isOverTimeline = 
                e.clientX >= rect.left && 
                e.clientX <= rect.right && 
                e.clientY >= rect.top && 
                e.clientY <= rect.bottom;

            if (isOverTimeline) {
                // Prevent default scrolling and scroll the timeline
                e.preventDefault();
                timelineRef.current.scrollTop += e.deltaY;

                // If at the bottom of the timeline and scrolling down, or at the top and scrolling up, allow page scroll
                if ((isAtBottom && e.deltaY > 0) || (isAtTop && e.deltaY < 0)) {
                    window.scrollBy(0, e.deltaY);
                }
            }
            // If not over the timeline, allow normal page scrolling

            updateScrollbarThumb();
        };

        const updateScrollbarThumb = () => {
            const { scrollTop, scrollHeight, clientHeight } = timelineRef.current;
            const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
            const thumbHeight = (clientHeight / scrollHeight) * 100;
            thumbRef.current.style.height = `${thumbHeight}%`;
            thumbRef.current.style.top = `${scrollPercentage}%`;
        };

        const handleScrollbarDrag = (e) => {
            const { top, height } = scrollbarRef.current.getBoundingClientRect();
            const y = Math.max(0, Math.min(e.clientY - top, height));
            const scrollPercentage = y / height;
            timelineRef.current.scrollTop = scrollPercentage * (timelineRef.current.scrollHeight - timelineRef.current.clientHeight);
        };

        // Setup observers and event listeners
        const timelineContainer = timelineRef.current;
        const scrollbarThumb = thumbRef.current;

        if (timelineContainer && scrollbarThumb) {
            // Attach the wheel event listener to the document
            document.addEventListener('wheel', handleScroll, { passive: false });
            timelineContainer.addEventListener('scroll', updateScrollbarThumb);
            scrollbarThumb.addEventListener('mousedown', (e) => {
                e.preventDefault();
                document.addEventListener('mousemove', handleScrollbarDrag);
                document.addEventListener('mouseup', () => {
                    document.removeEventListener('mousemove', handleScrollbarDrag);
                }, { once: true });
            });

            // Initial update of scrollbar thumb
            updateScrollbarThumb();
        }

        const observerOptions = {
            root: timelineRef.current,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                setVisibleItems(prev => {
                    if (entry.isIntersecting) {
                        return [...prev, entry.target.dataset.index];
                    } else {
                        return prev.filter(item => item !== entry.target.dataset.index);
                    }
                });
            });
        }, observerOptions);

        const items = timelineRef.current.querySelectorAll('.timeline-item');
        items.forEach(item => observer.observe(item));

        const highlightObserver = new IntersectionObserver(
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
                highlightObserver.observe(ref);
            }
        });

        // Prevent main scroll when scrolling in timeline
        const preventScroll = (e) => {
            e.stopPropagation();
        };

        const timelineElement = timelineRef.current;
        timelineElement.addEventListener('wheel', preventScroll, { passive: false });

        const updateCurrentDate = () => {
            const { scrollTop } = timelineRef.current;
            const dateElements = timelineRef.current.querySelectorAll('.date-section');
            let currentDateElement = null;

            for (let i = 0; i < dateElements.length; i++) {
                if (dateElements[i].offsetTop > scrollTop) {
                    currentDateElement = dateElements[i === 0 ? 0 : i - 1];
                    break;
                }
            }

            if (currentDateElement) {
                setCurrentDate(currentDateElement.dataset.date);
            }
        };

        timelineRef.current.addEventListener('scroll', updateCurrentDate);

        return () => {
            document.removeEventListener('wheel', handleScroll);
            if (timelineRef.current) {
              timelineRef.current.removeEventListener('scroll', updateScrollbarThumb);
              timelineRef.current.removeEventListener('scroll', updateCurrentDate);
            }
            items.forEach(item => observer.unobserve(item));
            highlightRefs.current.forEach((ref) => {
              if (ref) {
                highlightObserver.unobserve(ref);
              }
            });
            if (timelineElement) {
              timelineElement.removeEventListener('wheel', preventScroll);
            }
        };
    }, []);

    return (
        <>
            <Navbar />
            <div className='min-h-screen'>
                {/* Artist header section */}
                <div className="w-full h-auto min-h-[450px] bg-no-repeat bg-cover bg-center relative overflow-hidden flex flex-col lg:flex-row items-center justify-center lg:justify-between p-8 lg:p-16">
                    {/* Dark live gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-purple-900 to-violet-950 animate-gradient-x"></div>
                    
                    {/* Gradient overlay for smooth transition to black */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
                    
                    {/* Artist image */}
                    <div className="relative z-10 mb-8 lg:mb-0 lg:order-2">
                        <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden border-2 border-white shadow-lg">
                            <img
                                src={artistData.image}
                                alt={artistData.name}
                                className="w-full h-full object-cover transition-all duration-300 ease-in-out transform hover:scale-105"
                            />
                        </div>
                    </div>
                    
                    {/* Artist name and social icons */}
                    <div className="relative z-10 text-center lg:text-left lg:order-1">
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold text-white uppercase tracking-wider mb-4">{artistData.name}</h1>
                        <div className="flex justify-center lg:justify-start space-x-8 mt-4 lg:mt-8 sm:mt-9">
                            <a href={artistData.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="text-white">
                                <i className="fab fa-facebook text-3xl lg:text-4xl sm:text-2xl"></i>
                            </a>
                            <a href={artistData.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="text-white">
                                <i className="fab fa-instagram text-3xl lg:text-4xl sm:text-2xl"></i>
                            </a>
                            <a href={artistData.socialMedia.youtube} target="_blank" rel="noopener noreferrer" className="text-white">
                                <i className="fab fa-youtube text-3xl lg:text-4xl sm:text-2xl"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Main content section */}
                <div className="bg-black w-full relative">
                    <div className="container mx-auto p-4 sm:p-8 relative">
                        <div className="flex flex-col lg:flex-row">
                            {/* Timeline section */}
                            <div className="w-full lg:w-1/3 lg:sticky lg:top-0 lg:h-[calc(80vh-80px)] mb-8 lg:mb-0">
                                <div ref={timelineContainerRef} className="h-[400px] lg:h-full flex flex-col  rounded-lg p-4  ">
                                    {/* Date display card */}
                                    <div className="bg-white/10 backdrop-blur-md text-white p-4 rounded-lg shadow-md mb-4">
                                        <h2 className="text-2xl font-bold">{currentDate}</h2>
                                    </div>

                                    {/* Scrollable timeline */}
                                    <div 
                                        ref={timelineRef}
                                        className="flex-grow overflow-y-auto pr-4 "
                                        style={{
                                            maxHeight: 'calc(100% - 80px)',
                                            overflowY: 'auto',
                                            overflowX: 'hidden',
                                        }}
                                    >
                                        <section className="relative">
                                            <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-300"></div>

                                            {timelineData.map((dateGroup, dateIndex) => (
                                                <div key={dateIndex} className="date-section mb-8" data-date={dateGroup.date}>
                                                    {dateGroup.events.map((item, index) => (
                                                        <div 
                                                            key={index} 
                                                            className={`relative mb-8 flex items-center timeline-item transition-opacity duration-500 ${visibleItems.includes(`${dateIndex}-${index}`) ? 'opacity-100' : 'opacity-0'}`}
                                                            data-index={`${dateIndex}-${index}`}
                                                        >
                                                            <div className="absolute left-4 w-4 h-4 bg-white border-2 border-gray-300 rounded-full z-10 transform -translate-x-1/2"></div>
                                                            
                                                            <div className="ml-12 bg-white/10 backdrop-blur-md text-white p-4 rounded-lg shadow-md w-full">
                                                                <span className="text-sm text-green-400 mb-1 block">
                                                                    {item.isToday ? 'Today' : item.isPast ? 'Previously' : 'Upcoming'}
                                                                </span>
                                                                <h2 className="text-xl font-semibold mb-1">{item.title}</h2>
                                                                <p className="text-sm mb-1">{item.description}</p>
                                                                <span className="text-sm">{item.time}</span>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            ))}
                                        </section>
                                    </div>

                                    {/* Custom scrollbar */}
                                    <div 
                                        ref={scrollbarRef}
                                        className="absolute right-0 top-0 w-2 bg-transparent lg:bg-gray-300 rounded"
                                        style={{ top: '80px', height: 'calc(100% - 80px)' }}
                                    >
                                        <div 
                                            ref={thumbRef}
                                            className="w-full bg-transparent lg:bg-gray-600 rounded"
                                            style={{ cursor: 'pointer' }}
                                        ></div>
                                    </div>
                                </div>
                            </div>

                            {/* Bento Grid Highlights section */}
                            <div className="w-full lg:w-2/3 lg:ml-8">
                                <div className="flex justify-between items-center mb-6 px-4 sm:px-0">
                                    <h2 className="text-2xl sm:text-3xl font-bold text-white">Highlights</h2>
                                    <Link to="/gallery">
                                        <div className="h-8 sm:h-10 cursor-pointer font-light text-white border-2 hover:bg-white hover:text-black border-white flex justify-center items-center w-24 sm:w-28 lg:w-32 rounded-3xl transform hover:scale-105 duration-300">
                                            <p className="text-sm sm:text-base">Gallery</p>
                                        </div>
                                    </Link>
                                </div>
                                <BentoGrid>
                                    {features.map((feature, idx) => (
                                        <BentoCard key={idx} {...feature} />
                                    ))}
                                </BentoGrid>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-black">
                <Footer_only_links/>
            </div>
        </>
    );
};

export default Timeline;

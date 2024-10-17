import React, { useRef, useEffect, useState, useMemo } from 'react';
import Footer_only_links from "../../Footer/Footer_only_links";
import Navbar from "../../Navbar/Navbar";
import { events } from '../../../../Database/database';

// aesthetic color generator
const generateRandomColor = () => {
  const hue = Math.floor(Math.random() * 360);
  const saturation = 70 + Math.random() * 10; // 70-80%
  const lightness = 80 + Math.random() * 10; // 80-90%
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};

// Function to get day name from date
const getDayName = (dateString) => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const date = new Date(dateString);
  return days[date.getDay()];
};

const EventCalendar = () => {
  const [eventColors, setEventColors] = useState({});

  // generate the color after the component mounts
  useEffect(() => {
    const colors = {};
    events.forEach(event => {
      colors[event.id] = generateRandomColor();
    });
    setEventColors(colors);
  }, []);

  // position of card based on start time
  const calculateEventPosition = (start) => {
    const startHour = parseInt(start.split(':')[0]);
    const startMinute = parseInt(start.split(':')[1]);
    return (startHour - 9) * 60 + startMinute; // 9 AM is the start of our calendar
  };

  // Updated function to filter and sort events
  const filterAndSortEvents = (events) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set to start of day for accurate comparison
    
    return events
      .filter(event => new Date(event.date) >= today)
      .sort((a, b) => new Date(a.date) - new Date(b.date));
  };

  //  events from database
  const processedDays = useMemo(() => {
    const filteredAndSortedEvents = filterAndSortEvents(events);
    return filteredAndSortedEvents.reduce((acc, event) => {
      const date = new Date(event.date);
      const dayIndex = date.getDate();
      const monthIndex = date.getMonth();
      const year = date.getFullYear();
      const dayKey = `${year}-${monthIndex + 1}-${dayIndex}`;
      const dayName = getDayName(event.date);
      
      if (!acc[dayKey]) {
        acc[dayKey] = { date: dayIndex, day: dayName, events: [] };
      }

      acc[dayKey].events.push({
        id: event.id,
        title: event.name,
        time: event.time.start,
        position: calculateEventPosition(event.time.start),
      });

      return acc;
    }, {});
  }, []);

  const days = Object.values(processedDays);

  const timeMarkers = ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM'];
  const containerRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const [opacities, setOpacities] = useState(days.map(() => 0));

  useEffect(() => {
    const container = containerRef.current;
    let scrollTimeout;

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
        const cardWidth = 260; // Adjust this if your card width changes
        const currentScrollPosition = container.scrollLeft;
        const nearestCardIndex = Math.round(currentScrollPosition / cardWidth);
        const targetScrollPosition = nearestCardIndex * cardWidth;

        // Calculate how far we've scrolled into the current card
        const scrollIntoCard = (currentScrollPosition % cardWidth) / cardWidth;

        // Threshold for snapping
        const threshold = 0.3;  

        if (Math.abs(scrollIntoCard - 0.5) > threshold) {
          container.scrollTo({
            left: targetScrollPosition,
            behavior: 'smooth'
          });
        }

        setLastScrollPosition(currentScrollPosition);
      }, 150); 
    };

    const handleIntersection = (entries) => {
      const newOpacities = [...opacities];
      entries.forEach(entry => {
        const index = parseInt(entry.target.dataset.index);
        newOpacities[index] = entry.intersectionRatio > 0.3 ? 1 : entry.intersectionRatio;
      });
      setOpacities(newOpacities);
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: container,
      rootMargin: '0px',
      threshold: [0, 0.3, 0.6, 1]
    });

    const setupListeners = () => {
      container.addEventListener('scroll', handleScroll);
      container.querySelectorAll('.day-card').forEach((card, index) => {
        card.dataset.index = index;
        observer.observe(card);
      });
    };

    const removeListeners = () => {
      container.removeEventListener('scroll', handleScroll);
      container.querySelectorAll('.day-card').forEach(card => {
        observer.unobserve(card);
      });
    };

    setupListeners();

    return () => {
      removeListeners();
      clearTimeout(scrollTimeout);
    };
  }, [lastScrollPosition, opacities]);

  return (
    <div className="bg-[#3d2c2c]">
      <Navbar/>
      <div className="min-h-screen w-full">
        {/* Hero Section */}
        <div
          className="relative flex justify-center items-end h-[25vh] sm:h-[20vh] md:h-[30vh] lg:h-[40vh] w-full bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url("https://images.hindustantimes.com/img/2022/09/26/1600x900/20220924-KPT-SK-MN-54-0_1664180820199_1664180820199_1664180981399_1664180981399.JPG")` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
          <div className="relative flex flex-col items-center text-center gap-2 sm:gap-4 px-4 pb-4 sm:pb-6">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
              Calendar
            </h1>
            <div className="text-white font-light tracking-tight text-xs sm:text-sm md:text-lg lg:text-xl">
              <p>Check out your upcoming events and schedule.</p>
            </div>
          </div>
        </div>

        {/* Calendar Content */}
        <div className="p-8 bg-gradient-to-b from-black via-[#1a0e0e] to-[#3d2c2c]">
          <div className="grid gap-4 grid-cols-[auto_1fr]">
            <div className="grid grid-rows-[repeat(10,60px)] pt-[60px]">
              {timeMarkers.map((time, index) => (
                <div key={index} className="h-[60px] text-white flex items-center">{time}</div>
              ))}
            </div>
            <div ref={containerRef} className="overflow-x-auto snap-x snap-mandatory">
              <div className="inline-flex space-x-4 pb-4">
                {days.map((day, dayIndex) => (
                  <div 
                    key={dayIndex} 
                    className="day-card flex-shrink-0 snap-start bg-transparent rounded-lg overflow-hidden" 
                    style={{ 
                      width: '260px', 
                      opacity: opacities[dayIndex], 
                      transition: 'opacity 0.15s ease-out'
                    }}
                  >
                    <div className="flex gap-4 h-[60px] text-white p-4 bg-transparent">
                      <p className="text-3xl font-semibold">{day.date}</p>
                      <p className="text-3xl font-thin">{day.day}</p>
                    </div>
                    <div className="relative h-[600px] bg-[#c59999]/30 rounded-lg overflow-hidden p-2">
                      {day.events.map((event, eventIndex) => (
                        <div 
                          key={event.id} 
                          className={`rounded p-2 m-1 ${event.start} overflow-hidden`}
                          style={{ 
                            backgroundColor: eventColors[event.id],
                            height: '80px',
                            top: `${event.position}px`,
                            left: `${(eventIndex % 3) * 4}px`, // Offset events with same time
                            right: `${((2 - (eventIndex % 3)) * 4) + 4}px`, // Adjust width for offset
                          }}
                        >
                          <p className="font-semibold text-xs truncate">{event.title}</p>
                          <p className="mt-1 text-xs ">{event.time}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer_only_links/>
    </div>
  );
};

export default EventCalendar;

import React, { useRef, useEffect, useState } from 'react';
import Footer_only_links from "../../Footer/Footer_only_links";
import Navbar from "../../Navbar/Navbar";

const EventCalendar = () => {
  const days = [
    { date: 9, day: 'Mon', events: [{ title: 'Securities Regulation', time: '2 PM - 5 PM', start: 'start-2', end: 'end-5', class: 'bg-green-100' }] },
    { date: 10, day: 'Tues', events: [
      { title: 'Corporate Finance', time: '10 AM - 12 PM', start: 'start-10', end: 'end-12', class: 'bg-red-100' },
      { title: 'Entertainment Law', time: '1PM - 4PM', start: 'start-1', end: 'end-4', class: 'bg-yellow-100' }
    ]},
    { date: 11, day: 'Wed', events: [
      { title: 'Writing Seminar', time: '11 AM - 12 PM', start: 'start-12', end: 'end-1', class: 'bg-blue-100' },
      { title: 'Securities Regulation', time: '2 PM - 5 PM', start: 'start-2', end: 'end-5', class: 'bg-green-100' }
    ]},
    { date: 12, day: 'Thurs', events: [
      { title: 'Corporate Finance', time: '10 AM - 12 PM', start: 'start-10', end: 'end-12', class: 'bg-red-100' },
      { title: 'Entertainment Law', time: '1PM - 4PM', start: 'start-1', end: 'end-4', class: 'bg-yellow-100' }
    ]},
    { date: 13, day: 'Fri', events: [] },
  ];

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
        const threshold = 0.3;  // Snap when 30% into next/previous card

        if (Math.abs(scrollIntoCard - 0.5) > threshold) {
          container.scrollTo({
            left: targetScrollPosition,
            behavior: 'smooth'
          });
        }

        setLastScrollPosition(currentScrollPosition);
      }, 150); // Adjust this delay as needed
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
                    <div className="grid grid-rows-[repeat(10,60px)] bg-[#c59999]/30 rounded-lg overflow-hidden p-2">
                      {day.events.map((event, eventIndex) => (
                        <div 
                          key={eventIndex} 
                          className={`border border-[#c59999] rounded p-2 ${event.class} ${event.start} ${event.end} overflow-hidden`}
                        >
                          <p className="font-semibold mb-1 text-sm truncate">{event.title}</p>
                          <p className="text-xs">{event.time}</p>
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

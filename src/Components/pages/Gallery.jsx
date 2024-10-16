import { useState, useEffect } from 'react';
import Footer_only_links from "../Footer/Footer_only_links";
import Navbar from "../Navbar/Navbar";
import { artists } from '../../../Database/database';

// Function to get random items from an array
const getRandomItems = (array, count) => {
  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Collect all Instagram images from all artists
const allInstagramImages = artists.flatMap(artist => 
  artist.instagramImages.map(url => ({ id: Math.random(), url, artist: artist.name }))
);

// Select 12 random images
const photos = getRandomItems(allInstagramImages, 12);

const PhotoGallery = () => {
  const [visiblePhotos, setVisiblePhotos] = useState([]);

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisiblePhotos((prevVisiblePhotos) => [
            ...prevVisiblePhotos,
            entry.target.id,
          ]);
        }
      });
    }, { threshold: 0.1 }); // Reduced threshold for earlier animation trigger

    const elements = document.querySelectorAll('.photo-container');
    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#3d2c2c]">
      <Navbar />
      <div
                className="relative flex justify-center items-end h-[30vh] sm:h-[25vh] md:h-[40vh] lg:h-[50vh] w-full bg-no-repeat bg-cover bg-center"
                style={{ backgroundImage: `url("https://images.hindustantimes.com/img/2022/09/26/1600x900/20220924-KPT-SK-MN-54-0_1664180820199_1664180820199_1664180981399_1664180981399.JPG")` }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

                <div className="relative flex  flex-col items-center text-center gap-4 px-4 py-10 ">
                    <h1 className="text-white mt-28 text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
                        Gallery
                    </h1>
                    <div className="text-white font-light tracking-tight text-xs sm:text-sm md:text-lg lg:text-xl ">
                        <p>Check Out the experiences we provide.</p>
                        
                    </div>
                    <div className="mt-8"> 
   
</div>



                </div>
            </div>
      <div className="bg-gradient-to-b from-black via-[#1a0e0e] to-[#3d2c2c] ">
    <div className="max-w-7xl mx-auto p-4 ">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo) => (
          <div
            key={photo.id}
            id={photo.id.toString()}
            className={`photo-container aspect-square rounded-xl shadow-lg overflow-hidden transition-all duration-500 ease-out ${
              visiblePhotos.includes(photo.id.toString())
                ? 'opacity-100 transform translate-y-0'
                : 'opacity-0 transform translate-y-16'
            }`}
          >
            <img
              src={photo.url}
              alt={`Photo by ${photo.artist}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
    </div>
    <Footer_only_links/>
    </div>
  );
};

export default PhotoGallery;

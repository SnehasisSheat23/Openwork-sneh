import { useState, useEffect } from 'react';
import Footer_only_links from "../Footer/Footer_only_links";
import Navbar from "../Navbar/Navbar";


const photos = [
  { id: 1, url: 'https://picsum.photos/200/300' },
  { id: 2, url: 'https://picsum.photos/200/301' },
  { id: 3, url: 'https://picsum.photos/200/302' },
  { id: 4, url: 'https://picsum.photos/200/303' },
  { id: 5, url: 'https://picsum.photos/200/304' },
  { id: 6, url: 'https://picsum.photos/200/305' },
  { id: 7, url: 'https://picsum.photos/200/306' },
  { id: 8, url: 'https://picsum.photos/200/307' },
  { id: 9, url: 'https://picsum.photos/200/308' },
  { id: 10, url: 'https://picsum.photos/200/309' },
  { id: 11, url: 'https://picsum.photos/200/310' },
  { id: 12, url: 'https://picsum.photos/200/311' },
];

const PhotoGallery = () => {
  const [visiblePhotos, setVisiblePhotos] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisiblePhotos((prevVisiblePhotos) => [
            ...prevVisiblePhotos,
            entry.target.id,
          ]);
        }
      });
    }, { threshold: 0.5 });

    const elements = document.querySelectorAll('.photo-container');
    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <>
    <Navbar />
      <div
                className="relative flex justify-center items-end h-[50vh] w-full bg-no-repeat bg-cover bg-center"
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
    <div className="  bg-gradient-to-b from-black via-[#1a0e0e] to-[#3d2c2c] ">
    <div className="max-w-7xl mx-auto p-4 ">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo) => (
          <div
            key={photo.id}
            id={photo.id.toString()}
            className={`photo-container aspect-square rounded-xl shadow-lg overflow-hidden ${
              visiblePhotos.includes(photo.id.toString())
                ? 'animate-fade-in'
                : 'opacity-0'
            }`}
          >
            <img
              src={photo.url}
              alt={`Photo ${photo.id}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
    </div>
    <Footer_only_links/>
    </>
  );
};

export default PhotoGallery;
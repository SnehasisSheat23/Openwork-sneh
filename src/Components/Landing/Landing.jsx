function Landing() {
    return (
        <>
            <div
                className="relative flex justify-center items-end h-[90vh] w-full bg-no-repeat bg-cover"
                style={{ backgroundImage: `url("https://s3.india.com/travel/wp-content/uploads/2015/10/navratri-111.jpg")` }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

                <div className="relative flex  flex-col items-center text-center gap-4 px-4">
                    <h1 className="text-white mt-28 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
                        Navratri Tour 2024
                    </h1>
                    <div className="text-white font-light tracking-tight text-xs sm:text-sm md:text-lg lg:text-xl">
                        <p>Prepare for a new adventure and secure your tickets now.</p>
                        <p>Tomorrowland Brasil - October 11 - 13, 2024.</p>
                    </div>
                    <div className="h-10  cursor-pointer font-light text-white border-[2px] hover:bg-white hover:text-black border-white flex justify-center items-center w-28 sm:w-32 rounded-3xl mb-20 transform hover:scale-105 duration-300">
                        <div>Timetable</div>
                    </div>



                </div>
            </div>
        </>
    );
}

export default Landing;

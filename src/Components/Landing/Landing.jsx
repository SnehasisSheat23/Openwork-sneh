function Landing() {
    return (
        <>
            <div
                className="relative flex justify-center items-end h-[90vh] w-full bg-no-repeat bg-cover"
                style={{ backgroundImage: `url("https://images.hindustantimes.com/img/2022/09/26/1600x900/20220924-KPT-SK-MN-54-0_1664180820199_1664180820199_1664180981399_1664180981399.JPG")` }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

                <div className="relative flex  flex-col items-center text-center gap-4 px-4 py-10">
                    <h1 className="text-white mt-28 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
                        Navratri Tour 2024
                    </h1>
                    <div className="text-white font-light tracking-tight text-xs sm:text-sm md:text-lg lg:text-xl ">
                        <p>Prepare for a new new Garba experience secure your tickets now.</p>
                        <p>Garba event Chicago - October 11 - 13, 2024.</p>
                    </div>
                    <div className="mt-8"> {/* Adjust this margin for desired spacing */}
    <div className="h-10 cursor-pointer font-light text-white border-[2px] hover:bg-white hover:text-black border-white flex justify-center items-center w-28 sm:w-32 rounded-3xl mb-20 transform hover:scale-105 duration-300">
        <div>Timetable</div>
    </div>
</div>



                </div>
            </div>
        </>
    );
}

export default Landing;

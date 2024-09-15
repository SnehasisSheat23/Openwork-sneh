function Landing() {
    return (
        <>
            <div
                className={`relative flex justify-center items-end h-[90vh] w-full bg-no-repeat bg-center`}
                style={{ backgroundImage: `url("https://prismic-assets-cdn.tomorrowland.com/ZuBGURoQrfVKl6sB_2024-09-10at14.36.32.jpeg?crop=1600%2C889%2C0%2C56&width=1800&height=1000")`, backgroundSize: '100vw 100vh' }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

                <div className='absolute flex flex-col items-center gap-5 mb-20'>
                    <div>
                        {
                            ["Tomorrowland Brasil"].map((v, i) => (
                                <h1 key={i} className='text-white text-6xl font-extrabold text-center'>{v}</h1>
                            ))
                        }
                    </div>
                    <div className='text-white font-semibold tracking-tighter text-xl text-center'>
                    
                        <p> Prepare for a new adventure and secure your tickets now.</p>
                        <p>Tomorrowland Brasil - October 11 - 13, 2024.</p>
                    </div>
                    <div className='h-8 text-[12px] cursor-pointer font-semibold text-white border-[2px] box-border border-white flex justify-center items-center w-32 rounded-2xl'>
                        TIMETABLE
                    </div>
                </div>
            </div>
        </>
    )
}

export default Landing;

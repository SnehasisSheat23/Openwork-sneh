function Highlights() {
    return (
        <>
            <div className="w-full h-auto flex flex-col bg-[#3d2c2c] py-8">
                <div className="w-full h-[80px] box-border flex justify-between px-6 xl:px-36 lg:px-20 items-center">
                    <div className="text-white text-3xl lg:text-5xl">Highlights</div>
                    <div className="h-[40px] cursor-pointer w-40 lg:w-52 bg-[#09187e] rounded-2xl flex justify-center items-center text-white tracking-tighter text-sm lg:text-base">
                        VISIT ONE WORLD RADIO
                    </div>
                </div>


                {/* section 1 */}
                <div className="w-full flex flex-col lg:flex-row gap-6 px-6 lg:px-20 items-center lg:justify-center mt-6 cursor-pointer">
                    <div className="h-[320px] lg:h-[370px] w-full lg:w-[570px] bg-black flex flex-col lg:flex-row rounded-2xl hover:scale-105 duration-300">
                        <div className="h-1/2 lg:h-full w-full lg:w-1/2">
                            <img
                                src="https://prismic-assets-cdn.tomorrowland.com/ZtgSFbzzk9ZrW88D_IMAGEALT.png?crop=750%2C1000%2C375%2C0&width=600&height=800"
                                alt=""
                                className="w-full h-full rounded-2xl"
                            />
                        </div>
                        <div className="h-1/2 lg:h-full w-full lg:w-1/2 flex flex-col justify-center">
                            <div className="text-white px-4 lg:px-6 text-lg lg:text-xl font-bold leading-1">
                                Relive the summer Anthems Top 100
                            </div>
                            <div className="text-white px-4 lg:px-6 tracking-tight leading-5 mt-3">
                                The most defining tracks of your festival summer.
                            </div>
                        </div>
                    </div>

                    <div className="h-[300px] lg:h-[350px] w-full lg:w-72 bg-black rounded-2xl bg-[url('https://prismic-assets-cdn.tomorrowland.com/ZfG0EEmNsf2sHjRV_TimmyTrumpet!.png?crop=2048%2C1536%2C0%2C256&width=1440&height=1080')] bg-cover bg-center hover:scale-105 duration-300"></div>

                    <div className="h-[300px] lg:h-[350px] w-full lg:w-72 bg-black rounded-lg overflow-hidden shadow-lg hover:scale-105 duration-300">
                        <div className="h-1/2">
                            <img
                                src="https://prismic-assets-cdn.tomorrowland.com/ZfL5YrTwE6aM1Jp3_cae4a20a-8d25-4535-afa8-191704ff1ad7_220717%2B-%2B190021%2B-%2BTML2022%2B-%2BIMGR6485%2B-%2BTC.jpg?crop=4000%2C2133%2C0%2C267&width=600&height=320"
                                alt="DAB+ Radio"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="h-1/2 p-4 text-white">
                            <h3 className="text-lg font-bold">Listen on DAB+ and FM from your country</h3>
                            <p className="mt-2 text-sm">
                                Find out how you can tune in to Tomorrowland's radio station. One World Radio is on DAB+ and FM in Belgium, The Netherlands...
                            </p>
                        </div>
                    </div>
                </div>


                {/* section 2 */}
                <div className="w-full flex flex-col lg:flex-row gap-6 px-6 lg:px-20 items-center lg:justify-center mt-6 cursor-pointer">
                    <div className="h-[300px] lg:h-[350px] w-full lg:w-72 bg-black rounded-2xl bg-[url('https://prismic-assets-cdn.tomorrowland.com/ZfG0EEmNsf2sHjRV_TimmyTrumpet!.png?crop=2048%2C1536%2C0%2C256&width=1440&height=1080')] bg-cover bg-center hover:scale-105 duration-300"></div>

                    <div className="h-[320px] lg:h-[370px] w-full lg:w-[570px] bg-black flex flex-col lg:flex-row rounded-2xl hover:scale-105 duration-300">
                        <div className="h-1/2 lg:h-full w-full lg:w-1/2">
                            <img
                                src="https://prismic-assets-cdn.tomorrowland.com/ZtgSFbzzk9ZrW88D_IMAGEALT.png?crop=750%2C1000%2C375%2C0&width=600&height=800"
                                alt=""
                                className="w-full h-full rounded-2xl"
                            />
                        </div>
                        <div className="h-1/2 lg:h-full w-full lg:w-1/2 flex flex-col justify-center">
                            <div className="text-white px-4 lg:px-6 text-lg lg:text-xl font-bold leading-1">
                                Relive the summer Anthems Top 100
                            </div>
                            <div className="text-white px-4 lg:px-6 tracking-tight leading-5 mt-3">
                                The most defining tracks of your festival summer.
                            </div>
                        </div>
                    </div>

                    <div className="h-[300px] lg:h-[350px] w-full lg:w-72 bg-black rounded-lg overflow-hidden shadow-lg hover:scale-105 duration-300">
                        <div className="h-1/2">
                            <img
                                src="https://prismic-assets-cdn.tomorrowland.com/ZfL5YrTwE6aM1Jp3_cae4a20a-8d25-4535-afa8-191704ff1ad7_220717%2B-%2B190021%2B-%2BTML2022%2B-%2BIMGR6485%2B-%2BTC.jpg?crop=4000%2C2133%2C0%2C267&width=600&height=320"
                                alt="DAB+ Radio"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="h-1/2 p-4 text-white">
                            <h3 className="text-lg font-bold">Listen on DAB+ and FM from your country</h3>
                            <p className="mt-2 text-sm">
                                Find out how you can tune in to Tomorrowland's radio station. One World Radio is on DAB+ and FM in Belgium, The Netherlands...
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Highlights;

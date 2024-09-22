import { FaLocationDot } from "react-icons/fa6";

function Card({ img, text }) {
    return (
        <>
            <div className="h-[360px] w-72 min-w-72 hover:scale-105 duration-300 rounded-lg relative mt-3 cursor-pointer bg-black border-none shadow-lg">

                <div
                    className="absolute inset-0 bg-cover bg-center rounded-lg"
                    style={{ backgroundImage: `url(${img})` }}
                >

                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-[#1a0e0e]/20 to-[#3d2c2c]/90 rounded-lg"></div>
                </div>

                <div className="relative z-10 top-[55%] w-full px-6">
                    <h1 className="text-white font-semibold leading-none text-xl">{text}</h1>
                    <p className="text-white text-opacity-75 font-bold mt-3 tracking-tighter text-lg">
                        Wednesdays Summer 2024
                    </p>
                    <div className="flex items-center text-white gap-2">
                        <FaLocationDot size={15} />
                        <p className="text-white text-opacity-75 tracking-tighter text-lg">
                            Ibiza, Spain
                        </p>
                    </div>
                </div>

                <div className="absolute z-10 bottom-3 w-full flex gap-3 px-5">
                    <button className="bg-transparent border border-white text-white text-sm px-4 py-1 rounded-full hover:bg-white hover:text-black transition duration-300">
                        Info
                    </button>
                    <button className="bg-transparent border border-white text-white text-sm px-4 py-1 rounded-full hover:bg-white hover:text-black transition duration-300">
                        Tickets
                    </button>
                </div>
            </div>
        </>
    );
}

export default Card;

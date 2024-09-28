import { useNavigate } from "react-router-dom";

function Artistcard({ img, name, description }) {
    const navigate = useNavigate();

    function Handler() {
        navigate(`/info/${name}`);
    }

    return (
        <>
            <div className="h-[360px] w-72 min-w-72 hover:scale-105 duration-300 rounded-lg relative mt-3 cursor-pointer bg-black border-none shadow-lg">
                <div
                    className="absolute inset-0 bg-cover bg-center rounded-lg"
                    style={{ backgroundImage: `url(${img})`, backgroundPosition: 'top' }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-[#1a0e0e]/20 to-[#3d2c2c]/90 rounded-lg"></div>
                </div>

                <div className="relative z-10 top-[67%] w-full px-7">
                    <h1 className="text-white font-semibold leading-none text-3xl">{description}</h1>
                </div>

                <div className="absolute z-10 bottom-3 w-full flex justify-left px-7 py-5">
                    <button
                        onClick={Handler}
                        className="bg-transparent border border-white text-white text-sm px-4 py-1 rounded-full hover:bg-white hover:text-black transition duration-300"
                    >
                        Info
                    </button>
                </div>
            </div>
        </>
    );
}

export default Artistcard;

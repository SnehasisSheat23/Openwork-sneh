import krinjaldave from '../../assets/Artist/Artist1.png'
import GeetabenRavai from '../../assets/Artist/Artist2.png'
import PurvaMantri from '../../assets/Artist/Artist3.png'
import Artistcard from '../Artistcard/Artistcard'
import Card from '../Card/Card'

function Artist() {
    return (
        <>
            <div className="relative  w-full bg-[#3d2c2c]">
                <div className="w-full flex justify-center text-white">
                    <h1 className="text-white font-bold text-2xl md:text-3xl text-center md:text-left w-full md:w-auto">Our Artists</h1>
                </div>



                <div className="w-full h-[480px] px-10 lg:px-48 md:px-10 sm:px-1 flex box-border lg:justify-center items-center">
                    <div className="w-full h-[400px] flex gap-3 overflow-x-auto">
                        <div className="flex-shrink-0">
                            <Artistcard img={krinjaldave} name={"krinjaldave"} />
                        </div>
                        <div className="flex-shrink-0">
                            <Artistcard img={GeetabenRavai} name={"GeetabenRavai"} />
                        </div>
                        <div className="flex-shrink-0">
                            <Artistcard img={PurvaMantri} name={"PurvaMantri"} />
                        </div>
                    </div>
                </div>



            </div>
        </>
    )
}

export default Artist
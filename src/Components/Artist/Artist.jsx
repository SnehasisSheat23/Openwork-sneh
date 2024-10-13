import GeetabenRavai from '../../assets/Artist/Artist1.png'
import PurvaMantri from '../../assets/Artist/Artist2.png'
import  krinjaldave from '../../assets/Artist/Artist3.png'
import Artistcard from '../Artistcard/Artistcard'
import Card from '../Card/Card'

function Artist() {
    return (
        <>
            <div className="relative  w-full  bg-transparent">
                <div className="w-full flex justify-center text-white">
                    <h1 className="text-white font-bold text-3xl md:text-4xl text-center md:text-left w-full md:w-auto pt-8">Our Artists</h1>
                </div>



                <div className="w-full h-[480px]  px-10 lg:px-48 md:px-10 sm:px-1 flex box-border lg:justify-center items-center">
                    <div className=" h-[400px] flex gap-3 px-3 overflow-x-auto">
                        
                    <Artistcard img={krinjaldave} name={"krinjaldave"} description={"Kinjal Dave"} delay={0} />
                        <Artistcard img={GeetabenRavai} name={"GeetabenRavai"} description={"Geeta Ravai"} delay={200} />
                        <Artistcard img={PurvaMantri} name={"PurvaMantri"} description={"Purva Mantri"} delay={400} />
                    </div>
                </div>



            </div>
        </>
    )
}

export default Artist
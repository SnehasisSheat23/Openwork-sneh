import { useParams } from "react-router-dom"

function Infopage(){
    const { artist } = useParams()
    return (
        <>
            <div className="bg-black text-white h-screen w-full">
                {artist}
            </div>
        </>
    )
}

export default Infopage
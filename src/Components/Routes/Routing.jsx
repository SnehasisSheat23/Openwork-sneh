import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Timeline from "../pages/Infopage/Infopage"
import { FcAbout } from "react-icons/fc"
import About from "../pages/About/About"
import Gallery from "../pages/Gallery"


function Routing(){
    return (
        <>
            <Routes>
                <Route path="/"  element={<Home/>}></Route>
                <Route path="/info/:artist" element={<Timeline/>}></Route>
                <Route path="/About" element={<About/>}></Route>
                <Route path="/Gallery" element={<Gallery/>}></Route>
                
            </Routes>
        </>
    )
}

export default Routing
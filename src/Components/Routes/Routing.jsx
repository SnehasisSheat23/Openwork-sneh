import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Infopage from "../pages/Infopage"


function Routing(){
    return (
        <>
            <Routes>
                <Route path="/"  element={<Home/>}></Route>
                <Route path="/info/:artist" element={<Infopage/>}></Route>
                
            </Routes>
        </>
    )
}

export default Routing
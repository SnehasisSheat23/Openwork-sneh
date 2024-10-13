import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Timeline from "../pages/Infopage/Infopage"
import { FcAbout } from "react-icons/fc"
import About from "../pages/About/About"
import Gallery from "../pages/Gallery"
import Calendar from "../pages/Calendar/Calendar"
import ContactUs from "../pages/ContactUs"
import FAQ from "../pages/FAQ"
import PrivatePolicies from "../pages/Privatepolicies/Privatepolicies"
import TermOfService from "../pages/termofservice"
import Cookies from "../pages/Cookies"


function Routing(){
    return (
        <>
            <Routes>
                <Route path="/"  element={<Home/>}></Route>
                <Route path="/info/:artist" element={<Timeline/>}></Route>
                <Route path="/About" element={<About/>}></Route>
                <Route path="/Gallery" element={<Gallery/>}></Route>
                <Route path="/Calendar" element={<Calendar/>}></Route>
                <Route path="/ContactUs" element={<ContactUs/>}></Route>
                <Route path="/FAQ" element={<FAQ/>}></Route>
                <Route path="/PrivatePolicies" element={<PrivatePolicies/>}></Route>
                <Route path="/TermOfService" element={<TermOfService/>}></Route>
                <Route path="/Cookies" element={<Cookies/>}></Route>
            </Routes>
        </>
    )
}

export default Routing
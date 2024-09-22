import Festivalsection from "./Components/Festivalsection/Festivalsection"
import Landing from "./Components/Landing/Landing"
import Navbar from "./Components/Navbar/Navbar"
import LocomotiveScroll from 'locomotive-scroll';
import './App.css'
import Highlights from "./Components/Highlights/Highlights";
import Footer from "./Components/Footer/Footer";
import Routing from "./Components/Routes/Routing";

function App(){
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <Routing/>
    </>
  )
}

export default App
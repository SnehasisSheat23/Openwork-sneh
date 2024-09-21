import Festivalsection from "./Components/Festivalsection/Festivalsection"
import Landing from "./Components/Landing/Landing"
import Navbar from "./Components/Navbar/Navbar"
import LocomotiveScroll from 'locomotive-scroll';
import './App.css'
import Highlights from "./Components/Highlights/Highlights";
import Footer from "./Components/Footer/Footer";

function App(){
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <Navbar/>
      <Landing/>
      <Festivalsection/>
      <Highlights/>
      <Footer/>
    </>
  )
}

export default App
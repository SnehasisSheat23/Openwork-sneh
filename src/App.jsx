import Festivalsection from "./Components/Festivalsection/Festivalsection"
import Landing from "./Components/Landing/Landing"
import Navbar from "./Components/Navbar/Navbar"
import LocomotiveScroll from 'locomotive-scroll';
import './App.css'

function App(){
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <Navbar/>
      <Landing/>
      <Festivalsection/>
    </>
  )
}

export default App
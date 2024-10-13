
import LocomotiveScroll from 'locomotive-scroll';
import './App.css'
import React from 'react';
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
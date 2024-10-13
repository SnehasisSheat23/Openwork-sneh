import LocomotiveScroll from 'locomotive-scroll';
import './App.css'
import React from 'react';
import Routing from "./Components/Routes/Routing";
import Favicon from 'react-favicon';

function App(){
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <Favicon url="/image.svg" />
      <Routing/>
    </>
  )
}

export default App

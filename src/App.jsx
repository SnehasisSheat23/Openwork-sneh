import LocomotiveScroll from 'locomotive-scroll';
import './App.css'
import React, { useEffect } from 'react';
import Routing from "./Components/Routes/Routing";
import Favicon from 'react-favicon';

function App() {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, []);

  return (
    <>
      <Favicon url="/image.svg" />
      <Routing />
    </>
  );
}

export default App

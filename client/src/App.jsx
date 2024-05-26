import React from 'react';
import { Outlet } from "react-router-dom";
import ContentBar from "./components/ContentBar";
import Footer from './components/Footer';
import useDeviceDetect from './components/useDeviceDetect';
import ContentBarMobile from './components/ContentBarMobile';

function App() {
  const {isMobile} = useDeviceDetect()
  return (<>
    {isMobile ? <ContentBarMobile/> : <ContentBar/>}
    <Outlet/>
    <Footer/>
  </>);
} 
export default App
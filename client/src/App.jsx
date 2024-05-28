import React from 'react';
import { Outlet } from "react-router-dom";
import ContentBar from "./components/ContentBar";
import useDeviceDetect from './components/useDeviceDetect';
import ContentBarMobile from './components/ContentBarMobile';
import FooterTest from './components/FooterTest';

function App() {
  const {isMobile} = useDeviceDetect()
  return (<div style={{height: '100vh', display: 'flex', flexDirection:"column", justifyContent: 'space-between', alignContent: 'center'}}>
    {isMobile ? <ContentBarMobile/> : <ContentBar/>}
    <Outlet/>
    <FooterTest/></div>);
} 
export default App
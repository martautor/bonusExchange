import React from 'react';
import { Outlet } from "react-router-dom";
import ContentBar from "./components/ContentBar";
import Footer from './components/Footer';
function App() {
  return (<>
    <ContentBar/>
    <Outlet/>
    <Footer/>
  </>);
} 
export default App
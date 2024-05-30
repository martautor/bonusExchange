import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import how from '../img/how.png'
import useDeviceDetect from "../components/useDeviceDetect";
export default function About() {
    const {isMobile} = useDeviceDetect()
    return (<div 
        style={{display: 'flex', flexWrap: 'nowrap', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems: 'center', height: '100vh'}}>
            <img src={how} style={{position: 'relative', height: isMobile ? '30vh': '100vh', border: isMobile ? '1px solid': '5px solid', marginBottom: 15, marginTop: 15, borderRadius: 20}} alt='how'/>
            <Link to='/' style={{color:'green', marginBottom: 15}} ><Button variant="outlined" color='success'> На главную </Button></Link>
        </div>)
}
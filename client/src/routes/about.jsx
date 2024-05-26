import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import how from '../img/how.png'
export default function About() {
    return (<div 
        style={{display: 'flex', flexWrap: 'nowrap', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems: 'center', height: '100vh'}}>
            <img src={how} style={{position: 'relative', height: '100vh', width: '130vh', border: '5px solid', marginBottom: 15, marginTop: 15, borderRadius: 20}} alt='how'/>
            <Link to='/' style={{color:'green', marginBottom: 15}} ><Button variant="outlined" color='success'> На главную </Button></Link>
        </div>)
}
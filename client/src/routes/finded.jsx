/* eslint-disable jsx-a11y/iframe-has-title */
import { Box, Button } from '@mui/material';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import InfoField from '../components/infoField';
import { brown } from '@mui/material/colors';
import Form from '../components/Form';
const Finded = () => {
    const data = useLoaderData()
    function render(data) {
        console.log(data.searchers[0].card == null)
        if (data.searchers[0].card == null) {
            return <Form data={data.searchers[0]}/>
        } else {
            return <InfoField data={data.searchers[0]}/>
        }
    }
    
    return (<div 
    style={{display: 'flex', flexDirection: 'column', alignContent: 'center', alignItems: 'center'}}>
        {render(data)}
        <Box sx={{mt: 5}}>
        <Link to='/' style={{marginTop: 50, marginRight: 15}}><Button size='large' style={{backgroundColor:brown[400]}} variant='contained'> Назад </Button></Link>
        <a href='https://pm26.ru' style={{ marginTop: 25}}><Button size='large' style={{backgroundColor:brown[800]}} variant="contained" color='success'> На главную </Button></a>
        </Box>
        
    </div>)
}
export default Finded;
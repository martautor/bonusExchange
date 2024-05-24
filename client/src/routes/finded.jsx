/* eslint-disable jsx-a11y/iframe-has-title */
import { Button } from '@mui/material';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import InfoField from '../components/infoField';
const Finded = () => {
    const data = useLoaderData()
    function render(data) {
        console.log(data.searchers[0].card == null)
        if (data.searchers[0].card == null) {
            return (<div>
                <h3>Ваша карта не найдена в системе BonusMoney</h3>
                <h2>Пожалуйста заполните форму:</h2>
                <script src="https://forms.yandex.ru/_static/embed.js"></script>
                <iframe src="https://forms.yandex.ru/u/66503737d0468866632bd2f4/?iframe=1" style={{width:500, height:350, border: 0}} name="ya-form-66503737d0468866632bd2f4" ></iframe>
                </div>)
        } else {
            return <InfoField data={data.searchers[0]}/>
        }
    }
    
    return (<div style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems: 'center', height: '100vh', marginTop: -50}}>
        {render(data)}
        <Link to='/' style={{color:'green'}}><Button variant="outlined" color='success'> На главную </Button></Link>

    </div>)
}
export default Finded;
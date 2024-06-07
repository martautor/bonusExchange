/* eslint-disable jsx-a11y/iframe-has-title */
import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import InfoField from '../components/infoField';
import { brown } from '@mui/material/colors';
import Form from '../components/Form';
const Finded = () => {
    const navigate = useNavigate()
    const [comment, setComment] = useState('')
    const [open, setOpen] = useState(false)
    const data = useLoaderData()
    const handleChange = (e) => {
        setComment(e.target.value)
        console.log(comment)
    }
    const handleOpen = (e) => {
        e.preventDefault()
        setOpen(!open)
    }
    const handleClick = async (e) => {
        e.preventDefault()
        console.log(data.searchers[0].card.cardNumber)
        await fetch(`${process.env.REACT_APP_SERVER_HOST}/api/postComments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                card: data.searchers[0].card.cardNumber,
                number: data.searchers[0].customer.login,
                comment: comment
            })
        })
        alert('Мы обязательно просмотрим ваш комментарий, и при необходимости свяжемся с вами!')
        navigate('/')
    }
    
    function render(data) {
        console.log(data.searchers[0].card == null)
        if (data.searchers[0].card == null) {
            return <Form data={data.searchers[0]}/>
        } else {
            return (<>
            <InfoField data={data.searchers[0]}/>
            <Button onClick={handleOpen} variant='contained' color='inherit'>
                <Typography variant='span' sx={{fontSize: '12px'}}> Неверная информация? </Typography>
            </Button>
            </>)
        }
    }
    
    return (<div 
    style={{display: 'flex', flexDirection: 'column', alignContent: 'center', alignItems: 'center'}}>
        {render(data)}
        {open && (<>
        <Typography variant='p'> Пожалуйста укажите какую информацию надо поменять.</Typography>
        <TextField
          sx={{width: '16vw', mt: 1}}
          onChange={handleChange}
          id="outlined-multiline-static"
          label="Комментарий"
          multiline
          value={comment}
          color='grey'
          rows={5}
        />
        <br/>
        <Button onClick={handleClick} variant='contained' color='inherit'>
                <Typography variant='span' sx={{fontSize: '12px'}}> Отправить </Typography>
        </Button>
        </>)
        }
        <Box sx={{mt: 5}}>
        <Link to='/' style={{marginTop: 50, marginRight: 15}}><Button size='large' style={{backgroundColor:brown[400]}} variant='contained'> Назад </Button></Link>
        <a href='https://pm26.ru' style={{ marginTop: 25}}><Button size='large' style={{backgroundColor:brown[800]}} variant="contained" color='success'> На главную </Button></a>
        </Box>
        
    </div>)
}
export default Finded;
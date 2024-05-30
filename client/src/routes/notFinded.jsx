import { Link } from 'react-router-dom'
import { Box, Button, Typography } from '@mui/material'
import { brown } from '@mui/material/colors'
// import { Link } from '@mui/material'


export default function notFinded() {
    return (<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', justifyContent: 'center', margin: 0, padding: 0}}>
        <Box sx={{m: 2, textAlign: 'center'}}>
        <Typography variant='h6' letterSpacing={-1}>
        Похоже ваш номер телефона не зарегистрирован в системе лояльности BonusMoney.
        </Typography>
        <Typography variant='h6' letterSpacing={-1} mt={2}>
        Скачайте приложение на телефон, и зарегистрируйтесь:
        </Typography>
        </Box>
        <a href='https://pm26.ru' style={{ marginTop: 25}}><Button size='large' style={{backgroundColor:brown[800]}} variant="contained" color='success'> Как скачать? </Button></a>
        <Link to='/' style={{ marginTop: 50}}><Button size='large' style={{backgroundColor:brown[400]}} variant='contained'> Назад </Button></Link>
    </div>)
}
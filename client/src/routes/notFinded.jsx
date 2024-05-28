import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import { brown } from '@mui/material/colors'
// import { Link } from '@mui/material'


export default function notFinded() {
    return (<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', justifyContent: 'center', margin: 0, padding: 0}}>
        <h3>Похоже ваш номер телефона не зарегистрирован в системе лояльности BonusMoney.</h3>
        <h4>Скачайте приложение на телефон, и зарегистрируйтесь:</h4>
        <a href='https://pm26.ru' style={{ marginTop: 25}}><Button size='large' style={{backgroundColor:brown[800]}} variant="contained" color='success'> Как скачать? </Button></a>
        <Link to='/' style={{ marginTop: 50}}><Button size='large' style={{backgroundColor:brown[400]}} variant='contained'> Назад </Button></Link>
    </div>)
}
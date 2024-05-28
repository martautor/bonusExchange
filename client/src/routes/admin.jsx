import React, { useState } from 'react';
import { Container, Paper, TextField, Button, ThemeProvider, createTheme } from '@mui/material';
import sendAdminData from '../functions/sendAdminData';
// import Form from '../components/Form';
import AdminBar from '../components/adminPanel/AdminBar';
import AdminFooter from '../components/adminPanel/AdminFooter';
import AdminContent from '../components/adminPanel/AdminContent';
// Создаем тему с коричневым цветом
const theme = createTheme({
  palette: {
    primary: {
      main: '#795548', // коричневый цвет
    },
  },
});

// Стили для компонентов


  
// Компонент страницы входа
const AdminLogin = ({submit, change}) => {

  return (
    <ThemeProvider theme={theme}>
      <Container sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
      textAlign: 'center',
      height: '100vh',}}>
        <Paper elevation={10} sx={{padding: 2,maxWidth: 400}}>
            <form onSubmit={submit}>
          <TextField name='login' sx={{marginBottom: 2}} onChange={change} label="Логин" variant="outlined" fullWidth required/>
          <TextField name='pass' sx={{marginBottom: 2}} onChange={change} label="Пароль" variant="outlined" type="password" fullWidth required/>
          <Button type='submit' variant="contained" sx={{backgroundColor: '#795548', color: '#fff'}}>
            Login
          </Button>
          </form>
        </Paper>
      </Container>
    </ThemeProvider>
  )
};

const Admin = () => {
    const [logged, setLogged] = useState(parseInt(localStorage.getItem('logged')) || 0)
    const [status, setStatus] = useState({user: localStorage.getItem('user')} ||{})
    const [data, setData] = useState({
        login: '',
        pass: ''
    })

    function handleChange(e) {
        const {name, value} = e.target
        setData({
          ...data,
          [name]: value
        })
    }
    async function handleSubmit(e) {
        e.preventDefault()
        setStatus(await sendAdminData(data))
        console.log(status)
        if(status.code === 1) {
            setLogged(1)
            localStorage.setItem('logged', 1)
            localStorage.setItem('user', status.user)
            console.log('Успешно')
        } else {
            localStorage.setItem('logged', 1)
            localStorage.setItem('user', null)
            alert('Неправильно введены данные.')
        }
    }
    return (<>
    {logged === 0 ?<AdminLogin submit={handleSubmit} change={handleChange}/> : <AdminPanel data={status}/>}
    </>)
}

const AdminPanel = (props) => {
    return (<div style={{height: '100vh', display: 'flex', flexDirection:"column", justifyContent: 'space-between', alignContent: 'center'}}>
    <AdminBar/>
    <AdminContent data={props.data}/>
    <AdminFooter/>
    </div>)
}

export default Admin;
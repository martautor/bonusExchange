import { Box, Button, Paper, Typography } from "@mui/material"
import '@fontsource/roboto/400.css';
import { blueGrey, brown } from "@mui/material/colors";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import app from '../img/app.png'
import screen from '../img/screen.jpg'
let theme = {
    color: blueGrey[900],
    textAlign: 'center'
}

export default function Home() {
    return(<div 
    style={{ display: "flex", flexDirection: 'column', borderTop: 5}}>
        <Paper elevation={6} sx={{ alignContent: 'center', width: '100%', height: 65, backgroundColor: brown[100]}}>
            <Typography variant="h5" sx={theme}>
                Новая система лояльности!
            </Typography>
        </Paper>
        <Box sx={{backgroundColor: brown[1], textAlign: 'center'}}>
        <Typography variant="h3" mt= '20px' mb='20px'>ПивМаркет <CloseIcon/> BonusMoney</Typography>
        </Box>
        <Paper elevation={6} sx={{display: 'flex', flexDirection: 'column', width: '100%', height: 'auto', backgroundColor: 'white'}}>
            <Typography variant="h4" sx={{textAlign: 'center'}}>
                Карта <ArrowForwardIcon sx={{position: 'relative', width: 25, mt: 5}}/> Приложение
                <hr style={{width: 400}}/>
            </Typography>
            <Typography variant="h5" sx={{textAlign: 'left', ml: 15}}>
                <br/>
                У Вас еще остались бонусы? 
                <br/>
                Мы бережно сохраним их и перенесем в новую систему лояльности.
                Для этого мы разработали специальный сервис переноса!
                <br/>
                Ничего не будет потеряно!
                <br/>
                Пожалуйста, следуйте инструкции:
            </Typography>
            <br/>
            <Typography variant="h5" sx={{textAlign: 'left', ml: 15}}>
                1. Скачайте приложение перейдя по одной из двух ссылок:
                <br/>
                <a href="https://play.google.com/store/apps/details?id=ru.mobint.pivmarket1&pcampaignid=web_share" target="_blank" rel="noreferrer">Android</a> или <a href="https://apps.apple.com/ru/app/%D0%BF%D0%B8%D0%B2%D0%BC%D0%B0%D1%80%D0%BA%D0%B5%D1%82-1/id6473837140" target="_blank" rel="noreferrer">IOS</a>
                <br/>
                <img src={app} style={{height: 200}} alt="app"/>
            </Typography>
            <br/>
            <Typography variant="h5" sx={{textAlign: 'left', ml: 15}}>
                2. Выполните регистрацию в приложении.
                <br/>
                <img src={screen} style={{height: 500, borderRadius: 25, marginLeft: 30, marginTop: 10}} alt="app"/>
            </Typography>
            <Typography variant="h5" sx={{textAlign: 'left', ml: 15, mt: 5}}>
                3. Вернитесь на сайт, и перейдите на страницу проверки, нажав на кнопку "Перенести" либо ознакомьтесь с подробной <Link to='/card/how'>инструкцией</Link> о том, где их найти.
                <br/>
            </Typography>
            
            <Box sx={{textAlign: 'center', mb: 15}}>
            <Link to='card'><Button variant="contained" style={{backgroundColor: brown[300]}}>Перенести</Button></Link>
            </Box>
        </Paper>
    </div>)
}
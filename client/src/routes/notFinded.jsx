import google from '../img/google.png'
import appstore from '../img/appstore.png'
import qrcodeGP from '../img/qr-codeGP.gif'
import qrcodeAS from '../img/qr-codeAS.gif'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
// import { Link } from '@mui/material'


export default function notFinded() {
    return (<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', height: '74.9vh', justifyContent: 'center', marginTop: 0, padding: 0}}>
        <h3>Похоже ваш номер телефона не зарегистрирован в системе лояльности BonusMoney.</h3>
        <h2>Скачайте приложение на телефон, и зарегистрируйтесь:</h2>
        <div style={{display: 'flex'}}>
            <div style={{display: 'grid', justifyItems: 'center'}}>
                <img src={qrcodeGP} style={{width: 180, height: 180}} alt="google_qr-code" />
                <a href="https://play.google.com/store/apps/details?id=ru.mobint.pivmarket1&pcampaignid=web_share" target="_blank" rel="noreferrer"><img src={google} style={{width: 150, height: 49}} alt='google'/></a>
            </div>
            <div style={{display: 'grid', justifyItems: 'center'}}>
                <img src={qrcodeAS} alt='appstore_qr-code'/>
                <a href="https://apps.apple.com/ru/app/%D0%BF%D0%B8%D0%B2%D0%BC%D0%B0%D1%80%D0%BA%D0%B5%D1%82-1/id6473837140" target="_blank" rel="noreferrer"><img src={appstore} style={{width: 150, height: 50}} alt='appstore'/></a>
            </div>
        </div>
        <Link to='/' style={{color:'green', marginTop: 50}}><Button variant="outlined" color='success'> На главную </Button></Link>
    </div>)
}

const https = require("https");
const express = require('express')
const multer = require('multer');
const path = require('path')
const fs = require('fs');
var cors = require('cors');
const app = express()
require('dotenv').config()

app.use(cors())

app.get('/api/findData', async function (req, res) {
    let status = 404
    let msg = undefined
    console.log(req.query.phone)
    await findData(req.query.phone)
        // .then(res => console.log(res))
        // .then(response => response.json())
        .then(response => res.json(response))
})

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const json = JSON.stringify(req.body)
        const dName = req.body.card
    // const date = Date.now()
    fs.mkdir(path.join(__dirname + '/upload/', String(dName)),
      (err) => {
          if (err) {
            if (err.message.startsWith('EEXIST')) {
                return console.error('[Ошибка] Файл уже существует');
            }
          } else {
            fs.writeFileSync(`upload/${dName}/data.json`, json)
          }
          console.log('Directory created successfully!');
      })
    cb(null, `upload/${dName}`);
    },
    filename: function (req, file, cb) {
        cb(null, 'card.png')
    }
  });

const upload = multer({ storage: storage })

app.post('/api/checkData', upload.single('file'), function (req, res, next) {
    const data = req.body
    console.log('data: ',JSON.stringify(data))
    res.json('Файл успешно загружен');
  });
// app.post('/api/checkFieldData', upload.none(), function (req, res, next) {
//     const data = req.body
//     console.log('data: ',JSON.stringify(data))
//     res.send('Файл успешно загружен');
// })

app.use(express.json())
app.post('/api/admin', (req, res) => {
    const jsonData = req.body
    console.log(jsonData.login, jsonData.pass)
    if(jsonData.login === 'admin' && jsonData.pass === '357864') {
        res.status(200)
        res.json({
            code: 1,
            message: 'Ok',
            user: 'Admin'
        })
    } else {
        res.status(403)
        res.json({
            code: 0,
            message: 'Неправильные авторизационные данные.'
        })
    }
    
})
async function findData(clientData) {
    console.log(clientData)
    const search = {'search': clientData}
    return await fetch('https://api.bm-app.com/search', {
        method: 'POST',
        headers: {
            'BM-ApiKey': process.env.API_KEY
        },
        body: JSON.stringify(search) 
    })
    .then(res => res.json())
    .then(data => data)
    // .then(async response => {data.status = response.status; data.json = await response.json()})
    // .then(response => data)
}


const PORT = process.env.PORT

// https
//     .createServer(app)
//     .listen(PORT, () => {
//     console.log(`App listen on ${PORT}`)
// })

app.listen(PORT)
console.log(`App listen on ${PORT}`)
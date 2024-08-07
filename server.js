
const https = require("https");
const express = require('express')
const multer = require('multer');
const path = require('path')
const fs = require('fs');
var cors = require('cors');
const getAllFilesFromFolder = require("./getAllFilesFromFolder");
const getDirectories = require("./getDirectories");
const app = express()
require('dotenv').config()

app.use(cors())

app.get('/api/findData', async function (req, res) {
    let status = 404
    let msg = undefined
    await findData(req.query.phone)
        // .then(response => response.json())
        .then(response => res.json(response))
})

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const dName = req.body.card
        fs.mkdirSync(path.join(__dirname + '/upload/', String(dName)),
        (err) => {
            if (err) {
              if (err.message.startsWith('EEXIST')) {
                  return console.error('[Ошибка] Файл уже существует');
              }
            }
            console.log('Directory created successfully!');
        })
    cb(null, __dirname + `/upload/${dName}`); // 11.07
    },
    filename: function (req, file, cb) {
        cb(null, 'card.png')
    }
  });

const upload = multer({ storage: storage })


app.post('/api/checkData', upload.single('file'), function (req, res, next) {
    const json = req.body
    console.log(req.body)
    const dName = req.body.card
    json.completed = !(json.completed === 'true')
    console.log(json.completed)
    // json.comment = (json.comment === 'true')
    // console.log(json)
    fs.writeFileSync(__dirname + `/upload/${dName}/data.json`, JSON.stringify(json)) // 11.07
    // console.log('data: ',JSON.stringify(data))
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
    // console.log(jsonData.login, jsonData.pass)
    if(jsonData.login == 'admin' && jsonData.pass == '357864') {
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
app.use(express.static('upload'))
const corsOptions = {
    origin: 'https://bonus.pm26.ru',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
app.get('/api/getFolders', cors(corsOptions), async (req, res) => {
    const method = req.query.method
    const all = getDirectories(__dirname + '/upload/')
    const trueTasks = []
    const falseTasks = []
    if(all) {
    all.map(card => {
            const fileName = __dirname + '/upload/' + card + '/data.json'
            const file = require(fileName)
            if(file.completed === false) {
                trueTasks.push(file.card)
            } else {
                falseTasks.push(file.card)
            }
        })
    } else {
        res.json({
            message: "Error"
        })
    }
    // console.log(method)
    if(method === undefined || method === null || method === '') {
        res.json({
            ...all
        })
        return
    }
    if(method === 'true') {
        res.json({
            ...trueTasks
        })
        return
    } else {
        res.json({
            ...falseTasks
        })
        return
    }
})
app.get('/api/getCurrentNumber', cors(corsOptions), async (req, res) => {
    const card = req.query.card
    if(card) {
        res.sendFile(__dirname + '/upload/' + card + '/card.png')
    } else {
        res.json({
            message: 'error'
        })
    } 
})
app.get('/api/getUserData', cors(corsOptions), async (req, res) => {
    const card = req.query.card
    if(card) {
        res.sendFile(__dirname + '/upload/' + card + '/data.json')
    } else {
        res.json({
            message: 'error'
        })
    } 
})
app.get('/api/taskState', (req, res, next) => {
    const card = req.query.card
    const fileName = __dirname + '/upload/' + card + '/data.json';
    const file = require(fileName);
    res.json({
        message: card,
        completed: file.completed
    })
})
app.patch('/api/updateTaskState',  cors(corsOptions), (req, res, next) => {
    const card = req.query.card
    const key = req.query.key
    const fileName = __dirname + '/upload/' + card + '/data.json';
    const file = require(fileName);
    file.completed = !file.completed
    console.log(`Карта: ${file.card} из состояния ${file.completed} в ${!(file.completed)}`)
    async function mF() {
        try {
            return await fs.writeFile(fileName, JSON.stringify(file), function writeJSON(err) {
            if (err) return res.json({
                message: err.message
            });
            console.log(JSON.stringify(file))
            console.log('writing to ' + fileName)
            res.status(200)
            return res.json({
                message: 'OK'
            })
        })
        } catch (err) {
            console.log(err);
        }
    }
    mF()
})

app.post('/api/postComments', cors(corsOptions), (req, res, next) => {
    console.log(req.body)
    const fileName = __dirname + '/comments/' + `${req.body.card}.json`
    fs.writeFileSync(fileName, JSON.stringify(req.body), function writeJSON(err) {
        if (err) return res.json({
            message: err.message
        })
        console.log('writing to ' + fileName);
        res.status(200)
    })
    return res.json({
        message: 'OK'
    })
})

app.get('/api/getCommentsFileNames', cors(corsOptions), (req, res, next) => {
    const dataPath = getAllFilesFromFolder(__dirname + '/comments/')
    console.log(dataPath)
    res.json({
        comments: dataPath
    })
})

app.get('/api/getCommentsData', cors(corsOptions), (req, res, next) => {
    const card = req.query.card
    if(card) {
        res.sendFile(__dirname + '/comments/' + card + '.json')
    } else {
        res.json({
            message: 'error'
        })
    } 
})

async function findData(clientData) {
    // console.log(clientData)
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

const options = {
    cert: fs.readFileSync('/etc/letsencrypt/live/bonus.pm26.ru/fullchain.pem'),
    key: fs.readFileSync('/etc/letsencrypt/live/bonus.pm26.ru/privkey.pem')
};

https.createServer(options, app).listen(PORT);

// app.listen(PORT)
console.log(`App listen on ${PORT}`)
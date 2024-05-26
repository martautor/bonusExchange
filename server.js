
const https = require("https");
const express = require('express')
var cors = require('cors')
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
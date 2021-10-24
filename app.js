const express = require('express')
const app = express()
const path = require('path')

const server = app.listen(3000, (req, res) => {
    console.log('Listening on port 3000')
})

app.use(express.static(path.join(__dirname, 'public')))

const io = require('socket.io')(server)

io.on('connection', socket => {
    console.log('Connection made with server')

    socket.on('chat', (message) => {
        console.log(message);
    })
})
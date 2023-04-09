const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)

// since socket accepts an http server object so that is why we have created that one above
const io = socketio(server)

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

io.on('connection', (socket) => {
    console.log("new socket connection")
    socket.emit('countUpdated', "The count has been updated")
    
    socket.on('increment', (data) => {
        console.log(data)
        io.emit('countUpdated', "count ++")
    })
})

server.listen(port, () => {
    console.log(`Server is up on port ${port}!`)
})
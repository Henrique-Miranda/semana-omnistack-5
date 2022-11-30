const express = require('express')
const mongoose = require('mongoose')
//const cors = require('cors')

mongoose.connect('mongodb+srv://omnistack:omnistack5@omnistack5.q2hfk2m.mongodb.net/?retryWrites=true&w=majority')
//mongoose.set('debug', true);
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

app.use((req, res, next) => {
    req.io = io
    return next()
})
//app.use(cors())
app.use(express.json())
app.use(require('./routes'));

server.listen(3000, ()=>{
    console.log('Server running on http://localhost:3000')
})
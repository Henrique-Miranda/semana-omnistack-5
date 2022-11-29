const express = require('express')
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://omnistack:omnistack5@omnistack5.q2hfk2m.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true
})

const app = express()

app.use(express.json())
app.use(require('./routes'));

app.listen(3000, ()=>{
    console.log('Server running on http://localhost:3000')
})
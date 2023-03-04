require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const tttRoutes = require('./routes/ttt-route')
var cors = require('cors')

// express app
const app = express()

app.use(cors())
// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/ttt', tttRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        
    // listen for requests
    app.listen(process.env.PORT, () => {
        console.log('listenint on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })

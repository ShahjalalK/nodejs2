const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const userRouter = require('./routs/user.rout')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(cors())


app.use('/user', userRouter)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

// page not found
app.use((req, res) => {
    res.status(200).json({
        messege : 'Page not found'
    })
})

// server error
app.use((err, req, res, next) => {
    res.status(500).json({
        messege : 'server is error'
    })
})


module.exports = app
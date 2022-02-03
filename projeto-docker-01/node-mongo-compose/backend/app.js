const express = require('express')
const restful = require('node-restful')
const server = express()
const mongoose = restful.mongoose
const bodyParser = require('body-parser')
const cors = require('cors')

// database
mongoose.Promise = global.Promise
mongoose.connect('mongodb://db/mydb')

// middlewares
server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(corsrs())

// ownerDocumentconst
const Client = restful.model('Client', {
    name: { type: String, required: true}
})

// Rest API
Client.methods(['get', 'post', 'put', 'delete'])
Client.updateOptions({new: true, runValidators: true})

//Routes
Client.register(server, '/clients')


// start server 3000
server.listen(3000)


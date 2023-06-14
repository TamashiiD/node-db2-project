const express = require("express")
const server = express()


server.use(express.json())

const carsRouter = require('./cars/cars-router') //this goes under the server

server.use('/api/cars' , carsRouter) //this connects the node server to the express routing system.
// DO YOUR MAGIC
server.use('*', (req, res, next)=>{
next({status: 404, message: 'not found'})
})

module.exports = server

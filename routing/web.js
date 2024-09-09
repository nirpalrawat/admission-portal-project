const express = require('express')
const FrontController = require('../controllers/FrontControllers')
const route = express.Router()

// Routing
route.get('/',FrontController.home)
route.get('/about',FrontController.about)
route.get('/login',FrontController.login)
route.get('/register',FrontController.register)


  module.exports= route
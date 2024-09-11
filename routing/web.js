const express = require('express')
const FrontController = require('../controllers/FrontControllers')
const route = express.Router()

// Routing
route.get('/home',FrontController.home)
route.get('/about',FrontController.about)
route.get('/login',FrontController.login)
route.get('/register',FrontController.register)
route.get('/contact',FrontController.contact)



  module.exports= route
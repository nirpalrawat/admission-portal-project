const express = require('express')
const FrontController = require('../controllers/FrontControllers')
const AdminController = require('../controllers/admin/AdminController')
const route = express.Router()

// Routing
route.get('/home',FrontController.home)
route.get('/about',FrontController.about)
route.get('/',FrontController.login)
route.get('/register',FrontController.register)
route.get('/contact',FrontController.contact)


//insert data
route.post('/insertstudent',FrontController.insertstudent)


//admin
route.get('/admin/dashboard',AdminController.dashboard)
route.get('/admin/studentDisplay',AdminController.studendtDisplay)


  module.exports= route
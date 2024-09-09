const express = require('express')
const app = express()
const port = 3000
const web= require('./routing/web')
const connectDb = require('./db/connectDb')


//ejs a.ejs
app.set('view engine', 'ejs')




connectDb()



//localhost:3000
//routing
app.use('/',web)


//server run
app.listen(port,console.log("server start localhost:3000"))
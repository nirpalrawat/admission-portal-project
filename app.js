const express = require('express')
const app = express()
const port = 3000
const web = require('./routing/web')
const connectDb = require('./db/connectDb')


//ejs a.ejs
app.set('view engine', 'ejs')




connectDb()
// css image link
app.use(express.static('public'))

//parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

//connect flash and sessions
const session = require('express-session')
const flash = require('connect-flash');
//messages
app.use(session({
    secret: 'secret',
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false,
  }));
//Flash messages
app.use(flash());



//localhost:3000
//routing
app.use('/',web)


//server run
app.listen(port,console.log("server start localhost:3000"))
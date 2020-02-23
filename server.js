
require('dotenv').config()

const async = require('async')
const MongoClient = require('mongodb').MongoClient
const url = "mongodb://localhost:27017"
const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')
const session = require("express-session")
const homeRouter = require('./routes/home')
const aboutRouter = require('./routes/about')
const mediaRouter = require('./routes/media')
const contactRouter = require('./routes/contact')
const planRouter = require('./routes/plan')
const trialRouter = require('./routes/trial')
const videoRouter = require('./routes/video')
const loginRouterFunc = require('./routes/login')
const registerRouterFunc = require('./routes/register')
const logoutRouterFunc = require('./routes/logout')

const app = express()

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }))
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

let mySession = { loggedIn: false }

async.auto(
    {
        'mongoConnect': async function () {
            const client = new MongoClient(url, { useNewUrlParser: true })
            await client.connect()

            console.log("Database opened!")
            app.db = client.db('webProject')
            app.dbs = {}
            app.dbs.usersRegistered = app.db.collection("usersRegistered")
            return 1
        },

        'routes': ['mongoConnect', async function () {
            app.use('/home', checkAuthentificated, homeRouter)
            app.use('/about', checkAuthentificated, aboutRouter)
            app.use('/contact', checkAuthentificated, contactRouter)
            app.use('/media', checkAuthentificated, mediaRouter)
            app.use('/plan', checkAuthentificated, planRouter)
            app.use('/trial', checkAuthentificated, trialRouter)
            app.use('/video', checkAuthentificated, videoRouter)
            app.use('/login', checkNotAuthentificated, loginRouterFunc(app, mySession))
            app.use('/register', checkNotAuthentificated, registerRouterFunc(app))
            app.use('/logout', checkAuthentificated, logoutRouterFunc(mySession))

            app.use((req, res) => {
                res.status(404)
                res.render('404.ejs', { style: '404.css',  scriptJs: ''})

            })

            return 1
        }],

        'start': ['routes', function (results, callback) {
            app.listen(3000, () => { console.log('Server started!') })
            return callback(null, 1)
        }]
    },

    function (err, dd) {
        if (err)
            console.log('err: ', err)
    }
)

function checkAuthentificated(req, res, next) {
    if (mySession.loggedIn) {
        return next()
    }
    else
        res.redirect('/login')
}

function checkNotAuthentificated(req, res, next) {
    if (mySession.loggedIn) {
        return res.render('inSession.ejs', { style: 'login.css', scriptJs: '' })
    }
    else
        next()
}

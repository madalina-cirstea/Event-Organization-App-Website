const express = require("express")
const router = express.Router()

module.exports = function (mySession) {
    router.get('/', (req, res) => {
        res.render('logout.ejs', {style: 'login.css',  scriptJs: ''})
    })

    router.post('/', (req, res) => {
        req.session.destroy()
        mySession.loggedIn = false
        res.redirect('/login')
    })
    return router
}



const express = require("express")
const router = express.Router()

module.exports = function (app, mySession) {
    router.get('/', (req, res) => {
        res.render("login.ejs", { title: "Log in here", style: 'login.css', scriptJs: ''})
    })

    router.post('/', async function (req, res) {
        let username = req.body.username
        let password = req.body.password

        if (username && password) {
            let dbUsername = await app.dbs.usersRegistered.findOne({
                'type': 'username',
                'value': username
            })

            if (dbUsername) {
                let dbPassword = await app.dbs.usersRegistered.findOne({
                    'type': 'password',
                    'id': dbUsername.id
                })

                if (dbPassword.value == password) {
                    // valid user authentication
                    mySession.loggedIn = true
                    req.session.username = username
                    res.redirect('/home')
                }
                else {
                    // incorrect password
                    res.render("login.ejs", { title: "Incorrect password", style: 'login.css', scriptJs: ''})
                }
            }
            else {
                // user does not exist
                res.render("login.ejs", { title: "User does not exist", style: 'login.css',  scriptJs: ''})
            }
            res.end()
        } else {
            res.send('Please enter username and password')
            res.end()
        }
    })

    return router
}



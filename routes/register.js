const express = require("express")
const router = express.Router()
const uuidV1 = require('uuid/v1')

module.exports = function (app) {
    router.get('/', (req, res) => {
        res.render("register.ejs", { title: "Register in here", style: 'login.css',  scriptJs: 'register.js'})
    })

    router.post('/', async (req, res) => {
        let username = req.body.username
        let password = req.body.password
        let email = req.body.email

        if (username && password && email) {
            if (await app.dbs.usersRegistered.findOne({
                'type': 'email',
                'value': email
            })) {
                res.render("register.ejs", { title: "email already exists", style: 'login.css',  scriptJs: 'register.js'})
            }
            else {
                if (await app.dbs.usersRegistered.findOne({
                    'type': 'username',
                    'value': username
                })) {
                    res.render("register.ejs", { title: "username already in use", style: 'login.css',  scriptJs: 'register.js'})
                }
                else {
                    let id = uuidV1()

                    await app.dbs.usersRegistered.insertOne({
                        'id': id,
                        'type': 'username',
                        'value': username
                    })

                    await app.dbs.usersRegistered.insertOne({
                        'id': id,
                        'type': 'email',
                        'value': email
                    })

                    await app.dbs.usersRegistered.insertOne({
                        'id': id,
                        'type': 'password',
                        'value': password
                    })

                    res.redirect('/login')
                }
            }
            res.end()
        } else {
            res.send('Please enter username and password')
            res.end()
        }
    })

    return router
}

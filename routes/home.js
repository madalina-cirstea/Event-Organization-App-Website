const express = require("express")
const router = express.Router()

router.get('/', (req, res) => {
    res.render('home.ejs', { style: 'style.css',  scriptJs: ''})
})

router.post('/', (req, res) => {
    res.render('home.ejs', { style: 'style.css',  scriptJs: ''})
})

module.exports = router

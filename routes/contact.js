const express = require("express")
const router = express.Router()

router.get('/', (req, res) => {
    res.render('contact.ejs', { style: 'style.css',  scriptJs: 'contact.js'})
})

module.exports = router

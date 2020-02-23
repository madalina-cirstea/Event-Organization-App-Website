const express = require("express")
const router = express.Router()

router.get('/', (req, res) => {
    res.render('trial.ejs', { style: 'style.css',  scriptJs: ''})
})

module.exports = router

const express = require("express")
const router = express.Router()

router.get('/', (req, res) => {
    res.render('video.ejs', { style: 'style.css',  scriptJs: 'video.js'})
})

module.exports = router

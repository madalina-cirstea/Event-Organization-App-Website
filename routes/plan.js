const express = require("express")
const router = express.Router()

router.get('/', (req, res) => {
    res.render('plan.ejs', { style: 'style.css', scriptJs: 'plan.js' })
})

module.exports = router

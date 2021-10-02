const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {

    res.render('home', req.context)
})

router.get('/blog', (req, res) => {

    res.render('blog', req.context)
})

module.exports = router
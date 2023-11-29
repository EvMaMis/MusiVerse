const Router = require('express')
const router = new Router()
const controller = require("./mainController")

router.get('/login', controller.login)

module.exports = router
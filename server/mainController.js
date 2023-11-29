const path = require("path")

class mainController {
    async sendMainPage(req, res) {
        try {
            res.sendFile(path.join(__dirname, "..", '/client/index.html'))
        } catch (e) {
            console.log(e)
        }
    }
    async login(req, res) {
        try {
            res.sendFile(path.join(__dirname, "..", "/client/login.html"))
        } catch {
            console.log(e)  
        }
    }
}

module.exports = new mainController()
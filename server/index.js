const express = require('express') 
const PORT = process.env.PORT || 5000
const mainRouter = require('./mainRouter')
const path = require('path')

const app = express()

app.use(express.json())
app.use(express.static(path.join(__dirname, "..", "client")))
app.use("/", mainRouter)

const start = async() => {
    try {
        app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))
    } catch(e) {
        console.log(e)
    }
}

start()
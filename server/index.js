const express = require('express') 
const PORT = process.env.PORT || 5000

const app = express()


const start = async() => {
    try {
        app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))
    } catch(e) {
        console.log(e)
    }
}

start()
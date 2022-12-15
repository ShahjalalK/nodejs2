require('dotenv').config()
const app = require('./app')

const PORT = process.env.PORT || 3000
const portName = '127.0.0.1'








app.listen(PORT, portName, () => {
    console.log(`Server is runnign ${portName}:${PORT}`)
})
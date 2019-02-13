const express = require('express')
const bodyParser = require('body-parser')

const port = process.env.PORT || 8080
const app = express()

app.use(bodyParser.json())
app.use(require('./src/routes'))




app.listen(port, () => {
    console.log(`Escutando na porta ${port}`)
})

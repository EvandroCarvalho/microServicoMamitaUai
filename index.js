const express = require('express')
const bodyParser = require('body-parser')
const { consultRestautant, consultUser } = require('./consult')
const { saveData } = require('./saveData')

const port = process.env.PORT || 8080
const app = express()

app.use(bodyParser.json())

app.get('/restaurant',async(request, response, next)  => {
    const result = await consultRestautant()
    response.json(result)
    next()
})

app.get('/users', async(request, response) => {
    const result = await consultUser()
    response.json(result)
})

app.post('/restaurant', async(request, response) => {
    const result = await saveData(request.body)
    if(result){
        response.json({"result" : "sucess"})
    } else {
        response.json({"result" : "error"})
    }
})

app.listen(port, () => {
    console.log(`Escutando na porta ${port}`)
})
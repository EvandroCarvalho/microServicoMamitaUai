const express = require('express')
const bodyParser = require('body-parser')
const { 
    consultRestautant,
    consultUser,
    consultAddress,
    consultItem,
    consultMenu } = require('./consult')
const { 
    saveDataRestaurant,
    saveDataAddress,
    saveDataItem,
    saveDataMenu } = require('./saveData')

const port = process.env.PORT || 8080
const app = express()

app.use(bodyParser.json())

app.get('/users', async(request, response) => {
    const result = await consultUser()
    response.json(result)
})

app.get('/restaurant',async(request, response, next)  => {
    const result = await consultRestautant()
    response.json(result)
    next()
})


app.post('/restaurant', async(request, response) => {
    const result = await saveDataRestaurant(request.body)
    response.json(result)

})

app.get('/address',async(request, response, next)  => {
    const result = await consultAddress()
    response.json(result)
    next()
})


app.post('/address', async(request, response) => {
    const result = await saveDataAddress(request.body)
    response.json(result)

})

app.get('/item',async(request, response, next)  => {
    const result = await consultItem()
    response.json(result)
    next()
})


app.post('/item', async(request, response) => {
    const result = await saveDataItem(request.body)
    response.json(result)

})

app.get('/menu',async(request, response, next)  => {
    const result = await consultMenu()
    response.json(result)
    next()
})


app.post('/menu', async(request, response) => {
    const result = await saveDataMenu(request.body)
    response.json(result)
})


app.listen(port, () => {
    console.log(`Escutando na porta ${port}`)
})
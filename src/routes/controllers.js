const express = require('express')
const bodyParser = require('body-parser')
const { 
    consultRestautant,
    consultUser,
    consultAddress,
    consultItem,
    consultMenu } = require('../services/consult')
const { 
    saveDataRestaurant,
    saveDataAddress,
    saveDataItem,
    saveDataMenu } = require('../services/saveData')

const port = process.env.PORT || 8080
const app = express()

app.use(bodyParser.json())

app.get('/users', async(request, response) => {
    const result = await consultUser()
    response.json(result)
})

app.get('/restaurants',async(request, response, next)  => {
    const result = await consultRestautant()
    response.json(result)
})


app.post('/restaurants', async(request, response) => {
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

app.get('/itens',async(request, response, next)  => {
    const result = await consultItem()
    response.json(result)
    next()
})


app.post('/itens', async(request, response) => {
    const result = await saveDataItem(request.body)
    response.json(result)

})

app.get('/menus',async(request, response, next)  => {
    const result = await consultMenu()
    response.json(result)
    next()
})


app.post('/menus', async(request, response) => {
    const result = await saveDataMenu(request.body)
    response.json(result)
})


app.listen(port, () => {
    console.log(`Escutando na porta ${port}`)
})
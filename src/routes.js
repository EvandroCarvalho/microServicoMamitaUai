const app = require('express')
const ControllersApp = require('./controllers/controllersApp')
const route = app.Router()


route.get('/users', ControllersApp.user )
route.get('/restaurants', ControllersApp.restaurantsStore)
route.post('/restaurants', ControllersApp.restaurantsIndex)
route.get('/address', ControllersApp.addressStore)
route.post('/address',ControllersApp.addressIndex)
route.get('/items',ControllersApp.itensIndex)
route.post('items',ControllersApp.itensStore)
route.get('/menus',ControllersApp.menusStore)
route.post('/menus',ControllersApp.menusIndex)

module.exports = route

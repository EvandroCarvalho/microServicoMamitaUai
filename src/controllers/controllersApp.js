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

module.exports = {

    async user (request, response){
        const result = await consultUser()
        response.json(result)
    },

    async restaurantsStore(request, response, next) {
        const result = await consultRestautant()
        response.json(result)
    },

    async restaurantsIndex(request, response) {
        const result = await saveDataRestaurant(request.body)
        response.json(result)
    },

    async addressStore(request, response, next) {
        const result = await consultAddress()
        response.json(result)
    },


    async addressIndex(request, response) {
        const result = await saveDataAddress(request.body)
        response.json(result)
    },

    async itensStore(request, response, next) {
        const result = await consultItem()
        response.json(result)
    },


    async itensIndex(request, response) {
        const result = await saveDataItem(request.body)
        response.json(result)
    },

    async menusStore(request, response, next) {
        const result = await consultMenu()
        response.json(result)
    },


    async menusIndex(request, response) {
        const result = await saveDataMenu(request.body)
        response.json(result)
    },

}
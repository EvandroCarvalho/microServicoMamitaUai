const firebase = require('firebase')
const auth = require('../config//firebaseConfig.js')


let idRestaurant = 1
const saveDataRestaurant = (restaurant) => firebase.database().ref(`/restaurant/${idRestaurant++}`)
    .set({...restaurant, idRestaurant: idRestaurant - 1})
    .then( snapshot => {
        return {
            resultCode: '0',
            resultMessanger: 'Success'
        }
    })
    .catch(error => error.message)


let idAddress = 1
const saveDataAddress = (restaurant) => firebase.database().ref(`/address/${idAddress++}`)
.set({...restaurant, idAddress: idAddress - 1})
.then( snapshot => {
    return {
        resultCode: '0',
        resultMessanger: 'Success'
    }
})
.catch(error => error.message)


let idItem = 1
const saveDataItem = (restaurant) => firebase.database().ref(`/item/${idItem++}`)
.set({...restaurant, idItem: idItem - 1})
.then( snapshot => {
    return {
        resultCode: '0',
        resultMessanger: 'Success'
    }
})
.catch(error => error.message)


let idMenu = 1
const saveDataMenu = (restaurant) => firebase.database().ref(`/menu/${idMenu++}`)
.set({...restaurant, idMenu: idMenu - 1})
.then( snapshot => {
    return {
        resultCode: '0',
        resultMessanger: 'Success'
    }
})
.catch(error => error.message)


module.exports = {
    saveDataRestaurant,
    saveDataAddress,
    saveDataItem,
    saveDataMenu
}



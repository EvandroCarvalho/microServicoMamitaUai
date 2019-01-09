var firebase = require('firebase')
var configFirebase = require('./firebaseConfig')


const consultUser = () => firebase.database().ref(`/usuarios/`).once('value')
.then(snapshot => {
    const result = Object.keys(snapshot.val())
    console.log(result)
    return result
})
.catch(error => error.message)   

const consultRestautant = () => firebase.database().ref(`/restaurant/`).once('value')
.then(snapshot => {
    let result = snapshot.val()
    if(result && result.length > 0) {
        result = result.filter(item => {
            if(item) {
                return item
            }
        })
    }
    return result || {}
})   
.catch(error => error.message)   

const consultAddress = () => firebase.database().ref(`/address/`).once('value')
.then(snapshot => {
    let result = snapshot.val()
    if(result && result.length > 0) {
        result = result.filter(item => {
            if(item) {
                return item
            }
        })
    }
    return result || {}
})   
.catch(error => error.message)   

const consultItem = () => firebase.database().ref(`/item/`).once('value')
.then(snapshot => {
    let result = snapshot.val()
     if(result && result.length > 0) {
        result = result.filter(item => {
            if(item) {
                return item
            }
        })
    }
    return result || {}
})   
.catch(error => error.message)   

const consultMenu = () => firebase.database().ref(`/menu/`).once('value')
.then(snapshot => {
    let result = snapshot.val()
    if(result && result.length > 0) {
        result = result.filter(item => {
            if(item) {
                return item
            }
        })
    }
    return result || {}
})
.catch(error => error.message)   

module.exports = {
    consultRestautant, 
    consultUser,
    consultAddress,
    consultItem,
    consultMenu
}
const firebase = require('firebase')
const auth = require('./firebaseConfig.js')


const restaurant2 = {
    nome: 'restaurantez',
    endereco: 'Rua cesario alvim',
    numero: 151,
    bairro: 'centro'
}
let id = 1
const saveData = (restaurant) => firebase.database().ref(`/restaurant/${id++}`)
    .set({...restaurant, id: id - 1})
    .then( snapshot => {
        return {
            resultCode: '0',
            resultMessanger: 'Sucesso'
        }
    })
    .catch(error => error.message)


module.exports = {
    saveData
}



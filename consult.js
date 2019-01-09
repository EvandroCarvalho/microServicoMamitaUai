var firebase = require('firebase')
var configFirebase = require('./firebaseConfig')


consultUser = () => firebase.database().ref(`/usuarios/`).once('value')
.then(snapshot => {
    const result = Object.keys(snapshot.val())
    console.log(result)
    return result
})

consultRestautant = () => firebase.database().ref(`/restaurant/`).once('value')
.then(snapshot => {
    let result = snapshot.val()
     if(result.length > 0) {
        result = result.filter(item => {
            if(item) {
                return item
            }
        })
    }
    return result
})   

module.exports = {
    consultRestautant, 
    consultUser
}
const firebase = require('firebase');
const firebaseConfig = require('../config/firebaseConfig')

const user = 'evandrovcjunior@gmail.com'
const senha = 'senha123'
let uid = ''
firebase.auth().signInWithEmailAndPassword(user,senha)
    .then(snapshot => {
        uid =   snapshot.user.uid
    })
     .then(()=> {
        firebase.database().ref(`/usuarios/`).once('value')
        .then(snapshot => {
            const result = Object.keys(snapshot.val())
            console.log(result.includes(uid))
        })    
    })
 .catch(error => console.log(error.message))

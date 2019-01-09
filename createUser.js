var firebase = require('firebase')
const firebaseConfig = require('./firebaseConfig')

const user = 'evandrovcjunior@gmail.com'
const senha = 'senha123'

firebase.auth().createUserWithEmailAndPassword(user, senha)
.then(snapshot =>  {
    const { uid } = snapshot.user 
    firebase.database().ref(`/usuarios/${uid}`)
      .set({uid})
      .then (() => console.log('usuario salvo'))
})
.catch(error => console.log(error.message))

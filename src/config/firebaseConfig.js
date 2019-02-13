var firebase = require('firebase')

var config = {
    apiKey: process.env.APIKEY,
    authDomain: "marmitaoaui.firebaseapp.com",
    databaseURL: "https://marmitaoaui.firebaseio.com",
    projectId: "marmitaoaui",
    storageBucket: "",
    messagingSenderId: process.env.MESSAGINGSENDERID
  };
firebase.initializeApp(config);

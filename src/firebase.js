// import * as firebase from "firebase/app"

import 'firebase/auth'

import {firebase} from '@firebase/app'
// var firebase = require('firebase/app')
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyDLywEtgkrFUcvem1_jYThzKt2TmYDS9Ho",
    authDomain: "sachacks2021.firebaseapp.com",
    projectId: "sachacks2021",
    storageBucket: "sachacks2021.appspot.com",
    messagingSenderId: "56077324629",
    appId: "1:56077324629:web:c37574e2294b6f9a279fdc",
    measurementId: "G-45VJGD37NX"
  };

  firebase.initializeApp(firebaseConfig)

  

  const db = firebase.firestore()

  const auth = firebase.auth()


  export {

    db,
    auth
  }
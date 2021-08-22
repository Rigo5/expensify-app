import firebase from 'firebase/app'; 
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDre2Av4GLTrxKvwHKPuH8bW2w18kdKHIc",
    authDomain: "expensify-fccf3.firebaseapp.com",
    databaseURL: "https://expensify-fccf3-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "expensify-fccf3",
    storageBucket: "expensify-fccf3.appspot.com",
    messagingSenderId: "880462576131",
    appId: "1:880462576131:web:470e6360c10fd2c35aec36",
    measurementId: "G-PGKWEEJ8TY"
  };

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

//ref significa reference e serve per indicare le varie "tabelle" su cui andiamo a lavorare
//in questi database non relazionali avremo non tabelle ma collection di entità
database.ref().set({
    name : 'Michele Prisco'
})
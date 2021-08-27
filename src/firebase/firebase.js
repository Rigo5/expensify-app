import firebase from 'firebase/app'; 
import 'firebase/database';
import { expenses } from '../fixtures/expenses';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MESASUREMENT_ID
  };

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {firebase, database as default} ; 

//ref significa reference e serve per indicare le varie "tabelle" su cui andiamo a lavorare
//in questi database non relazionali avremo non tabelle ma collection di entità
//se non passiamo nulla la referenza viene fatta alla root del db 
//alla fine questo db sembra un grande json e le referenze puntano ad attributi di questo oggetto
//la referenza qua gioca un ruolo abbastanza importante in quanto ad esmpio se la setto alla root
//e comtinuo a scrivere li faro sempre di continuo l override
//è come se stessimo lavorando ocn un js obj 
/* database.ref().set({
    name : 'Michele Prisco',
    isSingle : true,
    location : {
        città: 'Tolmezzo',
        provicia: 'Udine'
    }
}).then( () => {
    console.log('andata campione');
}).catch( (e) => {
    console.log(e);
})


//chiamare set(null) ha lo stesso risultato di remove
database.ref('isSingle').remove()
    .then(() => {
        console.log('dati rimossi');
    }).catch((e) => {
        console.log(e);
    })

//update, posso anche aggiungere e posso anche elimitare mettendo i valori uguali a null 
database.ref().update({
    name: 'Negro',
    isSingle : false
});

database.ref().update({
    name :'Michele',
    'location/città' : 'Agrigento',
})

//FEATCH DATA CI SONO DUE MODI
//PRIMO è PRENDO I DATI E STOP
//SUBSCRIBE E VENGO NOFICATO OGNI VOLTA CHE CAMBIA UN DETERMINATO DATO

//questo è il primo metodo, prende i dati a cui si sta puntando con ref
database.ref().once('value').then(
    (snapshot) => {
        const val =  snapshot.val();
        console.log(val);
    } 
).catch((e) => {
    console.log(e);
})

//secondo metodo: qua non usiamo Promises ma callback normali in quanto devono essere chiamate
//per ogni cambiamento, quindi con questa famo il subscribe

const onValueChange = database.ref().on('value', (snapshot) => {
    console.log(snapshot.val());
}, (e) => {
    console.log('Error nel fetching dei dati');
})
//proviamo ad aggiungere cambiamenti e a togliere sottoscrizione nel mezzo

setTimeout( () => {
    database.ref('name').set('Gesù');
}, 3500)

//con off cosi stiamo rimuovendo tutte le subscripitons
/* setTimeout( () => {
    database.ref().off();
}, 7000) 
//rimuoviamo una nello specifico 
setTimeout( () => {
    database.ref().off(onValuechange);
}, 7000)


setTimeout( () => {
    database.ref('name').set('Michele');
}, 9000) */

//LAVORARE CON ARRAY
/* La cosa risulta un po strana in qunato firebase non stora le array, per questo bisogna cambiare un attimo la struttura dato. 
    Quello che fa firebase è prendere un array per ogni elemento di questa metterlo come attributo 
    del nodo a cui ci riferiamo mettendo id (la posizione nell' array) come nome dell attributo. Un modo miglionre 
    è quello di usare il method push({}) il quale pusha l'ggetto nel nodo a cui facciamo riferimento e allo stesso tempo,
    genera un id univoco che ci permette di identificare l obj quando dovremo operarci soprra. 
*/ 

/* for(let expense of expenses){
    database.ref('expenses').push({
        description : expense.description,
        amount : expense.amount,
        note : expense.note,
        createdAt : expense.createdAt
    })
} */

/* 
database.ref('expenses').once('value').then( (snapshot) => {
    const expensesArray = [];
    snapshot.forEach( (childSnap) =>{
        expensesArray.push({
            id : childSnap.key,
            ...childSnap.val()
        });
    });
    console.log(expensesArray);
})

database.ref('expenses').on('value', (snapshot) => {
    const expensesArray = [];
    snapshot.forEach( (child) => {
        expensesArray.push({
            id : child.key,
            ...child
        });
    });
    console.log(expensesArray);
}, (e) => {
    console.log(e);
})

database.ref('expenses/-MhoDLiAR3bTxwjW8BVh/amount').set(12).then(() => {
    console.log('modifica fatta');
});

database.ref('expenses').on('child_removed', (snapshot) => {
    console.log('Rimosso nodo ', snapshot.key );
})
 */




import ReactDOM from 'react-dom';
import React from 'react';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { setTextFilter } from './actions/filters';
import { startSetExpenses} from './actions/expenses';
import { Provider } from 'react-redux';
import moment from 'moment';
import './styles/styles.scss';
//portare stile browser tutti ad uno stesso punto di partenza
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';


const store = configureStore();

store.subscribe(() => {
    console.log(store.getState());
});

//Provider permette l accesso easy allo store da parte di tutti i componenti figli
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)


ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'));
})

//registriamo un callback che viene eseguita quando c'è un cambio di stato da 
//autenticato a non autenticato e viceversa
//questi sono utili per fare cose in fdase di log in o in fase di log out, come ad esempio lokkare i dati 
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      console.log('log in');
    } else {
      // User is signed out
      console.log('log out')
    }
  });
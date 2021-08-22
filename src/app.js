import ReactDOM from 'react-dom';
import React from 'react';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { setTextFilter } from './actions/filters';
import { addExpense } from './actions/expenses';
import { Provider } from 'react-redux';
import moment from 'moment';
import './styles/styles.scss';
//portare stile browser tutti ad uno stesso punto di partenza
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';


const store = configureStore();

store.subscribe(() => {
    console.log(store.getState());
});


store.dispatch(addExpense({ description : 'Water bill', note : 'dio de dio', amount : 10, createdAt: moment().valueOf() }));
store.dispatch(addExpense({ description : 'Gas bill', amount : 500, createdAt: moment().valueOf() }));
store.dispatch(addExpense({ description : 'Rent', note : 'dio de dio', createdAt: moment().valueOf(), amount : 2000 }));

store.dispatch(setTextFilter('bill'));

console.log(React.version)
//Provider permette l accesso easy allo store da parte di tutti i componenti figli
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));

/*
il method dispatch triggerea un chiamata alla funzione create store, possiamo quindi sfruttare questa cosa per 
modificare lo stato.
con store subscribe veniamo aggiornati ogni volta che viene cambiato lo stato e gli passiamo un funzione che viene chiamata
all'opposto usiamo unsubscribe
ACTION GENERATORS : sono funzioni che ritornano oggetti che rappresentano azioni quindi avremo un solo punto dove creiamo 
le azioni, piuttosto che sparsi in giro (evito anche type err)
REDUCER : Sono funzioni che prendono lo stato corrente e un azione e ritornano nun nuovo stato come risultato. Sono Pure Functions.
*/

import { createStore } from 'redux';

//usiamo destructuring
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type : 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count = 0} = {}) => ({
    type : 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});


const countReducer = (state = { count: 0 }, action) => {
    switch (action.type){
        case 'INCREMENT':
            return {count : state.count + action.incrementBy};
        case 'DECREMENT':
            return {count : state.count - action.decrementBy};
        case 'RESET':
            return {count : 0};
        case 'SET':
            if(action.count === undefined) throw Error('manca contatore');
            return { count : action.count};
        default: 
            return state;
    }
};

const store = createStore(countReducer);

store.subscribe(() => {
    console.log(store.getState());
});

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});


//actions ci permettono di cambiare lo stato
//action è un oggetto  mandato allo store e descrive l'azione che voglio compiere

//increment the count
//maiuscolo è uuna  convenzione in redux
store.dispatch(incrementCount({incrementBy : 5}));


store.dispatch(decrementCount( {decrementBy : 100} ));

store.dispatch(resetCount());

store.dispatch(setCount( {count : 19}));
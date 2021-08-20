import { createStore, combineReducers } from 'redux';
import { v4 as uuidv4 } from 'uuid';

//combine reducers ci permette di combinare diversi reducers, cosi questo ci permette di spaccare il codice in piccole
//parti invece di avere un macello in un singolo reducer 

const demoState = {
    expenses: [
        {
            id: 'diocnae',
            description: 'merda di cane',
            note: 'minchia dio',
            amount: 54500,
            createdAt: 0
        }
    ],
    //filtri per le spese
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};

/*
Vedendo lo stato si presume che siano necessarie le seguenti azioni:
    ADD_EXPENSES
    REMOVE_EXPENSES
    MODIFY_EXPENSES
    SET_TEXT_FILTER
    SORT_BY_DATE
    SORT_BY_AMOUNT
    SET_START_DATE
    SET_END_DATE

visto questo numero di azione diventa complesso gestire tutto all'interno di un reducer:
    Ne facciamo uno per le spese e uno per il filtro
*/

//EXPENSES REDUCER 

const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) =>({
    type: 'ADD_EXPENSE',
    expense : {
        id : uuidv4(),
        description,
        note,
        amount,
        createdAt
    }
});

const removeExpense = ({ id = null} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

const editExpense = (id, updates) => ({
    type : 'EDIT_EXPENSE',
    id,
    updates
})

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            //this is callled sèread operator
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter((expense) => expense.id != action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => expense.id === action.id ? {...expense, ...action.updates} : expense);
        default:
            return state;
    }
}

//FILTER REDUCER (poi sarebbe meglio metterli entrambi in file diversi)
const filterReducerDefaultState = {
    text: 'rent',
    sortBy: 'amount', //date or amount
    startDate: undefined,
    endDate: undefined
};

const setTextFilter = (text) => ({
    type : 'SET_TEXT_FILTER',
    text
});

const sortByAmount = () => ({
    type : 'SORT_BY_AMOUNT'
});

const sortByDate = () => ({
    type : 'SORT_BY_DATE'
});
const setStartDate = (date) => ({
    type : 'SET_START_DATE',
    startDate : date 
});

const setEndDate = (date) => ({
    type : 'SET_END_DATE',
    endDate : date
})


const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {...state, text : action.text};
        case 'SORT_BY_AMOUNT':
            return {...state, sortBy : 'amount'};
        case 'SORT_BY_DATE':
            return {...state, sortBy : 'date'};
        case 'SET_START_DATE':
            return {...state, startDate : action.startDate};
        case 'SET_END_DATE':
            return {...state, endDate : action.endDate};
        default:
            return state;
    }
}
//Ora utlizziamo il filtro per effettivamente filtrare le spese creiamo una funzione che faccai questo
//che mettiamo in subscribe cosi ogni volta che cambiamo qualcosa sbombiamo il tutto
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate}) => {

    return expenses.filter( (expense) =>
        {
            const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
            const endDateMatch = typeof startDate !== 'number' || expense.createdAt <= endDate;
            const textMatch = expense.description.toLowerCase().includes(text); 

            return startDateMatch &&  endDateMatch &&  textMatch;
        }
    ).sort((a, b) => {
        if(sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        if(sortBy === 'amount'){
            return a.amount < b.amount ? -1 : 1;
        }
    });
}


//lo stato lo ritorna come oggetto della prop expenses 
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filterReducer
    })
);

store.subscribe( () => {
    const state = store.getState(); 
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const firstExpense = store.dispatch(addExpense({ description: 'rent', amount : 3000, createdAt : -100}));
const secondExpense = store.dispatch(addExpense({ description: 'Rent', amount : 2000, createdAt : 100}));


/* store.dispatch(removeExpense( {id : firstExpense.expense.id} ));
store.dispatch(editExpense( secondExpense.expense.id, {amount : 5} ));

store.dispatch(setTextFilter('rent'));

store.dispatch(setTextFilter(''));

//da settare sort by prop = amount
store.dispatch(sortByAmount()); 

//da settare sort by prop = date*/
store.dispatch(sortByAmount()); 

store.dispatch(setStartDate(-2000));

//store.dispatch(setStartDate());

store.dispatch(setEndDate(166));
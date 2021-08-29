import { v4 as uuidv4 } from 'uuid';
import database from '../firebase/firebase';

//EXPENSES ACTIONS

//adesso che dobbiamo integrare firebase andremo a fare il dispatch di funzioni che verranno eseguite da Redux
export const addExpense = (expense) =>({
    type: 'ADD_EXPENSE',
    expense
});

//La funzione che viene tornata viene eseguita da redux il quale gli passerà come argomento i dispatch
export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const { description = '', note = '', amount = 0, createdAt = 0 } = expenseData;
        const expense = { description, note, amount, createdAt }
        return database.ref('expenses').push(expense).then( (ref) => {
            dispatch(addExpense({
                id : ref.key,
                ...expense
            }))
        })
    };
}

export const removeExpense = ({ id = null} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

export const startRemoveExpense = ({ id = null} = {}) => {
    return (dispatch) => {
        return database.ref('expenses/' + id).set(null).then( () => {
            console.log('rimosso'); 
            dispatch(removeExpense({id : id}));
        })
    }
}

export const editExpense = (id, updates) => ({
    type : 'EDIT_EXPENSE',
    id,
    updates
})

export const startEditExpenses = (id, updates) => {
    return (dispatch) => {
        return database.ref('expenses/' + id).update({
            ...updates
        }).then( () => {
            dispatch(editExpense(id, updates))
        })
    }
}

//SET EXPENSES: prende array setta come stato
export const setExpenses = (expenses) => ({
    type : 'SET_EXPENSES',
    expenses
})

//start set Expense : prende dati da db e dispatcha set Expenses 
export const startSetExpenses = () => {
    return (dispatch) => {
        return database.ref('expenses').once('value').then((snapshot) => {
            const expenses = [];
            snapshot.forEach((snapshotChild) => { 
                expenses.push({
                    id : snapshotChild.key,
                    ...snapshotChild.val()
                });
            });
            console.log(expenses)
            dispatch(setExpenses(expenses));
        })
    }
}

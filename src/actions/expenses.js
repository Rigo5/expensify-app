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

export const editExpense = (id, updates) => ({
    type : 'EDIT_EXPENSE',
    id,
    updates
})



import { v4 as uuidv4 } from 'uuid';

//EXPENSES ACTIONS
export const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) =>({
    type: 'ADD_EXPENSE',
    expense : {
        id : uuidv4(),
        description,
        note,
        amount,
        createdAt
    }
});

export const removeExpense = ({ id = null} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

export const editExpense = (id, updates) => ({
    type : 'EDIT_EXPENSE',
    id,
    updates
})


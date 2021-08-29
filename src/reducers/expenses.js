

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
        case 'SET_EXPENSES':
            return action.expenses;
        default:
            return state;
    }
}

export default expensesReducer;
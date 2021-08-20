import { addExpense, editExpense, removeExpense} from '../../actions/expenses';

//Per confrontare oggetti si usa toEqual

test('should setup remove expense action object', () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id : '123abc'
    })
})


test('should setup edit expense action object', () => {
    const action = editExpense('123abc', {
        description : 'merda di cane',
        amount : 123.03
    });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id : '123abc',
        updates: {
            description : 'merda di cane',
            amount : 123.03
        }
    })
})

//id : expect.any(String) in quanto viene generato random e non pòossiamo metterlo statico quindi diciamo che va bene tutto
test('should setup add expense action object with specified values', () => {
    const expenseData = {
        description: 'Rent',
        amount : 100,
        createdAt : 1000,
        note : 'last mont rent'
    }

    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense : {
            ...expenseData,
            id : expect.any(String)
        }
    })
})


test('should setup add expense action object with default values', () => {
    const action = addExpense(); 

    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense : {
            id : expect.any(String),
            description : '',
            note: '',
            amount : 0,
            createdAt : 0
        }
    })
})
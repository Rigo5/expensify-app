import { startAddExpense, addExpense, editExpense, removeExpense, setExpenses, startSetExpenses, startRemoveExpense, startEditExpenses } from '../../actions/expenses';
import { expenses } from '../../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import databse from '../../firebase/firebase';
//Per confrontare oggetti si usa toEqual
//mock store
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const expenseData = {};

    expenses.forEach( ({id, description, note, amount, createdAt}) => {
        expenseData[id] = {description, note, amount, createdAt};
    })
    databse.ref('expenses').set(expenseData).then(() => {
        done(); 
    })
})



test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})


test('should setup edit expense action object', () => {
    const action = editExpense('123abc', {
        description: 'merda di cane',
        amount: 123.03
    });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            description: 'merda di cane',
            amount: 123.03
        }
    })
})

//id : expect.any(String) in quanto viene generato random e non pòossiamo metterlo statico quindi diciamo che va bene tutto
test('should setup add expense action object with specified values', () => {

    const action = addExpense(expenses[0]);
    /* expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense : {
            ...expenseData,
            id : expect.any(String)
        }
    }) */
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[0]
    })
})


/* test('should setup add expense action object with default values', () => {
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
}) */



//dobbiamo testare in qualche modo il caricamento a db e a store
//CREIAMO UN MOCK DELLO STORE con redux-mock-store
//ASYNCRONUS TEST CASES 
//testiamo se viene dispacthed l'azione e se viene inserito correttamente a db la spesa
test('should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'mouse',
        amount: '3',
        note: 'merda di cane',
        createdAt: 1000
    }
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const action = store.getActions();
        expect(action[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        })

        return databse.ref('expenses/' + action[0].expense.id).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        //jest aspetta questa chiamata per capire che il test è finito una sorta di await
        done();
    });
})

test('should add expense with defaults to database and store', (done) => {
    const store = createMockStore();

    store.dispatch(startAddExpense({})).then(() => {
        const action = store.getActions();

        expect(action[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                description: '',
                note: '',
                amount: 0,
                createdAt: 0
            }
        });

        return databse.ref('expenses/' + action[0].expense.id).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual({
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        });
        done();
    })
})

test('sould setup set expenses action object with data', () => {
    const action = setExpenses(expenses);

    expect(action).toEqual({
        type : 'SET_EXPENSES',
        expenses
    })
})

test('shoul retrive expenses form db and set the state', (done) => {
    const store = createMockStore({});

    store.dispatch(startSetExpenses()).then(() => {
        //controlliamo il risultato dell action 
        const action = store.getActions();
        expect(action[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        })
        done();
    })
})

test('shoul remove expense form database', (done) => {
    const store = createMockStore();

    store.dispatch(startRemoveExpense({id : 1})).then(() => {
        const action = store.getActions();

        expect(action[0]).toEqual({
            type : 'REMOVE_EXPENSE',
            id : 1
        })
        done(); 
    })
})

test('should edit expense to database and state', (done) => {
    const store = createMockStore();
    const updates = { description : 'la merda di cane puzza update'};
    
    store.dispatch(startEditExpenses(2, updates)).then(() => {
        const action = store.getActions();

        expect(action[0]).toEqual({
            id : 2,
            type : 'EDIT_EXPENSE',
            updates
        })

        return databse.ref('expenses/' + action[0].id).once('value');
    }).then((snapshot) => {
        expect(snapshot.val().description).toBe('la merda di cane puzza update');
        //jest aspetta questa chiamata per capire che il test è finito una sorta di await
        done();
    }); 
})
import expensesReducer from "../../reducers/expenses";
import moment from "moment";

const testData = [
    {
        id: '1',
        description: 'merda',
        amount : 10,
        note: 'merdamerda',
        createdAt : moment(0).valueOf()
    },
    {
        id: '2',
        description: 'merda2',
        amount : 15,
        note: 'merdamerda2',
        createdAt : moment(0).subtract(4, 'days').valueOf()
    }
]

test('should add expenses reducers object', () => {
    const actions = {
        type: 'ADD_EXPENSE',
        expense : {
            id: '3',
            description: 'merda3',
            amount : 300,
            note: 'merdamerda3',
            createdAt : moment(0).add(4, 'days').valueOf()
        } 
    };

    const result = expensesReducer(testData, actions);

    expect(result).toEqual(
        [...testData, actions.expense]
    )
})



test('should remove expenses reducers object', () => {
    const actions = {
        type: 'REMOVE_EXPENSE',
        id : '2'
    };

    const result = expensesReducer(testData, actions);

    expect(result).toEqual(
        [testData[0]]
    )
})


test('should edit expenses reducers object', () => {
    const updates = {
        id: '2',
        description: 'michia',
        amount : 15,
        note: 'merdamerda2',
        createdAt : moment(0).subtract(4, 'days').valueOf()
    };
    const actions = {
        type: 'EDIT_EXPENSE',
        id : '2',
        updates
    };

    const result = expensesReducer(testData, actions);

    expect(result).toEqual(
        [testData[0], updates]
    )
})
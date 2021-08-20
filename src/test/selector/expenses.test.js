import moment from 'moment';
import selectExpenses from '../../selectors/expenses';

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
    },
    {
        id: '3',
        description: 'merda3',
        amount : 300,
        note: 'merdamerda3',
        createdAt : moment(0).add(4, 'days').valueOf()
    }
]


test('should filter by text value', () => {
    const filters = {
        text: 'm',
        sortBy: 'date',
        startDate: undefined,
        endDate : undefined
    };
    const result = selectExpenses(testData, filters);

    expect(result).toEqual(
        [testData[2], testData[0], testData[1]]
    )
})

test('should filter by text value', () => {
    const filters = {
        text: '3',
        sortBy: 'date',
        startDate: undefined,
        endDate : undefined
    };
    const result = selectExpenses(testData, filters);

    expect(result).toEqual(
        [testData[2]]
    )
})


test('should filter by start date value', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(90),
        endDate : undefined
    };
    const result = selectExpenses(testData, filters);

    expect(result).toEqual(
        [testData[2], testData[0]]
    )
})


test('should filter by end date value', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate : moment(0).subtract(1, 'days')
    }
    const result = selectExpenses(testData, filters);

    expect(result).toEqual(
        [testData[1]]
    )
})


test('should filter by end and start date value', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0).subtract(2, 'days'),
        endDate : moment(0).add(6, 'days')
    }
    const result = selectExpenses(testData, filters);

    expect(result).toEqual(
        [testData[2], testData[0]]
    )
})



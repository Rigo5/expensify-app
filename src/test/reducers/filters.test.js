import { filter } from 'lodash';
import filterReducer from '../../reducers/filters'
import moment from 'moment';

const testData = {
    text: 'rent',
    sortBy: 'amount', //date or amount
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
};

test('should set text filter', () => {
    const action = {
        type: 'SET_TEXT_FILTER',
        text : 'merda di cane'
    }

    const result = filterReducer(testData, action);

    expect(result).toEqual({
        text: 'merda di cane',
        sortBy: 'amount', //date or amount
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })

})

test('should sort by amount filter', () => {
    const action = {
        type: 'SORT_BY_AMOUNT'
    }

    const result = filterReducer(testData, action);

    expect(result).toEqual({
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should sort by date filter', () => {
    const action = {
        type: 'SORT_BY_DATE'
    }

    const result = filterReducer(testData, action);

    expect(result).toEqual({
        text: 'rent',
        sortBy: 'date', //date or amount
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})


test('should set start date filter', () => {
    const action = {
        type: 'SET_START_DATE',
        startDate : moment(0)
    }

    const result = filterReducer(testData, action);

    expect(result).toEqual({
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: moment(0),
        endDate: moment().endOf('month')
    })
})

test('should set end date filter', () => {
    const action = {
        type: 'SET_END_DATE',
        endDate: moment(0)
    }

    const result = filterReducer(testData, action);

    expect(result).toEqual({
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: moment().startOf('month'),
        endDate: moment(0)
    })
})



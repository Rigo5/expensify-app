import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from '../../actions/filters';
import moment from 'moment';

test('should set text filter object', () => {
    const action = setTextFilter('merda di cane');

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text : 'merda di cane'
    }); 
})

test('should sort by amount object', () => {
    const action = sortByAmount();

    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    }); 
})


test('should sort by date object', () => {
    const action = sortByDate();

    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    }); 
})

test('should set start date object', () => {
    const date = moment(0);
    const action = setStartDate(date);

    expect(action).toEqual({
        type : 'SET_START_DATE',
        startDate : date 
    })
})

test('should set end date object', () => {
    const date = moment();
    const action = setEndDate(date);

    expect(action).toEqual({
        type : 'SET_END_DATE',
        endDate : date 
    })
})
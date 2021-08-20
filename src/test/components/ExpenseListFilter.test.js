import React from 'react';
import { shallow } from  'enzyme';
import { ExpenseListFilter } from '../../components/ExpensesListFilter';
import { filters } from '../../fixtures/filters';
import moment from '../__mocks__/moment';

let onInputChange, byDate, byAmount, endDate, startDate, wrapper;

beforeEach(() => {
    onInputChange = jest.fn(); 
    byDate = jest.fn();
    byAmount = jest.fn(); 
    endDate = jest.fn(),
    startDate = jest.fn(); 

    wrapper = shallow(<ExpenseListFilter filters={filters}
        onInputChange={onInputChange}
        byDate={byDate}
        byAmount={byAmount}
        endDate={endDate}
        startDate={startDate}
        />); 


})

test('should ExpenseListFilter object render', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should onchange input handler', () => {
    wrapper.find('input').simulate('change', {
        target : {
            value : 'minchia'
        }
    });

    expect(onInputChange).lastCalledWith('minchia');
})

test('should select on change handler by Amount', () => {
    wrapper.find('select').simulate('change', {
        target : {
            value : 'amount'
        }
    });

    expect(byAmount).toHaveBeenCalledTimes(1);
    expect(byDate).toHaveBeenCalledTimes(0);
})

test('should select on change handler by Date', () => {
    wrapper.find('select').simulate('change', {
        target : {
            value : 'date'
        }
    });

    expect(byAmount).toHaveBeenCalledTimes(0);
    expect(byDate).toHaveBeenCalledTimes(1);
})

test('should on start date change handler', () => {
    const sDate = moment(); 
    const eDate = moment().add(4, 'years');
    wrapper.find('DateRangePicker').prop('onDatesChange')({
        startDate : sDate, 
        endDate : eDate});

    expect(startDate).toHaveBeenLastCalledWith(sDate);
    expect(endDate).toHaveBeenLastCalledWith(eDate);

});


test('should on focus change handler', () => {
    const calendarFocused = 'startDate';

    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);

    expect(wrapper.state().focusedInput).toBe('startDate');
})


